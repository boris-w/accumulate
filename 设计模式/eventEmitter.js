const eventEmitter = {
  events: {},
  on: (event, fn) => {
    const events = this.events[event]
    if (events) {
      events.push(fn)
    } else {
      this.events[event] = [event]
    }
  },
  emit: () => {
    const args = arguments
    if (!args || args.length === 0) {
      return false
    }
    const _this = this
    const event = args[0]
    const events = this.events[event]
    if (events) {
      events.forEach(fn => {
        fn.apply(_this, args.slice(1))
      })
    }
    return _this
  }
}