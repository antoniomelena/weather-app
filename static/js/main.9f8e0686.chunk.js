(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(6),r=c.n(n),i=(c(12),c(13),c(5)),j=c.n(i),b=c(7),d=c(3),h=(c(15),c.p+"static/media/logo.4595304d.png"),l=c(1),o=c(0);var O=function(){var e,t=Object(s.useState)("Austin"),c=Object(d.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(""),i=Object(d.a)(r,2),O=i[0],u=i[1],m=Object(s.useState)(""),x=Object(d.a)(m,2),p=x[0],N=x[1],w=Object(s.useState)(""),g=Object(d.a)(w,2),f=g[0],v=g[1],y=Object(s.useState)(""),S=Object(d.a)(y,2),k=S[0],C=S[1],M=Object(s.useState)(""),A=Object(d.a)(M,2),L=A[0],E=A[1],_=Object(s.useState)(""),q=Object(d.a)(_,2),D=q[0],H=q[1],I=Object(s.useState)(""),J=Object(d.a)(I,2),P=J[0],B=J[1],F=Object(s.useState)(""),U=Object(d.a)(F,2),W=U[0],z=U[1],G=Object(s.useState)(""),K=Object(d.a)(G,2),Q=K[0],R=K[1],T=Object(s.useState)(!0),V=Object(d.a)(T,2),X=V[0],Y=V[1];function Z(){return $.apply(this,arguments)}function $(){return($=Object(b.a)(j.a.mark((function e(){var t,c,s,n,r,i,b,d,h,l,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&units=").concat(X?"imperial":"metric","&APPID=e395dd8336d145da909e963c0606d556"),{mode:"cors"});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s=c.name,n=c.main.humidity,r=c.main.feels_like,i=c.main.temp,b=c.main.temp_max,d=c.main.temp_min,h=c.weather[0].description,l=c.wind.speed,o=c.weather[0].icon,u(s),v(h),C(r),E(n),N(i),B(d),H(b),z(l),R(o),e.next=31;break;case 27:e.prev=27,e.t0=e.catch(0),R("na"),console.log("Error happened: ",e.t0);case 31:case"end":return e.stop()}}),e,null,[[0,27]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){return Z(),function(){}}),[X,O]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:Object(o.jsx)("img",{src:h,height:"45"})}),Object(o.jsxs)("div",{className:"input-group input-group-sm my-2",children:[Object(o.jsx)("input",{id:"search-bar",type:"search",onChange:function(e){n(e.target.value)},className:"form-control text-light bg-dark",placeholder:"Search...","aria-label":"Search","aria-describedby":"search-addon"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-secondary",onClick:Z,children:"enter"})]}),Object(o.jsxs)("button",{onClick:function(){Y(!X)},type:"button",className:"btn btn-light",children:[Object(o.jsx)(l.a,{})," / ",Object(o.jsx)(l.h,{})]})]}),Object(o.jsxs)("main",{className:"row",children:[Object(o.jsxs)("div",{className:"container main-text",children:[Object(o.jsx)("p",{children:function(e){switch(e){case"01d":return Object(o.jsx)(l.f,{className:"weather-icon day"});case"01n":return Object(o.jsx)(l.p,{className:"weather-icon night"});case"02d":return Object(o.jsx)(l.d,{className:"weather-icon day"});case"02n":return Object(o.jsx)(l.l,{className:"weather-icon night"});case"03d":return Object(o.jsx)(l.b,{className:"weather-icon day"});case"03n":return Object(o.jsx)(l.b,{className:"weather-icon night"});case"04d":return Object(o.jsx)(l.c,{className:"weather-icon day"});case"04n":return Object(o.jsx)(l.c,{className:"weather-icon night"});case"09d":case"10d":return Object(o.jsx)(l.e,{className:"weather-icon day"});case"09n":return Object(o.jsx)(l.o,{className:"weather-icon night"});case"10n":return Object(o.jsx)(l.n,{className:"weather-icon night"});case"11d":return Object(o.jsx)(l.g,{className:"weather-icon day"});case"11n":return Object(o.jsx)(l.m,{className:"weather-icon night"});case"13d":return Object(o.jsx)(l.r,{className:"weather-icon day"});case"13n":return Object(o.jsx)(l.r,{className:"weather-icon night"});case"50d":return Object(o.jsx)(l.i,{className:"weather-icon day"});case"50n":return Object(o.jsx)(l.q,{className:"weather-icon night"});default:return Object(o.jsx)(l.k,{className:"weather-icon day"})}}(Q)}),Object(o.jsx)("h3",{children:O}),Object(o.jsxs)("h1",{children:[Math.round(p),Object(o.jsx)("sup",{children:X?Object(o.jsx)(l.h,{}):Object(o.jsx)(l.a,{})})]}),Object(o.jsx)("h2",{children:(e=f,""===e||0===e.length?"":e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" "))})]}),Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsx)("h4",{children:"Details"}),Object(o.jsxs)("div",{className:"grid-item",children:[Object(o.jsx)(l.u,{className:"sidebar-icon"}),Object(o.jsx)("p",{children:"Feels Like "}),Object(o.jsxs)("p",{className:"sidebar-info",children:[Math.round(k),Object(o.jsx)("sup",{children:X?Object(o.jsx)(l.h,{}):Object(o.jsx)(l.a,{})})]})]}),Object(o.jsxs)("div",{className:"grid-item",children:[Object(o.jsx)(l.j,{className:"sidebar-icon"}),Object(o.jsx)("p",{children:"Humidity"}),Object(o.jsxs)("p",{className:"sidebar-info",children:[L,"%"]})]}),Object(o.jsxs)("div",{className:"grid-item",children:[Object(o.jsx)(l.s,{className:"sidebar-icon"}),Object(o.jsx)("p",{children:"Wind Speed"}),Object(o.jsx)("div",{className:"wind",children:Object(o.jsxs)("p",{className:"wind-degrees sidebar-info",children:[W," ",X?"mph":"knots"]})})]}),Object(o.jsxs)("div",{className:"grid-item",children:[Object(o.jsx)(l.t,{className:"sidebar-icon"}),Object(o.jsx)("p",{children:"High | Low"}),Object(o.jsxs)("p",{className:"sidebar-info",children:[Math.round(D),Object(o.jsx)("sup",{children:X?Object(o.jsx)(l.h,{}):Object(o.jsx)(l.a,{})}),"|",Math.round(P),Object(o.jsx)("sup",{children:X?Object(o.jsx)(l.h,{}):Object(o.jsx)(l.a,{})})]})]})]})]})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9f8e0686.chunk.js.map