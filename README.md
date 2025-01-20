# Bloggo

Bloggo is a blog application built with Node.js, Express, MongoDB, and EJS. Users can sign up, sign in, create blogs, and comment on blogs.

## Features

- User authentication (sign up, sign in, sign out)
- Create, view, and comment on blogs
- Upload cover images for blogs
- Display user profile images

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/bloggo.git
    cd bloggo
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following environment variables:
    ```env
    MONGO_URL=mongodb://localhost:27017/bloggo
    PORT=8000
    ```

4. Start the server:
    ```sh
    npm run dev
    ```


## Usage

### User Authentication

- **Sign Up**: Navigate to `/user/signup` to create a new account.
- **Sign In**: Navigate to `/user/signin` to log in to your account.
- **Sign Out**: Click the "Logout" button in the navigation bar to sign out.

### Blogs

- **Create Blog**: Navigate to `/blog/add-new` to create a new blog post.
- **View Blog**: Click on a blog title on the home page to view the blog post.
- **Comment on Blog**: Add a comment to a blog post by filling out the comment form on the blog page.

## License

This project is licensed under the MIT License.
