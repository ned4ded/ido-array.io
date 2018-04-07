$(function () {
  const tooltips = {
    regular: '[data-toggle="tooltip"]:not([data-tooltip-theme])',
    dark: $('[data-tooltip-theme="dark"]'),
  }

  const runner = startRunner();

  runner.tooltips(tooltips.regular, tooltips.dark);

  $( tooltips.regular ).tooltip('show');
  $( tooltips.dark ).tooltip('show');
});
