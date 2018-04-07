'use strict';

function startRunner() {
  var config = {
    tooltips: {
      templates: {
        regular: new Element('tooltip-regular'),
        dark: new Element('tooltip-dark')
      },
      wrapperAttr: '[data-tooltip-inside]'
    }
  };

  var isArray = function isArray(arr, fn) {
    var a = arr instanceof Array ? arr : [arr];
    return a.map(function (s) {
      return fn(s);
    });
  };

  return {
    tooltips: function tooltips(regularElementSelector, darkElementSelector) {
      var _makeTooltips = makeTooltips(config.tooltips),
          runRegular = _makeTooltips.regular,
          runDark = _makeTooltips.dark;

      var regulars = isArray(regularElementSelector, runRegular);
      var darks = isArray(darkElementSelector, runDark);

      console.log(regulars);

      return;
    }
  };
}
'use strict';

$(function () {
  var tooltips = {
    regular: '[data-toggle="tooltip"]:not([data-tooltip-theme])',
    dark: $('[data-tooltip-theme="dark"]')
  };

  var runner = startRunner();

  runner.tooltips(tooltips.regular, tooltips.dark);

  $(tooltips.regular).tooltip('show');
  $(tooltips.dark).tooltip('show');
});
'use strict';

(function () {
  $('#menu-toggler').click(function (ev) {
    $('#headerMenu').collapse('toggle');
  });
})();
'use strict';

function makeTooltips(_ref) {
  var templates = _ref.templates,
      wrapperAttr = _ref.wrapperAttr;

  var callbacks = {
    template: function template(_template) {
      return _template.get().content;
    },
    serialize: function serialize(node) {
      return new XMLSerializer().serializeToString(node);
    },
    call: function call(template) {
      return function (selector) {
        return $(selector).each(function (index) {
          var $el = $(this);

          var target = $el.parents(wrapperAttr).get(0);

          $(target).hover(function (ev) {
            return $el.tooltip('toggle');
          });

          $el.tooltip({
            template: template,
            container: $el,
            offset: -35
          });

          return $el;
        });
      };
    }
  };

  var processing = function processing(template, functions) {
    var fns = functions instanceof Array ? functions : [functions];

    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, template);
  };

  var make = function make(name) {
    return processing(templates[name], patterns[name]);
  };

  var patterns = {
    regular: [callbacks.template, callbacks.serialize, callbacks.call],
    dark: [callbacks.template, callbacks.serialize, callbacks.call]
  };

  var regular = make('regular');
  var dark = make('dark');

  return { regular: regular, dark: dark };
}
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    if (selector instanceof Element) return selector;

    if (selector instanceof HTMLCollection || selector instanceof Array) {
      return Array.from(selector, function (el) {
        return new Element(el);
      });
    }

    if (jQuery && selector instanceof jQuery) {
      var el = selector.get();
      return new Element(el);
    }

    var instance = selector instanceof HTMLElement ? selector : null;
    this.element = instance ? instance : document.getElementById(selector);

    if (!this.element) {
      throw new Error("Element doesn't exist");
    }
  }

  _createClass(Element, [{
    key: "mod",
    value: function mod(fn) {
      return new Element(fn(this.element));
    }
  }, {
    key: "get",
    value: function get() {
      return this.element;
    }
  }]);

  return Element;
}();
//# sourceMappingURL=main.js.map
