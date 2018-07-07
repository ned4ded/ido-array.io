const worldhandAnimationConfig = (function() {
  const q = 29;
  
  return [{
      element: 'white-hand',
      animations: {
        stepOne: (next, element) => {
          element.animate({
            transform: 'r6.5,15,140',
          }, 15 * q, mina.easeinout, next);

          return;
        },
        stepTwo: (next, element) => {
          element.animate({
            transform: 'r-8,15,140',
          }, 16 * q, mina.easeinout, next);

          return;
        },
        stepThree: (next, element) => {
          element.animate({
            transform: 'r0,',
          }, 14 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(15 * q).run('stepOne').delay(2 * q).run('stepTwo').delay(4 * q).run('stepThree').delay(2 * q).recovery(),
    },
    {
      element: 'green-hand',
      animations: {
        stepOne: (next, element) => {
          element.animate({
            transform: 'r6.5,16,146',
          }, 14 * q, mina.easeinout, next);

          return;
        },
        stepTwo: (next, element) => {
          element.animate({
            transform: 'r-8.5,16,146',
          }, 16 * q, mina.easeinout, next);

          return;
        },
        stepThree: (next, element) => {
          element.animate({
            transform: 'r0,',
          }, 12 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(18 * q).run('stepOne').delay(3 * q).run('stepTwo').delay(5 * q).run('stepThree'),
    },
    {
      element: 'earth',
      animations: {
        stepOne: (next, element) => {
          element.animate({
            transform: 't0,11',
          }, 13 * q, mina.easeinout, next);

          return;
        },
        stepTwo: (next, element) => {
          element.animate({
            transform: 't0,-19',
          }, 16 * q, mina.easeinout, next);

          return;
        },
        stepThree: (next, element) => {
          element.animate({
            transform: 't0,0',
          }, 15 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(15 * q).run('stepOne').delay(6 * q).run('stepTwo').delay(2 * q).run('stepThree').delay(1 * q).recovery(),
    },
    {
      element: 'earth-background',
      animations: {
        stepOne: (next, element) => {
          element.animate({
            transform: 't0,12',
          }, 15 * q, mina.easeinout, next);

          return;
        },
        stepOneBounce: (next, element) => {
          element.animate({
            transform: 't0,11.5',
          }, 3 * q, mina.easeinout, next);

          return;
        },
        stepTwo: (next, element) => {
          element.animate({
            transform: 't0,-19.5',
          }, 17 * q, mina.easeinout, next);

          return;
        },
        stepThree: (next, element) => {
          element.animate({
            transform: 't0,0',
          }, 12 * q, mina.easeinout, next);

          return;
        },
      },
      sequence: (set) => set.delay(17 * q).run('stepOne').run('stepOneBounce').delay(2 * q).run('stepTwo').delay(2 * q).run('stepThree').recovery(),
    },
  ];
})();
