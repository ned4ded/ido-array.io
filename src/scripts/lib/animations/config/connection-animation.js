const connectionAnimationConfig = (function() {
  const q = 29;

  const originPath = [
    ["M", 0, 0],
    ["c", -0.2, -0.3, -0.5, -0.5, -0.9, -0.5],
    ["c", -0.3, 0, -0.63, 0.2, -0.8, 0.5],
    ["l", -4.55, 8.8],
    ["c", -0.15, 0.3, -0.15, 0.6, 0, 0.8],
    ["l", 4.55, 8.8],
    ["c", 0.17, 0.3, 0.5, 0.55, 0.85, 0.54],
    ["c", 0.35, 0, 0.65, -0.24, 0.85, -0.54],
    ["l", 4.5, -8.7],
    ["c", 0.2, -0.3, 0.2, -0.6, 0, -0.9],
    ["l", -4.5, -8.8],
    ["z"]
  ];

  const transformedPath = [
    ["M", 0, 0],
    ["a", 2.06, 2.06, 0, 0, 0, -1.52, -0.7],
    ["a", 2, 2, 0, 0, 0, -1.38, 0.57],
    ["a", 2.09, 2.09, 0, 0, 0, -0.62, 1.43],
    ["a", 2.08, 2.08, 0, 0, 0, 0.52, 1.35],
    ["a", 2.13, 2.13, 0, 0, 0, 1.3, 0.58],
    ["a", 2.12, 2.12, 0, 0, 0, 1.11, -0.24],
    ["a", 2.15, 2.15, 0, 0, 0, 0.76, -0.66],
    ["a", 2.29, 2.29, 0, 0, 0, 0.16, -1.84],
    ["a", 1.88, 1.88, 0, 0, 0, -0.33, -0.49],
    ["z"]
   ];

  const makePath = (path) => (x, y) => {
    return [
      ['M', x, y],
      ...path.slice(1),
    ];
  };

  return [
  	{
      element: 'token-right',
      animations: {
        collapse: (next, element) => {

          element.animate({
            d: makePath(transformedPath)(136, 122.5),
            strokeWidth: 1.3,

          }, 6 * q, mina.easeinout, next);

          return;
        },
        uncollapse: (next, element) => {
          element.animate({
            d: makePath(originPath)(134.5, 114.3),
            strokeWidth: 2.88,
          }, 6 * q, mina.easeinout, next);

          return;
        },
        move: (next, element) => {

          element.animate({
            transform: 't10.75,6.75',

          }, 9 * q, mina.easeout, next);

          return;
        },
        stop: (next, element) => {
        	element.attr({ opacity: 1});

          element.animate({
            transform: 't0,0',

          }, 14 * q, mina.easein, next);

          return;
        },
        movequick: (next, element) => {
        	element.attr({ opacity: 1 });

          element.animate({
            transform: 't10.75,6.75',

          }, 6 * q, mina.easeout, next);

          return;
        },
        movesuperquick: (next, element) => {
        	element.attr({ opacity: 1 });

          element.animate({
            transform: 't10.75,6.75',

          }, 4 * q, mina.easeout, next);

          return;
        },
        fade: (next, element) => {

          element.animate({
            transform: 't13.75,8.75',
            opacity: 0
          }, 4 * q, mina.easein, next);

          return;
        },
        appear: (next, element) => {
        	element.attr({transform: 't-9.25,-6.75', opacity: 0.5 })

          element.animate({
            transform: 't-8.25,-5.75',
            opacity: 1

          }, 1 * q, mina.easeinout, next);

          return;
        },
        disappear: (next, element) => {
        	element.attr({transform: 't10.75,6.75', opacity: 1})

          element.animate({
            transform: 't13.75,8.75',
            opacity: 0

          }, 1 * q, mina.easeinout, next);

          return;
        },
      },

      sequence: (set) => set.delay(18 * q)
      .run('collapse').delay(3 * q)
      .run('move').run('fade').delay(4 * q)
      .run('appear').run('movequick').run('disappear').delay(10 * q)
      .run('appear').run('movesuperquick').run('disappear').delay(14 * q)
      .run('appear').run('stop').delay(1 *q).run('uncollapse').recovery(),
    },
    {
      element: 'token-left',
      animations: {
        collapse: (next, element) => {

          element.animate({
            d: makePath(transformedPath)(43, 122.75),
            strokeWidth: 1.3,

          }, 6 * q, mina.easeinout, next);

          return;
        },
        uncollapse: (next, element) => {
          element.animate({
            d: makePath(originPath)(40.9, 114.3),
            strokeWidth: 2.88,

          }, 6 * q, mina.easeinout, next);

          return;
        },
        move: (next, element) => {

          element.animate({
            transform: 't-10.75,6.75',

          }, 9 * q, mina.easeout, next);

          return;
        },
        stop: (next, element) => {
        	element.attr({ opacity: 1 });

          element.animate({
            transform: 't0,0',

          }, 14 * q, mina.easein, next);

          return;
        },
        movequick: (next, element) => {
        	element.attr({ opacity: 1 });

          element.animate({
            transform: 't-10.75,6.75',

          }, 6 * q, mina.easeout, next);

          return;
        },
        movesuperquick: (next, element) => {
        	element.attr({ opacity: 1 });

          element.animate({
            transform: 't-10.75,6.75',

          }, 4 * q, mina.easeout, next);

          return;
        },
        fade: (next, element) => {

          element.animate({
            transform: 't-13.75,8.75',
            opacity: 0
          }, 4 * q, mina.easein, next);

          return;
        },
        appear: (next, element) => {
        	element.attr({transform: 't9.25,-6.75', opacity: 0.5 })

          element.animate({
            transform: 't8.25,-5.75',
            opacity: 1

          }, 1 * q, mina.easeinout, next);

          return;
        },
        disappear: (next, element) => {
        	element.attr({transform: 't-10.75,6.75', opacity: 1})

          element.animate({
            transform: 't-13.75,8.75',
            opacity: 0

          }, 1 * q, mina.easeinout, next);

          return;
        },
      },

      sequence: (set) => set.delay(18 * q)
      .run('collapse').delay(3 * q)
      .run('move').run('fade').delay(4 * q)
      .run('appear').run('movequick').run('disappear').delay(10 * q)
      .run('appear').run('movesuperquick').run('disappear').delay(14 * q)
      .run('appear').run('stop').delay(1 *q).run('uncollapse').recovery(),
      /* sequence: set => set.run('collapse').run('appear') */
    },
    {
      element: 'token-center',
      animations: {
        collapse: (next, element) => {

          element.animate({
            d: makePath(transformedPath)(87, 44.5),
            strokeWidth: 1.3,

          }, 6 * q, mina.easeinout, next);

          return;
        },
        uncollapse: (next, element) => {
          element.animate({
            d: makePath(originPath)(85.5, 36.6),
            strokeWidth: 2.88,

          }, 6 * q, mina.easeinout, next);

          return;
        },
        move: (next, element) => {

          element.animate({
            transform: 't0,-11.75',

          }, 9 * q, mina.easeout, next);

          return;
        },
        stop: (next, element) => {
        	element.attr({ opacity: 1 });

          element.animate({
            transform: 't0,0',

          }, 14 * q, mina.easein, next);

          return;
        },
        movequick: (next, element) => {
        	element.attr({ opacity: 1 });

          element.animate({
            transform: 't0,-11.75',

          }, 6 * q, mina.easeout, next);

          return;
        },
        movesuperquick: (next, element) => {
        	element.attr({ opacity: 1 });

          element.animate({
            transform: 't0,-11.75',

          }, 4 * q, mina.easeout, next);

          return;
        },
        fade: (next, element) => {

          element.animate({
            transform: 't0,-13.75',
            opacity: 0
          }, 4 * q, mina.easein, next);

          return;
        },
        appear: (next, element) => {
        	element.attr({transform: 't0,6.75', opacity: 0.5 })

          element.animate({
            transform: 't0,5.75',
            opacity: 1

          }, 1 * q, mina.easeinout, next);

          return;
        },
        disappear: (next, element) => {
        	element.attr({transform: 't0,-11.75', opacity: 1})

          element.animate({
            transform: 't0,-13.75',
            opacity: 0

          }, 1 * q, mina.easeinout, next);

          return;
        },
      },

      sequence: (set) => set.delay(18 * q)
      .run('collapse').delay(3 * q)
      .run('move').run('fade').delay(4 * q)
      .run('appear').run('movequick').run('disappear').delay(10 * q)
      .run('appear').run('movesuperquick').run('disappear').delay(14 * q)
      .run('appear').run('stop').delay(1 *q).run('uncollapse').recovery(),
    },
    {
      element: 'person-right',
      animations: {
        forward: (next, element) => {

          element.animate({
            transform: 't6.25,3'

          }, 12 * q, mina.easeinout, next);

          return;
        },
        backward: (next, element) => {

          element.animate({
            transform: 't0,0'

          }, 12 * q, mina.easeinout, next);

          return;
        },
      },

      sequence: (set) => set.delay(4 * q).run('forward').delay(120 * q).run('backward').recovery(),
    },
    {
      element: 'person-left',
      animations: {
        forward: (next, element) => {

          element.animate({
            transform: 't-6.25,3'

          }, 12 * q, mina.easeinout, next);

          return;
        },
        backward: (next, element) => {

          element.animate({
            transform: 't0,0'

          }, 12 * q, mina.easeinout, next);

          return;
        },
      },

      sequence: (set) => set.delay(4 * q).run('forward').delay(120 * q).run('backward').recovery(),
    },
    {
      element: 'person-center',
      animations: {
        forward: (next, element) => {

          element.animate({
            transform: 't0,-8'

          }, 12 * q, mina.easeinout, next);

          return;
        },
        backward: (next, element) => {

          element.animate({
            transform: 't0,0'

          }, 12 * q, mina.easeinout, next);

          return;
        },
      },

      sequence: (set) => set.delay(4 * q).run('forward').delay(120 * q).run('backward').recovery(),
    },
  ];

})();
