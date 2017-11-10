const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000


io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg)
  })
})

app.use(express.static(__dirname + "/public"))

http.listen(port, function () {
  console.log('listening on *:' + port)
})
