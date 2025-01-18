const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { checkForAuthenticationCookie } = require('./middlewares/authentication');

const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');

const Blog = require('./models/Blog');


const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/bloggo")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Error connecting to MongoDB:", err));


app.set('view engine', 'ejs');
app.set('views',path.resolve("./views"))


app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.use("/user",userRouter);
app.use("/blog",blogRouter);

app.get("/",async (req,res)=>{
    const allBlogs = await Blog.find({});
    res.render("home",{
      user:req.user,
      blogs:allBlogs,
    });
})

app.listen(PORT,()=>{
    console.log(`Server started on PORT: ${PORT}`);
})
