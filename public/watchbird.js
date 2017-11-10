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
