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
