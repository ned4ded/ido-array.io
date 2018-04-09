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
      templates: {
        regular: '[data-toggle="tooltip"]:not([data-tooltip-theme])',
        dark: $('[data-tooltip-theme="dark"]'),
      },
      groups: {
        scale: '.scale',
        stages: '.stages',
        tge: '.tge',
      }
    }
  };

  const runner = startRunner(config);

  const tooltips = runner.tooltips(selectors.tooltips.templates);

  $(selectors.tooltips.groups.scale).find(selectors.tooltips.templates.regular).tooltip('show');
  $(selectors.tooltips.groups.scale).find(selectors.tooltips.templates.dark).tooltip('show');
});
