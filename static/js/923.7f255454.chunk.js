"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[923],{306:function(t,e,r){r.d(e,{Z:function(){return s}});var n="MovieItem_title__5J-tB",a="MovieItem_year__2q2bS",c="MovieItem_posterImg__arUvC",u=r(184);function s(t){var e=t.movie,r=e.title,s=e.poster_path,i=e.release_date;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{loading:"lazy",className:c,src:"https://image.tmdb.org/t/p/w500/".concat(s),alt:r}),(0,u.jsx)("h3",{className:n,children:r}),i&&(0,u.jsx)("p",{className:a,children:new Date(i).getFullYear()})]})}},923:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var n=r(439),a=r(791),c=r(87),u=r(689),s=r(306),i=r(585);var o="Movies_input__cOyYs",f="Movies_wrapper__fbhRc",l=r(184);function p(){var t,e=(0,c.lr)(),r=(0,n.Z)(e,2),p=r[0],v=r[1],m=(0,a.useState)(null),h=(0,n.Z)(m,2),d=h[0],g=h[1],_=null!==(t=p.get("query"))&&void 0!==t?t:"",y=(0,u.TH)(),w=function(t,e){var r=(0,a.useState)(t),c=(0,n.Z)(r,2),u=c[0],s=c[1];return(0,a.useEffect)((function(){var r=setTimeout((function(){s(t)}),e);return function(){clearTimeout(r)}}),[t,e]),u}(_,500);return(0,a.useEffect)((function(){if(!(w.trim().length>1))return g([]);(0,i.Hq)(w).then(g)}),[w]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:"text",value:_,placeholder:"Type a name of movie...",autoComplete:"off",autoFocus:!0,autoCorrect:"off",className:o,onChange:function(t){return function(t){var e=""!==t.trim()?{query:t}:{};v(e)}(t.target.value)}}),d&&(0,l.jsx)("div",{className:f,children:d.map((function(t){return t.poster_path&&(0,l.jsx)(c.rU,{to:"".concat(t.id),state:{from:y},children:(0,l.jsx)(s.Z,{movie:t})},t.id)}))})]})}},585:function(t,e,r){r.d(e,{Hq:function(){return p},IV:function(){return f},Mc:function(){return o},wH:function(){return l},wr:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(243),s=r(264);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmI4NjA0YTQxYTY4ZTc5YTFlOWVlZmM3Mjg0MmVjMSIsInN1YiI6IjY0NzBlMjY4MTNhMzIwMDBkY2Y5MGEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RsXnr-598oJBtRU8ad6qDSzA1gOYtXAbicSLwSyV3Kk";var i=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("trending/movie/day");case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.failure("".concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.failure("".concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/credits"));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.failure("".concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/reviews"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.failure("".concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("search/movie?query=".concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),s.Notify.failure("".concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=923.7f255454.chunk.js.map