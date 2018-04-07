class Element {
  constructor(selector) {
    if(selector instanceof Element) return selector;

    if(selector instanceof HTMLCollection || selector instanceof Array) {
      return Array.from(selector, el => new Element(el));
    }

    if(jQuery && selector instanceof jQuery) {
      const el = selector.get();
      return new Element(el);
    }

    const instance = selector instanceof HTMLElement ? selector : null;
    this.element = instance ? instance : document.getElementById(selector);

    if(!this.element) {
      throw new Error("Element doesn't exist");
    }
  }

  mod(fn) {
    return new Element( fn(this.element) );
  }

  get() {
    return this.element;
  }
}
