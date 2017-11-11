const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000


io.on('connection', socket => {
  socket.on('chat message', async msg => {
    msg.warning = await getRiskWarning(msg.msg)
    io.emit('chat message', msg)
  })
})

app.use(express.static(__dirname + "/public"))

http.listen(port, () => {
  console.log('listening on *:' + port)
})


async function getRiskWarning(msg) {
  const contexts = [{
    triggers: [],
    warning: "Your personal data is at risk!<br><br>" +
      "Sharing your",
  }]


  const alertWords = [
    'card number',
    'your license',
    'your passport',
    'your photo',
  ]
  const warn = "Beware of this man! <br/>He looks somewhat suspicious."
  return ~~(Math.random() + .3) ? undefined : warn
}





