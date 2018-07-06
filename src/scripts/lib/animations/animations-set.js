class AnimationSet {
  constructor(element, animations) {
    this.element = element;
    this.state = false;
    this.current = null;
    this.queue = [];
    this.queueCleared = new EventEmitter();
    this.end = new EventEmitter();

    this.recoveryPoint = this.element.attr();
    this.recoveryFn = (element, recoveryPoint) => element.attr(recoveryPoint);

    this.end.subscribe(() => {
      if(!this.queue.length) return this.queueCleared.emit(null);

      const [ first, ...rest ] = this.queue;
      this.queue = rest;

      first.run();

      return;
    });

    this.config(animations);
  }

  config(animations) {
    this.animations = Object.keys(animations).reduce((acc, k) => {
      const animation = new AnimationModel(this.element, animations[k]);

      animation.onStart((animation) => {
        this.setState(true);
        this.setCurrent(animation);
        return;
      });

      animation.onEnd((animation) => {
        this.setState(false);
        this.setCurrent(null);
        return;
      });

      return acc.set(k, animation);
    }, new Map());

    return;
  }

  setState(arg) {
    this.state = arg;
    if(this.state === false) this.end.emit(null);

    return this;
  }

  setCurrent(animation) {
    this.current = animation;

    return this;
  }

  isAnimating() {
    return this.state;
  }

  getInQueue(animation) {
    this.queue.push(animation);

    return;
  }

  onDisengage(cb) {
    this.queueCleared.subscribe(cb);

    return this;
  }

  recovery() {
    const recovery = () => this.recoveryFn( this.element, this.recoveryPoint );

    this.isAnimating() ? this.onDisengage(recovery) : recovery();

    return this;
  }

  run(name) {
    const animation = this.animations.get(name);

    if(!animation) throw Error(`AnimationSet: No animation was found. Passed name: ${name}`);

    if(this.isAnimating()) {
      this.getInQueue(animation);

      return this;
    }

    animation.run();

    return this;
  }

  delay(interval) {
    const delay = new DelayModel(interval);

    delay.onStart((animation) => {
      this.setState(true);
      this.setCurrent(animation);
      return;
    });

    delay.onEnd((animation) => {
      this.setState(false);
      this.setCurrent(null);
      return;
    });

    if(this.isAnimating()) {
      this.getInQueue(delay);
      return this;
    }

    delay.run();

    return this;
  }
}
