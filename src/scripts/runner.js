function startRunner() {
  const config = {
    tooltips: {
      templates: {
        regular: new Element('tooltip-regular'),
        dark: new Element('tooltip-dark'),
      },
      wrapperAttr: '[data-tooltip-inside]',
    }
  }

  const isArray = (arr, fn) => {
    const a = arr instanceof Array ? arr : [arr];
    return a.map(s => {
      return fn(s);
    });
  }

  return {
    tooltips: (regularElementSelector, darkElementSelector) => {
      const { regular: runRegular, dark: runDark } = makeTooltips(config.tooltips);

      const regulars = isArray(regularElementSelector, runRegular);
      const darks = isArray(darkElementSelector, runDark);

      console.log(regulars);

      return;
    },
  }
}
