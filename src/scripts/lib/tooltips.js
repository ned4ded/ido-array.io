function makeTooltips({ templates, wrapperAttr }) {
  const callbacks = {
    template : template => {
      return template.get().content
    },
    serialize : (node) => {
      return (new XMLSerializer()).serializeToString(node);
    },
    call: template => selector => $( selector ).each(function(index) {
      const $el = $( this );

      const target = $el.parents(wrapperAttr).get(0);

      $( target ).hover((ev) => {
        return $el.tooltip('toggle');
      });

      $el.tooltip({
        template,
        container: $el,
        offset: -35,
      });

      return $el;
    }),
  };

  const processing = (template, functions) => {
    const fns = functions instanceof Array ? functions : [functions];

    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, template);
  }

  const make = (name) => processing(templates[name], patterns[name]);

  const patterns = {
    regular: [
      callbacks.template,
      callbacks.serialize,
      callbacks.call
    ],
    dark: [
      callbacks.template,
      callbacks.serialize,
      callbacks.call
    ],
  };

  const regular = make('regular');
  const dark = make('dark');

  return { regular, dark };
}
