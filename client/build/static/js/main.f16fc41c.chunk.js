(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(35),i=n.n(a),s=(n(44),n(45),n(38)),o=n(16),u=n(21),j=n(39),d=n(36),l=n(37),b=n(0);var h=function(e){var t=e.id,n=e.username,c=e.text;return Object(b.jsx)("div",{className:"tweet",children:Object(b.jsx)("a",{href:"https://twitter.com/".concat(n,"/status/").concat(t),children:Object(b.jsxs)("div",{children:[function(){for(var e=c.split(/(\b#PandoraPapers+\b)/gi),t=1;t<e.length;t+=2)e[t]=Object(b.jsx)("strong",{children:e[t]},t);return Object(b.jsx)("p",{children:e})}(),Object(b.jsx)("span",{children:n})]})})})},f=(n(78),function(e){var t=e.data,n=e.index,a=e.setSize,i=Object(c.useRef)();return r.a.useEffect((function(){a(n,i.current.getBoundingClientRect().height)}),[a,n]),Object(b.jsx)("div",{ref:i,children:Object(b.jsx)(h,{id:t[n].id,username:t[n].username,text:t[n].text})})});var m=function(e){var t=e.className,n=Object(c.useState)([]),r=Object(j.a)(n,2),a=r[0],i=r[1],h=Object(c.useRef)(),m=Object(c.useRef)({}),x=Object(c.useCallback)((function(e,t){m.current=Object(u.a)(Object(u.a)({},m.current),{},Object(o.a)({},e,t)),h.current.resetAfterIndex(e)}),[]),O=function(e){return m.current[e]||50};return Object(c.useEffect)((function(){var e=Object(d.io)();e.on("connect",(function(){console.log("Connected to server...")})),e.on("tweet",(function(e){var t={id:e.data.id,text:e.data.text,username:"@".concat(e.includes.users[0].username)};i((function(e){return[t].concat(Object(s.a)(e))}))}))}),[]),Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsx)("h2",{className:"mt-4 text-secondary",children:"#PandoraPapers"}),Object(b.jsx)("div",{className:"tweet-displayer-wrapper ".concat(t),children:function(){if(a.length>0)return Object(b.jsx)(l.a,{ref:h,height:400,width:"100%",itemCount:a.length,itemSize:O,itemData:a,children:function(e){var t=e.data,n=e.index,c=e.style;return Object(b.jsx)("div",{style:c,children:Object(b.jsx)(f,{data:t,index:n,setSize:x})})}})}()})]})};var x=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"d-flex flex-column min-vh-100 justify-content-center align-items-center",children:[Object(b.jsxs)("p",{className:"text-white font-bold",children:["Domain ",Object(b.jsx)("a",{href:"https://".concat(document.location.hostname),className:"text-warning",children:document.location.hostname})," is for sale!"]}),Object(b.jsx)("a",{href:"mailto:puchmertl.michal12@gmail.com?subject=Domain%20inquiry%20-%20pandora-papers.eu",children:Object(b.jsx)("button",{className:"btn btn-warning",children:"Send inquiry"})}),Object(b.jsx)(m,{})]})})};i.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.f16fc41c.chunk.js.map