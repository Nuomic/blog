(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{942:function(e,t){},958:function(e,t,n){"use strict";n.r(t);var r=n(916),o=n(1),a=n.n(o),u=n(918),i=function(e){var t=e.state.g2plot.Line;Object(o.useEffect)((function(){if(n.current)return new t(n.current,{data:r,xField:"year",yField:"value"}).render()}),[]);var n=Object(o.useRef)(null),r=[{year:"1991",value:3},{year:"1992",value:4},{year:"1993",value:3.5},{year:"1994",value:5},{year:"1995",value:4.9},{year:"1996",value:6},{year:"1997",value:7},{year:"1998",value:9},{year:"1999",value:13}];return a.a.createElement(u.a,{breadcrumbList:[{name:"\u9996\u9875"}]},"\u9996\u9875 // \u7ad9\u70b9\u76d1\u63a7 \u7ad9\u70b9\u603b\u89c8 \u7ad9\u70b9\u7edf\u8ba1",a.a.createElement("div",{ref:n}))},c=n(942),f=n(917);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?v(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return w}));var w=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return h(v(n=y(this,(e=b(t)).call.apply(e,[this].concat(o)))),"View",i),h(v(n),"Model",c),h(v(n),"SSR",!1),h(v(n),"getArticleList",(function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(n.resHandler((function(){return n.postApi(f.a.getMngArticleList)}),(function(e){n.handleChangeState(e)}),(function(e){})));case 2:case"end":return e.stop()}}))})),n}var r,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(o=[{key:"componentWillCreate",value:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.context.isClient){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(n.e(0).then(n.bind(null,929)));case 3:e=t.sent,this.handleChangeState({g2plot:e});case 5:case"end":return t.stop()}}),null,this)}},{key:"componentDidFirstMount",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))}}])&&p(r.prototype,o),a&&p(r,a),t}(r.a)}}]);