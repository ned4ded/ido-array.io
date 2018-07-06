"use strict";function headerMobile(){var r=function(t){$("#logo").animate({opacity:t?0:1},500),$("#header").animate({height:t?"100%":$(".navbar-brand").height()+20},500)};function a(t){return t.preventDefault(),$("#menu-toggler").trigger("click"),$(this).unbind("click",a),$(this).trigger("click")}$("#menu-toggler").click(function(t){if(t.preventDefault(),!(1e3<=$(window).width())){var e=$($(this).data("target"));if(e.length){var n=e.find("a[href]");e.is(":hidden")?(n.click(a),$("#header").toggleClass("header--behavior--mobile-menu"),$("#mobile-menu-wrapper").toggleClass("body--overflow--hidden"),r(!0),e.toggle()):(r(!1),setTimeout(function(){e.toggle(),$("#header").toggleClass("header--behavior--mobile-menu"),$("#header").attr("style",""),$("#logo").attr("style",""),$("#mobile-menu-wrapper").toggleClass("body--overflow--hidden"),n.unbind("click",a)},520))}}})}function runHeaderScroll(t){var n=$("#header"),r="header--behavior--sticky";function e(t){var e=this.getMeta().top;0<e&&!n.hasClass(r)?n.addClass(r):0===e&&n.removeClass(r)}e.bind(t)(null),t.setCallback(e)}function runHighcharts(r){$.getJSON("https://cdn.rawgit.com/highcharts/highcharts/v6.0.4/samples/data/new-intraday.json",function(t){var i=Highcharts.chart("linechart",{title:!1,chart:{zoomType:"x",title:!1,spacingTop:0,spacingBottom:10,animation:!1},credits:{enabled:!1},xAxis:{type:"datetime",min:Date.parse("2011-10-06T08:00"),max:Date.parse("2011-10-14T15:59"),offset:10,align:"center",minRange:36e5,labels:{style:!1}},yAxis:{title:!1,endOnTick:!1,maxPadding:.1,opposite:!0,events:{afterSetExtremes:function(t){return $("#max-value").html(Math.round(100*t.max)/100)}},gridLineColor:"#e6e6e6",gridLineDashStyle:"Solid",gridLineWidth:1,labels:!1,minPadding:.05,startOnTick:!1},legend:{enabled:!1},plotOptions:{area:{marker:{enabled:!1,radius:10},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null,events:{mouseOver:function(t){}}},series:{point:{events:{mouseOver:function(t){var e,n,r=this,a=this.series.stateMarkerGraphic.element;return this.customCrosshair=(e=document.createElementNS("http://www.w3.org/2000/svg","path"),n=["M",[Math.round(r.plotX)-1,Math.round(r.plotY)],"v",i.plotHeight-r.plotY+20].map(function(t){return t instanceof Array?t.join(", "):t}).join(" "),e.setAttributeNS(null,"d",n),e.setAttributeNS(null,"style","opacity:1"),e.setAttributeNS(null,"class","highcharts-custom-crosshair"),e),$(a).before(this.customCrosshair)},mouseOut:function(t){return $(this.customCrosshair).remove()}}},events:{mouseOut:function(t){}}}},tooltip:{positioner:function(t,e,n){var r=i.plotHeight+i.plotTop+3;return{x:n.plotX<t/2?0:n.plotX>i.plotWidth-t/2?i.plotWidth-t+2*i.plotLeft-2:n.plotX-t/2+i.plotLeft,y:r}},shadow:!1,animation:!1,useHTML:!0,backgroundColor:null,borderWidth:0,style:{padding:0},headerFormat:"",formatter:function(){var t=new Date(this.x),e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),a=Math.round(100*this.y)/100;return"<span>"+[r,n,e].join(".")+' <span class="highcharts-tooltip--highlight">'+a+" ETH</span></span>"}},series:[{type:"area",name:"ETH",data:t}]});i.xAxis[0].setExtremes(Date.parse("2011-10-14T14:59"),Date.parse("2011-10-14T15:59")),$("#max-value").html(Math.round(100*i.yAxis[0].max)/100),$("#h-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),i.xAxis[0].setExtremes(Date.parse("2011-10-14T14:59"),Date.parse("2011-10-14T15:59"))}),$("#d-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),i.xAxis[0].setExtremes(Date.parse("2011-10-13T15:59"),Date.parse("2011-10-14T15:59"))}),$("#w-btn").click(function(){return $(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),i.xAxis[0].setExtremes(Date.parse("2011-10-07T15:59"),Date.parse("2011-10-14T15:59"))}),$("#all-btn").click(function(){$(".diagramm__timescale-btn").removeClass("active"),$(this).addClass("active"),i.xAxis[0].setExtremes(void 0,void 0),i.redraw()});var n,e=r.find(function(t){return $(t.element).hasClass("main-info__infographic")});e.setAnimationCallback(function(t,e){return"start"===e?(n=!0,function t(){return setTimeout(function(){if(i.reflow(),i.hoverPoint&&$(i.hoverPoint.customCrosshair).remove(),n)return t()},16)}()):void(n=!1)})})}function iconAnimations(){var i={weights:weightsAnimationConfig};$("[data-animation-object]").get().map(function(t){var e=$(t).data("animationObject"),n=i[e],r=$(t).find("[data-animation-element]").get().reduce(function(t,e){return t.set($(e).data("animationElement"),e)},new Map),a=n.map(function(t){var e=new SnapAnimationSet(r.get(t.element),t.animations);return new AnimationSequence(e,t.sequence)});return new AnimationObject(t,a)}).forEach(function(e){var n=e.root,r=!1,a=function t(){$(n).off("mouseenter",t),$(n).mouseleave(i),r=!0,function t(){r&&(e.run(),e.onEnd(t))}()},i=function t(){$(n).off("mouseleave",t),r=!1,$(n).mouseenter(a)};$(n).mouseenter(a)})}$(function(){var t={tooltips:{templates:{regular:document.getElementById("tooltip-regular"),dark:document.getElementById("tooltip-dark"),wide:document.getElementById("tooltip-wide")},wrapperAttr:"[data-tooltip-trigger]",templateConf:{offset:-35,boundary:$("body").get(0),fallbackPlacement:"clockwise"}}},e={tooltips:{templates:{regular:'[data-toggle="tooltip"]:not([data-tooltip-theme])',dark:$('[data-tooltip-theme="dark"]'),wide:$('[data-tooltip-theme="wide"]')},groups:{scaleName:".scale__name",stages:".stages",tge:".tge"}},smoothScroll:"[data-smooth-scroll]"};startRunner(t).tooltips(e.tooltips.templates);$('[data-tooltip-group="block-scale"]').on("show.bs.tooltip",function(t){return $("[data-tooltip-group]").not($(this)).tooltip("hide")}),$(document).ready(function(){new SmoothScrolling($(e.smoothScroll).get());var t=new ScrollHandler;headerMobile(),runHighcharts(mainInfoAnimation()),moreInfo(),iconAnimations(),1e3<=window.innerWidth&&runHeaderScroll(t)})});var _createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mainInfoAnimation(){var t=function(){function a(t,e,n){var r=this;if(_classCallCheck(this,a),!t)throw new Error("Passed element wasn't found");if(t instanceof Array)return t.map(function(t){return new a(t,e,n)});this.element=t,this.toggle=e,this.duration=n.duartion||1e3,this.endClassName=n.endClassName||"shown",this.processClassName=n.processClassName||"showing",this.binding=function(){return r.animate()},this.callback=function(){},$(this.toggle).click(this.binding)}return _createClass(a,[{key:"isShown",value:function(t){var e,n=["shown",t].filter(function(t){return void 0!==t});return(e=$(this.element)).data.apply(e,_toConsumableArray(n))}},{key:"toggleShown",value:function(){var t=!this.isShown();return this.isShown(t)}},{key:"animate",value:function(){var t=this;return $(this.toggle).unbind("click",this.binding),void 0===$(this.element).data().shown&&this.isShown(!0),this.isShown()?(this.callback("forward","start"),$(this.element).addClass(this.processClassName),setTimeout(function(){return t.callback("forward","end"),t.toggleShown(),$(t.element).removeClass(t.processClassName),$(t.element).addClass(t.endClassName),$(e.toggle).click(t.binding)},this.duration)):(this.callback("backward","start"),$(this.element).addClass(this.processClassName),setTimeout(function(){return t.callback("backward","end"),$(t.element).removeClass(t.endClassName),$(t.element).removeClass(t.processClassName),t.toggleShown(),$(e.toggle).click(t.binding)},this.duration))}},{key:"setAnimationCallback",value:function(t){this.callback=t}}]),a}(),e={jumbo:document.getElementById("jumbo"),infographic:document.getElementById("infographic"),bg:document.getElementById("main-info__bg"),logo:document.getElementById("logo"),chart:document.getElementById("linechart"),toggle:document.getElementById("jumbo-toggle")};return new t([e.bg,e.jumbo,e.infographic,e.toggle,e.logo,e.chart],e.toggle,{duration:1e3,endClassName:"shown",processClassName:"showing"})}_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var MoreInfoGroup=function(){function r(t,e){var n=this;_classCallCheck(this,r),this.btn=t,this.elements=e,this.fn=function(){n.elements.forEach(function(t){return $(t).toggle()}),$(n.btn).toggleClass("btn-more--active")},this.hide()}return _createClass(r,[{key:"hide",value:function(){return this.elements.forEach(function(t){return $(t).hide()}),this}},{key:"run",value:function(){return $(this.btn).click(this.fn),this}}]),r}();function moreInfo(){var a={attr:"data-more-info-btn",data:"moreInfoBtn"},i={attr:"data-more-info",data:"moreInfo"};$("["+a.attr+"]").get().map(function(t){var e=$(t).data(a.data),n="["+i.attr+'="'+e+'"]',r=$(n).get();return new MoreInfoGroup(t,r)}).forEach(function(t){return t.run()})}var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function startRunner(t){return{tooltips:function(i){var o=makeTooltips(t.tooltips);return Object.keys(i).reduce(function(t,e){var n,r,a=(n=i[e],r=o[e],(n instanceof Array?n:[n]).map(function(t){return r($(t))}));return _extends({},t,_defineProperty({},e,a))},{})}}}_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _toArray(t){return Array.isArray(t)?t:Array.from(t)}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ScrollHandler=function(){function t(){var r=this;_classCallCheck(this,t),this.top=window.pageYOffset||document.documentElement.scrollTop,this.bottom=window.innerHeight+this.top,this.callbacks=[],this.fn=function(e){var t=window.pageYOffset||document.documentElement.scrollTop,n=window.innerHeight+t;r.setTop(t).setBottom(n),0<r.callbacks.length&&r.callbacks.forEach(function(t){return t.bind(r)(e)})},this.setHandler()}return _createClass(t,[{key:"setTop",value:function(t){return this.top=t,this}},{key:"setBottom",value:function(t){return this.bottom=t,this}},{key:"setHandler",value:function(){return window.addEventListener("scroll",this.fn),this}},{key:"rmHanlder",value:function(){return window.removeEventListener("scroll",this.fn),this}},{key:"setCallback",value:function(t){return this.callbacks=[].concat(_toConsumableArray(this.callbacks),[t]),this}},{key:"getMeta",value:function(){return{top:this.top,bottom:this.bottom}}}]),t}(),ScrollRevealElement=function(){function i(t,e,n,r,a){_classCallCheck(this,i),this.element=e,this.meta=n||{},this.config=r||{},this.sr=t,this.container=a}return _createClass(i,[{key:"reveal",value:function(){return this.sr.reveal(this.element,this.config,this.meta.groupDelay||null),this}},{key:"getMeta",value:function(){return this.meta}},{key:"getConfig",value:function(){return this.config}},{key:"getElement",value:function(){return this.element}},{key:"getContainer",value:function(){return this.container}},{key:"set",value:function(n){var t=Object.keys(n).reduce(function(t,e){return _extends({},t,_defineProperty({},e,n[e]))},this.config);return this.config=t,this}},{key:"bottom",value:function(){if("bottom"!==this.config.origin)return this.set({origin:"bottom"}),this.reveal(),this}},{key:"top",value:function(){if("top"!==this.config.origin)return this.set({origin:"top"}),this.reveal(),this}}]),i}();function runScrollReveal(t){var o=ScrollReveal({mobile:!1,viewOffset:{top:97}}),s={selector:"[data-scroll-reveal]",attrs:{origin:{name:"data-origin",data:"origin",scope:"config"},opacity:{name:"data-opacity",data:"opacity",scope:"config"},viewFactor:{name:"data-view-factor",data:"viewFactor",scope:"config"},reset:{name:"data-reset",data:"reset",scope:"config"},distance:{name:"data-distance",data:"distance",scope:"config"},scale:{name:"data-scale",data:"scale",scope:"config"},duration:{name:"data-duration",data:"duration",scope:"config"},changeOrigin:{name:"data-change-origin",data:"changeOrigin",scope:"meta"},groupDelay:{name:"data-group-delay",data:"groupDelay",scope:"meta"},groupName:{name:"data-group-name",data:"groupName",scope:"meta"},groupContainer:{name:"data-group-container",data:"groupContainer"}},default:{origin:"bottom",viewFactor:.1,opacity:0,changeOrigin:!0,reset:!0,distance:"125px",scale:1,duration:750},getNames:function(t){return Object.keys(this.attrs).filter(t||function(t){return t})},getMetaNames:function(){var e=this;return this.getNames(function(t){return"meta"===e.attrs[t].scope})},getConfigNames:function(){var e=this;return this.getNames(function(t){return"config"===e.attrs[t].scope})},parser:function(t){var r=this,e=this.getMetaNames(),n=this.getConfigNames(),a=t instanceof Array?t[0]:t,i=function(t){return t.reduce(function(t,e){var n=$(a).data(r.attrs[e].data);return _extends({},t,_defineProperty({},e,void 0!==n?n:r.default[e]))},{})};return{meta:i(e),config:i(n)}},parseArrays:function(t,s){return function t(e,n,r){if(0===e.length)return{with:n,without:r};var a=_toArray(e),i=a[0],o=a.slice(1);return s(i)?t(o,[].concat(_toConsumableArray(n),[i]),r):t(o,n,[].concat(_toConsumableArray(r),[i]))}(t,[],[])},breakIntoGroups:function(t){var l=this;return function t(e,n){if(0===n.length)return e;var r=_toArray(n),a=r[0],i=r.slice(1),o=$(a).data(l.attrs.groupName.data);if(o){var s=l.parseArrays(i,function(t){return $(t).data(l.attrs.groupName.data)===o}),u=s.with,c=s.without;return t([].concat(_toConsumableArray(e),[[a].concat(_toConsumableArray(u))]),c)}return t([].concat(_toConsumableArray(e),[a]),i)}([],t)}},e=s.breakIntoGroups($(s.selector).get()).map(function(t){var e=s.parser(t),n=e.meta,r=e.config,a="["+s.attrs.groupContainer.name+'="'+n.groupName+'"]',i=n.groupName?$(a).get(0):t;return new ScrollRevealElement(o,t,n,r,i)});e.forEach(function(t){t.reveal()}),t.setCallback(function(t){this.getMeta().bottom;e.forEach(function(t){if(t.getMeta().changeOrigin){t.getConfig().origin;var e=t.getContainer().getBoundingClientRect(),n=e.y,r=e.height;Math.round(n+r/2)<=window.innerHeight/2?t.top():t.bottom()}})})}_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var SmoothScrolling=function(){function e(t){_classCallCheck(this,e),this.offsetHeight=0,t&&(this.getAnchor()&&this.jumpOnLoad(),this.setListners(t))}return _createClass(e,[{key:"jumpOnLoad",value:function(){var t=$(document.getElementById(this.getAnchor())).data("noOffset")?0:this.getFixedOffset(),e=this.getAnchorOffset()-t;$(document).ready(function(){return window.scrollTo(window.pageXOffset,e)})}},{key:"getFixedOffset",value:function(){return this.offsetHeight}},{key:"getAnchorOffset",value:function(t){var e=t||document.getElementById(this.getAnchor());return $(e).offset().top}},{key:"getAnchor",value:function(t){if(!t){var e=window.location.hash.slice(1);return e||!1}var n=!!t.hash&&t.hash.slice(1);return!!n&&document.getElementById(n)}},{key:"setListners",value:function(t){var r=this;t.forEach(function(t){var e=$(t),n=r.getListner(t);e.on("click",n)})}},{key:"getListner",value:function(a){var i=this;return function(t){t.preventDefault();var e=i.getAnchor(a);if(e){var n=i.getAnchorOffset(e),r=$(a).data("noOffset")?0:i.getFixedOffset();$("html, body").animate({scrollTop:n-r},500)}}}}]),e}();_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function makeTooltips(t){var n=t.templates,a=t.templateConf,i=t.wrapperAttr,r={template:function(t){return t.content},serialize:function(t){return(new XMLSerializer).serializeToString(t)},call:function(r){return function(t){return $(t).each(function(t){var e=$(this),n=e.parents(i).get(0);return $(n).hover(function(){e.tooltip("toggle")}),e.tooltip(_extends({template:r,container:e},a)),e})}}},o=function(t){return e=n[t],[r.template,r.serialize,r.call].reduce(function(t,e){return e(t)},e);var e};return Object.keys(n).reduce(function(t,e){return _extends({},t,_defineProperty({},e,o(e)))},{})}_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var AnimationObject=function(){function n(t,e){_classCallCheck(this,n),this.root=t,this.sequences=e.map(function(t){return{seq:t,state:!1}}),this.sequences.forEach(function(t){var e=t.seq;e.onStart(function(){t.state=!0}),e.onEnd(function(){t.state=!1})})}return _createClass(n,[{key:"run",value:function(){return!this.isAnimating()&&(this.sequences.forEach(function(t){return t.seq.run()}),this)}},{key:"isAnimating",value:function(){return!!this.sequences.find(function(t){return t.state})}},{key:"onEnd",value:function(t){var e,n,r=(e=this.sequences.length,n=0,function(){++n===e&&t()});return this.sequences.forEach(function(t){t.seq.onEnd(r)}),this}}]),n}();_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var AnimationSequence=function(){function n(t,e){_classCallCheck(this,n),this.set=t,this.sequence=e,this.start=new EventEmitter}return _createClass(n,[{key:"run",value:function(){return!this.isAnimating()&&(this.start.emit(this),this.sequence(this.set),this)}},{key:"onStart",value:function(t){return this.start.subscribe(t),this}},{key:"onEnd",value:function(t){return this.set.onDisengage(t),this}},{key:"isAnimating",value:function(){return this.set.isAnimating()}}]),n}();_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _toArray(t){return Array.isArray(t)?t:Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var AnimationSet=function(){function n(t,e){var r=this;_classCallCheck(this,n),this.element=t,this.state=!1,this.current=null,this.queue=[],this.queueCleared=new EventEmitter,this.end=new EventEmitter,this.recoveryPoint=this.element.attr(),this.recoveryFn=function(t,e){return t.attr(e)},this.end.subscribe(function(){if(!r.queue.length)return r.queueCleared.emit(null);var t=_toArray(r.queue),e=t[0],n=t.slice(1);r.queue=n,e.run()}),this.config(e)}return _createClass(n,[{key:"config",value:function(r){var a=this;this.animations=Object.keys(r).reduce(function(t,e){var n=new AnimationModel(a.element,r[e]);return n.onStart(function(t){a.setState(!0),a.setCurrent(t)}),n.onEnd(function(t){a.setState(!1),a.setCurrent(null)}),t.set(e,n)},new Map)}},{key:"setState",value:function(t){return this.state=t,!1===this.state&&this.end.emit(null),this}},{key:"setCurrent",value:function(t){return this.current=t,this}},{key:"isAnimating",value:function(){return this.state}},{key:"getInQueue",value:function(t){this.queue.push(t)}},{key:"onDisengage",value:function(t){return this.queueCleared.subscribe(t),this}},{key:"recovery",value:function(){var t=this,e=function(){return t.recoveryFn(t.element,t.recoveryPoint)};return this.isAnimating()?this.onDisengage(e):e(),this}},{key:"run",value:function(t){var e=this.animations.get(t);if(!e)throw Error("AnimationSet: No animation was found. Passed name: "+t);return this.isAnimating()?this.getInQueue(e):e.run(),this}},{key:"delay",value:function(t){var e=this,n=new DelayModel(t);return n.onStart(function(t){e.setState(!0),e.setCurrent(t)}),n.onEnd(function(t){e.setState(!1),e.setCurrent(null)}),this.isAnimating()?this.getInQueue(n):n.run(),this}}]),n}();_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var AnimationModel=function(){function n(t,e){_classCallCheck(this,n),this.start=new EventEmitter,this.end=new EventEmitter,this.element=t,this.fn=e}return _createClass(n,[{key:"run",value:function(){var t=this;return this.start.emit(this),this.fn(function(){return t.end.emit(t)},this.element),this}},{key:"onEnd",value:function(t){return this.end.subscribe(t),this}},{key:"onStart",value:function(t){return this.start.subscribe(t),this}}]),n}(),DelayModel=function(t){function e(n){return _classCallCheck(this,e),_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,null,function(t,e){return setTimeout(t,n)}))}return _inherits(e,AnimationModel),e}();_createClass=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var EventEmitter=function(){function t(){_classCallCheck(this,t),this.listners=[]}return _createClass(t,[{key:"subscribe",value:function(t){return this.listners.push(t),this}},{key:"emit",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=this.listners;return r&&r.length&&r.forEach(function(t){return t.apply(void 0,e)}),this}}]),t}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var SnapAnimationSet=function(t){function n(t,e){return _classCallCheck(this,n),_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,Snap(t),e))}return _inherits(n,AnimationSet),n}(),weightsAnimationConfig=function(){var n={afterall:348,animation:290,pause:58,before:116},t=function(t){return t.delay(n.before).run("forward").delay(n.pause).run("backward").delay(n.afterall).recovery()};return[{element:"left-blue-rhomb",animations:{backward:function(t,e){e.animate({transform:"t0,0"},n.animation,t)},forward:function(t,e){e.animate({transform:"t0,-12.75"},n.animation,t)}},sequence:t},{element:"left-grey-rhomb",animations:{backward:function(t,e){e.animate({transform:"t0,0"},n.animation,t)},forward:function(t,e){e.animate({transform:"t0,-22"},n.animation,t)}},sequence:t},{element:"left-green-ellipse",animations:{backward:function(t,e){e.animate({transform:"t0,0"},n.animation,t)},forward:function(t,e){e.animate({transform:"t0,-22.5"},n.animation,t)}},sequence:t},{element:"horizontal-line",animations:{backward:function(t,e){e.animate({transform:"r0"},n.animation,t)},forward:function(t,e){e.animate({transform:"r15"},n.animation,t)}},sequence:t},{element:"right-green-ellipse",animations:{backward:function(t,e){e.animate({transform:"t0,0"},n.animation,t)},forward:function(t,e){e.animate({transform:"t0,11"},n.animation,t)}},sequence:t},{element:"right-grey-ellipse",animations:{backward:function(t,e){e.animate({transform:"t0,0"},n.animation,t)},forward:function(t,e){e.animate({transform:"t0,19"},n.animation,t)}},sequence:t}]}();
//# sourceMappingURL=main.js.map
