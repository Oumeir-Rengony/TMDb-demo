(this["webpackJsonptmdb-react-router-demo"]=this["webpackJsonptmdb-react-router-demo"]||[]).push([[0],{12:function(e,t,c){e.exports={overlay:"Overlay_overlay__34b3j",overlay_active:"Overlay_overlay_active__2N_TO",info:"Overlay_info__2sduE"}},13:function(e,t,c){e.exports={wrapper_dropdown:"Categories_wrapper_dropdown__2cETi",dropdown:"Categories_dropdown__2PWtI",dropdown_active:"Categories_dropdown_active__3wY7F"}},16:function(e,t,c){e.exports={Wrapper:"App_Wrapper__2ribl",movie_container:"App_movie_container__1MNi9"}},17:function(e,t,c){e.exports={container:"Movies_container__64aDi",poster:"Movies_poster__15EcD"}},18:function(e,t,c){e.exports={navbar:"Navbar_navbar__ZlzRC",logo:"Navbar_logo__E_On9"}},38:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),o=c(30),i=c.n(o),s=c(9),j=(c(38),c(8)),l=c(2),d=c(31),p=c.n(d),b=c(16),u=c.n(b),O=c(17),_=c.n(O),v="https://api.themoviedb.org/3/movie",x="feb6f0eeaa0a72662967d77079850353",m=c(12),h=c.n(m),g=c.p+"static/media/info.0ac460cb.svg",f=function(e){var t=e.movie,c=Object(a.useState)(!1),r=Object(j.a)(c,2),o=r[0],i=r[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:g,className:h.a.info,onClick:function(){return i((function(e){return!e}))},alt:"information"}),Object(n.jsxs)("div",{className:"".concat(h.a.overlay," ").concat(o?h.a.overlay_active:null),children:[Object(n.jsx)("h2",{children:t.title}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:t.overview})]})]})},w=function(e){var t=e.movies;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsxs)("div",{className:_.a.container,children:[Object(n.jsx)("img",{src:(t=e.poster_path,"".concat("https://image.tmdb.org/t/p/w300","/").concat(t)),className:_.a.poster,alt:"poster"}),Object(n.jsx)(f,{movie:e})]},e.id);var t}))})},y=c(18),N=c.n(y),C=c(13),S=c.n(C),k=function(){var e=Object(a.useState)("Popular"),t=Object(j.a)(e,2),c=t[0],r=t[1],o=Object(a.useState)(!1),i=Object(j.a)(o,2),l=i[0],d=i[1],p=function(e){r(e.target.innerText)};return Object(n.jsxs)("div",{className:S.a.wrapper_dropdown,onClick:function(){return d((function(e){return!e}))},children:[Object(n.jsx)("span",{children:c}),Object(n.jsxs)("ul",{className:"".concat(S.a.dropdown," ").concat(l?S.a.dropdown_active:null),children:[Object(n.jsx)("li",{onClick:p,children:Object(n.jsx)(s.b,{to:"/",children:"Popular"})}),Object(n.jsx)("li",{onClick:p,children:Object(n.jsx)(s.b,{to:"/upcoming",children:"Upcoming"})}),Object(n.jsx)("li",{onClick:p,children:Object(n.jsx)(s.b,{to:"/toprated",children:"TopRated"})})]})]})},E=c.p+"static/media/clapperboard.a4d989bf.svg",F=function(){return Object(n.jsxs)("div",{className:N.a.navbar,children:[Object(n.jsxs)("div",{className:N.a.logo,children:[Object(n.jsx)("img",{src:E,alt:"icon"}),Object(n.jsx)("span",{children:"MOVIES"})]}),Object(n.jsx)(k,{})]})};var P=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],o=Object(a.useState)([]),i=Object(j.a)(o,2),s=i[0],d=i[1],b=Object(a.useState)([]),O=Object(j.a)(b,2),_=O[0],m=O[1];return Object(a.useEffect)((function(){var e=["".concat(v,"/popular?api_key=").concat(x,"&language=en-US&page=1"),"".concat(v,"/upcoming?api_key=").concat(x,"&language=en-US&page=1"),"".concat(v,"/top_rated?api_key=").concat(x,"&language=en-US&page=1")].map((function(e){return p.a.get(e)}));Promise.all(e).then((function(e){r(e[0].data.results),d(e[1].data.results),m(e[2].data.results)})).catch((function(e){return e}))}),[]),Object(n.jsxs)("div",{id:u.a.Wrapper,children:[Object(n.jsx)(F,{}),Object(n.jsx)("div",{className:u.a.movie_container,children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",exact:!0,children:Object(n.jsx)(w,{movies:c})}),Object(n.jsx)(l.a,{path:"/upcoming",children:Object(n.jsx)(w,{movies:s})}),Object(n.jsx)(l.a,{path:"/toprated",children:Object(n.jsx)(w,{movies:_})})]})})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(s.a,{children:Object(n.jsx)(P,{})})}),document.getElementById("root")),T()}},[[62,1,2]]]);
//# sourceMappingURL=main.71a12fe8.chunk.js.map