$(function () {
  const config = {
    tooltips: {
      templates: {
        regular: document.getElementById('tooltip-regular'),
        dark: document.getElementById('tooltip-dark'),
        wide: document.getElementById('tooltip-wide'),
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
        wide: $('[data-tooltip-theme="wide"]'),
      },
      groups: {
        scaleName: '.scale__name',
        stages: '.stages',
        tge: '.tge',
      }
    }
  };

  const runner = startRunner(config);

  const tooltips = runner.tooltips(selectors.tooltips.templates);

  $(selectors.tooltips.groups.scaleName).find(selectors.tooltips.templates.regular).tooltip('show');
  $(selectors.tooltips.groups.scaleName).find(selectors.tooltips.templates.dark).tooltip('show');

  $('[data-tooltip-group="block-scale"]').on('show.bs.tooltip', function(ev) {
    const $other = $('[data-tooltip-group]').not( $( this ) );
    return $other.tooltip('hide');
  });
});
