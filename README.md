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
