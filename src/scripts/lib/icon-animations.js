function iconAnimations() {
  const config = {
    'weights' : weightsAnimationConfig,
  }

  const objects = $('[data-animation-object]').get().map((e => {
    const name = $( e ).data('animationObject');
    const conf = config[name];

    const elements = $( e ).find('[data-animation-element]')
      .get()
      .reduce((acc, item) => acc.set($( item ).data('animationElement'), item), new Map());

    const sequences = conf.map(item => {
      const set = new SnapAnimationSet(elements.get(item.element), item.animations);

      return new AnimationSequence(set, item.sequence);
    });

    return new AnimationObject(e, sequences);
  }));

  objects.forEach(obj => {
    const element = obj.root;

    let isAnimating = false;

    const rec = () => {
      if(!isAnimating) return;

      obj.run();

      obj.onEnd( rec );

      return;
    };

    const mouseenterHl = () => {
      $( element ).off('mouseenter', mouseenterHl);
      $( element ).mouseleave(mouseleaveHl);

      isAnimating = true;

      rec();

      return;
    }

    const mouseleaveHl = () => {
      $( element ).off('mouseleave', mouseleaveHl);

      isAnimating = false;

      $( element ).mouseenter(mouseenterHl);

      return;
    }

    $( element ).mouseenter(mouseenterHl);
  });

}
