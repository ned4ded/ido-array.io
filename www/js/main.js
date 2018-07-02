"use strict";$(function(){var t={tooltips:{templates:{regular:document.getElementById("tooltip-regular"),dark:document.getElementById("tooltip-dark"),wide:document.getElementById("tooltip-wide")},wrapperAttr:"[data-tooltip-trigger]",templateConf:{offset:-35,boundary:$("body").get(0),fallbackPlacement:"clockwise"}}},e={tooltips:{templates:{regular:'[data-toggle="tooltip"]:not([data-tooltip-theme])',dark:$('[data-tooltip-theme="dark"]'),wide:$('[data-tooltip-theme="wide"]')},groups:{scaleName:".scale__name",stages:".stages",tge:".tge"}},smoothScroll:"[data-smooth-scroll]"};startRunner(t).tooltips(e.tooltips.templates);$('[data-tooltip-group="block-scale"]').on("show.bs.tooltip",function(t){return $("[data-tooltip-group]").not($(this)).tooltip("hide")}),$("#test").hover(function(){return console.log("hover")}),$(document).ready(function(){return new SmoothScrolling($(e.smoothScroll).get())})}),function(){var r=function(t){$("#logo").animate({opacity:t?0:1},500),$("#header").animate({height:t?"100%":$(".navbar-brand").height()+20},500)};function a(t){return t.preventDefault(),$("#menu-toggler").trigger("click"),$(this).unbind("click",a),$(this).trigger("click")}$("#menu-toggler").click(function(t){if(t.preventDefault(),!(1e3<=$(window).width())){var e=$($(this).data("target"));if(e.length){var n=e.find("a[href]");e.is(":hidden")?(n.click(a),$("#header").toggleClass("header--behavior--mobile-menu"),$("#mobile-menu-wrapper").toggleClass("body--overflow--hidden"),r(!0),e.toggle()):(r(!1),setTimeout(function(){e.toggle(),$("#header").toggleClass("header--behavior--mobile-menu"),$("#header").attr("style",""),$("#logo").attr("style",""),$("#mobile-menu-wrapper").toggleClass("body--overflow--hidden"),n.unbind("click",a)},520))}}})}(),$.getJSON("https://cdn.rawgit.com/highcharts/highcharts/v6.0.4/samples/data/new-intraday.json",function(t){var i=Highcharts.chart("linechart",{title:!1,chart:{zoomType:"x",title:!1,spacingTop:0,spacingBottom:10,animation:!1},credits:{enabled:!1},xAxis:{type:"datetime",min:Date.parse("2011-10-06T08:00"),max:Date.parse("2011-10-14T15:59"),offset:10,align:"center",minRange:36e5,labels:{style:!1}},yAxis:{title:!1,endOnTick:!1,maxPadding:.1,opposite:!0,events:{afterSetExtremes:function(t){return $("#max-value").html(Math.round(100*t.max)/100)}},gridLineColor:"#e6e6e6",gridLineDashStyle:"Solid",gridLineWidth:1,labels:!1,minPadding:.05,startOnTick:!1},legend:{enabled:!1},plotOptions:{area:{marker:{enabled:!1,radius:10},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null,events:{mouseOver:function(t){}}},series:{point:{events:{mouseOver:function(t){var e,n,r=this,a=this.series.stateMarkerGraphic.element;return this.customCrosshair=(e=document.createElementNS("http://www.w3.org/2000/svg","path"),n=["M",[Math.round(r.plotX)-1,Math.round(r.plotY)],"v",i.plotHeight-r.plotY+20].map(function(t){return t instanceof Array?t.join(", "):t}).join(" "),e.setAttributeNS(null,"d",n),e.setAttributeNS(null,"style","opacity:1"),e.setAttributeNS(null,"class","highcharts-custom-crosshair"),e),$(a).before(this.customCrosshair)},mouseOut:function(t){return $(this.customCrosshair).remove()}}},events:{mouseOut:function(t){}}}},tooltip:{positioner:function(t,e,n){var r=i.plotHeight+i.plotTop+3;return{x:n.plotX<t/2?0:n.plotX>i.plotWidth-t/2?i.plotWidth-t+2*i.plotLeft-2:n.plotX-t/2+i.plotLeft,y:r}},shadow:!1,animation:!1,useHTML:!0,backgroundColor:null,borderWidth:0,style:{padding:0},headerFormat:"",formatter:function(){var t=new Date(this.x),e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),a=Math.round(100*this.y)/100;return"<span>"+[r,n,e].join(".")+' <span class="highcharts-tooltip--highlight">'+a+" ETH</span></span>"}},series:[{type:"area",name:"ETH",data:t}]});i.xAxis[0].setExtremes(Date.parse("2011-10-14T14:59"),Date.parse("2011-10-14T15:59")),$("#max-value").html(Math.round(100*i.yAxis[0].max)/100),$("#h-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),i.xAxis[0].setExtremes(Date.parse("2011-10-14T14:59"),Date.parse("2011-10-14T15:59"))}),$("#d-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),i.xAxis[0].setExtremes(Date.parse("2011-10-13T15:59"),Date.parse("2011-10-14T15:59"))}),$("#w-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),i.xAxis[0].setExtremes(Date.parse("2011-10-07T15:59"),Date.parse("2011-10-14T15:59"))}),$("#all-btn").click(function(){$(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),i.xAxis[0].setExtremes(void 0,void 0),i.redraw()});var n,e=animations.find(function(t){return $(t.element).hasClass("main-info__infographic")});e.setAnimationCallback(function(t,e){return"start"===e?(n=!0,function t(){return setTimeout(function(){if(i.reflow(),i.hoverPoint&&$(i.hoverPoint.customCrosshair).remove(),n)return t()},16)}()):void(n=!1)})});var _createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Animation=function(){function a(t,e,n){var r=this;if(_classCallCheck(this,a),!t)throw new Error("Passed element wasn't found");if(t instanceof Array)return t.map(function(t){return new a(t,e,n)});this.element=t,this.toggle=e,this.duration=n.duartion||1e3,this.endClassName=n.endClassName||"shown",this.processClassName=n.processClassName||"showing",this.binding=function(){return r.animate()},this.callback=function(){},$(this.toggle).click(this.binding)}return _createClass(a,[{key:"isShown",value:function(t){var e,n=["shown",t].filter(function(t){return void 0!==t});return(e=$(this.element)).data.apply(e,_toConsumableArray(n))}},{key:"toggleShown",value:function(){var t=!this.isShown();return this.isShown(t)}},{key:"animate",value:function(){var t=this;return $(this.toggle).unbind("click",this.binding),void 0===$(this.element).data().shown&&this.isShown(!0),this.isShown()?(this.callback("forward","start"),$(this.element).addClass(this.processClassName),setTimeout(function(){return t.callback("forward","end"),t.toggleShown(),$(t.element).removeClass(t.processClassName),$(t.element).addClass(t.endClassName),$(els.toggle).click(t.binding)},this.duration)):(this.callback("backward","start"),$(this.element).addClass(this.processClassName),setTimeout(function(){return t.callback("backward","end"),$(t.element).removeClass(t.endClassName),$(t.element).removeClass(t.processClassName),t.toggleShown(),$(els.toggle).click(t.binding)},this.duration))}},{key:"setAnimationCallback",value:function(t){this.callback=t}}]),a}(),settings={duration:1e3,endClassName:"shown",processClassName:"showing"},els={jumbo:document.getElementById("jumbo"),infographic:document.getElementById("infographic"),bg:document.getElementById("main-info__bg"),logo:document.getElementById("logo"),chart:document.getElementById("linechart"),toggle:document.getElementById("jumbo-toggle")},animations=new Animation([els.bg,els.jumbo,els.infographic,els.toggle,els.logo,els.chart],els.toggle,settings),_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function startRunner(t){return{tooltips:function(i){var o=makeTooltips(t.tooltips);return Object.keys(i).reduce(function(t,e){var n,r,a=(n=i[e],r=o[e],(n instanceof Array?n:[n]).map(function(t){return r($(t))}));return _extends({},t,_defineProperty({},e,a))},{})}}}_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ScrollHandler=function(){function t(){var r=this;_classCallCheck(this,t),this.top=0,this.bottom=window.innerHeight,this.callbacks=[],this.fn=function(e){var t=window.pageYOffset||document.documentElement.scrollTop,n=window.innerHeight+t;r.setTop(t).setBottom(n),0<r.callbacks.length&&r.callbacks.forEach(function(t){return t.bind(r)(e)})},this.setHandler()}return _createClass(t,[{key:"setTop",value:function(t){return this.top=t,this}},{key:"setBottom",value:function(t){return this.bottom=t,this}},{key:"setHandler",value:function(){return window.addEventListener("scroll",this.fn),this}},{key:"rmHanlder",value:function(){return window.removeEventListener("scroll",this.fn),this}},{key:"setCallback",value:function(t){return this.callbacks=[].concat(_toConsumableArray(this.callbacks),[t]),this}},{key:"getMeta",value:function(){return{top:this.top,bottom:this.bottom}}}]),t}(),ScrollRevealElement=function(){function a(t,e,n,r){_classCallCheck(this,a),this.element=e,this.meta=n||{},this.config=r||{},this.sr=t}return _createClass(a,[{key:"reveal",value:function(){return this.sr.reveal(this.element,this.config),this}},{key:"getMeta",value:function(){return this.meta}},{key:"getConfig",value:function(){return this.config}},{key:"getElement",value:function(){return this.element}},{key:"set",value:function(n){var t=Object.keys(n).reduce(function(t,e){return _extends({},t,_defineProperty({},e,n[e]))},this.config);return this.config=t,this}},{key:"bottom",value:function(){if("bottom"!==this.config.origin)return this.set({origin:"bottom"}),this.reveal(),this}},{key:"top",value:function(){if("top"!==this.config.origin)return this.set({origin:"top"}),this.reveal(),this}}]),a}();!function(){var n=ScrollReveal({reset:!0,scale:1,duration:750,distance:"125px",viewFactor:.1}),t=new ScrollHandler,r={selector:"[data-scroll-reveal]",attrs:{origin:"data-origin",changeOrigin:"data-change-origin"},default:{origin:"bottom",changeOrigin:!0},parser:function(r){var a=this;return Object.keys(this.attrs).reduce(function(t,e){var n=$(r).attr(a.attrs[e]);return _extends({},t,_defineProperty({},e,n||a.default[e]))},{})}},e=$(r.selector).get().map(function(t){var e=r.parser(t);return new ScrollRevealElement(n,t,e)});e.forEach(function(t){t.bottom()}),t.setCallback(function(t){this.getMeta().bottom;e.forEach(function(t){t.getConfig().origin;var e=t.getElement().getBoundingClientRect(),n=e.y,r=e.height;Math.round(n+r/2)<=window.innerHeight/2?t.top():t.bottom()})})}();_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var SmoothScrolling=function(){function e(t){_classCallCheck(this,e),this.offsetHeight=0,t&&(this.getAnchor()&&this.jumpOnLoad(),this.setListners(t))}return _createClass(e,[{key:"jumpOnLoad",value:function(){var t=$(document.getElementById(this.getAnchor())).data("noOffset")?0:this.getFixedOffset(),e=this.getAnchorOffset()-t;$(document).ready(function(){return window.scrollTo(window.pageXOffset,e)})}},{key:"getFixedOffset",value:function(){return this.offsetHeight}},{key:"getAnchorOffset",value:function(t){var e=t||document.getElementById(this.getAnchor());return $(e).offset().top}},{key:"getAnchor",value:function(t){if(!t){var e=window.location.hash.slice(1);return e||!1}var n=!!t.hash&&t.hash.slice(1);return!!n&&document.getElementById(n)}},{key:"setListners",value:function(t){var r=this;t.forEach(function(t){var e=$(t),n=r.getListner(t);e.on("click",n)})}},{key:"getListner",value:function(a){var i=this;return function(t){t.preventDefault();var e=i.getAnchor(a);if(e){var n=i.getAnchorOffset(e),r=$(a).data("noOffset")?0:i.getFixedOffset();$("html, body").animate({scrollTop:n-r},500)}}}}]),e}();_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function makeTooltips(t){var n=t.templates,a=t.templateConf,i=t.wrapperAttr,r={template:function(t){return t.content},serialize:function(t){return(new XMLSerializer).serializeToString(t)},call:function(r){return function(t){return $(t).each(function(t){var e=$(this),n=e.parents(i).get(0);return $(n).hover(function(){e.tooltip("toggle")}),e.tooltip(_extends({template:r,container:e},a)),e})}}},o=function(t){return e=n[t],[r.template,r.serialize,r.call].reduce(function(t,e){return e(t)},e);var e};return Object.keys(n).reduce(function(t,e){return _extends({},t,_defineProperty({},e,o(e)))},{})}
//# sourceMappingURL=main.js.map
