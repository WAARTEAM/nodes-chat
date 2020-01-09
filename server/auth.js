const jwt = require('jsonwebtoken');

function middleware(req, res, next) {
    const token = req.header('authorization').replace('bearer ', '');
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch {
        res.send('invalid token')
    }
}

function socketMiddleware(socket, next) {
    const token = socket.request.header('authorization').replace('bearer ', '');
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next()
    }
    
    catch {
        socket.disconnect(true);
    }
}

module.exports = { middleware, socketMiddleware };