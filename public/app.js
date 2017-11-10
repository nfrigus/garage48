class WatchBird {
  constructor() {
    Object.assign(this, {
      messages: [],
    })
  }
  addMessage(msg, meta = {}) {
    this.messages.push({msg, ...meta})
  }
  getRisks() {
    return Math.random()
  }
}


$(() => {
  const socket = io()
  const wb = new WatchBird()

  $('form').submit(() => {
    const $m = $('#m')

    socket.emit('chat message', $m.val())
    $m.val('')

    return false
  })
  socket.on('chat message', msg => {
    $('#messages').append($('<li>').text(msg))
    wb.addMessage(msg)
    $('#risk').html(JSON.stringify(wb.getRisks(), 2, 2))

    window.scrollTo(0, document.body.scrollHeight)
  })
})
