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
  constructor(agent, element, meta, config, container) {
    this.element = element;
    this.meta = meta || {};
    this.config = config || {};
    this.sr = agent;
    this.container = container;
  }

  reveal() {
    this.sr.reveal(this.element, this.config, this.meta.groupDelay || null);
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

  getContainer() {
    return this.container;
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
    // viewOffset: { top: 64 }
  });

  const scroll = new ScrollHandler();

  const config = {
    selector: '[data-scroll-reveal]',
    attrs: {
      origin: {
        name: 'data-origin',
        data: 'origin',
        scope: 'config'
      },
      opacity: {
        name: 'data-opacity',
        data: 'opacity',
        scope: 'config'
      },
      viewFactor: {
        name: 'data-view-factor',
        data: 'viewFactor',
        scope: 'config'
      },
      reset: {
        name: 'data-reset',
        data: 'reset',
        scope: 'config'
      },
      distance: {
        name: 'data-distance',
        data: 'distance',
        scope: 'config'
      },
      scale: {
        name: 'data-scale',
        data: 'scale',
        scope: 'config'
      },
      duration: {
        name: 'data-duration',
        data: 'duration',
        scope: 'config'
      },
      changeOrigin: {
        name: 'data-change-origin',
        data: 'changeOrigin',
        scope: 'meta'
      },
      groupDelay: {
        name: 'data-group-delay',
        data: 'groupDelay',
        scope: 'meta',
      },
      groupName: {
        name: 'data-group-name',
        data: 'groupName',
        scope: 'meta',
      },
      groupContainer: {
        name: 'data-group-container',
        data: 'groupContainer',
      }
    },
    default: {
      origin: 'bottom',
      viewFactor: 0.1,
      opacity: 0,
      changeOrigin: true,
      reset: true,
      distance: '125px',
      scale: 1,
      duration: 750,
    },
    getNames: function(fn) {
      return Object.keys(this.attrs).filter(fn || (k => k));
    },
    getMetaNames: function() {
      return this.getNames(k => this.attrs[k].scope === 'meta');
    },
    getConfigNames: function() {
      return this.getNames(k => this.attrs[k].scope === 'config');
    },
    parser: function(el) {
      const metaNames = this.getMetaNames();
      const configNames = this.getConfigNames();

      const element = el instanceof Array ? el[0] : el;

      const pack = (names) => names.reduce((meta, attrName) => {
        const attr = $( element ).data(this.attrs[attrName].data);

        return { ...meta, [attrName] : (attr !== undefined ? attr : this.default[attrName]) };
      }, {});

      return { meta: pack(metaNames), config: pack(configNames) };
    },
    parseArrays: (arr, fn) => {
      const rec = (acc, arr1, arr2) => {
        if(acc.length === 0) return { with: arr1, without: arr2 };

        const [first, ...rest] = acc;

        return fn(first) ? rec(rest, [...arr1, first], arr2) : rec(rest, arr1, [...arr2, first]);
      }

      return rec(arr, [], []);
    },
    breakIntoGroups: function(elements) {
      const rec = (acc, elements) => {
        if(elements.length === 0) return acc;

        const [first, ...rest] = elements;

        const groupName = $( first ).data( this.attrs.groupName.data );

        if(groupName) {
          const { with: groupRest, without: filteredRest } = this.parseArrays(rest, e => $( e ).data(this.attrs.groupName.data) === groupName);

          return rec([...acc, [first, ...groupRest]], filteredRest);
        };

        return rec([...acc, first], rest);
      }

      return rec([], elements);
    }
  };

  const elements = config.breakIntoGroups($(config.selector).get()).map(e => {
    const { meta, config: conf } = config.parser(e);

    const containerAttr = `[${config.attrs.groupContainer.name}="${meta.groupName}"]`;
    const container = meta.groupName ? $( containerAttr ).get(0) : e;

    return new ScrollRevealElement(sr, e, meta, conf, container);
  });

  elements.forEach(e => {
    e.reveal();
  });

  scroll.setCallback(function(ev) {
    const { bottom } = this.getMeta();

    elements.forEach(e => {
      const meta = e.getMeta();

      if(!meta.changeOrigin) return;

      const { origin } = e.getConfig();

      const domEl = e.getContainer();
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
