(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},16:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),i=a.n(l),r=(a(15),a(4)),s=(a(16),a(9)),u=a.n(s),o=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("img",{className:"navbar__img",src:u.a}),c.a.createElement("div",{className:"navbar__title-wrapper"},c.a.createElement("h2",{className:"navbar__title"},"Sunset Hills ",c.a.createElement("span",{className:"navbar__subtitle"},"Challenge"))))},m=function(e){var t=e.setList,a=e.setFormActive,l=Object(n.useState)(""),i=Object(r.a)(l,2),s=i[0],u=i[1];return Object(n.useEffect)((function(){var e=s.match(/-?\d+/g);if(e){var a=e.slice(0,20).map((function(e){var t=parseInt(e);return t<1?1:t>15?15:t}));t(a)}}),[s]),c.a.createElement("div",{className:"form"},c.a.createElement("p",{className:"form__instructions"},"Which buildings will get to see today's beautiful sunset? Please enter the building heights below, separated by comma, space, or whatever you'd like to use! ",c.a.createElement("br",null),"Press Done when you've ready!"),c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{type:"text",className:"form__input",value:s,onChange:function(e){u(e.target.value)},placeholder:"Enter building heights here"}),c.a.createElement("button",{className:"btn--done",onClick:function(){return a(!1)}},"Done!")),c.a.createElement("p",{className:"form__hint"},"Enter up to 20 buildings, with a height value from 1 to 15."))},d=a(2),b=a(3),g=function(e){var t=e.height,a=e.visibility,n=e.index,l=e.formActive,i=e.updateBldg,r=e.deleteBldg,s=a?"linear-gradient(90deg, rgba(247,209,134,1) 0%, rgba(195,122,0,1) 100%)":"linear-gradient(90deg, rgba(106,73,154,1) 0%, rgba(22,0,98,1) 100%)",u={height:"".concat(25*t,"px"),background:s},o=function(e){(-1===e&&t>1||1===e&&t<15)&&i(n,e)};return c.a.createElement("div",null,!l&&c.a.createElement("button",{className:"btn--add",onClick:function(){return o(1)}},c.a.createElement(d.a,{icon:b.c})),c.a.createElement("div",{className:l?"building":"building building--set",style:u},!l&&c.a.createElement("div",{className:"building-hover"},c.a.createElement(d.a,{icon:b.d,onClick:function(){l||r(n)},className:"btn--trash"}))),!l&&c.a.createElement("button",{className:"btn--sub",onClick:function(){return o(-1)}},c.a.createElement(d.a,{icon:b.b})))},v=function(e){var t=e.list,a=void 0===t?[]:t,n=e.updateBldg,l=e.formActive,i=e.addBldg,r=e.deleteBldg,s=-1;return c.a.createElement("div",null,c.a.createElement("div",{className:"buildings__wrapper"},!l&&c.a.createElement("button",{className:"btn--add-bldg",onClick:function(){return i(!0)}},c.a.createElement(d.a,{icon:b.a})),c.a.createElement("div",{className:"buildings"},a.length>0&&a.map((function(e,t){var a=e>s;return s=e>s?e:s,c.a.createElement(g,{key:t,height:e,visibility:a,index:t,updateBldg:n,formActive:l,deleteBldg:r})}))),!l&&c.a.createElement("button",{className:"btn--add-bldg",onClick:function(){return i(!1)}},c.a.createElement(d.a,{icon:b.a}))))};var f=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!0),s=Object(r.a)(i,2),u=s[0],d=s[1];return c.a.createElement("div",{className:"App"},c.a.createElement(o,null),u&&c.a.createElement(m,{setList:l,setFormActive:d}),c.a.createElement(v,{list:a,updateBldg:function(e,t){l(a.map((function(a,n){return n===e?a+t:a})))},formActive:u,addBldg:function(e){if(!(a.length>=20)){var t=e?[1].concat(a):a.concat([1]);l(t)}},deleteBldg:function(e){l(a.slice(0,e).concat(a.slice(e+1)))}}))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/sunset-512.ba69a265.png"}},[[10,1,2]]]);
//# sourceMappingURL=main.f81a4584.chunk.js.map