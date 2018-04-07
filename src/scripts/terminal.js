$(function () {
  const config = {
    tooltips: {
      templates: {
        regular: document.getElementById('tooltip-regular'),
        dark: document.getElementById('tooltip-dark'),
      },
      wrapperAttr: '[data-tooltip-trigger]',
      templateConf: {
        offset: -35,
        boundary: $( 'body' ).get(0),
        fallbackPlacement: 'clockwise',
        // container: false
      }
    },
  };

  const selectors = {
    tooltips: {
      regular: '[data-toggle="tooltip"]:not([data-tooltip-theme])',
      dark: $('[data-tooltip-theme="dark"]'),
    }
  };

  const runner = startRunner(config);

  const tooltips = runner.tooltips(selectors.tooltips);

  tooltips.regular.forEach(e => e.tooltip('show'));
  tooltips.dark.forEach(e => e.tooltip('show'));
});
