/*!
 * 
 *   FundCharts
 *   @description: 移动端轻量级canvas数据可视化组件。折线图、饼图(环形图)、柱状图、雷达图（蜘蛛图）、散点图、k线图。
 *   @version: 1.0.0
 *   @author: Micheal Wayne(michealwayne@163.com)
 *   @build time: 2018-11-22
 *   @update time: 2019-06-20
 * 
 */
exports.FundCharts=function(t){var n={};function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(i,a,function(n){return t[n]}.bind(null,a));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n,e){"use strict";function i(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function a(t){return"Object"===i(t)}n.__esModule=!0,n.type=i,n.isArray=function(t){return"Array"===i(t)},n.isString=function(t){return"String"===i(t)},n.isObject=a,n.isFunction=function(t){return"Function"===i(t)},n.each=function(t,n){for(var e=0,i=t.length;e<i;e++)n(t[e],e)},n.cloneObjDeep=function t(n,e){if(!a(n)||!a(e))return!1;for(var i in n)!a(e[i])||o[i]?e[i]=e[i]||n[i]:t(n[i],e[i]);return e},n.isEmptyObj=o,n.getColorRgb=function(t){var n=t.toLowerCase();if(n&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(n)){if(4===n.length){for(var e="#",i=1;i<4;i++)e+=n.slice(i,i+1).concat(n.slice(i,i+1));n=e}for(var a=[],o=1;o<7;o+=2)a.push(parseInt("0x"+n.slice(o,o+2)));return a}return n};n.cloneArray=function(t,n){return t.map(function(t,e){n[e]=t}),n};function o(t){if(!t)return!1;for(var n in t)return!1;return!0}},function(t,n,e){"use strict";n.__esModule=!0,n.drawLine=function(t,n,e,i,a){t.beginPath(),t.moveTo(n,e),t.lineTo(i,a),t.closePath(),t.stroke()},n.drawDashLine=function(t,n,e,i,a,o){o=o||5;var r=(c=i-n,h=a-e,Math.sqrt(Math.pow(c,2)+Math.pow(h,2))),s=Math.floor(r/o);var c,h;t.beginPath();for(var l=0;l<s;l++)t[l%2==0?"moveTo":"lineTo"](n+(i-n)/s*l,e+(a-e)/s*l);t.closePath(),t.stroke()},n.drawPoint=function(t,n,e,i,a,o,r){t.beginPath(),t.strokeStyle=a||"#fff",t.lineWidth=void 0!==r?r:1,t.arc(n,e,o,0,2*Math.PI,!0),t.closePath(),t.fillStyle=i,t.fill(),r&&t.stroke()},n.retinaScale=function(t,n){var e=window.devicePixelRatio||1;if(1===e)return!1;var i=t.height,a=t.width;return t.height=i*e,t.width=a*e,n.scale(e,e),t.style.width=a+"px",t.style.height=i+"px",e},n.setContext=function(t,n,e){if(!t||n?!t.$el:!t.opts.Canvas&&!e)throw new Error("Error!no chart object to set context.(FundCharts-setContext)");var a=void 0,o=t.opts.width||500,r=t.opts.height||500;if(n&&!e){var s=t.$el;s.style.webkitUserSelect="none",s.style.userSelect="none",(a=document.createElement("canvas")).id=t.opts.id+"Canvas";var c=t.opts.width||(0,i.getStyle)(s,"width"),h=t.opts.height||(0,i.getStyle)(s,"height");a.width=c,a.height=h,s.appendChild(a)}else if(e){if(!wx||"function"!=typeof wx.createCanvasContext)throw new Error("Error! no param {Object} Ctx.(FundCharts-setContext, not find options)");var l=wx.createCanvasContext(t.opts.id);a={info:"Weapp native canvas",width:o,height:r,getContext:function(){return l},draw:function(){wx.drawCanvas({canvasId:t.opts.id,actions:t.ctx.getActions()})}}}else{var u=t.opts.Canvas;if(!t.opts.Canvas)throw new Error("Error! no param {Object} Canvas.(FundCharts-setContext, not find options)");a=u.createCanvas(o,r),t.opts.handleOut&&t.opts.handleOut(a)}t.canvas=a,t.ctx=a.getContext("2d"),t._chart={width:a.width,height:a.height}};var i=e(7)},function(t,n,e){"use strict";n.__esModule=!0;n.Errors={contain:function(){return new Error("Error!no container id in options.(FundChart)")}},n.Config={inBrowser:"undefined"!=typeof window,inWeapp:"undefined"!=typeof wx&&void 0!==wx.getSystemInfo,backgroundColor:"#fff",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],bar:{margin:60},chartTop:0,chartLeft:50,chartRight:15,dash:{color:"#e2e2e2",length:3},font:{color:"#666",fontSize:{x:"11px",y:"10px"}}}},function(t,n,e){"use strict";n.__esModule=!0,n.Animation=function(t){t.duration=t.duration||600;var n=23,e=a(),i=null;e(function a(o){if(null===o)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());null===i&&(i=o);if(o-i<t.duration){var r=(o-i)/t.duration;s=r,r=(s/=.5)<1?.5*Math.pow(s,3):.5*(Math.pow(s-2,3)+2),t.onProcess&&t.onProcess(r),e(a,n)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish();var s},n)};var i=void 0;"undefined"!=typeof window&&(i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame);var a=function(){return void 0!==i?(a=function(){return i},i):function(t,n){setTimeout(function(){var n=+new Date;t(n)},n)}}},function(t,n,e){"use strict";n.__esModule=!0;var i=e(0),a=e(1);var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.chartjs=n}return t.prototype.clearCtn=function(t){var n=this.chartjs,e=n.opts,i=n.ctx,a=n._chart.width,o=n._chart.height;i.beginPath(),t?i.rect(e.chartLeft-5,e.chartTop-5,a+1,o-16-e.chartTop):i.rect(0,0,1e5,1e5),i.fillStyle=e.backgroundColor,i.fill(),i.closePath()},t.prototype.getBasicData=function(t,n){var e=this.chartjs,a=e.opts,o=n||a.data,r=t||a.datas,s=void 0,c=void 0,h=a.range;if(r&&(e.multline=!0),h){if(void 0===h.min||void 0===h.max)throw new Error("Error! param range need min and max");s=h.min,c=h.max}else r?(0,i.each)(r,function(t){var n=Math.min.apply(null,t),e=Math.max.apply(null,t);s=s&&s<n?s:n,c=c&&c>e?c:e}):(s=Math.min.apply(null,o),c=Math.max.apply(null,o));return[s,c]},t.prototype.drawPoint=function(){a.drawPoint.apply(this,arguments)},t.prototype.drawDashs=function(t){var n=this.chartjs,e=n.opts;if(e.noDash)return!1;var i=n.ctx,o=n._chart.width-e.chartRight+2,r=(n._chart.height-e.chartTop-30)/4;i.lineWidth=0,i.strokeStyle=e.dash.color,i.beginPath(),i.lineWidth=1;for(var s=0;s<5;s++){var c=t||s*r+5+e.chartTop;(0,a.drawDashLine)(i,e.chartLeft,c,o,c,e.dash.length)}i.save()},t.prototype.drawTexts=function(t,n){var e=this.chartjs,i=e.opts,a=i.font,o=e.ctx,r=i.xaxis,s=e._chart.width,c=e._chart.height;i.handleTextX&&(t=i.handleTextX),i.handleTextY&&(n=i.handleTextY),o.lineWidth=1,o.textAlign="right",o.font=a.fontSize.x+" Arial",o.fillStyle=a.color,t?t(o,r):(o.fillText(r[r.length-1],s-i.chartRight,c-10),o.textAlign="left",o.fillText(r[0],i.chartLeft,c-10)),o.font=a.fontSize.y+" Arial",o.textAlign="right",o.textBaseline="middle";var h=this.yaxis;if(n)n(o,h);else for(var l=0;l<5;l++){var u=h.min+l*h.unit;o.fillText(i.yaxisfunc?i.yaxisfunc(u):u.toFixed(2),i.chartLeft-5,this.yRate*u+this.yBasic)}},t.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),t.inWeapp&&this.chartjs.canvas.draw()},t}();n.default=o},function(t,n,e){"use strict";var i=h(e(6)),a=h(e(9)),o=h(e(11)),r=h(e(13)),s=h(e(15)),c=h(e(17));function h(t){return t&&t.__esModule?t:{default:t}}t.exports={line:i.default,pie:a.default,bar:o.default,radar:r.default,scatter:s.default,kline:c.default}},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(0),o=e(1),r=e(2),s=e(8),c=(i=s)&&i.__esModule?i:{default:i};var h=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=n.id;if(!e)throw r.Errors.contain;r.Config.inBrowser&&!r.Config.inWeapp&&(this.$el=document.getElementById(e)),n.colors&&(n.colors=n.colors.concat(r.Config.colors)),n=(0,a.cloneObjDeep)(r.Config,n),this.opts=n}return t.prototype.update=function(t){if(!t)return!1;this.opts=(0,a.cloneObjDeep)(this.opts,t),this.drawer.draw(!0)},t.prototype.init=function(){(0,o.setContext)(this,r.Config.inBrowser,r.Config.inWeapp),r.Config.inBrowser&&!r.Config.inWeapp&&(this.pixelRatio=(0,o.retinaScale)(this.canvas,this.ctx)),this.drawer=new c.default(this),this.drawer.init()},t}();n.default=h},function(t,n,e){"use strict";n.__esModule=!0,n.getStyle=function(t,n){var e=t.currentStyle?t.currentStyle[n]:document.defaultView.getComputedStyle(t,null).getPropertyValue(n),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(0),o=e(3),r=e(1),s=e(4);var c=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}(this,t.apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,t),n.prototype.setDataset=function(){var t=this,n=this.chartjs,e=n.opts,i=e.data,o=e.datas,r=this.getBasicData(),s=r[0],c=r[1],h=void 0,l=void 0,u=e.range;u?(h=u.min,l=u.max-u.min):((l=c-s)||(l=1),l>2?l=4*Math.ceil(l/4):l*=1.2,(h=l>2?Math.floor(s):s)+l<c&&(h=s)),this.yaxis={min:h,max:h+l,range:l,unit:l/4},this.yRate=(30-n._chart.height+e.chartTop)/this.yaxis.range,this.yBasic=5-this.yaxis.max*this.yRate+e.chartTop;var f=i?i.length:o[0].length;if(f=f>1?f:2,this.xaxis={min:0,max:f-1,range:f,unit:1},this.xBasic=e.chartLeft,this.xRate=(n._chart.width-e.chartLeft-e.chartRight)/(f-1),n.multline){var p=[];(0,a.each)(o,function(n){var e=[];1===n.length&&(n[1]=n[0]),(0,a.each)(n,function(n,i){e.push({x:i*t.xRate+t.xBasic,y:n*t.yRate+t.yBasic,value:n})}),p.push(e)}),this.chartjs.datasets=p}else{var d=[];1===i.length&&(i[1]=i[0]),(0,a.each)(i,function(n,e){d.push({x:e*t.xRate+t.xBasic,y:n*t.yRate+t.yBasic,value:n})}),this.chartjs.dataset=d}},n.prototype.drawLine=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.chartjs,e=n.opts,i=n.ctx;i.lineWidth=1;var o=n._chart.height-24,r=function(t){if(e.noGradient)return!1;var n=i.createLinearGradient(0,0,0,170),o=(0,a.getColorRgb)(t).join(",");n.addColorStop(0,"rgba("+o+", 0.3)"),n.addColorStop(.8,"rgba("+o+", 0.1)"),n.addColorStop(1,"rgba("+o+", 0.05)"),i.fillStyle=n,i.fill()},s=function(n){var e=n.x,a=o*(1-t)+n.y*t;i.lineTo(e,a)};if(n.multline){var c=n.datasets;(0,a.each)(c,function(n,h){if(i.save(),e.allGradient||0===h){i.beginPath(),i.lineWidth=0,i.strokeStyle=e.backgroundColor,i.moveTo(e.chartLeft,o);var l=n.length;(0,a.each)(n,s),i.lineTo(n[l-1].x,o),i.closePath(),r(e.colors[h]),i.stroke()}i.lineWidth=e.lineWidths&&e.lineWidths[h]||1,i.strokeStyle=e.colors[h],i.beginPath(),i.moveTo(c[h][0].x,o*(1-t)+c[h][0].y*t),(0,a.each)(c[h],s),i.stroke(),i.restore()})}else{var h=n.dataset;i.beginPath(),i.lineWidth=0,i.strokeStyle=e.backgroundColor,i.moveTo(50,n._chart.height-24),(0,a.each)(h,s),i.lineTo(h[h.length-1].x,o),i.closePath(),r(e.colors[0]),i.stroke(),i.lineWidth=e.lineWidths&&e.lineWidths[0]||1,i.strokeStyle=e.colors[0],i.beginPath(),i.moveTo(h[0].x,o*(1-t)+h[0].y*t),(0,a.each)(h,s),i.stroke()}i.save()},n.prototype.drawHover=function(t){var n=this,e=this.chartjs,i=e.opts;this.draw(i.inWeapp||null,!0);var o=e.ctx;if(t>e._chart.width-15||t<i.chartLeft)return!1;var s=Math.round((t-this.xBasic)/this.xRate),c=[],h=void 0,l=[];if(e.multline){var u=e.datasets;(0,a.each)(u,function(t,e){i.hideHoverPoints||l.push(function(){n.drawPoint(o,t[s].x,t[s].y-1,i.colors[e],i.pointStyle,4,1)}),h=t[s].x,c.push(t[s].value)})}else{var f=e.dataset;i.hideHoverPoints||l.push(function(){n.drawPoint(o,f[s].x,f[s].y-1,i.colors[0],i.pointStyle,4,1)}),h=f[s].x,c.push(f[s].value)}return i.noHoverLine||(o.lineWidth=1,o.strokeStyle=i.hoverLineColor||"#999",(0,r.drawLine)(o,h,6+i.chartTop,h,e._chart.height-25)),l.length&&(0,a.each)(l,function(t){t()}),i.hover&&i.hover(s,c,i.xaxis[s],t),o.restore(),i.inWeapp&&e.canvas.draw(),s},n.prototype.setEvents=function(){var t=this,n=this.chartjs.canvas;n.addEventListener("touchstart",function(n){var e=n.touches[0].clientX;t.drawHover(e)},!1),n.addEventListener("touchmove",function(n){var e=n.touches[0].clientX;return t.drawHover(e),!1},!1)},n.prototype.draw=function(t,n){var e=this,i=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),n||!i.inBrowser&&!i.inWeapp?this.drawLine():(0,o.Animation)({onProcess:function(t){e.clearCtn(!0),e.drawDashs(),e.drawLine(t),i.onAnimation&&i.onAnimation.call(e,t),i.inWeapp&&e.chartjs.ctx.draw(!0)},onAnimationFinish:i.onFinish})},n.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),!t.inBrowser||t.inWeapp||t.noHoverEvent||this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},n}(((i=s)&&i.__esModule?i:{default:i}).default);n.default=c},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(0),o=e(10),r=(i=o)&&i.__esModule?i:{default:i},s=e(1),c=e(2);var h=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=n.id;if(!e)throw c.Errors.contain;c.Config.inBrowser&&!c.Config.inWeapp&&(this.$el=document.getElementById(e)),n.colors&&(n.colors=n.colors.concat(c.Config.colors)),n=(0,a.cloneObjDeep)(c.Config,n),this.opts=n}return t.prototype.update=function(t){if(!t)return!1;this.opts=(0,a.cloneObjDeep)(this.opts,t),this.drawer.init()},t.prototype.init=function(){(0,s.setContext)(this,c.Config.inBrowser,c.Config.inWeapp),c.Config.inBrowser&&!c.Config.inWeapp&&(this.pixelRatio=(0,s.retinaScale)(this.canvas,this.ctx)),this.drawer=new r.default(this),this.drawer.init()},t}();n.default=h},function(t,n,e){"use strict";n.__esModule=!0;var i=e(3);var a=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.chartjs=n}return t.prototype.clearCtn=function(){var t=this.chartjs.ctx;t.beginPath(),t.rect(0,0,1e5,1e5),t.fillStyle=this.chartjs.opts.backgroundColor,t.fill(),t.closePath()},t.prototype.drawPie=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.6,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=this.chartjs,i=e.opts,a=i.widthRates,o=i.datas,r=i.colors;this.clearCtn();var s=e.ctx;t=t>.9?.9:t;var c=i.radius||e._chart.height/2-20,h=c*t,l=i.origin||{x:e._chart.width/2,y:c+20},u=l.x,f=l.y,p=this.chartjs.drawer;p.origin=l,p.radius=c,p.radiusWhite=h;var d=-.5*Math.PI,y=d;for(var v in s.save(),s.lineWidth=i.lineWidth,s.strokeStyle=i.backgroundColor,o)y+=2*o[v]*Math.PI*n,s.fillStyle=r[v],s.beginPath(),s.moveTo(u,f),s.arc(u,f,c*(a&&a[v]||1),d,y,!1),s.closePath(),s.fill(),i.lineWidth&&s.stroke(),d=y;s.fillStyle=i.backgroundColor,s.beginPath(),s.moveTo(u,f),h>0&&s.arc(u,f,h,0,2*Math.PI,!1),s.closePath(),s.fill()},t.prototype.init=function(){var t=this,n=this.chartjs.opts;n.noAnimation||!n.inBrowser&&!n.inWeapp?this.drawPie(n.annularRate,1):(0,i.Animation)({onProcess:function(e){t.drawPie(n.annularRate,e),n.onAnimation&&n.onAnimation.call(t,e),n.inWeapp&&t.chartjs.ctx.draw(!0)},onAnimationFinish:n.onFinish}),n.inWeapp&&this.chartjs.canvas.draw()},t}();n.default=a},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(12),o=(i=a)&&i.__esModule?i:{default:i},r=e(1),s=e(0),c=e(2);var h=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=n.id;if(!e)throw c.Errors.contain;c.Config.inBrowser&&!c.Config.inWeapp&&(this.$el=document.getElementById(e)),n.colors&&(n.colors=n.colors.concat(c.Config.colors)),n=(0,s.cloneObjDeep)(c.Config,n),this.opts=n}return t.prototype.update=function(t){if(!t)return!1;this.opts=(0,s.cloneObjDeep)(this.opts,t),this.drawer.draw(!0)},t.prototype.init=function(){(0,r.setContext)(this,c.Config.inBrowser,c.Config.inWeapp),c.Config.inBrowser&&!c.Config.inWeapp&&(this.pixelRatio=(0,r.retinaScale)(this.canvas,this.ctx)),this.drawer=new o.default(this),this.drawer.init()},t}();n.default=h},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(0),o=e(3),r=e(4);var s=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}(this,t.apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,t),n.prototype.setDataset=function(){var t=this,n=this.chartjs,e=n.opts,i=e.datas,o=e.data,r=this.getBasicData(),s=r[0],c=r[1],h=void 0,l=e.range;l?h=l.max-l.min:s<0?(s=Math.floor(s),-(c=Math.ceil(c))<s?s=-c:c=-s,h=2*c):((h=c-s)||(s=0,h=1),h=h>5?5*Math.ceil(h/5):Math.ceil(1.2*h)),this.yaxis={min:s,max:s+h,range:h,unit:h/4},this.yRate=(30-n._chart.height+e.chartTop)/this.yaxis.range,this.yBasic=5-this.yaxis.max*this.yRate+e.chartTop,this.zeroY=s<0?this.yBasic:n._chart.height-24;var u=this.chartjs.pixelRatio||1,f=this.chartjs.multline&&i[0].length||o.length,p=n.opts.barMargin||f>=10&&40-(f-10)*u||n.opts.bar.margin;p=p<0?0:p/u,this.xaxis={min:0,max:f-1,range:f,unit:1};var d=e.chartLeft+e.chartRight,y=this.chartjs.barWidth=Math.floor((n._chart.width-d)/f-p);if(this.xRate=(n._chart.width-d)/(f+1),this.xBasic=p/2+e.chartLeft,n.multline){var v=[];(0,a.each)(i,function(n){var i=[];(0,a.each)(n,function(n,a){var o=a*y+(a+.5)*p+e.chartLeft;i.push({x:o,y:n*t.yRate+t.yBasic,value:n})}),v.push(i)}),this.chartjs.datasets=v}else{var x=[];(0,a.each)(o,function(n,i){var a=i*y+(i+.5)*p+e.chartLeft;x.push({x:a,y:n*t.yRate+t.yBasic,value:o[i]})}),this.chartjs.dataset=x}},n.prototype.rotateContext=function(t,n,e,i,a){t.save(),t.translate(n,e),t.rotate(i*Math.PI/180),t.fillText(a,0,0),t.restore()},n.prototype.drawBars=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.chartjs,e=n.opts,i=n.ctx;i.lineWidth=1;var o=this.zeroY;if(i.beginPath(),i.lineWidth=0,n.multline){var r=n.datasets;(0,a.each)(r,function(s,c){i.strokeStyle=e.backgroundColor;var h=n.barWidth/r.length;(0,a.each)(s,function(n){i.fillStyle=n.y>o&&e.negativeColor||e.colors[c],i.fillRect(n.x+h*c,o,h,(n.y-o)*t)}),i.stroke()})}else{var s=n.dataset;i.strokeStyle=e.backgroundColor;var c=n.barWidth;(0,a.each)(s,function(n){i.fillStyle=n.y>o&&e.negativeColor||e.colors[0],i.fillRect(n.x,o,c,(n.y-o)*t)}),i.stroke()}i.save()},n.prototype.drawXaxisTexts=function(t,n){var e=this,i=this.chartjs,o=i._chart.height,r=i.multline?i.datasets[0]:i.dataset,s=i.barWidth,c=n.length>10&&3*n.length;c>90&&(c=90),t.textAlign="center",(0,a.each)(r,function(i,a){if(!n[a])return!1;c?e.rotateContext(t,i.x+s/2,o-10,c,n[a]):t.fillText(n[a],i.x+s/2,o-10)})},n.prototype.draw=function(t,n){var e=this,i=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts(this.drawXaxisTexts.bind(this))),!i.inBrowser&&!i.inWeapp||n?this.drawBars(1):(0,o.Animation)({onProcess:function(t){e.clearCtn(!0),e.drawDashs(),e.drawBars(t),i.onAnimation&&i.onAnimation.call(e,t),i.inWeapp&&e.chartjs.ctx.draw(!0)},onAnimationFinish:i.onFinish})},n}(((i=r)&&i.__esModule?i:{default:i}).default);n.default=s},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(0),o=e(14),r=(i=o)&&i.__esModule?i:{default:i},s=e(1),c=e(2);var h=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=n.id;if(!e)throw c.Errors.contain;c.Config.inBrowser&&!c.Config.inWeapp&&(this.$el=document.getElementById(e)),n.colors&&(n.colors=n.colors.concat(c.Config.colors)),n=(0,a.cloneObjDeep)(c.Config,n),this.opts=n}return t.prototype.update=function(t){if(!t)return!1;var n=t.datas?t.datas[0].length!==this.opts.datas[0].length:t.data.length!==this.opts.data.length;this.opts=(0,a.cloneObjDeep)(this.opts,t),n?this.drawer.init():this.drawer.init(!0)},t.prototype.init=function(){(0,s.setContext)(this,c.Config.inBrowser,c.Config.inWeapp),c.Config.inBrowser&&!c.Config.inWeapp&&(this.pixelRatio=(0,s.retinaScale)(this.canvas,this.ctx)),this.drawer=new r.default(this),this.drawer.init()},t}();n.default=h},function(t,n,e){"use strict";n.__esModule=!0;var i=e(0),a=e(3),o=e(1);var r=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.chartjs=n}return t.prototype.clearCtn=function(){var t=this.chartjs.ctx;t.beginPath(),t.rect(0,0,1e5,1e5),t.fillStyle=this.chartjs.opts.backgroundColor,t.fill(),t.closePath()},t.prototype.setDataset=function(t){var n=this,e=this.chartjs,a=e.opts,o=a.data,r=a.datas;if(r){e.multline=!0;var s=0;(0,i.each)(r,function(t){var e=Math.max.apply(n,t);e>s&&(s=e)}),e.rangeMax=Math.ceil(1*s/(e.opts.maxRate||.9))}else e.rangeMax=Math.ceil(Math.max.apply(this,o));if(this.radius=a.radius||e._chart.height/2-10,this.origin=e.opts.origin||{x:e._chart.width/2,y:this.radius+10},t)return!1;this.sideArr=function(t){for(var n=[],e=t%2==0?1:-1,i=2*Math.PI/t,a=0;a<t;a++)n.push({x:e*Math.sin(i*a),y:e*Math.cos(i*a)});return n}(e.side=r?r[0].length:o.length)},t.prototype.drawRadar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.chartjs,e=n.opts,a=n.opts.colors;this.clearCtn();var r=n.ctx,s=this.radius,c=this.origin,h=c.x,l=c.y,u=this.sideArr,f=e.gridNumber||3;r.lineWidth=0,r.strokeStyle=n.opts.dash.color;for(var p=function(t){var n=(t+1)/f*s;if(r.beginPath(),r.moveTo(h+u[0].x*n,l+u[0].y*n),(0,i.each)(u,function(t){r.lineTo(h+t.x*n,l+t.y*n)}),r.lineTo(h+u[0].x*n,l+u[0].y*n),r.closePath(),e.fillGrid){var a=(0,i.getColorRgb)(e.fillGrid);r.fillStyle="rgba("+a.join(",")+", "+(f-t)/f*.8+")",r.fill()}else r.stroke();t+1===f&&(0,i.each)(u,function(t){(0,o.drawLine)(r,h,l,h+t.x*n,l+t.y*n)})},d=0;d<f;d++)p(d);var y=n.rangeMax,v=[],x=function(n,c){r.strokeStyle=a[c],r.fillStyle="rgba("+(0,i.getColorRgb)(a[c]).join(",")+",0.4)",r.beginPath(),(0,i.each)(n,function(n,e){var i=h+n/y*s*u[e].x*t,a=l+n/y*s*u[e].y*t;v[c].push({x:i,y:a}),r.lineTo(i,a)}),r.lineTo(h+n[0]/y*s*u[0].x*t,l+n[0]/y*s*u[0].y*t),r.stroke(),e.noFill||r.fill(),r.save(),e.hidePoints||(0,i.each)(v[c],function(t){(0,o.drawPoint)(r,t.x,t.y,a[c],"",3,0)}),r.restore()};n.multline?(0,i.each)(e.datas,function(t,n){v[n]=[],x(t,n)}):(v[0]=[],x(e.data,0))},t.prototype.init=function(t){var n=this;this.setDataset(t);var e=this.chartjs.opts;e.noAnimation||!e.inBrowser&&!e.inWeapp?this.drawRadar(1):(0,a.Animation)({onProcess:function(t){n.drawRadar(t),e.onAnimation&&e.onAnimation.call(n,t),e.inWeapp&&n.chartjs.ctx.draw(!0)},onAnimationFinish:e.onFinish}),e.inWeapp&&this.chartjs.canvas.draw()},t}();n.default=r},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(0),o=e(1),r=e(2),s=e(16),c=(i=s)&&i.__esModule?i:{default:i};var h=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=n.id;if(!e)throw r.Errors.contain;r.Config.inBrowser&&!r.Config.inWeapp&&(this.$el=document.getElementById(e)),n.colors&&(n.colors=n.colors.concat(r.Config.colors)),n=(0,a.cloneObjDeep)(r.Config,n),this.opts=n}return t.prototype.update=function(t){if(!t)return!1;this.opts=(0,a.cloneObjDeep)(this.opts,t),this.drawer.draw(!0)},t.prototype.init=function(){(0,o.setContext)(this,r.Config.inBrowser,r.Config.inWeapp),r.Config.inBrowser&&!r.Config.inWeapp&&(this.pixelRatio=(0,o.retinaScale)(this.canvas,this.ctx)),this.drawer=new c.default(this),this.drawer.init()},t}();n.default=h},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(4),o=(i=a)&&i.__esModule?i:{default:i},r=e(3),s=e(0);var c=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}(this,t.apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,t),n.prototype.setDataset=function(){var t=this,n=this.chartjs,e=n.opts,i=e.range,a=e.data,o=e.datas,r=null,c=null,h=void 0,l=void 0;if(o&&(n.multline=!0),i)r={x:i.x[0],y:i.y[0]},h=(c={x:i.x[1],y:i.y[1]}).x-r.x,l=c.y-r.y;else{var u=[],f=[];o?(0,s.each)(o,function(t){(0,s.each)(t,function(t){u.push(t[0]),f.push(t[1])})}):(0,s.each)(a,function(t){u.push(t[0]),f.push(t[1])}),r={x:Math.min.apply(null,u),y:Math.min.apply(null,f)},c={x:Math.max.apply(null,u),y:Math.max.apply(null,f)},u=null,f=null,(h=c.x-r.x)>2?h=4*Math.ceil(h/4):h*=1.2,r.x=h>2?Math.floor(r.x):r.x,r.x+h<c.x&&(r.x=r.x),(l=c.y-r.y)>2?l=4*Math.ceil(l/4):l*=1.2,r.y=l>2?Math.floor(r.y):r.y,r.y+l<c.y&&(r.y=r.y)}if(e.xaxisfunc?e.xaxis=[e.xaxisfunc(r.x),e.xaxisfunc(c.x)]:e.xaxis=[r.x.toFixed(2),c.x.toFixed(2)],this.yaxis={min:r.y,max:r.y+l,range:l,unit:l/4},this.yRate=(30-n._chart.height+e.chartTop)/this.yaxis.range,this.yBasic=5-this.yaxis.max*this.yRate+e.chartTop,this.xaxis={min:r.x,max:r.x+h,range:h,unit:h/4},this.xRate=(n._chart.width-65)/this.xaxis.range,this.xBasic=50,n.multline){var p=[];(0,s.each)(o,function(n){var e=[];(0,s.each)(n,function(n){e.push({x:n[0]*t.xRate+t.xBasic,y:n[1]*t.yRate+t.yBasic,value:n})}),p.push(e)}),this.chartjs.datasets=p}else{var d=[];(0,s.each)(a,function(n){d.push({x:n[0]*t.xRate+t.xBasic,y:n[1]*t.yRate+t.yBasic,value:n})}),this.chartjs.dataset=d}},n.prototype.drawPoints=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.chartjs,i=e.opts;if(e.multline){var a=e.datasets;(0,s.each)(a,function(o,r){var c="rgba("+(0,s.getColorRgb)(i.colors[r]).join(",")+", 0.3)",h=(i.pointWidths&&i.pointWidths[r]||6-4*r/a.length)*n,l=.8*h;(0,s.each)(o,function(n){t.drawPoint(e.ctx,n.x,n.y,i.colors[r],c,h,l)})})}else{var o=e.dataset,r="rgba("+(0,s.getColorRgb)(i.colors[0]).join(",")+", 0.3)",c=(i.pointWidths&&i.pointWidths[0]||6)*n,h=.8*c;(0,s.each)(o,function(n){t.drawPoint(e.ctx,n.x,n.y,i.colors[0],r,c,h)})}},n.prototype.draw=function(t,n){var e=this,i=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),n||!i.inBrowser&&!i.inWeapp?this.drawPoints():(0,r.Animation)({onProcess:function(t){e.clearCtn(!0),e.drawDashs(),e.drawPoints(t),i.onAnimation&&i.onAnimation.call(e,t),i.inWeapp&&e.chartjs.ctx.draw(!0)},onAnimationFinish:i.onFinish})},n}(o.default);n.default=c},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(0),o=e(1),r=e(2),s=e(18),c=(i=s)&&i.__esModule?i:{default:i};var h=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=n.id;if(!e)throw r.Errors.contain;r.Config.inBrowser&&!r.Config.inWeapp&&(this.$el=document.getElementById(e)),n.colors&&(n.colors=n.colors.concat(r.Config.colors)),n=(0,a.cloneObjDeep)(r.Config,n),this.opts=n}return t.prototype.update=function(t){if(!t)return!1;this.opts=(0,a.cloneObjDeep)(this.opts,t),this.drawer.draw(!0)},t.prototype.init=function(){(0,o.setContext)(this,r.Config.inBrowser,r.Config.inWeapp),r.Config.inBrowser&&!r.Config.inWeapp&&(this.pixelRatio=(0,o.retinaScale)(this.canvas,this.ctx)),this.drawer=new c.default(this),this.drawer.init()},t}();n.default=h},function(t,n,e){"use strict";n.__esModule=!0;var i,a=e(0),o=e(3),r=e(1),s=e(4);var c=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}(this,t.apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,t),n.prototype.setDataset=function(){var t=this,n=this.chartjs,e=n.opts,i=e.datas,o=[];(0,a.each)(i,function(t){o.push.apply(o,t)});var r=this.getBasicData(null,o),s=r[0],c=r[1],h=void 0,l=void 0,u=e.range;u?(h=u.min,l=u.max-u.min):((l=c-s)||(l=1),l>2?l=4*Math.ceil(l/4):l*=1.2,(h=l>2?Math.floor(s):s)+l<c&&(h=s)),this.yaxis={min:h,max:h+l,range:l,unit:l/4},this.yRate=(30-n._chart.height+e.chartTop)/this.yaxis.range,this.yBasic=5-this.yaxis.max*this.yRate+e.chartTop;var f=i.length;f=f>1?f:2,this.xaxis={min:0,max:f-1,range:f,unit:1},this.xBasic=e.chartLeft+10,this.xRate=(n._chart.width-e.chartLeft-e.chartRight-20)/(f-1);var p=[];1===i.length&&(i[1]=i[0]),(0,a.each)(i,function(n,e){p.push({x:e*t.xRate+t.xBasic,ymin:n[2]*t.yRate+t.yBasic,ystart:n[0]*t.yRate+t.yBasic,yend:n[1]*t.yRate+t.yBasic,ymax:n[3]*t.yRate+t.yBasic,value:n})}),this.chartjs.dataset=p,e.barWidth||(e.barWidth=f<10?"20":Math.floor(.6*this.xRate),e.barWidth<1&&(e.barWidth=1))},n.prototype.drawUnit=function(t,n,e,i){var a=void 0,o=void 0,s=void 0;n.yend<n.ystart?(a=e[0],o=n.ystart,s=n.yend):(a=e[4],o=n.yend,s=n.ystart),t.fillStyle=t.strokeStyle=a,(0,r.drawLine)(t,n.x,n.ymin,n.x,o),(0,r.drawLine)(t,n.x,n.ymax,n.x,s),t.beginPath(),t.fillRect(n.x-i/2,s,i,o-s),t.closePath(),t.stroke()},n.prototype.drawLine=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.chartjs,e=n.opts,i=n.ctx,a=n.dataset;i.lineWidth=1;for(var o=0,r=t*a.length;o<r;o++){var s=a[o];this.drawUnit(i,s,e.colors,e.barWidth)}i.save()},n.prototype.draw=function(t,n){var e=this,i=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),n||!i.inBrowser&&!i.inWeapp?this.drawLine():(0,o.Animation)({onProcess:function(t){e.clearCtn(!0),e.drawDashs(),e.drawLine(t),i.onAnimation&&i.onAnimation.call(e,t),i.inWeapp&&e.chartjs.ctx.draw(!0)},onAnimationFinish:i.onFinish})},n.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),t.inWeapp&&this.chartjs.canvas.draw()},n}(((i=s)&&i.__esModule?i:{default:i}).default);n.default=c}]);