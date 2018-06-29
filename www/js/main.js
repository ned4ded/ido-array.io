"use strict";$(function(){var e={tooltips:{templates:{regular:document.getElementById("tooltip-regular"),dark:document.getElementById("tooltip-dark"),wide:document.getElementById("tooltip-wide")},wrapperAttr:"[data-tooltip-trigger]",templateConf:{offset:-35,boundary:$("body").get(0),fallbackPlacement:"clockwise"}}},t={tooltips:{templates:{regular:'[data-toggle="tooltip"]:not([data-tooltip-theme])',dark:$('[data-tooltip-theme="dark"]'),wide:$('[data-tooltip-theme="wide"]')},groups:{scaleName:".scale__name",stages:".stages",tge:".tge"}},smoothScroll:"[data-smooth-scroll]"};startRunner(e).tooltips(t.tooltips.templates);$('[data-tooltip-group="block-scale"]').on("show.bs.tooltip",function(e){return $("[data-tooltip-group]").not($(this)).tooltip("hide")}),$("#test").hover(function(){return console.log("hover")}),$(document).ready(function(){return new SmoothScrolling($(t.smoothScroll).get())})}),function(){var a=function(e){$("#logo").animate({opacity:e?0:1},500),$("#header").animate({height:e?"100%":$(".navbar-brand").height()+20},500)};function r(e){return e.preventDefault(),$("#menu-toggler").trigger("click"),$(this).unbind("click",r),$(this).trigger("click")}$("#menu-toggler").click(function(e){if(e.preventDefault(),!(1e3<=$(window).width())){var t=$($(this).data("target"));if(t.length){var n=t.find("a[href]");t.is(":hidden")?(n.click(r),$("#header").toggleClass("header--behavior--mobile-menu"),$("#mobile-menu-wrapper").toggleClass("body--overflow--hidden"),a(!0),t.toggle()):(a(!1),setTimeout(function(){t.toggle(),$("#header").toggleClass("header--behavior--mobile-menu"),$("#header").attr("style",""),$("#logo").attr("style",""),$("#mobile-menu-wrapper").toggleClass("body--overflow--hidden"),n.unbind("click",r)},520))}}})}(),$.getJSON("https://cdn.rawgit.com/highcharts/highcharts/v6.0.4/samples/data/new-intraday.json",function(e){var o=Highcharts.chart("linechart",{title:!1,chart:{zoomType:"x",title:!1,spacingTop:0,spacingBottom:10,animation:!1},credits:{enabled:!1},xAxis:{type:"datetime",min:Date.parse("2011-10-06T08:00"),max:Date.parse("2011-10-14T15:59"),offset:10,align:"center",minRange:36e5,labels:{style:!1}},yAxis:{title:!1,endOnTick:!1,maxPadding:.1,opposite:!0,events:{afterSetExtremes:function(e){return $("#max-value").html(Math.round(100*e.max)/100)}},gridLineColor:"#e6e6e6",gridLineDashStyle:"Solid",gridLineWidth:1,labels:!1,minPadding:.05,startOnTick:!1},legend:{enabled:!1},plotOptions:{area:{marker:{enabled:!1,radius:10},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null,events:{mouseOver:function(e){}}},series:{point:{events:{mouseOver:function(e){var t,n,a=this,r=this.series.stateMarkerGraphic.element;return this.customCrosshair=(t=document.createElementNS("http://www.w3.org/2000/svg","path"),n=["M",[Math.round(a.plotX)-1,Math.round(a.plotY)],"v",o.plotHeight-a.plotY+20].map(function(e){return e instanceof Array?e.join(", "):e}).join(" "),t.setAttributeNS(null,"d",n),t.setAttributeNS(null,"style","opacity:1"),t.setAttributeNS(null,"class","highcharts-custom-crosshair"),t),$(r).before(this.customCrosshair)},mouseOut:function(e){return $(this.customCrosshair).remove()}}},events:{mouseOut:function(e){}}}},tooltip:{positioner:function(e,t,n){var a=o.plotHeight+o.plotTop+3;return{x:n.plotX<e/2?0:n.plotX>o.plotWidth-e/2?o.plotWidth-e+2*o.plotLeft-2:n.plotX-e/2+o.plotLeft,y:a}},shadow:!1,animation:!1,useHTML:!0,backgroundColor:null,borderWidth:0,style:{padding:0},headerFormat:"",formatter:function(){var e=new Date(this.x),t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),r=Math.round(100*this.y)/100;return"<span>"+[a,n,t].join(".")+' <span class="highcharts-tooltip--highlight">'+r+" ETH</span></span>"}},series:[{type:"area",name:"ETH",data:e}]});o.xAxis[0].setExtremes(Date.parse("2011-10-14T14:59"),Date.parse("2011-10-14T15:59")),$("#max-value").html(Math.round(100*o.yAxis[0].max)/100),$("#h-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),o.xAxis[0].setExtremes(Date.parse("2011-10-14T14:59"),Date.parse("2011-10-14T15:59"))}),$("#d-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),o.xAxis[0].setExtremes(Date.parse("2011-10-13T15:59"),Date.parse("2011-10-14T15:59"))}),$("#w-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),o.xAxis[0].setExtremes(Date.parse("2011-10-07T15:59"),Date.parse("2011-10-14T15:59"))}),$("#all-btn").click(function(){$(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),o.xAxis[0].setExtremes(void 0,void 0),o.redraw()});var n,t=animations.find(function(e){return $(e.element).hasClass("main-info__infographic")});t.setAnimationCallback(function(e,t){return"start"===t?(n=!0,function e(){return setTimeout(function(){if(o.reflow(),o.hoverPoint&&$(o.hoverPoint.customCrosshair).remove(),n)return e()},16)}()):void(n=!1)})});var _createClass=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}();function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Animation=function(){function r(e,t,n){var a=this;if(_classCallCheck(this,r),!e)throw new Error("Passed element wasn't found");if(e instanceof Array)return e.map(function(e){return new r(e,t,n)});this.element=e,this.toggle=t,this.duration=n.duartion||1e3,this.endClassName=n.endClassName||"shown",this.processClassName=n.processClassName||"showing",this.binding=function(){return a.animate()},this.callback=function(){},$(this.toggle).click(this.binding)}return _createClass(r,[{key:"isShown",value:function(e){var t,n=["shown",e].filter(function(e){return void 0!==e});return(t=$(this.element)).data.apply(t,_toConsumableArray(n))}},{key:"toggleShown",value:function(){var e=!this.isShown();return this.isShown(e)}},{key:"animate",value:function(){var e=this;return $(this.toggle).unbind("click",this.binding),void 0===$(this.element).data().shown&&this.isShown(!0),this.isShown()?(this.callback("forward","start"),$(this.element).addClass(this.processClassName),setTimeout(function(){return e.callback("forward","end"),e.toggleShown(),$(e.element).removeClass(e.processClassName),$(e.element).addClass(e.endClassName),$(els.toggle).click(e.binding)},this.duration)):(this.callback("backward","start"),$(this.element).addClass(this.processClassName),setTimeout(function(){return e.callback("backward","end"),$(e.element).removeClass(e.endClassName),$(e.element).removeClass(e.processClassName),e.toggleShown(),$(els.toggle).click(e.binding)},this.duration))}},{key:"setAnimationCallback",value:function(e){this.callback=e}}]),r}(),settings={duration:1e3,endClassName:"shown",processClassName:"showing"},els={jumbo:document.getElementById("jumbo"),infographic:document.getElementById("infographic"),bg:document.getElementById("main-info__bg"),logo:document.getElementById("logo"),chart:document.getElementById("linechart"),toggle:document.getElementById("jumbo-toggle")},animations=new Animation([els.bg,els.jumbo,els.infographic,els.toggle,els.logo,els.chart],els.toggle,settings),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function startRunner(e){return{tooltips:function(o){var i=makeTooltips(e.tooltips);return Object.keys(o).reduce(function(e,t){var n,a,r=(n=o[t],a=i[t],(n instanceof Array?n:[n]).map(function(e){return a($(e))}));return _extends({},e,_defineProperty({},t,r))},{})}}}!function(){var t=ScrollReveal({reset:!0,scale:1,duration:750,distance:"125px",viewFactor:.4}),e=$("[data-scroll-reveal]").get();e.forEach(function(e){return t.reveal(e)}),console.log(e)}();_createClass=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var SmoothScrolling=function(){function t(e){_classCallCheck(this,t),this.offsetHeight=0,e&&(this.getAnchor()&&this.jumpOnLoad(),this.setListners(e))}return _createClass(t,[{key:"jumpOnLoad",value:function(){var e=$(document.getElementById(this.getAnchor())).data("noOffset")?0:this.getFixedOffset(),t=this.getAnchorOffset()-e;$(document).ready(function(){return window.scrollTo(window.pageXOffset,t)})}},{key:"getFixedOffset",value:function(){return this.offsetHeight}},{key:"getAnchorOffset",value:function(e){var t=e||document.getElementById(this.getAnchor());return $(t).offset().top}},{key:"getAnchor",value:function(e){if(!e){var t=window.location.hash.slice(1);return t||!1}var n=!!e.hash&&e.hash.slice(1);return!!n&&document.getElementById(n)}},{key:"setListners",value:function(e){var a=this;e.forEach(function(e){var t=$(e),n=a.getListner(e);t.on("click",n)})}},{key:"getListner",value:function(r){var o=this;return function(e){e.preventDefault();var t=o.getAnchor(r);if(t){var n=o.getAnchorOffset(t),a=$(r).data("noOffset")?0:o.getFixedOffset();$("html, body").animate({scrollTop:n-a},500)}}}}]),t}();_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function makeTooltips(e){var n=e.templates,r=e.templateConf,o=e.wrapperAttr,a={template:function(e){return e.content},serialize:function(e){return(new XMLSerializer).serializeToString(e)},call:function(a){return function(e){return $(e).each(function(e){var t=$(this),n=t.parents(o).get(0);return $(n).hover(function(){t.tooltip("toggle")}),t.tooltip(_extends({template:a,container:t},r)),t})}}},i=function(e){return t=n[e],[a.template,a.serialize,a.call].reduce(function(e,t){return t(e)},t);var t};return Object.keys(n).reduce(function(e,t){return _extends({},e,_defineProperty({},t,i(t)))},{})}
//# sourceMappingURL=main.js.map
