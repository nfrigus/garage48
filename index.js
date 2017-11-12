const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000
const WB = require('./server/WatchBird')


io.on('connection', socket => {
  socket.on('chat message', async msg => {
    msg.warning = await WB.getRiskWarning(msg.msg)
    io.emit('chat message', msg)
  })
})

app.use(express.static(__dirname + "/public"))

http.listen(port, () => console.log('listening on *:' + port))






