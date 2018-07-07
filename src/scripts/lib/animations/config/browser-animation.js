const browserAnimationConfig = (function() {
  const q = 29;

  return [
  	{
      element: 'cursor',
      animations: {
        forward: (next, element) => {
          element.animate({
          	transform: 't30.5,-43.75',
          }, 17 * q, mina.easeinout, next);

          return;
        },
        backward: (next, element) => {
          element.animate({
          	transform: 't0,0',
          }, 17 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(2 * q).run('forward').delay(45 * q).run('backward').delay(3 * q).recovery(),
    },
    {
      element: 'net-point-first-glare',
      animations: {
        forward: (next, element) => {
        	element.transform('r-15,34.5,64');

          element.animate({
          	transform: 'r0,34.5,64',
           	opacity: '1',
          }, 17 * q, mina.easeinout, next);

          return;
        },
        backward: (next, element) => {
        	element.transform('r0,34.5,64');

          element.animate({
          	transform: 'r-15,34.5,64',
           	opacity: '0',
          }, 16 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(7 * q).run('forward').delay(41 * q).run('backward').recovery(),
    },
    {
      element: 'net-point-first-background',
      animations: {
        forward: (next, element) => {
          element.animate({
          	rx: 1,
            ry: 1,
            cx: 33.25,
            cy: 66.25,
           	opacity: 0,
          }, 14 * q, mina.easeinout, next);

          return;
        },
        backward: (next, element) => {
        	element.transform('r0,34.5,64');

          element.animate({
          	rx: 11.75,
            ry: 11.75,
            cx: 34.5,
            cy: 66.5,
           	opacity: 1,
          }, 13 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(3 * q).run('forward').delay(55 * q).run('backward').delay(4 * q).recovery(),
    },
    {
      element: 'net-point-first-dash',
      animations: {
        forward: (next, element) => {
          element.animate({
          	transform: 's0.74t-1,-1',
           	opacity: 0,
          }, 14 * q, mina.easeinout, next);

          return;
        },
        backward: (next, element) => {
        	element.transform('s0.74t-1,-1');

          element.animate({
          	transform: 's1t0,0',
           	opacity: 1,
          }, 13 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(3 * q).run('forward').delay(55 * q).run('backward').delay(4 * q).recovery(),
    },
    {
      element: 'net-point-second-background',
      animations: {
        backward: (next, element) => {
          element.animate({
          	rx: 1,
            ry: 1,
           	opacity: 0,
          }, 14 * q, mina.easeinout, next);

          return;
        },
        forward: (next, element) => {
        	element.attr({
            rx: 1,
            ry: 1,
          });

          element.animate({
          	rx: 11.75,
            ry: 11.75,
           	opacity: 1,
          }, 13 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(12 * q).run('forward').delay(38 * q).run('backward').delay(13 * q).recovery(),
    },
    {
      element: 'net-point-second-dash',
      animations: {
        backward: (next, element) => {
          element.animate({
          	transform: 's0.74t-1,-1',
           	opacity: 0,
          }, 14 * q, mina.easeinout, next);

          return;
        },
        forward: (next, element) => {
        	element.transform('s0.74t-1,-1');

          element.animate({
          	transform: 's1t0,0',
           	opacity: 1,
          }, 13 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(12 * q).run('forward').delay(38 * q).run('backward').delay(13 * q).recovery(),
    },
    {
      element: 'net-point-second-glare',
      animations: {
        backward: (next, element) => {
        	element.transform('r-15,85,17');

					element.animate({
            transform: 'r0,85,17',
             opacity: '1',
          }, 10 * q, mina.easeinout, next);

          return;
        },
        forward: (next, element) => {
        	element.transform('r0,85,17');

          element.animate({
          	transform: 'r-15,85,17',
           	opacity: '0',
          }, 10 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(10 * q).run('forward').delay(47 * q).run('backward').delay(12 * q).recovery(),
    },
    {
      element: 'arrow',
      animations: {
        backward: (next, element) => {
        	element.transform('r43,111,116.7');

					element.animate({
            transform: 'r0,111,116.75',
          }, 20 * q, mina.easeinout, next);

          return;
        },
        forward: (next, element) => {
        	element.transform('r0t0,0');

          element.animate({
          	transform: 'r43,111,116.75',
          }, 21 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(12 * q).run('forward').delay(25 * q).run('backward').delay(12 * q).recovery(),
    },
    {
      element: 'arrow-space',
      animations: {
        backward: (next, element) => {
        	element.transform('r90,111,116.7');

					element.animate({
            transform: 'r48,111,116.75',
          }, 20 * q, mina.easeinout, next);

          return;
        },
        forward: (next, element) => {
        	element.transform('r48,111,116.7');

          element.animate({
          	transform: 'r90,111,116.75',
          }, 21 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(12 * q).run('forward').delay(25 * q).run('backward').delay(12 * q).recovery(),
    },
  ];

})();
