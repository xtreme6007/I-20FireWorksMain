(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{195:function(e,t,n){},196:function(e,t,n){},228:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=(n(195),n.p,n(196),n(175)),s=n(15),l=(n(197),n(33)),d=n(13),u=n(37),j=n.n(u),b=n(122),p=n.n(b),h=n(170),O=n(2);function g(e,t){var n=t.defaultImage,c=Object(a.useRef)(null),r=Object(a.useRef)(null),i=Object(a.useState)(n),o=Object(d.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(0),j=Object(d.a)(u,2),b=j[0],g=j[1];function m(){return(m=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&r.current.click();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){console.log("handleFiles"),console.log(e);for(var t=0;t<e.length;t++)console.log(e[t]),f(e[t])}function f(t){var n=new XMLHttpRequest,a=new FormData;n.open("POST","https://api.cloudinary.com/v1_1/prestoncloud/upload",!0),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.upload.addEventListener("progress",(function(e){g(Math.round(100*e.loaded/e.total)),console.log(Math.round(100*e.loaded/e.total))})),n.onreadystatechange=function(e){if(4==n.readyState&&200==n.status){var t=JSON.parse(n.responseText);l(t.secure_url),console.log(t.secure_url)}},a.append("upload_preset","zp65iguw"),a.append("tags","browser_upload"),a.append("file",t),a.append("api_key","518654398293358"),a.append("public_id",e.prodName),n.send(a)}return Object(a.useEffect)((function(){function e(e){e.stopPropagation(),e.preventDefault()}function t(e){e.stopPropagation(),e.preventDefault()}function n(e){e.stopPropagation(),e.preventDefault(),x(e.dataTransfer.files)}return c.current.addEventListener("dragenter",e,!1),c.current.addEventListener("dragover",t,!1),c.current.addEventListener("drop",n,!1),function(){c.current.removeEventListener("dragenter",e),c.current.removeEventListener("dragover",t),c.current.removeEventListener("drop",n)}}),[]),Object(O.jsx)("div",{ref:c,children:s?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("img",{className:"rounded-lg",src:s.replace("upload/","upload/w_600/"),style:{height:400,width:600}})}):Object(O.jsxs)("div",{className:"bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg",style:{height:400,width:600},children:[0===b?Object(O.jsxs)("div",{className:"text-gray-700 text-center",style:{borderStyle:"dotted",width:"25%",justifyContent:"center",alignItems:"center",position:"fixed",margin:"10% auto"},children:[Object(O.jsx)("div",{children:"Drag and Drop assets here"}),Object(O.jsx)("div",{className:"my-2",children:"or"}),Object(O.jsx)("button",{className:"bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto",onClick:function(){return m.apply(this,arguments)},type:"button",children:"Browse"})]}):Object(O.jsxs)("span",{className:"text-gray-700",children:[b,"%"]}),Object(O.jsx)("input",{ref:r,type:"file",accept:"image/*",style:{display:"none"},onChange:function(e){return x(e.target.files)}})]})})}var m=n(176),x=n(386),f=n(408),v=n(406),y=n(393);function w(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),o=i[0],s=i[1];Object(a.useEffect)((function(){l(),u()}),[]);var l=function(){j.a.get("/api/getBrands").then((function(e){c(e.data),console.log(n)}))},u=function(){j.a.get("/api/getCategories").then((function(e){s(e.data),console.log("CATLIST",o)}))},b=Object(m.a)({initialValues:{productName:"",description:"",brand:"",category:"",price:"",url:"",files:""},onSubmit:function(e){j.a.post("/api/admin/postNew",{name:b.values.productName,category:b.values.category,brand:b.values.brand,price:b.values.price,previewUrl:b.values.url,description:b.values.description})}});return Object(O.jsxs)(x.a,{maxWidth:"sm",style:{backgroundColor:"green",borderRadius:"80px",marginTop:"25px"},children:[Object(O.jsx)("h1",{children:"Upload Product Form"}),Object(O.jsxs)("form",{onSubmit:b.handleSubmit,children:[Object(O.jsx)(f.a,{id:"productName",name:"productName",type:"text",onChange:b.handleChange,value:b.values.productName,label:"Product Name"}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{id:"description",name:"description",type:"text",onChange:b.handleChange,value:b.values.description,label:"Description"}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{id:"brand",name:"brand",type:"text",onChange:b.handleChange,value:b.values.brand,label:"Brand"}),Object(O.jsx)("br",{}),Object(O.jsx)(v.a,{id:"category",name:"category",type:"text",onChange:b.handleChange,value:b.values.category,label:"Category",style:{width:"30%"},children:o.map((function(e){return Object(O.jsx)(y.a,{value:e.Type,children:e.Type})}))}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{id:"price",name:"price",type:"text",onChange:b.handleChange,value:b.values.price,label:"Price"}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{id:"url",name:"url",type:"text",onChange:b.handleChange,value:b.values.url,label:"Preview Url"}),Object(O.jsx)("br",{}),Object(O.jsx)(g,{prodName:b.values.productName,value:b.values.files,onChange:b.handleChange}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]})]})}var k=n(66),C=n(74);function S(){var e=Object(l.b)(),t=e.loginWithRedirect,n=e.isAuthenticated,a=e.logout;return Object(O.jsxs)(C.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top",children:[Object(O.jsx)(C.a.Brand,{href:"/",children:"I-20 Fireworks"}),Object(O.jsx)(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(C.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsx)(k.a,{className:"mr-auto",children:Object(O.jsx)(k.a.Link,{href:"/search",children:"Shop"})}),Object(O.jsxs)(k.a,{children:[Object(O.jsx)(k.a.Link,{href:"#deets",onClick:function(){n?a():t()},children:n?"LogOut":"Login"}),Object(O.jsx)(k.a.Link,{eventKey:2,href:"#memes",children:"Dank memes"})]})]})]})}n(228);var N=n(394);function L(){var e=Object(l.b)().loginWithRedirect;return Object(O.jsx)("button",{onClick:function(){e()},name:"login",children:"Log In"})}function F(){var e=Object(l.b)().logout;return Object(O.jsx)("button",{onClick:function(){e()},children:"Log Out"})}function R(){return Object(O.jsxs)("div",{className:"hero-container",style:{backgroundImage:"url(/assets/images/headerImagecopy.jpeg) center center/cover no-repeat"},children:[Object(O.jsx)("img",{src:"/assets/images/headerImagecopy.jpeg"}),Object(O.jsxs)("div",{className:"hero-info",style:{borderRadius:"100px"},children:[Object(O.jsx)("h1",{children:"I-20 Fireworks"}),Object(O.jsx)("p",{children:"Located in Van Texas we are a locally owned firework stand with the goal of serving the DFW communitys as convient as possible. With that goal we are proud to announce that we will be offering delivery to most DFW locations this season. With an assortment of options from Noveltiey Items, Fountains, Amazing Aerial Explosions and more we gurantee our products are of the higesht quality. In order to place an order checkout the how it works tab."}),Object(O.jsxs)("div",{className:"hero-btns",children:[Object(O.jsx)(N.a,{variant:"contained",color:"default",style:{margin:"1%"},children:"How It Works"}),Object(O.jsx)(N.a,{variant:"contained",color:"primary",href:"/search",children:"Start Shopping"}),Object(O.jsx)(L,{}),Object(O.jsx)(F,{})]})]})]})}var I=n(128),E=(n(229),n(396)),T=n(397),P=n(400),_=n(399),W=n(398),B=n(97),D=n(395),A=new(n(11).Cloudinary)({cloud_name:"prestonscloud"}),U=Object(D.a)({root:{maxWidth:"100%",margin:"10px"},media:{height:140,maxWidth:345}});function q(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=(n[0],n[1],U());return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(E.a,{className:c.root,children:[Object(O.jsxs)(T.a,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(W.a,{className:c.media,image:A.url(e.name),title:"Contemplative Reptile"})}),Object(O.jsxs)(_.a,{children:[Object(O.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{textAlign:"center"},children:e.name}),Object(O.jsx)(B.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",style:{maxWidth:"75%",color:"blue",textAlign:"center",marginLeft:"auto",marginRight:"auto"},children:e.category}),Object(O.jsx)(B.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",style:{maxWidth:"75%",color:"green",textAlign:"center",marginLeft:"auto",marginRight:"auto"},children:e.brand}),Object(O.jsxs)(B.a,{variant:"body2",color:"textSecondary",component:"p",style:{textAlign:"center"},children:["$ ",e.price,"/ Per Unit"]})]})]}),Object(O.jsxs)(P.a,{children:[e.preview_link?Object(O.jsx)(N.a,{size:"small",color:"primary",href:e.preview_link,children:"View Video"}):null,Object(O.jsx)(N.a,{size:"small",color:"primary",children:"Learn More"})]})]})})})}var H=n(174),M=n(123),z=n(38),J=n(24),V=n(404),X=n(405),Q=n(179),Y=n(173),K=n.n(Y),G=n(4),Z=n(409),$=n(392),ee=n(403),te=n(342),ne=n(401),ae=n(125),ce=n.n(ae),re=n(124),ie=n.n(re),oe=n(402),se=Object(D.a)((function(e){return{list:{width:250},fullList:{width:"auto"},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(z.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(z.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(J.b)(e.palette.common.black,.15),"&:hover":{backgroundColor:Object(J.b)(e.palette.common.black,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"black"},inputInput:Object(z.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(z.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(z.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function le(e){var t=se(),n=c.a.useState(null),r=Object(d.a)(n,2),i=r[0],o=(r[1],c.a.useState(null)),s=Object(d.a)(o,2),l=s[0],u=(s[1],c.a.useState(0)),b=Object(d.a)(u,2),p=(b[0],b[1],c.a.useState(!0)),h=Object(d.a)(p,2),g=(h[0],h[1],c.a.useState(!0)),m=Object(d.a)(g,2),x=m[0],f=m[1],v=c.a.useState(!0),y=Object(d.a)(v,2),w=y[0],k=(y[1],c.a.useState({left:!1})),C=Object(d.a)(k,2),S=C[0],L=C[1],F=Object(a.useState)([]),R=Object(d.a)(F,2),I=R[0],E=R[1],T=Object(a.useState)([]),P=Object(d.a)(T,2),_=P[0],W=P[1];Boolean(i),Boolean(l);Object(a.useEffect)((function(){j.a.get("/api/getBrands").then((function(e){W(e.data)})),j.a.get("/api/getCategories").then((function(e){E(e.data)}))}),[]);var B=function(t,n){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&(L(Object(M.a)(Object(M.a)({},S),{},Object(z.a)({},t,n))),!0===n&&e.drawerHandle())}},D=function(){f(!x)},A=function(n){return Object(O.jsxs)("div",{className:Object(G.a)(t.list,Object(z.a)({},t.fullList,"top"===n||"bottom"===n)),role:"presentation",onKeyDown:B(n,!1),children:[Object(O.jsxs)($.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.root,children:[Object(O.jsxs)(te.a,{button:!0,onClick:D,children:[Object(O.jsx)(ne.a,{primary:"Brands"}),x?Object(O.jsx)(ie.a,{}):Object(O.jsx)(ce.a,{})]}),Object(O.jsx)(oe.a,{in:x,timeout:"auto",unmountOnExit:!0,children:Object(O.jsx)($.a,{component:"div",disablePadding:!0,children:Object(O.jsx)("div",{children:_.map((function(t){return Object(O.jsxs)("li",{children:[" ",Object(O.jsx)("input",{type:"checkbox",value:t.brand_name,onChange:function(){e.onFilter(t.brand_name)}}),t.brand_name]},t.brand_name)}))})})})]}),Object(O.jsx)(ee.a,{}),Object(O.jsxs)($.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.root,children:[Object(O.jsxs)(te.a,{button:!0,onClick:D,children:[Object(O.jsx)(ne.a,{primary:"Categories"}),w?Object(O.jsx)(ie.a,{}):Object(O.jsx)(ce.a,{})]}),Object(O.jsx)(oe.a,{in:x,timeout:"auto",unmountOnExit:!0,children:Object(O.jsx)($.a,{component:"div",disablePadding:!0,children:Object(O.jsx)("div",{children:I.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{type:"checkbox",value:t.Type,onClick:function(){return e.categoryFilter(t.Type)}}),t.Type]},t.Type)}))})})})]}),Object(O.jsx)(ee.a,{})]})};return Object(O.jsx)("div",{className:t.grow,children:Object(O.jsx)(V.a,{position:"static",style:{backgroundColor:"#FF000000",border:"none",box:"0,0,0,0",boxShadow:"none"},children:Object(O.jsxs)(X.a,{children:[Object(O.jsx)("div",{children:["left"].map((function(e){return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)(N.a,{onClick:B(e,!0),children:"Filter"}),Object(O.jsx)(Z.a,{anchor:e,open:S[e],onClose:B(e,!1),children:A(e)})]},e)}))}),Object(O.jsxs)("div",{className:t.search,children:[Object(O.jsx)("div",{className:t.searchIcon,children:Object(O.jsx)(K.a,{})}),Object(O.jsx)(Q.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(t){return e.query(t.target.value)}})]}),Object(O.jsx)(N.a,{color:"primary",onClick:e.searchSubmit,children:"Search"}),Object(O.jsx)("div",{className:t.grow})]})})})}n(339);function de(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),o=i[0],s=i[1],l=Object(a.useState)([]),u=Object(d.a)(l,2),b=u[0],p=u[1],h=Object(a.useState)({}),g=Object(d.a)(h,2),m=(g[0],g[1],Object(a.useState)("")),f=Object(d.a)(m,2),v=f[0],y=f[1],w=Object(a.useState)(""),k=Object(d.a)(w,2),C=k[0],S=k[1];Object(a.useEffect)((function(){j.a.get("/api/getProducts").then((function(e){console.log(e.data),c(e.data)})),console.log("QUERY",v),console.log("QUERY FILTER",C)}),[o,b]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(x.a,{maxWidth:"md",children:[Object(O.jsx)(le,{onFilter:function(e){if(o.includes(e)){var t=o.filter((function(t){return t!=e})).map((function(e){return e}));s(t),console.log("NewList",t)}else s([].concat(Object(I.a)(o),[e]))},brandFilter:o,categoryFilter:function(e){if(b.includes(e)){var t=b.filter((function(t){return t!=e})).map((function(e){return e}));p(t),console.log("NewList",t)}else p([].concat(Object(I.a)(b),[e]));console.log(b)},drawerHandle:function(){s([]),p([])},query:function(e){y(e),console.log(v)},searchSubmit:function(){s([]),p([]),S(v)}}),Object(O.jsx)(H.a,{children:n.map((function(e){if((o.includes(e.brand)||0===o.length)&&(b.includes(e.category)||0===b.length)&&(e.name.includes(v)||e.brand.includes(v)||C==e.category||""==C))return Object(O.jsx)(q,{name:e.name,preview_link:e.preview_link,description:e.description&&e.description,price:e.price&&e.price,brand:e.brand,category:e.category})}))})]})})}function ue(){return Object(O.jsx)(O.Fragment,{})}var je=function(){var e=Object(l.b)(),t=(e.loginWithRedirect,e.user),n=e.isAuthenticated;return e.getAccessTokenWithPopup,Object(a.useEffect)((function(){})),Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(S,{}),Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",children:Object(O.jsx)(R,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/admin/postNew",children:n&&"xtreme6007"===t.nickname?Object(O.jsx)(w,{}):null}),Object(O.jsx)(s.a,{exact:!0,path:"/myProfile",children:n?Object(O.jsx)(ue,{user:t}):null}),Object(O.jsx)(s.a,{path:"/search",children:Object(O.jsx)(de,{})})]})]})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(l.a,{domain:"dev-voz6o06c.us.auth0.com",clientId:"7UFJSuga2qUjZQYwXbTL9PgcitCd965O",redirectUri:window.location.origin,children:Object(O.jsx)(je,{})}),document.getElementById("root")),be()}},[[341,1,2]]]);
//# sourceMappingURL=main.6545de59.chunk.js.map