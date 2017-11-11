$(() => {
  Vue.component('wbmsg', {
    props: ['msg', 'own'],
    template: '#WBMsg-component',
    mounted() {
      $(this.$el).find('.WBMsg-alert').tooltip({delay: 50})
    },
  })

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
