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

app.get('/', (req, res) => {
    console.log(req)
    res.send('true')
})
var server = http.listen(port, () => {
    console.log('socketIO is running on port', server.address().port);
});

const roomTest = io.of('/room1')
roomTest.on('connection', (socket) => {
    console.log(`user connected`)
    socket.on('MESSAGE', (data) => {
        console.log(`${data.message}`)
        //store in the database
        socket.emit('MESSAGES', data)
    })
    socket.on('disconnect', () => {
        console.log('disconnect!')
    })

})
