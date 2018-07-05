class AnimationModel {
  constructor(element, fn) {
    this.start = new EventEmitter();
    this.end = new EventEmitter();
    this.element = element;
    this.fn = fn;
  };

  run() {
    this.start.emit(this);
    this.fn( () => this.end.emit(this), this.element );

    return this;
  }

  onEnd(fn) {
    this.end.subscribe(fn);
    return this;
  }

  onStart(fn) {
    this.start.subscribe(fn);
    return this;
  }
}

// class DelayModel extends AnimationModel {
//   constructor(interval) {
//     super(null, (instance, callback) => setTimeout(callback, this.interval));
//   };
// }
