const investChartsAnimationConfig = (function() {
  const q = 29;

  const makePath = (string, initialPoint) => ({
    string,
    initialPoint,
    getLength() {
      return Snap.path.getTotalLength( this.string );
    },
    getPoints(length) {
      const { x, y } = Snap.path.getPointAtLength( this.string, length );

      return { x: x - this.initialPoint.x, y: y - this.initialPoint.y };
    },
  });

  const path1 = makePath('M97.4,64 s4,-38 -37.75,-18', { x: 97.4, y: 64 });
  const path2 = makePath('M60.4,46 c2,-25 -10,-32 -39.5,-23', { x: 97.4, y: 64 });

  const animation = ({start, end, element, getPoints, interval, callback, easing}) => {
    return Snap.animate(start, end, (step) => {
      const { x,y } = getPoints(step);

      element.transform(`t${x},${y}`);

    }, interval, easing, callback);
  };

  return [{
      element: 'token',
      animations: {
        step1: (next, element) => {
          return animation({
          	start: 0,
            end: path1.getLength(),
            element,
            getPoints: step => path1.getPoints(step),
            interval: 12 * q,
            easing: mina.easeinout,
            callback: next
          });
        },
        step2: (next, element) => {
          return animation({
          	start: 0,
            end: path2.getLength(),
            element,
            getPoints: step => path2.getPoints(step),
            interval: 12 * q,
            easing: mina.easeinout,
            callback: next
          });
        },
        step3: (next, element) => {
          return animation({
          	end: 0,
            start: path2.getLength(),
            element,
            getPoints: step => path2.getPoints(step),
            interval: 12 * q,
            easing: mina.easeinout,
            callback: next
          });
        },
        step4: (next, element) => {
          return animation({
          	end: 0,
            start: path1.getLength(),
            element,
            getPoints: step => path1.getPoints(step),
            interval: 11 * q,
            easing: mina.easeinout,
            callback: next
          });
        },
      },
      sequence: (set) => set.delay(1 * q).run('step1').run('step2').delay(2 * q).run('step3').run('step4').delay(10 * q).recovery(),

    },
  ];

})();
