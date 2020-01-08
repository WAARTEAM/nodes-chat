require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').Server(app)
const cors = require('cors');
var io = require('socket.io')(http);
const auth = require('./auth');

app.use(cors())
app.use(express.json());
app.use(auth.middleware);

io.use(auth.socketMiddleware)

const port = process.env.PORT || 5001

http.listen(port, ()=> {
    console.log(`server running at ${port}`)
})