(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{192:function(e,t,n){},193:function(e,t,n){},220:function(e,t,n){},226:function(e,t,n){},339:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),i=(n(192),n.p,n(193),n(121)),s=n(15),l=(n(194),n(31)),d=n(13),u=n(36),j=n.n(u),b=n(122),p=n.n(b),h=n(170),O=n(2);function g(e,t){var n=t.defaultImage,c=Object(a.useRef)(null),r=Object(a.useRef)(null),o=Object(a.useState)(n),i=Object(d.a)(o,2),s=i[0],l=i[1],u=Object(a.useState)(0),j=Object(d.a)(u,2),b=j[0],g=j[1];function m(){return(m=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&r.current.click();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){console.log("handleFiles"),console.log(e);for(var t=0;t<e.length;t++)console.log(e[t]),f(e[t])}function f(t){var n=new XMLHttpRequest,a=new FormData;n.open("POST","https://api.cloudinary.com/v1_1/prestoncloud/upload",!0),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.upload.addEventListener("progress",(function(e){g(Math.round(100*e.loaded/e.total)),console.log(Math.round(100*e.loaded/e.total))})),n.onreadystatechange=function(e){if(4==n.readyState&&200==n.status){var t=JSON.parse(n.responseText);l(t.secure_url),console.log(t.secure_url)}},a.append("upload_preset","zp65iguw"),a.append("tags","browser_upload"),a.append("file",t),a.append("api_key","518654398293358"),a.append("public_id",e.prodName),n.send(a)}return Object(a.useEffect)((function(){function e(e){e.stopPropagation(),e.preventDefault()}function t(e){e.stopPropagation(),e.preventDefault()}function n(e){e.stopPropagation(),e.preventDefault(),x(e.dataTransfer.files)}return c.current.addEventListener("dragenter",e,!1),c.current.addEventListener("dragover",t,!1),c.current.addEventListener("drop",n,!1),function(){c.current.removeEventListener("dragenter",e),c.current.removeEventListener("dragover",t),c.current.removeEventListener("drop",n)}}),[]),Object(O.jsx)("div",{ref:c,children:s?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("img",{className:"rounded-lg",src:s.replace("upload/","upload/w_600/"),style:{height:400,width:600}})}):Object(O.jsxs)("div",{className:"bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg",style:{height:400,width:600},children:[0===b?Object(O.jsxs)("div",{className:"text-gray-700 text-center",style:{borderStyle:"dotted",width:"25%",justifyContent:"center",alignItems:"center",position:"fixed",margin:"10% auto"},children:[Object(O.jsx)("div",{children:"Drag and Drop assets here"}),Object(O.jsx)("div",{className:"my-2",children:"or"}),Object(O.jsx)("button",{className:"bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto",onClick:function(){return m.apply(this,arguments)},type:"button",children:"Browse"})]}):Object(O.jsxs)("span",{className:"text-gray-700",children:[b,"%"]}),Object(O.jsx)("input",{ref:r,type:"file",accept:"image/*",style:{display:"none"},onChange:function(e){return x(e.target.files)}})]})})}var m=n(175),x=n(384),f=n(402);n(220);function v(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),o=Object(d.a)(r,2),i=o[0],s=o[1];Object(a.useEffect)((function(){l(),u()}),[]);var l=function(){j.a.get("/api/getBrands").then((function(e){c(e.data),console.log(n)}))},u=function(){j.a.get("/api/getCategories").then((function(e){s(e.data),console.log("CATLIST",i)}))},b=Object(m.a)({initialValues:{productName:"",description:"",brand:"",category:"",price:"",url:"",files:""},onSubmit:function(e){j.a.post("/api/admin/postNew",{name:b.values.productName,category:b.values.category.toUpperCase(),brand:b.values.brand.toUpperCase(),price:b.values.price,previewUrl:b.values.url,description:b.values.description})}});return Object(O.jsxs)(x.a,{maxWidth:"sm",style:{backgroundColor:"green",borderRadius:"80px",marginTop:"25px"},children:[Object(O.jsx)("h1",{children:"Upload Product Form"}),Object(O.jsxs)("form",{onSubmit:b.handleSubmit,children:[Object(O.jsx)(f.a,{id:"productName",name:"productName",type:"text",onChange:b.handleChange,value:b.values.productName,label:"Product Name"}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{id:"description",name:"description",type:"text",onChange:b.handleChange,value:b.values.description,label:"Description"}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{id:"brand",name:"brand",type:"text",onChange:b.handleChange,value:b.values.brand,label:"Brand",className:"capitalize"}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{id:"category",name:"category",type:"text",onChange:b.handleChange,value:b.values.category,label:"Category"}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{id:"price",name:"price",type:"text",onChange:b.handleChange,value:b.values.price,label:"Price"}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{id:"url",name:"url",type:"text",onChange:b.handleChange,value:b.values.url,label:"Preview Url"}),Object(O.jsx)("br",{}),Object(O.jsx)(g,{prodName:b.values.productName,value:b.values.files,onChange:b.handleChange}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]})]})}var y=n(65),w=n(73);function k(){var e=Object(l.b)(),t=e.loginWithRedirect,n=e.isAuthenticated,a=e.logout;return Object(O.jsxs)(w.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top",children:[Object(O.jsx)(w.a.Brand,{href:"/",children:"I-20 Fireworks"}),Object(O.jsx)(w.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(w.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsxs)(y.a,{className:"mr-auto",children:[Object(O.jsx)(y.a.Link,{href:"/search",children:"Shop"}),n?Object(O.jsx)(y.a.Link,{href:"/admin/postNew",children:"Admin"}):null]}),Object(O.jsx)(y.a,{children:Object(O.jsx)(y.a.Link,{onClick:function(){n?a():t()},children:n?"LogOut":"Login"})})]})]})}n(226);var C=n(389);function S(){var e=Object(l.b)().loginWithRedirect;return Object(O.jsx)("button",{onClick:function(){e()},name:"login",children:"Log In"})}function N(){var e=Object(l.b)().logout;return Object(O.jsx)("button",{onClick:function(){e()},children:"Log Out"})}function L(){return Object(O.jsxs)("div",{className:"hero-container",style:{backgroundImage:"url(/assets/images/headerImagecopy.jpeg) center center/cover no-repeat"},children:[Object(O.jsx)("img",{src:"/assets/images/headerImagecopy.jpeg"}),Object(O.jsxs)("div",{className:"hero-info",style:{borderRadius:"100px"},children:[Object(O.jsx)("h1",{children:"I-20 Fireworks"}),Object(O.jsx)("p",{children:"Located in Van Texas we are a locally owned firework stand with the goal of serving the DFW communitys as convient as possible. With that goal we are proud to announce that we will be offering delivery to most DFW locations this season. With an assortment of options from Noveltiey Items, Fountains, Amazing Aerial Explosions and more we gurantee our products are of the higesht quality. In order to place an order checkout the how it works tab."}),Object(O.jsxs)("div",{className:"hero-btns",children:[Object(O.jsx)(C.a,{variant:"contained",color:"default",style:{margin:"1%"},children:"How It Works"}),Object(O.jsx)(C.a,{variant:"contained",color:"primary",href:"/search",children:"Start Shopping"}),Object(O.jsx)(S,{}),Object(O.jsx)(N,{})]})]})]})}var T=n(128),_=(n(227),n(391)),E=n(392),R=n(395),I=n(394),F=n(393),P=n(96),A=n(390),D=new(n(11).Cloudinary)({cloud_name:"prestonscloud"}),U=Object(A.a)({root:{maxWidth:"100%",margin:"10px"},media:{height:140,maxWidth:345}});function W(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=(n[0],n[1],U());return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(_.a,{className:c.root,children:[Object(O.jsxs)(E.a,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(F.a,{className:c.media,image:D.url(e.name),title:"Contemplative Reptile"})}),Object(O.jsxs)(I.a,{children:[Object(O.jsx)(P.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{textAlign:"center"},children:e.name}),Object(O.jsx)(P.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",style:{maxWidth:"75%",color:"blue",textAlign:"center",marginLeft:"auto",marginRight:"auto"},children:e.category}),Object(O.jsx)(P.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",style:{maxWidth:"75%",color:"green",textAlign:"center",marginLeft:"auto",marginRight:"auto"},children:e.brand}),Object(O.jsxs)(P.a,{variant:"body2",color:"textSecondary",component:"p",style:{textAlign:"center"},children:["$ ",e.price,"/ Per Unit"]})]})]}),Object(O.jsxs)(R.a,{children:[e.preview_link?Object(O.jsx)(C.a,{size:"small",color:"primary",href:e.preview_link,children:"View Video"}):null,Object(O.jsx)(C.a,{size:"small",color:"primary",children:"Learn More"})]})]})})})}var B=n(174),H=n(123),q=n(37),z=n(24),M=n(400),J=n(401),V=n(405),X=n(173),K=n.n(X),Q=n(4),Y=n(404),Z=n(388),G=n(399),$=n(396),ee=n(397),te=n(125),ne=n.n(te),ae=n(124),ce=n.n(ae),re=n(398),oe=Object(A.a)((function(e){return{list:{width:250},fullList:{width:"auto"},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(q.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(q.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(z.b)(e.palette.common.black,.15),"&:hover":{backgroundColor:Object(z.b)(e.palette.common.black,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"black"},inputInput:Object(q.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(q.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(q.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ie(e){var t=oe(),n=c.a.useState(null),r=Object(d.a)(n,2),o=r[0],i=(r[1],c.a.useState(null)),s=Object(d.a)(i,2),l=s[0],u=(s[1],c.a.useState(0)),b=Object(d.a)(u,2),p=(b[0],b[1],c.a.useState(!0)),h=Object(d.a)(p,2),g=(h[0],h[1],c.a.useState(!0)),m=Object(d.a)(g,2),x=m[0],f=m[1],v=c.a.useState(!0),y=Object(d.a)(v,2),w=y[0],k=(y[1],c.a.useState({left:!1})),S=Object(d.a)(k,2),N=S[0],L=S[1],T=Object(a.useState)([]),_=Object(d.a)(T,2),E=_[0],R=_[1],I=Object(a.useState)([]),F=Object(d.a)(I,2),P=F[0],A=F[1];Boolean(o),Boolean(l);Object(a.useEffect)((function(){j.a.get("https://i20fireworks.herokuapp.com/api/getBrands").then((function(e){console.log("IT HITTTT!!!!",e.data),A(e.data)})),j.a.get("https://i20fireworks.herokuapp.com/api/getCategories").then((function(e){R(e.data)}))}),[]);var D=function(t,n){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&(L(Object(H.a)(Object(H.a)({},N),{},Object(q.a)({},t,n))),!0===n&&e.drawerHandle())}},U=function(){f(!x)},W=function(n){return Object(O.jsxs)("div",{className:Object(Q.a)(t.list,Object(q.a)({},t.fullList,"top"===n||"bottom"===n)),role:"presentation",onKeyDown:D(n,!1),children:[Object(O.jsxs)(Z.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.root,children:[Object(O.jsxs)($.a,{button:!0,onClick:U,children:[Object(O.jsx)(ee.a,{primary:"Brands"}),x?Object(O.jsx)(ce.a,{}):Object(O.jsx)(ne.a,{})]}),Object(O.jsx)(re.a,{in:x,timeout:"auto",unmountOnExit:!0,children:Object(O.jsx)(Z.a,{component:"div",disablePadding:!0,children:Object(O.jsx)("div",{children:P.map((function(t){return Object(O.jsxs)("li",{children:[" ",Object(O.jsx)("input",{type:"checkbox",value:t.brand,onChange:function(){e.onFilter(t.brand)}}),t.brand]},t.brand)}))})})})]}),Object(O.jsx)(G.a,{}),Object(O.jsxs)(Z.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.root,children:[Object(O.jsxs)($.a,{button:!0,onClick:U,children:[Object(O.jsx)(ee.a,{primary:"Categories"}),w?Object(O.jsx)(ce.a,{}):Object(O.jsx)(ne.a,{})]}),Object(O.jsx)(re.a,{in:x,timeout:"auto",unmountOnExit:!0,children:Object(O.jsx)(Z.a,{component:"div",disablePadding:!0,children:Object(O.jsx)("div",{children:E.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{type:"checkbox",value:t.category,onClick:function(){return e.categoryFilter(t.category)}}),t.category]},t.category)}))})})})]}),Object(O.jsx)(G.a,{})]})};return Object(O.jsx)("div",{className:t.grow,children:Object(O.jsx)(M.a,{position:"static",style:{backgroundColor:"#FF000000",border:"none",box:"0,0,0,0",boxShadow:"none"},children:Object(O.jsxs)(J.a,{children:[Object(O.jsx)("div",{children:["left"].map((function(e){return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)(C.a,{onClick:D(e,!0),children:"Filter"}),Object(O.jsx)(Y.a,{anchor:e,open:N[e],onClose:D(e,!1),children:W(e)})]},e)}))}),Object(O.jsxs)("div",{className:t.search,children:[Object(O.jsx)("div",{className:t.searchIcon,children:Object(O.jsx)(K.a,{})}),Object(O.jsx)(V.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(t){return e.query(t.target.value)}})]}),Object(O.jsx)(C.a,{color:"primary",onClick:e.searchSubmit,children:"Search"}),Object(O.jsx)("div",{className:t.grow})]})})})}n(337);function se(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),o=Object(d.a)(r,2),i=o[0],s=o[1],l=Object(a.useState)([]),u=Object(d.a)(l,2),b=u[0],p=u[1],h=Object(a.useState)({}),g=Object(d.a)(h,2),m=(g[0],g[1],Object(a.useState)("")),f=Object(d.a)(m,2),v=f[0],y=f[1],w=Object(a.useState)(""),k=Object(d.a)(w,2),C=k[0],S=k[1];Object(a.useEffect)((function(){j.a.get("https://i20fireworks.herokuapp.com/api/getProducts").then((function(e){console.log(e.data),c(e.data)})),console.log("QUERY",v),console.log("QUERY FILTER",C)}),[i,b]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(x.a,{maxWidth:"md",children:[Object(O.jsx)(ie,{onFilter:function(e){if(i.includes(e)){var t=i.filter((function(t){return t!=e})).map((function(e){return e}));s(t),console.log("NewList",t)}else s([].concat(Object(T.a)(i),[e]))},brandFilter:i,categoryFilter:function(e){if(b.includes(e)){var t=b.filter((function(t){return t!=e})).map((function(e){return e}));p(t),console.log("NewList",t)}else p([].concat(Object(T.a)(b),[e]));console.log(b)},drawerHandle:function(){s([]),p([])},query:function(e){y(e),console.log(v)},searchSubmit:function(){s([]),p([]),S(v)}}),Object(O.jsx)(B.a,{children:n.map((function(e){if((i.includes(e.brand)||0===i.length)&&(b.includes(e.category)||0===b.length)&&(e.name.includes(v)||e.brand.includes(v)||C==e.category||""==C))return Object(O.jsx)(W,{name:e.name,preview_link:e.preview_link,description:e.description&&e.description,price:e.price&&e.price,brand:e.brand,category:e.category})}))})]})})}function le(){return Object(O.jsx)(O.Fragment,{})}var de=function(){var e=Object(l.b)(),t=(e.loginWithRedirect,e.user),n=e.isAuthenticated;return e.getAccessTokenWithPopup,Object(a.useEffect)((function(){console.log("USER!!!!",t)})),Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(k,{}),Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",children:Object(O.jsx)(L,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/admin/postNew",children:n&&"xtreme6007"===t.nickname?Object(O.jsx)(v,{}):null}),Object(O.jsx)(s.a,{exact:!0,path:"/myProfile",children:n?Object(O.jsx)(le,{user:t}):null}),Object(O.jsx)(s.a,{path:"/search",children:Object(O.jsx)(se,{})})]})]})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,406)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},je=function(e){var t=e.children,n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_DOMAIN:"dev-voz6o06c.us.auth0.com",REACT_APP_AUTH_CLIENT_ID:"7UFJSuga2qUjZQYwXbTL9PgcitCd965O",REACT_APP_ADMIN:"xtreme6007"}).REACT_APP_AUTH0_CLIENT_ID,a=Object(s.f)();return Object(O.jsx)(l.a,{domain:"dev-voz6o06c.us.auth0.com",clientId:n,redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})};o.a.render(Object(O.jsx)(je,{domain:"dev-voz6o06c.us.auth0.com",clientId:"7UFJSuga2qUjZQYwXbTL9PgcitCd965O",redirectUri:window.location.origin,children:Object(O.jsx)(de,{})}),document.getElementById("root")),ue()}},[[339,1,2]]]);
//# sourceMappingURL=main.2637e7ac.chunk.js.map