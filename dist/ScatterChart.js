/*!
 * 
 *   ScatterChart
 *   @version: 0.9.1
 *   @author: Micheal Wayne(michealwayne@163.com)
 *   @build time: 2018-11-22
 *   @update time: 2019-07-18
 * 
 */
!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var i in e)("object"==typeof exports?exports:t)[i]=e[i]}}(window,function(){return function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=18)}([function(t,n,e){"use strict";function i(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function o(t){return"Object"===i(t)}n.__esModule=!0,n.type=i,n.isArray=function(t){return"Array"===i(t)},n.isString=function(t){return"String"===i(t)},n.isObject=o,n.isFunction=function(t){return"Function"===i(t)},n.each=function(t,n){for(var e=0,i=t.length;e<i;e++)n(t[e],e)},n.cloneObjDeep=function t(n,e){if(!o(n)||!o(e))return!1;for(var i in n)!o(e[i])||r[i]?e[i]=e[i]||n[i]:t(n[i],e[i]);return e},n.isEmptyObj=r,n.getColorRgb=a,n.Lighting=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return a(t).map(function(t){return(t+=t*n)>255?255:t})};n.cloneArray=function(t,n){return t.map(function(t,e){n[e]=t}),n};function r(t){if(!t)return!1;for(var n in t)return!1;return!0}function a(t){var n=t.toLowerCase();if(n&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(n)){if(4===n.length){for(var e="#",i=1;i<4;i++)e+=n.slice(i,i+1).concat(n.slice(i,i+1));n=e}for(var o=[],r=1;r<7;r+=2)o.push(parseInt("0x"+n.slice(r,r+2)));return o}return n}},function(t,n,e){"use strict";n.__esModule=!0,n.drawLine=function(t,n,e,i,o){t.beginPath(),t.moveTo(n,e),t.lineTo(i,o),t.closePath(),t.stroke()},n.drawDashLine=function(t,n,e,i,o,r){r=r||5;var a=(c=i-n,u=o-e,Math.sqrt(Math.pow(c,2)+Math.pow(u,2))),s=Math.floor(a/r);var c,u;t.beginPath();for(var h=0;h<s;h++)t[h%2==0?"moveTo":"lineTo"](n+(i-n)/s*h,e+(o-e)/s*h);t.closePath(),t.stroke()},n.drawPoint=function(t,n,e,i,o,r,a){t.beginPath(),t.strokeStyle=o||"#fff",t.lineWidth=void 0!==a?a:1,t.arc(n,e,r,0,2*Math.PI,!0),t.closePath(),t.fillStyle=i,t.fill(),a&&t.stroke()},n.retinaScale=function(t,n){var e=window.devicePixelRatio||1;if(1===e)return!1;var i=t.height,o=t.width;return t.height=i*e,t.width=o*e,n.scale(e,e),t.style.width=o+"px",t.style.height=i+"px",e},n.setContext=function(t,n,e){if(!t||n?!t.$el:!t.opts.Canvas&&!e)throw new Error("Error!no chart object to set context.(FundCharts-setContext)");var o=void 0,r=t.opts.width||500,a=t.opts.height||500;if(n&&!e){var s=t.$el;if(s.style.webkitUserSelect="none",s.style.userSelect="none","function"==typeof s.getContext)o=s;else{(o=document.createElement("canvas")).id=t.opts.id+"Canvas";var c=t.opts.width||(0,i.getStyle)(s,"width"),u=t.opts.height||(0,i.getStyle)(s,"height");o.width=c,o.height=u,s.appendChild(o)}}else if(e){if(!wx||"function"!=typeof wx.createCanvasContext)throw new Error("Error! no param {Object} Ctx.(FundCharts-setContext, not find options)");var h=wx.createCanvasContext(t.opts.id);o={info:"Weapp native canvas",width:r,height:a,getContext:function(){return h},draw:function(n){if(n)return h.draw(!0);wx.drawCanvas({canvasId:t.opts.id,actions:t.ctx.getActions()})}}}else{var f=t.opts.Canvas;if(!t.opts.Canvas)throw new Error("Error! no param {Object} Canvas.(FundCharts-setContext, not find options)");o=f.createCanvas(r,a),t.opts.handleOut&&t.opts.handleOut(o)}t.canvas=o,t.ctx=o.getContext("2d"),t._chart={width:o.width,height:o.height}};var i=e(3)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(0),o=e(1),r=e(4),a=function(){function t(t){this.$el=null,this.drawer=null,this.canvas=null,this.ctx=null;var n=t.id;if(!n)throw r.Errors.contain;r.Config.inBrowser&&!r.Config.inWeapp&&(this.$el=document.getElementById(n)),t.colors&&(t.colors=t.colors.concat(r.Config.colors)),(t=i.cloneObjDeep(r.Config,t)).data&&(t.datas=[t.data],delete t.data),this.opts=t}return t.prototype.update=function(t){if(!t)return!1;this.opts=i.cloneObjDeep(this.opts,t),this.drawer.draw(!0)},t.prototype._init=function(){o.setContext(this,r.Config.inBrowser,r.Config.inWeapp),r.Config.inBrowser&&!r.Config.inWeapp&&(this.pixelRatio=o.retinaScale(this.canvas,this.ctx))},t}();n.default=a},function(t,n,e){"use strict";n.__esModule=!0,n.getStyle=function(t,n){var e=t.currentStyle?t.currentStyle[n]:document.defaultView.getComputedStyle(t,null).getPropertyValue(n),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Errors={contain:function(){return new Error("Error!no container id in options.(FundChart)")}};var i="undefined"!=typeof wx&&void 0!==wx.getSystemInfo,o=i?2:1;n.Config={inBrowser:"undefined"!=typeof window,inWeapp:i,backgroundColor:"#fff",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],events:["touchstart","touchmove"],hoverLineColor:"#999",hoverHighlight:1,bar:{margin:60/o},chartTop:0,chartLeft:50/o,chartRight:15,dash:{color:"#e2e2e2",length:3/o},font:{color:"#666",fontFamily:"Arial",fontSize:{x:"11px",y:"10px"}}}},function(t,n,e){"use strict";n.__esModule=!0,n.Animation=function(t){t.duration=t.duration||600;var n=23,e=o(),i=null;e(function o(r){if(null===r)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());null===i&&(i=r);if(r-i<t.duration){var a=(r-i)/t.duration;s=a,a=(s/=.5)<1?.5*Math.pow(s,3):.5*(Math.pow(s-2,3)+2),t.onProcess&&t.onProcess(a),e(o,n)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish();var s},n)};var i=void 0;"undefined"!=typeof window&&(i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame);var o=function(){return void 0!==i?(o=function(){return i},i):function(t,n){setTimeout(function(){var n=+new Date;t(n)},n)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(0),o=e(1),r=function(){function t(t){this.yaxis={min:0,max:0,range:0,unit:0},this.xaxis={min:0,max:0,range:0,unit:0},this.xRate=0,this.xBasic=0,this.yRate=0,this.yBasic=0,this.drawPoint=o.drawPoint,this.chartjs=t}return t.prototype.getBasicData=function(t){var n,e,o=this.chartjs,r=o.opts,a=t||r.datas,s=r.range;if(a.length>1&&(o.multline=!0),s){if(void 0===s.min||void 0===s.max)throw new Error("Error! param range need min and max");n=s.min,e=s.max}else i.each(a,function(t){var i=Math.min.apply(null,t),o=Math.max.apply(null,t);n=n&&n<i?n:i,e=e&&e>o?e:o});return[n||0,e||0]},t.prototype.clearCtn=function(t){var n=this.chartjs,e=n.opts,i=n.ctx,o=n._chart.width,r=n._chart.height;i.beginPath(),t?i.rect(e.chartLeft-5,e.chartTop-5,o+1,r-16-e.chartTop):i.rect(0,0,1e5,1e5),i.fillStyle=e.backgroundColor,i.fill(),i.closePath()},t.prototype.drawDashs=function(t){var n=this.chartjs,e=n.opts;if(e.noDash)return!1;var i=n.ctx,r=n._chart.width-e.chartRight+2,a=(n._chart.height-e.chartTop-30)/4;i.lineWidth=0,i.strokeStyle=e.dash.color,i.beginPath(),i.lineWidth=1;for(var s=0;s<5;s++){var c=t||s*a+5+e.chartTop;o.drawDashLine(i,e.chartLeft,c,r,c,e.dash.length)}i.save()},t.prototype.drawTexts=function(t,n){var e=this.chartjs,i=e.opts,o=i.font,r=e.ctx,a=i.xaxis,s=e._chart.width,c=e._chart.height;i.handleTextX&&(t=i.handleTextX),i.handleTextY&&(n=i.handleTextY),r.lineWidth=1,r.textAlign="right",r.font=o.fontSize.x+" "+o.fontFamily,r.fillStyle=o.color,t?t(r,a):(r.fillText(a[a.length-1],s-i.chartRight,c-10),r.textAlign="left",r.fillText(a[0],i.chartLeft,c-10)),r.font=o.fontSize.y+" "+o.fontFamily,r.textAlign="right",r.textBaseline="middle";var u=this.yaxis;if(n)n(r,u);else for(var h=0;h<5;h++){var f=u.min+h*u.unit;r.fillText(i.yaxisfunc?i.yaxisfunc(f):f.toFixed(2),i.chartLeft-5,this.yRate*f+this.yBasic)}},t.prototype.drawHover=function(t,n){},t.prototype.setEvents=function(){var t=this,n=this.chartjs.canvas,e=this.chartjs.opts,i=e.events;if(!i||!e.inBrowser)return!1;i.forEach(function(e){n.addEventListener(e,function(n){var i=~e.indexOf("touch")?n.touches[0]:n,o=i.clientX,r=i.pageY-i.target.offsetTop;return t.drawHover(o,r),!1},!1)})},t}();n.default=r},,,,,,,,,,,,function(t,n,e){"use strict";var i,o=this&&this.__extends||(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var r=e(2),a=e(19),s=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype.init=function(){this._init(),this.drawer=new a.default(this),this.drawer.init()},n}(r.default);n.default=s},function(t,n,e){"use strict";var i,o=this&&this.__extends||(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),a=e(5),s=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype.setDataset=function(){var t,n,e=this,i=this.chartjs,o=i.opts,a=o.range,s=(o.data,o.datas),c=null,u=null;if(s.length>1&&(i.multline=!0),a)c={x:a.x[0],y:a.y[0]},t=(u={x:a.x[1],y:a.y[1]}).x-c.x,n=u.y-c.y;else{var h=[],f=[];r.each(s,function(t){r.each(t,function(t){h.push(t[0]),f.push(t[1])})}),c={x:Math.min.apply(null,h),y:Math.min.apply(null,f)},u={x:Math.max.apply(null,h),y:Math.max.apply(null,f)},h=[],f=[],(t=u.x-c.x)>2?t=4*Math.ceil(t/4):t*=1.2,c.x=t>2?Math.floor(c.x):c.x,c.x+t<u.x&&(c.x=c.x),(n=u.y-c.y)>2?n=4*Math.ceil(n/4):n*=1.2,c.y=n>2?Math.floor(c.y):c.y,c.y+n<u.y&&(c.y=c.y)}o.xaxisfunc?o.xaxis=[o.xaxisfunc(c.x),o.xaxisfunc(u.x)]:o.xaxis=[c.x.toFixed(2),u.x.toFixed(2)],this.yaxis={min:c.y,max:c.y+n,range:n,unit:n/4},this.yRate=(30-i._chart.height+o.chartTop)/this.yaxis.range,this.yBasic=5-this.yaxis.max*this.yRate+o.chartTop,this.xaxis={min:c.x,max:c.x+t,range:t,unit:t/4},this.xRate=(i._chart.width-65)/this.xaxis.range,this.xBasic=50;var l=[];r.each(s,function(t){var n=[];r.each(t,function(t){n.push({x:t[0]*e.xRate+e.xBasic,y:t[1]*e.yRate+e.yBasic,value:t})}),l.push(n)}),this.chartjs.datasets=l},n.prototype.drawPoints=function(t){var n=this;void 0===t&&(t=1);var e=this.chartjs,i=e.opts,o=e.datasets;r.each(o,function(a,s){var c="rgba("+r.getColorRgb(i.colors[s]).join(",")+", 0.3)",u=(i.pointWidths&&i.pointWidths[s]||6-4*s/o.length)*t,h=.8*u;r.each(a,function(t){n.drawPoint(e.ctx,t.x,t.y,i.colors[s],c,u,h)})})},n.prototype.draw=function(t,n){var e=this,i=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),n||!i.inBrowser&&!i.inWeapp?this.drawPoints():a.Animation({onProcess:function(t){e.clearCtn(!0),e.drawDashs(),e.drawPoints(t),i.onAnimation&&i.onAnimation.call(e,t),i.inWeapp&&e.chartjs.ctx.draw(!0)},onAnimationFinish:i.onFinish})},n.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),t.inWeapp&&this.chartjs.canvas.draw()},n}(e(6).default);n.default=s}])});