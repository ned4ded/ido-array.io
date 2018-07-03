"use strict";$(function(){var t={tooltips:{templates:{regular:document.getElementById("tooltip-regular"),dark:document.getElementById("tooltip-dark"),wide:document.getElementById("tooltip-wide")},wrapperAttr:"[data-tooltip-trigger]",templateConf:{offset:-35,boundary:$("body").get(0),fallbackPlacement:"clockwise"}}},e={tooltips:{templates:{regular:'[data-toggle="tooltip"]:not([data-tooltip-theme])',dark:$('[data-tooltip-theme="dark"]'),wide:$('[data-tooltip-theme="wide"]')},groups:{scaleName:".scale__name",stages:".stages",tge:".tge"}},smoothScroll:"[data-smooth-scroll]"};startRunner(t).tooltips(e.tooltips.templates);$('[data-tooltip-group="block-scale"]').on("show.bs.tooltip",function(t){return $("[data-tooltip-group]").not($(this)).tooltip("hide")}),$("#test").hover(function(){return console.log("hover")}),$(document).ready(function(){return new SmoothScrolling($(e.smoothScroll).get())})}),function(){var a=function(t){$("#logo").animate({opacity:t?0:1},500),$("#header").animate({height:t?"100%":$(".navbar-brand").height()+20},500)};function r(t){return t.preventDefault(),$("#menu-toggler").trigger("click"),$(this).unbind("click",r),$(this).trigger("click")}$("#menu-toggler").click(function(t){if(t.preventDefault(),!(1e3<=$(window).width())){var e=$($(this).data("target"));if(e.length){var n=e.find("a[href]");e.is(":hidden")?(n.click(r),$("#header").toggleClass("header--behavior--mobile-menu"),$("#mobile-menu-wrapper").toggleClass("body--overflow--hidden"),a(!0),e.toggle()):(a(!1),setTimeout(function(){e.toggle(),$("#header").toggleClass("header--behavior--mobile-menu"),$("#header").attr("style",""),$("#logo").attr("style",""),$("#mobile-menu-wrapper").toggleClass("body--overflow--hidden"),n.unbind("click",r)},520))}}})}(),$.getJSON("https://cdn.rawgit.com/highcharts/highcharts/v6.0.4/samples/data/new-intraday.json",function(t){var o=Highcharts.chart("linechart",{title:!1,chart:{zoomType:"x",title:!1,spacingTop:0,spacingBottom:10,animation:!1},credits:{enabled:!1},xAxis:{type:"datetime",min:Date.parse("2011-10-06T08:00"),max:Date.parse("2011-10-14T15:59"),offset:10,align:"center",minRange:36e5,labels:{style:!1}},yAxis:{title:!1,endOnTick:!1,maxPadding:.1,opposite:!0,events:{afterSetExtremes:function(t){return $("#max-value").html(Math.round(100*t.max)/100)}},gridLineColor:"#e6e6e6",gridLineDashStyle:"Solid",gridLineWidth:1,labels:!1,minPadding:.05,startOnTick:!1},legend:{enabled:!1},plotOptions:{area:{marker:{enabled:!1,radius:10},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null,events:{mouseOver:function(t){}}},series:{point:{events:{mouseOver:function(t){var e,n,a=this,r=this.series.stateMarkerGraphic.element;return this.customCrosshair=(e=document.createElementNS("http://www.w3.org/2000/svg","path"),n=["M",[Math.round(a.plotX)-1,Math.round(a.plotY)],"v",o.plotHeight-a.plotY+20].map(function(t){return t instanceof Array?t.join(", "):t}).join(" "),e.setAttributeNS(null,"d",n),e.setAttributeNS(null,"style","opacity:1"),e.setAttributeNS(null,"class","highcharts-custom-crosshair"),e),$(r).before(this.customCrosshair)},mouseOut:function(t){return $(this.customCrosshair).remove()}}},events:{mouseOut:function(t){}}}},tooltip:{positioner:function(t,e,n){var a=o.plotHeight+o.plotTop+3;return{x:n.plotX<t/2?0:n.plotX>o.plotWidth-t/2?o.plotWidth-t+2*o.plotLeft-2:n.plotX-t/2+o.plotLeft,y:a}},shadow:!1,animation:!1,useHTML:!0,backgroundColor:null,borderWidth:0,style:{padding:0},headerFormat:"",formatter:function(){var t=new Date(this.x),e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),r=Math.round(100*this.y)/100;return"<span>"+[a,n,e].join(".")+' <span class="highcharts-tooltip--highlight">'+r+" ETH</span></span>"}},series:[{type:"area",name:"ETH",data:t}]});o.xAxis[0].setExtremes(Date.parse("2011-10-14T14:59"),Date.parse("2011-10-14T15:59")),$("#max-value").html(Math.round(100*o.yAxis[0].max)/100),$("#h-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),o.xAxis[0].setExtremes(Date.parse("2011-10-14T14:59"),Date.parse("2011-10-14T15:59"))}),$("#d-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),o.xAxis[0].setExtremes(Date.parse("2011-10-13T15:59"),Date.parse("2011-10-14T15:59"))}),$("#w-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),o.xAxis[0].setExtremes(Date.parse("2011-10-07T15:59"),Date.parse("2011-10-14T15:59"))}),$("#all-btn").click(function(){$(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),o.xAxis[0].setExtremes(void 0,void 0),o.redraw()});var n,e=animations.find(function(t){return $(t.element).hasClass("main-info__infographic")});e.setAnimationCallback(function(t,e){return"start"===e?(n=!0,function t(){return setTimeout(function(){if(o.reflow(),o.hoverPoint&&$(o.hoverPoint.customCrosshair).remove(),n)return t()},16)}()):void(n=!1)})});var _createClass=function(){function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}}();function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Animation=function(){function r(t,e,n){var a=this;if(_classCallCheck(this,r),!t)throw new Error("Passed element wasn't found");if(t instanceof Array)return t.map(function(t){return new r(t,e,n)});this.element=t,this.toggle=e,this.duration=n.duartion||1e3,this.endClassName=n.endClassName||"shown",this.processClassName=n.processClassName||"showing",this.binding=function(){return a.animate()},this.callback=function(){},$(this.toggle).click(this.binding)}return _createClass(r,[{key:"isShown",value:function(t){var e,n=["shown",t].filter(function(t){return void 0!==t});return(e=$(this.element)).data.apply(e,_toConsumableArray(n))}},{key:"toggleShown",value:function(){var t=!this.isShown();return this.isShown(t)}},{key:"animate",value:function(){var t=this;return $(this.toggle).unbind("click",this.binding),void 0===$(this.element).data().shown&&this.isShown(!0),this.isShown()?(this.callback("forward","start"),$(this.element).addClass(this.processClassName),setTimeout(function(){return t.callback("forward","end"),t.toggleShown(),$(t.element).removeClass(t.processClassName),$(t.element).addClass(t.endClassName),$(els.toggle).click(t.binding)},this.duration)):(this.callback("backward","start"),$(this.element).addClass(this.processClassName),setTimeout(function(){return t.callback("backward","end"),$(t.element).removeClass(t.endClassName),$(t.element).removeClass(t.processClassName),t.toggleShown(),$(els.toggle).click(t.binding)},this.duration))}},{key:"setAnimationCallback",value:function(t){this.callback=t}}]),r}(),settings={duration:1e3,endClassName:"shown",processClassName:"showing"},els={jumbo:document.getElementById("jumbo"),infographic:document.getElementById("infographic"),bg:document.getElementById("main-info__bg"),logo:document.getElementById("logo"),chart:document.getElementById("linechart"),toggle:document.getElementById("jumbo-toggle")},animations=new Animation([els.bg,els.jumbo,els.infographic,els.toggle,els.logo,els.chart],els.toggle,settings),_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function startRunner(t){return{tooltips:function(o){var i=makeTooltips(t.tooltips);return Object.keys(o).reduce(function(t,e){var n,a,r=(n=o[e],a=i[e],(n instanceof Array?n:[n]).map(function(t){return a($(t))}));return _extends({},t,_defineProperty({},e,r))},{})}}}_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},_createClass=function(){function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}}();function _toArray(t){return Array.isArray(t)?t:Array.from(t)}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ScrollHandler=function(){function t(){var a=this;_classCallCheck(this,t),this.top=0,this.bottom=window.innerHeight,this.callbacks=[],this.fn=function(e){var t=window.pageYOffset||document.documentElement.scrollTop,n=window.innerHeight+t;a.setTop(t).setBottom(n),0<a.callbacks.length&&a.callbacks.forEach(function(t){return t.bind(a)(e)})},this.setHandler()}return _createClass(t,[{key:"setTop",value:function(t){return this.top=t,this}},{key:"setBottom",value:function(t){return this.bottom=t,this}},{key:"setHandler",value:function(){return window.addEventListener("scroll",this.fn),this}},{key:"rmHanlder",value:function(){return window.removeEventListener("scroll",this.fn),this}},{key:"setCallback",value:function(t){return this.callbacks=[].concat(_toConsumableArray(this.callbacks),[t]),this}},{key:"getMeta",value:function(){return{top:this.top,bottom:this.bottom}}}]),t}(),ScrollRevealElement=function(){function o(t,e,n,a,r){_classCallCheck(this,o),this.element=e,this.meta=n||{},this.config=a||{},this.sr=t,this.container=r}return _createClass(o,[{key:"reveal",value:function(){return this.sr.reveal(this.element,this.config,this.meta.groupDelay||null),this}},{key:"getMeta",value:function(){return this.meta}},{key:"getConfig",value:function(){return this.config}},{key:"getElement",value:function(){return this.element}},{key:"getContainer",value:function(){return this.container}},{key:"set",value:function(n){var t=Object.keys(n).reduce(function(t,e){return _extends({},t,_defineProperty({},e,n[e]))},this.config);return this.config=t,this}},{key:"bottom",value:function(){if("bottom"!==this.config.origin)return this.set({origin:"bottom"}),this.reveal(),this}},{key:"top",value:function(){if("top"!==this.config.origin)return this.set({origin:"top"}),this.reveal(),this}}]),o}();!function(){var i=ScrollReveal({}),t=new ScrollHandler,s={selector:"[data-scroll-reveal]",attrs:{origin:{name:"data-origin",data:"origin",scope:"config"},opacity:{name:"data-opacity",data:"opacity",scope:"config"},viewFactor:{name:"data-view-factor",data:"viewFactor",scope:"config"},reset:{name:"data-reset",data:"reset",scope:"config"},distance:{name:"data-distance",data:"distance",scope:"config"},scale:{name:"data-scale",data:"scale",scope:"config"},duration:{name:"data-duration",data:"duration",scope:"config"},changeOrigin:{name:"data-change-origin",data:"changeOrigin",scope:"meta"},groupDelay:{name:"data-group-delay",data:"groupDelay",scope:"meta"},groupName:{name:"data-group-name",data:"groupName",scope:"meta"},groupContainer:{name:"data-group-container",data:"groupContainer"}},default:{origin:"bottom",viewFactor:.1,opacity:0,changeOrigin:!0,reset:!0,distance:"125px",scale:1,duration:750},getNames:function(t){return Object.keys(this.attrs).filter(t||function(t){return t})},getMetaNames:function(){var e=this;return this.getNames(function(t){return"meta"===e.attrs[t].scope})},getConfigNames:function(){var e=this;return this.getNames(function(t){return"config"===e.attrs[t].scope})},parser:function(t){var a=this,e=this.getMetaNames(),n=this.getConfigNames(),r=t instanceof Array?t[0]:t,o=function(t){return t.reduce(function(t,e){var n=$(r).data(a.attrs[e].data);return _extends({},t,_defineProperty({},e,void 0!==n?n:a.default[e]))},{})};return{meta:o(e),config:o(n)}},parseArrays:function(t,s){return function t(e,n,a){if(0===e.length)return{with:n,without:a};var r=_toArray(e),o=r[0],i=r.slice(1);return s(o)?t(i,[].concat(_toConsumableArray(n),[o]),a):t(i,n,[].concat(_toConsumableArray(a),[o]))}(t,[],[])},breakIntoGroups:function(t){var u=this;return function t(e,n){if(0===n.length)return e;var a=_toArray(n),r=a[0],o=a.slice(1),i=$(r).data(u.attrs.groupName.data);if(i){var s=u.parseArrays(o,function(t){return $(t).data(u.attrs.groupName.data)===i}),l=s.with,c=s.without;return t([].concat(_toConsumableArray(e),[[r].concat(_toConsumableArray(l))]),c)}return t([].concat(_toConsumableArray(e),[r]),o)}([],t)}},e=s.breakIntoGroups($(s.selector).get()).map(function(t){var e=s.parser(t),n=e.meta,a=e.config,r="["+s.attrs.groupContainer.name+'="'+n.groupName+'"]',o=n.groupName?$(r).get(0):t;return new ScrollRevealElement(i,t,n,a,o)});e.forEach(function(t){t.reveal()}),t.setCallback(function(t){this.getMeta().bottom;e.forEach(function(t){if(t.getMeta().changeOrigin){t.getConfig().origin;var e=t.getContainer().getBoundingClientRect(),n=e.y,a=e.height;Math.round(n+a/2)<=window.innerHeight/2?t.top():t.bottom()}})})}();_createClass=function(){function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var SmoothScrolling=function(){function e(t){_classCallCheck(this,e),this.offsetHeight=0,t&&(this.getAnchor()&&this.jumpOnLoad(),this.setListners(t))}return _createClass(e,[{key:"jumpOnLoad",value:function(){var t=$(document.getElementById(this.getAnchor())).data("noOffset")?0:this.getFixedOffset(),e=this.getAnchorOffset()-t;$(document).ready(function(){return window.scrollTo(window.pageXOffset,e)})}},{key:"getFixedOffset",value:function(){return this.offsetHeight}},{key:"getAnchorOffset",value:function(t){var e=t||document.getElementById(this.getAnchor());return $(e).offset().top}},{key:"getAnchor",value:function(t){if(!t){var e=window.location.hash.slice(1);return e||!1}var n=!!t.hash&&t.hash.slice(1);return!!n&&document.getElementById(n)}},{key:"setListners",value:function(t){var a=this;t.forEach(function(t){var e=$(t),n=a.getListner(t);e.on("click",n)})}},{key:"getListner",value:function(r){var o=this;return function(t){t.preventDefault();var e=o.getAnchor(r);if(e){var n=o.getAnchorOffset(e),a=$(r).data("noOffset")?0:o.getFixedOffset();$("html, body").animate({scrollTop:n-a},500)}}}}]),e}();_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function makeTooltips(t){var n=t.templates,r=t.templateConf,o=t.wrapperAttr,a={template:function(t){return t.content},serialize:function(t){return(new XMLSerializer).serializeToString(t)},call:function(a){return function(t){return $(t).each(function(t){var e=$(this),n=e.parents(o).get(0);return $(n).hover(function(){e.tooltip("toggle")}),e.tooltip(_extends({template:a,container:e},r)),e})}}},i=function(t){return e=n[t],[a.template,a.serialize,a.call].reduce(function(t,e){return e(t)},e);var e};return Object.keys(n).reduce(function(t,e){return _extends({},t,_defineProperty({},e,i(e)))},{})}
//# sourceMappingURL=main.js.map
