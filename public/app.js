$(() => {
  const socket = io()
  const wb = new WatchBird()
  const app = new Vue({
    el: '#app',

    data: {
      message: "",
      messages: [],
      user: null,
    },
    methods: {
      login(event) {
        this.user = (event.target.login.value).toString()
      },
      sendMessage() {
        const msg = {
          msg: this.message,
          sender: this.user,
          warning: ~~(Math.random() + .5),
        }
        socket.emit('chat message', msg)
        this.message = ""
      },
    },
  })

  socket.on('chat message', msg => {
    app.messages.push(msg)
    wb.addMessage(msg)

    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 0)
  })
})
