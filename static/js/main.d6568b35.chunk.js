(this.webpackJsonpbeershowcasefulList=this.webpackJsonpbeershowcasefulList||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(10),s=n.n(i),a=(n(95),n(60),n(8)),r=(n(61),Object(c.createContext)()),l=(n(62),n(2)),o=function(){var e=Object(c.useContext)(r),t=(e.wantedBeer,e.setWantedBeer);return Object(l.jsx)("form",{className:"d-flex justify-content-center beer-form-search",onSubmit:function(e){e.preventDefault()},children:Object(l.jsx)("input",{className:"form-control",type:"text",name:"wantedBeer",onKeyDown:function(e){"Enter"===e.key&&t(e.target.value)},placeholder:"Search..."})})},b=n(48),d=n.n(b),j=(n(82),n(83),function(e){var t=e.image_url,n=e.title;return Object(l.jsx)("div",{className:"item-img-card shake-lr",style:{backgroundImage:"url("+t+")"},title:n})}),u=(n(84),n(120)),O=n(118),m=n(119),h=n(116),x=n(37),p=n.n(x);n(85);function f(e){var t=e.itemName,n=e.itemAccordion,c=function(e){return isNaN(e)?e.replace("_"," "):Number(e)+1},i=function e(t,n){return n?(i=t,"volume,boil_volume,temp,amount".split(",").includes(i)?Object(l.jsx)(h.a,{children:Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"beer-descripttion-bold",children:c(t)}),":"," ",Object(l.jsxs)("span",{className:"beer-descripttion",children:[n.value,n.unit]})]})},Object(u.a)()):"number"===typeof n||"string"===typeof n?Object(l.jsx)(h.a,{children:Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"beer-descripttion-bold",children:c(t)}),": ",Object(l.jsxs)("span",{className:"beer-descripttion",children:[" ",n]})]})},Object(u.a)()):Object(l.jsxs)(O.a,{className:"beer-accordion",children:[Object(l.jsx)(m.a,{expandIcon:Object(l.jsx)(p.a,{}),id:"panel1a-header",className:"beer-accordionsummary",children:Object(l.jsx)("li",{children:Object(l.jsxs)("span",{className:"beer-descripttion-bold",children:[c(t),":"]})})}),Object.keys(n).length?Object.keys(n).map((function(t){return e(t,n[t])})):"No data"]},Object(u.a)())):Object(l.jsx)(h.a,{children:Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"beer-descripttion-bold",children:c(t)}),": ",Object(l.jsx)("span",{className:"beer-descripttion",children:"no data"})]})},Object(u.a)());var i};return Object(l.jsxs)(O.a,{className:"beer-accordion",children:[Object(l.jsx)(m.a,{expandIcon:Object(l.jsx)(p.a,{}),id:"panel1a-header",children:Object(l.jsxs)("span",{className:"beer-descripttion-bold",children:[c(t),":"]})}),Object(l.jsx)("ul",{children:Object.keys(n).length?Object.keys(n).map((function(e){return i(e,n[e])})):"No data"})]},Object(u.a)())}var v=function(e){var t=e.item,n=e.isDetailShown,c=e.detailTextStyle;if(!t)return null;return Object(l.jsx)("ul",{style:c,className:n?"card-text mt-2 beer-det-text-fade-in":"card-text mt-2 beer-det-text-fade-out",children:Object.keys(t).length&&n?Object.keys(t).map((function(e){return function(e,t){return"number"===typeof t||"string"===typeof t?Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"beer-descripttion-bold",children:e.replace("_"," ")}),": ",Object(l.jsxs)("span",{className:"beer-descripttion",children:[" ",t]})]},Object(u.a)()):(n=e,"volume,boil_volume,temp,amount".split(",").includes(n)?Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"beer-descripttion-bold",children:e.replace("_"," ")}),":"," ",Object(l.jsxs)("span",{className:"beer-descripttion",children:[t.value,t.unit]})]},Object(u.a)()):Object(l.jsx)("li",{className:"beer-itemaccordion",children:Object(l.jsx)(f,{itemName:e,itemAccordion:t},Object(u.a)())},Object(u.a)()));var n}(e,t[e])})):"No data"})},N=(n(93),function(e){var t=e.item,n=e.onClickHandler,c=e.isButtonShown,i=e.textButton,s=e.isAtFirst;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t.name}),Object(l.jsx)("h3",{children:t.tagline}),Object(l.jsx)("button",{style:s?{visibility:"hidden"}:void 0,className:c?"btn beer-btn beer-btn-animation-fade-in jello-horizontal":"btn beer-btn beer-btn-animation-fade-out",onClick:n,children:i})]})}),y=function(e){var t=e.beer,n=Object(c.useState)(!1),i=Object(a.a)(n,2),s=i[0],r=i[1],o=Object(c.useState)(!1),b=Object(a.a)(o,2),d=b[0],u=b[1],O=Object(c.useState)("Show details"),m=Object(a.a)(O,2),h=m[0],x=m[1],p=Object(c.useState)(!0),f=Object(a.a)(p,2),y=f[0],w=f[1],S=Object(c.useState)({display:"none",visibility:"hidden"}),g=Object(a.a)(S,2),k=g[0],B=g[1],C=Object(c.useState)(!1),_=Object(a.a)(C,2),A=_[0],E=_[1],H=function(e){x("Hide details"===e?"Hide details":"Show details")};return Object(l.jsx)("div",{className:y?"card":s?"card beer-card-item-zoomed-in":"card beer-card-item-zoomed-out",onMouseEnter:function(){w(!1),d&&"Show details"===h||u(!0),H(h)},onMouseLeave:function(e){w(!1),d&&"Show details"===h&&u(!1),H(h)},children:Object(l.jsxs)("div",{className:"row mx-0\r beer-row-item\r ",children:[Object(l.jsx)("div",{className:"col-md-4 p-0 ",children:Object(l.jsx)(j,{image_url:t.image_url,title:t.name})}),Object(l.jsxs)("div",{className:"col-md-8 card-body beer-card-right",children:[Object(l.jsx)(N,{item:t,onClickHandler:function(){E(!A),r(!s),x("Show details"===h?"Hide details":"Show details"),B("none"===k.display?{display:"block",visibility:"visible"}:{display:"none"})},isButtonShown:d,textButton:h,isAtFirst:y}),Object(l.jsx)(v,{item:t,isDetailShown:A,detailTextStyle:k})]})]})})},w=(n(94),function(){var e=Object(c.useContext)(r).wantedBeer,t=Object(c.useState)([]),n=Object(a.a)(t,2),i=n[0],s=n[1];return Object(c.useEffect)((function(){d.a.get("https://api.punkapi.com/v2/beers").then((function(e){var t=e.data;if(!t.length)throw new Error("The data is not found.");s(t)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsx)("div",{className:"beer-list",children:e?i.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).map((function(e){return Object(l.jsx)(y,{beer:e},e.id)})):i.map((function(e){return Object(l.jsx)(y,{beer:e},e.id)}))})});var S=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(l.jsxs)("div",{className:"App container",children:[Object(l.jsx)("div",{className:"d-flex justify-content-center beer-store-title",children:Object(l.jsx)("h1",{children:"Beer Factory"})}),Object(l.jsxs)(r.Provider,{value:{wantedBeer:n,setWantedBeer:i},children:[Object(l.jsx)(o,{}),Object(l.jsx)(w,{})]})]})};s.a.render(Object(l.jsx)(S,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.d6568b35.chunk.js.map