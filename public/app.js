$(() => {
  const socket = io()
  const wb = new WatchBird()
  var app = new Vue({
    el: '#app',
    data: {
      messages: [],
      risk: [],
    },
  })

  $('form').submit(() => {
    const $m = $('#m')

    socket.emit('chat message', $m.val())
    $m.val('')

    return false
  })

  socket.on('chat message', msg => {
    app.messages.push(msg)
    wb.addMessage(msg)
    app.risk = JSON.stringify(wb.getRisks(), 2, 2)

    window.scrollTo(0, document.body.scrollHeight)
  })
})
