(() => {
  class Animation {
    constructor(element, toggler, settings) {
      if(!element) throw new Error("Passed element wasn't found");

      if(element instanceof Array) return element.map(n => new Animation(n, toggler, settings));

      this.element = element;
      this.toggle = toggler;

      this.duration = settings.duartion || 1000;
      this.endClassName= settings.endClassName || 'shown';
      this.processClassName= settings.processClassName || 'showing';

      this.binding = () => this.animate();

      $( this.toggle ).click( this.binding );
    }

    isShown(boolean) {
      const arg = ["shown", boolean].filter(n => n !== undefined);

      return $( this.element ).data(...arg);
    }

    toggleShown() {
      const boolean = !this.isShown();

      return this.isShown( boolean );
    }

    animate() {
      $( this.toggle ).unbind( 'click', this.binding );

      if($( this.element ).data().shown === undefined) this.isShown( true );

      if(this.isShown()) {

        $( this.element ).addClass(this.processClassName);

        return setTimeout(() => {
          this.toggleShown();
          $( this.element ).removeClass(this.processClassName);
          $( this.element ).addClass(this.endClassName);

          return $( els.toggle ).click( this.binding );
        }, this.duration);
      } else {
        $( this.element ).addClass(this.processClassName);

        return setTimeout(() => {
          $( this.element ).removeClass(this.endClassName);
          $( this.element ).removeClass(this.processClassName);
          this.toggleShown();

          return $( els.toggle ).click( this.binding );
        }, this.duration);
      }
    }
  }

  const settings = {
    duration: 1000,
    endClassName: 'shown',
    processClassName: 'showing'
  }

  const els = {
    jumbo: document.getElementById('jumbo'),
    infographic: document.getElementById('infographic'),
    bg: document.getElementById('main-info__bg'),
    logo: document.getElementById('logo'),
    toggle: document.getElementById('jumbo-toggle'),
  };

  const animations = new Animation( [els.bg, els.jumbo, els.infographic, els.toggle, els.logo], els.toggle, settings);
})();
