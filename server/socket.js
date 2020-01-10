function handler(socket) {
    socket.on('room', (room)=>{
        socket.join(room)
    })

    socket.on('message', (data)=>{
        //save to DB
        //emit to all in room
    })
}

module.exports = handler