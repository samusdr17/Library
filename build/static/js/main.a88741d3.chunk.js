(this.webpackJsonpchallengewink=this.webpackJsonpchallengewink||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),i=n.n(c),s=n(10),r=n.n(s);n(101),n(102);var o=n(82),l=n(12),j=n(29),b=n(30),d=n(35),h=n(179),u=n(25),p=n(182),O=n(183),x=n(185),g=n(181),m=n(186),v=n(187),f=n(184),w=n(177),I=n(180),N=n(65),k=n.n(N),C=n(67),P=n.n(C),S=n(66),R=n.n(S),L=n(64),y=n.n(L),D=(n(73),n(178)),M=n(188),A=n(189),F=n(60),B=n.n(F),E=n(174),T=n(191);var z=function(e){Object(c.useEffect)((function(){console.log("Componente actualizado")}));var t=Object(c.useState)({windowInfo:!1}),n=Object(b.a)(t,2);return n[0],n[1],Object(a.jsx)("div",{className:"divCard",children:Object(a.jsx)("div",{className:"card col-lg-12",children:Object(a.jsx)(B.a,{variant:"popover",popupId:"demo-popup-popover",children:function(t){return Object(a.jsxs)("div",{className:"responsive",children:[Object(a.jsx)(E.a,Object(j.a)(Object(j.a)({className:"buttonCard"},Object(F.bindTrigger)(t)),{},{children:Object(a.jsx)(w.a,{elevation:3,className:"paper",children:Object(a.jsx)("img",{src:e.image})})})),Object(a.jsx)(A.a,Object(j.a)(Object(j.a)({},Object(F.bindPopover)(t)),{},{anchorOrigin:{vertical:"center",horizontal:"left"},transformOrigin:{vertical:"center",horizontal:"left"},children:Object(a.jsxs)(M.a,{p:2,children:[Object(a.jsxs)(D.a,{children:[Object(a.jsx)("h3",{className:"title",children:e.title}),Object(a.jsxs)("div",{className:"popupMarco",children:[Object(a.jsxs)("p",{className:"popupPcursive",children:[Object(a.jsx)("strong",{children:"Subtitle: "}),e.subtitle]}),Object(a.jsxs)("h4",{className:"h4 end",children:[Object(a.jsx)("strong",{children:"Authors: "}),e.authors]}),Object(a.jsxs)("p",{className:"popupPcursive",children:[Object(a.jsx)("strong",{children:"Publisher: "}),e.publisher]}),Object(a.jsx)(M.a,{component:"fieldset",mb:3,borderColor:"transparent",children:Object(a.jsx)(T.a,{name:"read-only",value:e.averageRating,readOnly:!0})}),Object(a.jsxs)("p",{className:"popupPcursive",children:[Object(a.jsx)("strong",{children:"pages: "}),e.pageCount]})]})]}),Object(a.jsx)(E.a,{size:"medium",href:e.previewLink,variant:"contained",color:"primary",children:"Read book"})]})}))]})}})})})},J=(n(125),n(190)),U=n(81),W=n.n(U),Y=n(11),q=n.p+"static/media/library-book-pngrepo-com.431de86c.png",G=Object(h.a)((function(e){return{root:{flexGrow:1},search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Y.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),X=Object(h.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function H(e){var t=X(),n=Object(u.a)(),c=e.count,i=e.page,s=e.rowsPerPage,r=e.onChangePage;return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(I.a,{onClick:function(e){r(e,0)},disabled:0===i,"aria-label":"first page",children:"rtl"===n.direction?Object(a.jsx)(y.a,{}):Object(a.jsx)(k.a,{})}),Object(a.jsx)(I.a,{onClick:function(e){r(e,i-1)},disabled:0===i,"aria-label":"previous page",children:"rtl"===n.direction?Object(a.jsx)(R.a,{}):Object(a.jsx)(P.a,{})}),Object(a.jsx)(I.a,{onClick:function(e){r(e,i+1)},disabled:i>=Math.ceil(c/s)-1,"aria-label":"next page",children:"rtl"===n.direction?Object(a.jsx)(P.a,{}):Object(a.jsx)(R.a,{})}),Object(a.jsx)(I.a,{onClick:function(e){r(e,Math.max(0,Math.ceil(c/s)-1))},disabled:i>=Math.ceil(c/s)-1,"aria-label":"last page",children:"rtl"===n.direction?Object(a.jsx)(k.a,{}):Object(a.jsx)(y.a,{})})]})}var K=Object(h.a)({table:{minWidth:500}});function Q(){var e,t=i.a.useState([]),n=Object(b.a)(t,2),c=n[0],s=n[1],r=K(),o=G(),l=i.a.useState(0),j=Object(b.a)(l,2),h=j[0],u=j[1],I=i.a.useState(5),N=Object(b.a)(I,2),k=N[0],C=N[1],P=i.a.useState(),S=Object(b.a)(P,2),R=(S[0],S[1],k-Math.min(k,c.length-h*k)),L=i.a.useState({search:"",dataSearch:[]}),y=Object(b.a)(L,2),D=y[0],M=y[1];return i.a.useEffect((function(){M({dataSearch:c})}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("div",{className:"headerRow",children:[Object(a.jsxs)("div",{className:"headerLeft",children:[Object(a.jsx)("h1",{children:"LIBRARY"}),Object(a.jsx)("img",{src:q,className:"iconBook"})]}),Object(a.jsx)("div",{className:"headerRight",children:Object(a.jsxs)("div",{className:o.search,children:[Object(a.jsx)("div",{className:o.searchIcon,children:Object(a.jsx)(W.a,{})}),Object(a.jsx)(J.a,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"},value:D.search,onChange:function(e){e=e.target.value,M({search:e}),""===e?s([]):fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=40&startIndex=0")).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).then((function(e){s(e.items)})).catch((function(e){return console.error(e)}))}})]})})]})}),Object(a.jsx)(g.a,{component:w.a,children:Object(a.jsxs)(p.a,(e={className:r.table,"aria-label":"custom pagination table"},Object(d.a)(e,"className","marginTop"),Object(d.a)(e,"children",[Object(a.jsxs)(O.a,{children:[(k>0?c.slice(h*k,h*k+k):c).map((function(e,t){var n;return Object(a.jsxs)(f.a,{children:[Object(a.jsx)(x.a,{component:"span",align:"center",children:Object(a.jsx)(z,{image:null===(n=e.volumeInfo.imageLinks)||void 0===n?void 0:n.thumbnail,title:e.volumeInfo.title,subtitle:e.volumeInfo.subtitle,authors:e.volumeInfo.authors,publisher:e.volumeInfo.publisher,publishedDate:e.volumeInfo.publishedDate,description:e.volumeInfo.description,pageCount:e.volumeInfo.pageCount,previewLink:e.volumeInfo.previewLink,averageRating:e.volumeInfo.averageRating},t)}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)("h4",{children:"Book Description: "}),e.volumeInfo.description]}),Object(a.jsxs)(x.a,{width:160,children:[Object(a.jsx)("h4",{children:"Year: "}),e.volumeInfo.publishedDate]})]})})),R>0&&Object(a.jsx)(f.a,{style:{height:53*R},children:Object(a.jsx)(x.a,{colSpan:6})})]}),Object(a.jsx)(m.a,{children:Object(a.jsx)(f.a,{children:Object(a.jsx)(v.a,{rowsPerPageOptions:[5,10,15,{label:"All",value:-1}],colSpan:3,count:c.length,rowsPerPage:k,page:h,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){u(t)},onChangeRowsPerPage:function(e){C(parseInt(e.target.value,10)),u(0)},ActionsComponent:H})})})]),e))})]})}var V=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"400 Rut Not Found"})})};n(126);var Z=function(){return Object(a.jsx)("nav",{className:"nav",children:Object(a.jsx)("header",{className:"header"})})};n(127);var $=function(){return Object(a.jsxs)("footer",{class:"footer",children:[Object(a.jsx)("p",{class:"rgb",children:"Copyright \xa9 2021 Samusdr17. Todos los derechos reservados"}),Object(a.jsx)("a",{class:"ancor",href:"http://www.samusdr17.es/cv",children:Object(a.jsx)("p",{children:"Automotive Engineering  ||  Web Full Stack Developer  ||  Data Scientice  ||  UX/UI Design  || Aplication Design"})})]})},_=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(Z,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:Q}),Object(a.jsx)(l.a,{component:V})]}),Object(a.jsx)($,{})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),ee()},73:function(e,t,n){}},[[140,1,2]]]);
//# sourceMappingURL=main.a88741d3.chunk.js.map