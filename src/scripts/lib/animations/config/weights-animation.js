const weightsAnimationConfig = (function() {
  const q = 29;
  const frames = {
    afterall: 12 * q,
    animation: 10 * q,
    pause: 2 * q,
    before: 4 * q,
  }

  const seq = (set) => set.delay(frames.before).run('forward').delay(frames.pause).run('backward').delay(frames.afterall).recovery();

  const getCenter = (element) => {
    const { x, y, w, h } = element.getBBox();

    return { x: x + ( w / 2 ), y: y + ( h / 2 ) };
  }

  return [
    {
      element: 'left-blue-rhomb',
      animations: {
        backward: (next, element) => {
          element.animate({
            transform: 't0,0',
          }, frames.animation, next);

          return;
        },
        forward: (next, element) => {
          element.animate({
            transform: 't0,-12.75',
          }, frames.animation, next);

          return;
        }
      },
      sequence: seq,
    },
    {
      element: 'left-grey-rhomb',
      animations: {
        backward: (next, element) => {
          element.animate({
            transform: 't0,0',
          }, frames.animation, next);

          return;
        },
        forward: (next, element) => {
          element.animate({
            transform: 't0,-22',
          }, frames.animation, next);

          return;
        }
      },
      sequence: seq,
    },
    {
      element: 'left-green-ellipse',
      animations: {
        backward: (next, element) => {
          element.animate({
            transform: 't0,0',
          }, frames.animation, next);

          return;
        },
        forward: (next, element) => {
          element.animate({
            transform: 't0,-22.5',
          }, frames.animation, next);

          return;
        }
      },
      sequence: seq,
    },
    {
      element: 'horizontal-line',
      animations: {
        backward: (next, element) => {
          const { x, y } = getCenter(element);

          element.animate({
            transform: `r0,${x},${y}`,
          }, frames.animation, next);

          return;
        },
        forward: (next, element) => {
          const { x, y } = getCenter(element);

          element.animate({
            transform: `r15,${x},${y}`,
          }, frames.animation, next);

          return;
        }
      },
      sequence: seq,
    },
    {
      element: 'right-green-ellipse',
      animations: {
        backward: (next, element) => {
          element.animate({
            transform: 't0,0',
          }, frames.animation, next);

          return;
        },
        forward: (next, element) => {
          element.animate({
            transform: 't0,11',
          }, frames.animation, next);

          return;
        }
      },
      sequence: seq,
    },
    {
      element: 'right-grey-ellipse',
      animations: {
        backward: (next, element) => {
          element.animate({
            transform: 't0,0',
          }, frames.animation, next);

          return;
        },
        forward: (next, element) => {
          element.animate({
            transform: 't0,19',
          }, frames.animation, next);

          return;
        }
      },
      sequence: seq,
    },
  ];
})();
