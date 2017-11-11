$(() => {
  const socket = io()
  const wb = new WatchBird()
  const app = new Vue({
    el: '#app',

    data: {
      message: "",
      messages: [],
      risk: [],
      user: null,
    },
    methods: {
      login(event) {
        this.user = (event.target.login.value).toString()
      },
      sendMessage() {
        socket.emit('chat message', {
          msg: this.message,
          sender: this.user,
        })
        this.message = ""
      },
    },
  })

  socket.on('chat message', msg => {
    app.messages.push(msg)
    wb.addMessage(msg)
    app.risk = JSON.stringify(wb.getRisks(), 2, 2)

    window.scrollTo(0, document.body.scrollHeight)
  })
})
