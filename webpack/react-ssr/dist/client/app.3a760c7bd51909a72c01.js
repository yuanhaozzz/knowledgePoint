(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(25),u=n.n(c),a=n(36),i=(n(95),n(13)),l=(n(93),n(94),n(53)),s=n.n(l),p=(n(142),n(143)),f=n.n(p),d=n(139);function O(){return(O=f()(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,function(){return n.e(3).then(n.bind(null,141))};case 2:t=e.sent,console.log(t,"222222222222222");case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){O.apply(this,arguments)}();function y(){return o.a.createElement(r.Fragment,null,b.map(function(e){return o.a.createElement(i.Route,e)}))}var b=[{path:"/",component:d.a,exact:!0,key:"login"},{path:"/login",component:d.a,key:"login",exact:!0}],h=n(10),w=n(56),m=(n(63),n(64),n(65),n(66),n(67),n(68),n(35)),g=n.n(m),v=n(18);function E(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(n,!0).forEach(function(e){g()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var P={courseData:{},status:!1,studentInfo:{}};function D(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(n,!0).forEach(function(e){g()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var T={userInfo:null,list:[]},k=Object(h.combineReducers)({course:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:P,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case v.d:return j({},e,{},t.payload);case v.e:case v.a:case v.c:return j({},e,{},t.payload);default:return e}},login:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:T,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case v.b:return S({},e,{payload:t.payload});case v.f:return S({},e,{},t.payload);default:return e}}});function _(){return o.a.createElement(I.Provider,{store:function(){var e=window._REACT_SOTRE?window._REACT_SOTRE:{};return Object(h.createStore)(k,e,Object(h.applyMiddleware)(w.a))}()},o.a.createElement(a.BrowserRouter,null,o.a.createElement(y,null)))}var I=n(52);u.a.hydrate(o.a.createElement(_,null),document.getElementById("root"))},139:function(e,d,O){"use strict";(function(e,n){var t=O(58),r=O.n(t),o=O(59),c=O.n(o),u=O(60),a=O.n(u),i=O(61),l=O.n(i),s=O(62),p=O.n(s),f=function(e){function t(e){return r()(this,t),a()(this,l()(t).call(this,e))}return p()(t,e),c()(t,[{key:"render",value:function(){return n.createElement("div",null,n.createElement("button",{className:"home-submit",onClick:this.handleButton},"按钮"))}}]),t}(e);d.a=f}).call(this,O(0).Component,O(0))},18:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return a}),n.d(t,"f",function(){return i});var r="LOGIN",o="SEND_COURSE_DETAIL",c="SHOW_DIALOG",u="HIDE_DIALOG",a="SELECT_STUDENT",i="TEST"}},[[135,1,2]]]);