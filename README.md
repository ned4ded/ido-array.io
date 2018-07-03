# ido-array.io

Array.io Initial Development Offering Landing Markup

Used tailored bootstrap.css file with the breakpoints changed to:
```css
:root {
  --breakpoint-xs: 0;
  --breakpoint-sm: 780px;
  --breakpoint-md: 1000px;
  --breakpoint-lg: 1210px;
  --breakpoint-xl: 1440px; /* HAS NO PARTICULAR USE IN THIS PROJECT */
}
```

**BE AWARE**: `sm` for tablets, `md` for medium screens and `lg` for wide ones.

If a necessity to replace vendor/bootstrap.min.css file occurs then do not forget to change original breakpoints of the whole document and add new integrity hash to `link` in layout or just delete it at all.

## Data

### All elements
Parsed Json from https://ido-array-io.appspot.com/info

``` json
{
  "foundersWallet": null,
   "tgeCurrentStage": "[data-current-stage]",
   "tgeStageBlockLeft": null,
   "tgeLive": "[data-tge-status]",
   "tgeStartBlock": "[data-start-block]",
   "tgeNextPartInvestor": null,
   "projectWallet": null,
   "name": null,
   "tgeCurrentPartInvestor": null,
   "tgeSettingsPartProject": null,
   "tgeSettingsPartFounders": null,
   "totalSupply": null,
   "balanceEth": "[data-eth-balance]",
   "currentPrice": "[data-eth-actual-price]"
}
```

### Data attributes
Name | Description
--- | ---
`[data-eth-balance]` | Main-info (jumbo and infographic blocks), tge-info (tge-status false state).
`[data-tge-status]` | Tge tags, Tge-info block. It influences inside styling behavior
`[data-token-price]` | Infographic block, 'Token price'
`[data-token-price-change]` | Infographic block, 'since last month(ETH)'
`[data-token-price-change-percent]` | Infographic block, 'since last month(%)'
`[data-tge-scale="{{name}}"]` | tge-info block, scales. Used 2 names: 'total', 'stages'
`[data-tge-scale-start]` | tge-info block, scales. Starting value
`[data-tge-scale-end]` | tge-info block, scales. Ending value
`[data-tge-scale-progress]` | tge-info block, scales. Progress %
`[data-tge-scale-earned]` | tge-info block, scales. Precise value in tooltip
`[data-tge-scale-stage]` | tge-info block, scales. All singled stages in scales with divider
`[data-tge-stages="{{name}}"]` | tge-info block, stages. Parent for all inside stages' data. Available names: 'prev' for previous, 'cur' for current and 'next'
`[data-tge-stages-number]` | tge-info block, stages. `span` with stage's number.
`[data-tge-stages-price]` | tge-info block, stages. `p` tag with stage's price
`[data-tge-stages-start]` | tge-info block, stages. `p` tag with stage's starting block value, **Don't forget** to use parent for defining the scope of binding
`[data-tge-countdown="{{name}}"]` | tge-info block, tge-status false state, timer. `span`s with countdown, `h` for hours, `d` for days
`[data-tge-stages-table="{{value}}"]` | tge-info block, table. Use unique stages num to identify grouped up body tags
`[data-tge-stages-head]` | tge-info block, table. One of the elements of `data-tge-stages-table` pair, contains main-row
`[data-tge-stages-row]` | tge-info block, table. Each row inside the other part of `data-tge-stages-table`
`[data-tge-stages-round]` | tge-info block, table. `span` with stage's number.
`[data-tge-stages-date]` | tge-info block, table. `time` tag.
`[data-tge-stages-day]` | tge-info block, table. `span` tag, date
`[data-tge-stages-time]` | tge-info block, table. `span` tag, precise time
`[data-tge-stages-amount]` | tge-info block, table. `span` tag, table head amount
`[data-tge-stages-start]` | tge-info block, table. `td` tag, table head start, **Don't forget** to use parent for defining the scope of binding
`[data-tge-stages-investor]` | tge-info block, table. `td` tag, table investor
`[data-tge-stages-project]` | tge-info block, table. `td` tag, table project
`[data-tge-stages-founder]` | tge-info block, table. `td` tag, table founder
`[data-tge-stages-sum]` | tge-info block, table. `span` tag, table summary
`[data-project-balance]` | walelts block. `p` tag 'Project balance'
`[data-project-received]` | walelts block. `p` tag 'Project received'
`[data-project-spent]` | walelts block. `p` tag 'Project spent'
`[data-project-event]` | walelts block, table. `tr` tag; use as parent
`[data-project-event-age]` | walelts block, table. `td` tag;
`[data-project-event-transfers]` | walelts block, table. `td` tag;
`[data-project-event-quantity]` | walelts block, table. `td` tag;


### Token generation event

TGE status should be written in `$([data-tge-status])` elements. Has 3 states: `true`, `false`, `undefined` or something else, that doesn't match `true/false`.

To make new structure with tge-status logic use alike markup structure: `.some-class[data-tge-status]>.other-class[data-tge-true]+.other-class[data-tge-false]+.other-class[data-tge-undefined]`

``` scss
.some-class {
  /* any styles */
}

.other-class {
  display: block;

  /* another styles */
}
```

Use wrappers to avoid problems with flex markup;

## JS Specifics

### Tooltips

Been used bootstrap's modified Popper.js; Write templates in the end of the layout file, declare them in terminal.js and provide specific selectors.

``` html
<template id="tooltip-dark">
  <div class="tooltip tooltip--theme--dark" role="tooltip">
    <div class="arrow"></div>
    <div class="tooltip-inner"></div>
  </div>
</template>
```

```js
const config = {
  tooltips: {
    templates: {
      dark: document.getElementById('tooltip-dark'),
    },
    wrapperAttr: '[data-tooltip-trigger]',
    templateConf: {
      offset: -35,
    }
  }
};
```

``` scss
.tooltip--theme--dark {
  &.tooltip {
    & .tooltip-inner {
      /* Container styles */
    }

    & .arrow {
      /* Arrow position */
      &:before {
        /* Arrow styles */
      }
    }
  }
}
```

For The container, in this case, used for determining the direction of appearance / disappearance of all group elements.the best positioning try to use empty elements (`span`'s for xmpl) as tooltip initializers and add to any of their parent element attr `[data-tooltip-trigger]` or whatever you specified in config.

## SmoothScroll
SmoothScroll script collects every `[data-scroll-reveal]` element and run [scrollreveal.js](https://scrollrevealjs.org/) on it.

Also, it parses html `data-*` attributes to configure each element individually.

The next attributes are supported:

Name | Description
--- | ---
origin | direction of the first appearance, scrollreveal config
opacity | scrollreveal config
view-factor | scrollreveal config
reset | scrollreveal config
distance | scrollreveal config
scale | scrollreveal config
duration | scrollreveal config
changeOrigin | boolean, used for determining of elements' origins' switching behavior depending on viewPort position, __default true, use false for elements with not-bottom origin__
groupDelay | number, delay between appearance of next elements in a group sequence
groupName | string, read "Setting up grouped elements"
groupContainer | string, read "Setting up grouped elements"


## Setting up grouped elements
Grouped elements are used for delayed appearance of each next element in a group. To make a group you should use `[data-group-name="GROUP_NAME"]` attribute on each element of the group, replacing *GROUP_NAME* with unique name for the particular group.

All other configuration attributes must be applied to the first element of a group. Attribute `[data-group-container="GROUP_NAME"]` is used for setting up container for named group, otherwise the first element will be used for this role.

The container, in this case, used for determining the direction of appearance / disappearance of all group elements.
