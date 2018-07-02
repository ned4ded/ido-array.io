class ScrollHandler {
  constructor() {
    this.top = 0;
    this.bottom = window.innerHeight;
    this.callbacks = [];

    this.fn = (ev) => {
      const top  = window.pageYOffset || document.documentElement.scrollTop;
      const bottom = window.innerHeight + top;

      this.setTop(top).setBottom(bottom);

      if(this.callbacks.length > 0) this.callbacks.forEach(cb => cb.bind(this)(ev));

      return;
    }

    this.setHandler();
  }

  setTop(top) {
    this.top = top;

    return this;
  }

  setBottom(bottom) {
    this.bottom = bottom;

    return this;
  }

  setHandler() {
    window.addEventListener('scroll', this.fn);

    return this;
  }

  rmHanlder() {
    window.removeEventListener('scroll', this.fn);

    return this;
  }

  setCallback(cb) {
    this.callbacks = [...this.callbacks, cb];

    return this;
  }

  getMeta() {
    return { top: this.top, bottom: this.bottom };
  }
}

class ScrollRevealElement {
  constructor(agent, element, meta, config) {
    this.element = element;
    this.meta = meta || {};
    this.config = config || {};
    this.sr = agent;
  }

  reveal() {
    this.sr.reveal(this.element, this.config);
    return this;
  }

  getMeta() {
    return this.meta;
  }

  getConfig() {
    return this.config;
  }

  getElement() {
    return this.element;
  }

  set(config) {
    const properties = Object.keys(config);

    const newConfig = properties.reduce((acc, p) => {
      return ({ ...acc, [p] : config[p] });
    }, this.config);

    this.config = newConfig;

    return this;
  }

  bottom() {
    if(this.config.origin === 'bottom') return;

    this.set({
      origin: 'bottom',
    });

    this.reveal();

    return this;
  }

  top() {
    if(this.config.origin === 'top') return;

    this.set({
      origin: 'top',
    });

    this.reveal();

    return this;
  }
}

(() => {
  const sr = ScrollReveal({
    reset: true,
    scale: 1,
    duration: 750,
    distance: '125px',
    viewFactor: 0.1,
    // viewOffset: { top: 64 }
  });

  const scroll = new ScrollHandler();

  const config = {
    selector: '[data-scroll-reveal]',
    attrs: {
      origin: 'data-origin',
      changeOrigin: 'data-change-origin'
    },
    default: {
      origin: 'bottom',
      changeOrigin: true,
    },
    parser: function(el) {
      const attrsNames = Object.keys(this.attrs);

      const meta = attrsNames.reduce((meta, attrName) => {
        const attr = $( el ).attr(this.attrs[attrName]);

        return { ...meta, [attrName] : (attr ? attr : this.default[attrName]) };
      }, {});

      return meta;
    },
  };

  const elements = $(config.selector).get().map(e => {
    const meta = config.parser(e);

    return new ScrollRevealElement(sr, e, meta);
  });

  elements.forEach(e => {
    e.bottom();
  });

  scroll.setCallback(function(ev) {
    const { bottom } = this.getMeta();

    elements.forEach(e => {
      const { origin } = e.getConfig();

      const domEl = e.getElement();
      const { y, height } = domEl.getBoundingClientRect();
      const middle = Math.round(y + height / 2);

      const middleW = window.innerHeight / 2;

      if(middle <= middleW) {
        e.top();
      } else {
        e.bottom();
      }

      return;
    });
  });

})();
