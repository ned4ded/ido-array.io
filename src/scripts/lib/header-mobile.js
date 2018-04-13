(() => {
  const width = () => $( window ).width();

  const animation = (boolean) => {
    $('#logo').animate({opacity: (boolean ? 0 : 1)}, 500);
    $('#header').animate({height: (boolean ? '100%' : $( '.navbar-brand' ).height() + 20)}, 500);
  }

  function lsHandler(ev) {
    ev.preventDefault();

    $('#menu-toggler').trigger('click');
    $( this ).unbind( 'click', lsHandler );

    return $( this ).trigger('click');
  };

  $('#menu-toggler').click(function(ev) {
    ev.preventDefault();
    if(width() >= 1000) return;

    const $target = $( $( this ).data( 'target' ) );
    if(!$target.length) return;

    const innerLinks = $target.find('a[href]');


    if($target.is(':hidden')) {
      innerLinks.click(lsHandler);
      $('#header').toggleClass('header--behavior--mobile-menu');
      $('#mobile-menu-wrapper').toggleClass('body--overflow--hidden');
      animation(true);
      $target.toggle();
    } else {
      animation(false);

      setTimeout(function () {
        $target.toggle();
        $('#header').toggleClass('header--behavior--mobile-menu');
        $('#header').attr('style', '');
        $('#logo').attr('style', '');
        $('#mobile-menu-wrapper').toggleClass('body--overflow--hidden');
        innerLinks.unbind( 'click', lsHandler);
      }, 520);
    }
  });
})();
