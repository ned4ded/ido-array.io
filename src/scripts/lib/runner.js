function startRunner(config) {
  const fnArray = (arr, fn) => {
    const a = arr instanceof Array ? arr : [arr];

    return a.map(s => {
      return fn( $( s ) );
    });
  }

  return {
    tooltips: function(selectors) {
      const tooltips = makeTooltips(config.tooltips);

      return Object.keys(selectors).reduce((acc, name) => {
        const injectSelectors = fnArray(selectors[name], tooltips[name])
        return { ...acc, [name] : injectSelectors };
      }, {});
    },
  }
}
