(() => {
  const width = () => $( window ).width();

  const animation = (boolean) => {
    $('#logo').animate({opacity: (boolean ? 0 : 1)}, 500);
    $('#header').animate({height: (boolean ? '100%' : $( '.navbar-brand' ).height() + 20)}, 500);
    $('#headerMenu').collapse('toggle');
  }

  const isToggled = (boolean) => {
    const arg = ["toggled", boolean].filter(n => n !== undefined);

    return $( '#menu-toggler' ).data(...arg);
  }

  const toggle = () => {
    const boolean = !isToggled();

    return isToggled( boolean );
  }

  $('#menu-toggler').click((ev) => {
    ev.preventDefault;

    if(width() >= 1000) return;

    if($( '#menu-toggler' ).data().toggled === undefined) isToggled( true );

    if(isToggled()) {
      $('#header').toggleClass('header--behavior--mobile-menu');
      $('#mobile-menu-wrapper').toggleClass('body--overflow--hidden');

      animation(true);
      isToggled( false );
    } else {
      animation(false);
      setTimeout(function () {
        $('#header').toggleClass('header--behavior--mobile-menu');
        $('#header').attr('style', '');
        $('#logo').attr('style', '');
        $('#mobile-menu-wrapper').toggleClass('body--overflow--hidden');
        isToggled( true );
      }, 520);
    }
  });
})();
