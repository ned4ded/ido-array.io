const schemeAnimationConfig = (function() {
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

    const paths = {
  	'station-one' : makePath('M89.6860987,59.1845192 L89.6860987,30.5306731 C89.6860987,24.2006402 94.8257894,19.0691346 101.165919,19.0691346 L122,19.0691346', { x: 122, y: 19.07 }),
    'station-two' : makePath('M43.7668161,8.68211538 L57.7578475,8.68211538 C64.0979774,8.68211538 69.2376682,13.8136209 69.2376682,20.1436538 L69.2376682,59.1845192', { x: 43.75, y: 8.68 }),
    'station-three' : makePath('M12.1973094,43.0667308 L12.1973094,70.6460577 C12.1973094,73.8110741 14.7671548,76.3768269 17.9372197,76.3768269 L59.9103139,76.3768269', { x: 12.2, y: 43.06 }),
    'station-four' : makePath('M142.410762,62.76625 L95.0565022,62.76625', { x: 142.4, y: 62.7 }),
    'station-five' : makePath('M20.8071749,127.595577 L63.4977578,127.595577 C66.6678228,127.595577 69.2376682,125.029824 69.2376682,121.864808 L69.2376682,92.4946154', { x: 20.8, y: 127.6 }),
    'station-six' : makePath('M93.9910314,86.0475 L113.721973,86.0475 C116.892038,86.0475 119.461883,88.6132528 119.461883,91.7782692 L119.461883,129.028269', { x: 119.46, y: 129.03 }),
  };

  const animation = ({start, end, element, getPoints, interval, callback, easing}) => {
    return Snap.animate(start, end, (step) => {
      const { x,y } = getPoints(step);

      element.transform(`t${x},${y}`);

    }, interval, easing, callback);
  };

  const isReverse = (direction) => {
  	switch (direction) {
    	case 'forward':
      	return 1;
      case 'reverse':
      	return -1;
      default:
      	return 0;
    }
  }

  const getAttr = (element) => {
    const { 'data-animation-direction': direction,
            'stroke-dasharray': space } = element.attr();
    return { space, direction };
  }

  const makeTrainFunction = ({name, path, seq, interval, meta}) => {
  	return {
        element: name,
        animations: {
          move: (next, element) => {
            element.attr({ visibility: 'visible'});

            const end = (meta && meta.reverse)? 0 : path.getLength();
            const start = (meta && meta.reverse)? path.getLength() : 0;

            return animation({
                start,
                end,
                element,
                getPoints: step => path.getPoints(step),
                interval: interval.move,
                easing: mina.linear,
                callback: () => {
                  element.attr({ visibility: 'hidden' });

                  return next();
                }
              });
          },
          start: (next, element) => {
            element.attr({ visibility: 'visible'});
            element.transform(meta.start || 't0,0');

            element.animate({
              transform: 't0,0',
            }, interval.start || 0, mina.easeout, next);

            return;
        },
        },
        sequence: seq,
      };
  }

  const trainsConfig = [
    {
      name: 'train-one-station-three',
      path: paths['station-three'],
      seq: set => set.delay(20 * q).run('move').delay(6 * q).run('move'),
      interval: {
      	move: 18 * q,
      },
    },
    {
      name: 'train-two-station-three',
      path: paths['station-three'],
      seq: set => set.delay(29 * q).run('move'),
      interval: {
      	move: 18 * q,
      },
    },
    {
      name: 'train-three-station-three',
      path: paths['station-three'],
      seq: set => set.delay(37 * q).run('move'),
      interval: {
      	move: 18 * q,
      },
    },
    {
      name: 'train-one-station-two',
      path: paths['station-two'],
      seq: set => set.delay(20 * q).run('start').run('move').run('start').run('move'),
      interval: {
      	move: 12 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't-8,0',
      }
    },
    {
      name: 'train-two-station-two',
      path: paths['station-two'],
      seq: set => set.delay(29 * q).run('start').run('move').run('start').run('move'),
      interval: {
      	move: 12 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't-8,0',
      }
    },
    {
      name: 'train-one-station-one',
      path: paths['station-one'],
      seq: set => set.delay(21 * q).run('start').run('move').delay(1 * q).run('start').run('move'),
      interval: {
      	move: 13 * q,
        start: 3 * q,
      },
      meta: {
      	start: 't8,0',
        reverse: true,
      }
    },
    {
      name: 'train-two-station-one',
      path: paths['station-one'],
      seq: set => set.delay(29 * q).run('start').run('move').delay(1 * q).run('start').run('move'),
      interval: {
      	move: 13 * q,
        start: 3 * q,
      },
      meta: {
      	start: 't8,0',
        reverse: true,
      }
    },
    {
      name: 'train-one-station-four',
      path: paths['station-four'],
      seq: set => set.delay(21 * q).run('start').run('move').delay(7 * q).run('start').run('move'),
      interval: {
      	move: 14 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't8,0',

      }
    },
    {
      name: 'train-two-station-four',
      path: paths['station-four'],
      seq: set => set.delay(29 * q).run('start').run('move'),
      interval: {
      	move: 14 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't8,0',

      }
    },
    {
      name: 'train-three-station-four',
      path: paths['station-four'],
      seq: set => set.delay(37 * q).run('start').run('move'),
      interval: {
      	move: 14 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't8,0',

      }
    },
    {
      name: 'train-one-station-six',
      path: paths['station-six'],
      seq: set => set.delay(21 * q).run('start').run('move').run('start').run('move'),
      interval: {
      	move: 21 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't0,8',
        reverse: true,
      }
    },
    {
      name: 'train-two-station-six',
      path: paths['station-six'],
      seq: set => set.delay(29 * q).run('start').run('move'),
      interval: {
      	move: 21 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't0,8',
        reverse: true,
      }
    },
    {
      name: 'train-three-station-six',
      path: paths['station-six'],
      seq: set => set.delay(37 * q).run('start').run('move'),
      interval: {
      	move: 21 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't0,8',
        reverse: true,
      }
    },
    {
      name: 'train-one-station-five',
      path: paths['station-five'],
      seq: set => set.delay(21 * q).run('start').run('move').run('start').run('move'),
      interval: {
      	move: 21 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't-8,0',
      }
    },
    {
      name: 'train-two-station-five',
      path: paths['station-five'],
      seq: set => set.delay(29 * q).run('start').run('move'),
      interval: {
      	move: 21 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't-8,0',
      }
    },
    {
      name: 'train-three-station-five',
      path: paths['station-five'],
      seq: set => set.delay(37 * q).run('start').run('move'),
      interval: {
      	move: 21 * q,
        start: 4 * q,
      },
      meta: {
      	start: 't-8,0',
      }
    },
  ];

  return [
  	{
      element: 'hub',
      animations: {
        step1: (next, element) => {

          element.animate({
            transform: 's0.95,0.95',
          }, 3 * q, mina.easein, next);

          return;
        },
        step2: (next, element) => {

          element.animate({
            transform: 's1.36,1.36',
          }, 6 * q, mina.easein, next);

          return;
        },
        step3: (next, element) => {

          element.animate({
            transform: 's1.1,1.1',
          }, 8 * q, mina.easein, next);

          return;
        },
        step4: (next, element) => {

          element.animate({
            transform: 's1,1',
          }, 7 * q, mina.easein, next);

          return;
        },
      },

      sequence: (set) => set.delay(14 * q).run('step1').run('step2').run('step3').delay(18 * q).run('step4').recovery(),
    },
    {
      element: 'logo',
      animations: {
        step1: (next, element) => {

          element.animate({
            transform: 's0.95,0.95',
          }, 3 * q, mina.easein, next);

          return;
        },
        step2: (next, element) => {

          element.animate({
            transform: 's1.25,1.25',
          }, 6 * q, mina.easein, next);

          return;
        },
        step3: (next, element) => {

          element.animate({
            transform: 's1.1,1.1',
          }, 8 * q, mina.easein, next);

          return;
        },
        step4: (next, element) => {

          element.animate({
            transform: 's1,1',
          }, 7 * q, mina.easein, next);

          return;
        },
      },

      sequence: (set) => set.delay(14 * q).run('step1').run('step2').run('step3').delay(18 * q).run('step4').recovery(),
    },
    ...[
    'station-one',
    'station-two',
    'station-three',
    'station-four',
    'station-five',
    'station-six',
    ].map(name => {
    	return {
      element: name,
      animations: {
        step1: (next, element) => {

          element.animate({
            transform: 's0.9,0.9',
          }, 1 * q, mina.easein, next);

          return;
        },
        step2: (next, element) => {

          element.animate({
            transform: 's1.2,1.2',
          }, 4 * q, mina.easein, next);

          return;
        },
        step3: (next, element) => {

          element.animate({
            transform: 's1,1',
          }, 5 * q, mina.easein, next);

          return;
        },
      },

      sequence: (set) => set.delay(15 * q).run('step1').run('step2').run('step3').recovery(),
    }
    }),
    ...[
    	'dash-line-one',
    	'dash-line-two',
    ].map(name => {
    	return {
      element: name,
      animations: {
        move: (next, element) => {
        	const { direction, space } = getAttr(element);
          const reverse = isReverse(direction);

          element.attr({strokeDashoffset: 0});

          element.animate({
            strokeDashoffset: space * 2 * (reverse? reverse : 1),
          }, 8 * q, mina.linear, next);

          return;
        },
      },

      sequence: (set) => set.delay(22 * q).run('move').run('move').run('move'),
    };
    }),
    ...trainsConfig.map(signature => makeTrainFunction(signature)),
  ];

})();
