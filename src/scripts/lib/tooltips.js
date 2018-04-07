function makeTooltips({ templates, templateConf, wrapperAttr }) {
  const callbacks = {
    template : template => template.content,
    serialize : (node) => (new XMLSerializer()).serializeToString(node),
    call: template => selector => $( selector ).each(function(index) {
      const $el = $( this );
      const target = $el.parents(wrapperAttr).get(0);

      $( target ).hover(() => {
        $el.tooltip('toggle');
      });

      $el.tooltip({
        template,
        container: $el,
        ...templateConf
      });

      return $el;
    }),
  };

  const processing = (template) => {
    const fns = [
      callbacks.template,
      callbacks.serialize,
      callbacks.call
    ];

    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, template);
  }

  const make = (name) => processing(templates[name]);

  return Object.keys(templates).reduce((acc, key) => {
    return { ...acc, [key]: make(key) };
  }, {});
}
