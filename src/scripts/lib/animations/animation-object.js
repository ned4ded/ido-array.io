class AnimationObject {
  constructor(root, sequences) {
    this.root = root;
    this.sequences = sequences.map(seq => ({ seq, state: false }));

    this.sequences.forEach(obj => {
      const { seq } = obj;

      seq.onStart(() => {
        obj.state = true;
        return;
      });

      seq.onEnd(() => {
        obj.state = false;
        return;
      });

    });
  }

  run() {
    if(this.isAnimating()) return false;

    this.sequences.forEach(({seq}) => seq.run());

    return this;
  }

  isAnimating() {
    return !!this.sequences.find(({state}) => state);
  }

  onEnd(cb) {
    const counter = (() => {
      const max = this.sequences.length;
      let counter = 0;

      return function() {
        counter++;

        if(counter === max) cb();

        return;
      }
    })();

    this.sequences.forEach(({seq}) => {
      seq.onEnd(counter);
    });

    return this;
  }
}
