const jwt = require('jsonwebtoken');



const isLogin = async (req, res, next) => {
    console.log(req.headers);
    let token = req.headers.authorization;
    console.log(token);
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7);
    } else {
        console.log('Token not found or improperly formatted')
        return res.send('Token not found or improperly formatted');
    }
    const tokenSecret = process.env.JWT_SECRET
    try {
        const decoded = jwt.verify(token, tokenSecret)
        req.user = decoded;
        // console.log(decoded); // { email: 'salman7@gmail.com', iat: 1698518113 }
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = isLogin