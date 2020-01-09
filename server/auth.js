const jwt = require('jsonwebtoken');

function middleware(req, res, next) {
    const token = req.headers['authorization'].replace('bearer ', '');
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch {
        res.send('invalid token')
    }
}

function socketMiddleware(socket, next) {
    console.log(socket.handshake.query.authorization)
    const token = socket.handshake.query['authorization'].replace('bearer ', '');
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next()
    }

    catch {
        socket.disconnect(true);
    }
}

module.exports = { middleware, socketMiddleware };