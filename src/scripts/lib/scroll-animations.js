(() => {
  const sr = ScrollReveal({
    reset: true,
    scale: 1,
    duration: 750,
    distance: '125px',
    viewFactor: 0.4,
  });

  const config = {
    selector: '[data-scroll-reveal]',
  };

  const elements = $(config.selector).get();


  // sr.reveal(elems, 50);

  elements.forEach(e => sr.reveal(e));

  console.log(elements);

})();
