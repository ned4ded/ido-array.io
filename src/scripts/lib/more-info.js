(() => {

  const els = {
    open: document.getElementById('more-info-open'),
    close: document.getElementById('more-info-close'),
    $data: $('[data-more-info]'),
  };

  els.$data.toggle();

  $( els.open ).click(() => {
    els.$data.toggle();
    $( els.open ).toggle();
  });

  $( els.close ).click(() => {
    els.$data.toggle();
    $( els.open ).toggle();
  });

})();
