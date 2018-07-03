class MoreInfoGroup {
  constructor(btn, elements) {
    this.btn = btn;
    this.elements = elements;

    this.fn = () => {
      this.elements.forEach(e => $( e ).toggle());
      $( this.btn ).toggleClass('btn-more--active');
      return;
    };

    this.hide();

    return;
  }

  hide() {
    this.elements.forEach(e => $( e ).hide());

    return this;
  }

  run() {
    $( this.btn ).click(this.fn);

    return this;
  }
}

function moreInfo() {
  const config = {
    btn: {
      attr: 'data-more-info-btn',
      data: 'moreInfoBtn',
    },
    element: {
      attr: 'data-more-info',
      data: 'moreInfo'
    }
  };

  const groups = $( `[${config.btn.attr}]` ).get().map(btn => {
    const name = $( btn ).data( config.btn.data );
    const attr = `[${config.element.attr}="${name}"]`;
    const elements = $( attr ).get();

    return new MoreInfoGroup(btn, elements);
  });

  groups.forEach(g => g.run());


  // $( els.open ).click(() => {
  //   els.$features.toggleClass('features--state--open');
  //   els.$data.toggle();
  //   $( els.open ).toggle();
  // });
  //
  // $( els.close ).click(() => {
  //   els.$features.toggleClass('features--state--open');
  //   els.$data.toggle();
  //   $( els.open ).toggle();
  // });
}
