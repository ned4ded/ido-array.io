class AnimationSequence {
  constructor(set, sequence) {
    this.set = set;
    this.sequence = sequence;
    this.start = new EventEmitter();
  }

  run() {
    if(this.isAnimating()) return false;

    this.start.emit(this);

    this.sequence(this.set);

    return this;
  }

  onStart(cb) {
    this.start.subscribe(cb);

    return this;
  }

  onEnd(cb) {
    this.set.onDisengage(cb);

    return this;
  }

  isAnimating() {
    return this.set.isAnimating();
  }
}
