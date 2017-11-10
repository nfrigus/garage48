$(() => {
  const socket = io()
  $('form').submit(() => {
    const $m = $('#m')

    socket.emit('chat message', $m.val())
    $m.val('')

    return false
  })
  socket.on('chat message', msg => {
    $('#messages').append($('<li>').text(msg))
    window.scrollTo(0, document.body.scrollHeight)
  })
})
