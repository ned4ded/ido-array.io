class EventEmitter {
  constructor() {
    this.listners = [];
  }

  subscribe(callback) {
    this.listners.push(callback);

    return this;
  }

  emit(...args) {
    const listners = this.listners;

    if(listners && listners.length) {
      listners.forEach(fn => fn(...args));
    }

    return this;
  }
}
