const {validateToken} = require("../services/authentication")

function checkForAuthenticationCookie(cookieName){
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue){
            next();
        }
        
        try {
            const userPayLoad = validateToken(tokenCookieValue);
            req.user = userPayLoad;
        } catch (error) {}
        next();
    }
}

module.exports = {
    checkForAuthenticationCookie,
}