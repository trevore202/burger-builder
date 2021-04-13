(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return c})),n.d(t,"p",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"j",(function(){return o})),n.d(t,"l",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return j})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return f})),n.d(t,"o",(function(){return g}));var r="ADD_INGREDIENT",c="REMOVE_INGREDIENT",i="SET_INGREDIENTS",a="FETCH_INGREDIENTS_FAILED",o="PURCHASE_BURGER",s="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FETCH_ORDERS_START",j="FETCH_ORDERS_SUCCESS",b="FETCH_ORDERS_FAIL",h="AUTH_START",p="AUTH_SUCCESS",O="AUTH_FAIL",f="AUTH_LOGOUT",g="SET_AUTH_REDIRECT_PATH"},,,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"h",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"j",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return x})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"i",(function(){return y}));var r=n(3),c=n(18),i=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.n,ingredientName:e}},o=function(){return function(e){c.a.get("/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},s=n(2),u=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.j}),c.a.post("/orders.json?auth="+t,e).then((function(t){window.localStorage.removeItem("burger"),n(l(t.data.name,e))})).catch((function(e){n(j(e))}))}},l=function(e,t){return{type:r.l,id:e,orderData:t}},j=function(e){return{type:r.k,error:e}},b=function(e,t){return function(n){n({type:r.h});var i="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';c.a.get("/orders.json"+i).then((function(e){var t,c=[];for(var i in e.data)c.push(Object(s.a)(Object(s.a)({},e.data[i]),{},{id:i}));n((t=c,{type:r.i,orders:t}))})).catch((function(e){n(function(e){return{type:r.g,error:e}}(e))}))}},h=n(28),p=n.n(h),O="AIzaSyCcSb_2ykzLHSsZTZ6esUjja1S1YIVVP6s",f=function(e,t){return{type:r.e,idToken:e,userId:t}},g=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},m=function(e){return function(t){setTimeout((function(){t(g())}),1e3*e)}},x=function(e,t,n){return function(c){c({type:r.d});var i={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+O;n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+O),p.a.post(a,i).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),c(f(e.data.idToken,e.data.localId)),c(m(e.data.expiresIn))})).catch((function(e){c(function(e){return{type:r.b,error:e}}(e.response.data.error))}))}},v=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n>new Date?(e(f(t,localStorage.getItem("userId"))),e(m((n.getTime()-(new Date).getTime())/1e3))):e(g())}else e(g())}},y=function(e){return{type:r.o,path:e}}},function(e,t,n){"use strict";var r=n(28),c=n.n(r).a.create({baseURL:"https://react-my-burger-306ba-default-rtdb.firebaseio.com"});t.a=c},,,,,,,,function(e,t,n){"use strict";n(1),n(68);var r=n(0);t.a=function(e){return e.show?Object(r.jsx)("div",{className:"Backdrop",onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(6),c=n(7),i=n(9),a=n(8),o=n(1),s=(n(73),n(12)),u=n(26),d=n(0),l=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(d.jsxs)(s.a,{children:[Object(d.jsx)(u.a,{show:this.props.show,clicked:this.props.modalClosed}),Object(d.jsx)("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(o.Component);t.a=l},,function(e,t,n){"use strict";n(1),n(74);var r=n(0);t.a=function(e){return Object(r.jsx)("button",{disabled:e.disabled,onClick:e.clicked,className:["Button",e.btnType].join(" "),children:e.children})}},,,,,,function(e,t,n){"use strict";n(1),n(75);var r=n(0);t.a=function(){return Object(r.jsx)("div",{className:"loader",children:"Loading..."})}},function(e,t,n){"use strict";var r=n(2),c=n(6),i=n(7),a=n(9),o=n(8),s=n(1),u=n(27),d=n(12),l=n(0);t.a=function(e,t){return function(n){Object(a.a)(j,n);var s=Object(o.a)(j);function j(e){var n;return Object(c.a)(this,j),(n=s.call(this,e)).errorConfirmedHandler=function(){n.setState({error:null})},n.state={error:null},n.reqInterceptor=t.interceptors.request.use((function(e){return n.setState({error:null}),e})),n.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){n.setState({error:e})})),n}return Object(i.a)(j,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(l.jsxs)(d.a,{children:[Object(l.jsx)(u.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(l.jsx)(e,Object(r.a)({},this.props))]})}}]),j}(s.Component)}},,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";var r=n(50),c=n(1),i=(n(69),n(6)),a=n(7),o=n(9),s=n(8),u=(n(70),n(0)),d=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(u.jsx)("div",{className:"BreadBottom"});break;case"bread-top":e=Object(u.jsxs)("div",{className:"BreadTop",children:[Object(u.jsx)("div",{className:"Seeds1"}),Object(u.jsx)("div",{className:"Seeds2"})]});break;case"meat":e=Object(u.jsx)("div",{className:"Meat"});break;case"cheese":e=Object(u.jsx)("div",{className:"Cheese"});break;case"bacon":e=Object(u.jsx)("div",{className:"Bacon"});break;case"salad":e=Object(u.jsx)("div",{className:"Salad"});break;default:e=null}return e}}]),n}(c.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(u.jsx)(d,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(u.jsx)("p",{children:"Please start adding ingredients"})),Object(u.jsxs)("div",{className:"Burger",children:[Object(u.jsx)(d,{type:"bread-top"}),t,Object(u.jsx)(d,{type:"bread-bottom"})]})}},,,,,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(24),i=n.n(c),a=(n(55),n(6)),o=n(7),s=n(9),u=n(8),d=n(16),l=n(12),j=(n(38),n(60),n.p+"static/media/burger-logo.ec69c7f6.png"),b=(n(61),n(0)),h=function(e){return Object(b.jsx)("div",{className:"Logo",style:{height:e.height},children:Object(b.jsx)("img",{src:j,alt:"burger logo"})})},p=(n(63),n(64),n(20)),O=function(e){return Object(b.jsx)("li",{className:"NavItem",children:Object(b.jsx)(p.b,{to:e.link,exact:e.exact,children:e.children})})},f=function(e){return Object(b.jsxs)("ul",{className:"NavItems",children:[Object(b.jsx)(O,{link:"/",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(b.jsx)(O,{link:"/orders",children:"Orders"}):null,e.isAuthenticated?Object(b.jsx)(O,{link:"/logout",children:"Logout"}):Object(b.jsx)(O,{link:"/auth",children:"Authenticate"})]})},g=(n(66),function(e){return Object(b.jsxs)("div",{className:"DrawerToggle MobileOnly",onClick:e.clicked,children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})}),m=function(e){return Object(b.jsxs)("header",{className:"Toolbar",children:[Object(b.jsx)(g,{clicked:e.clicked}),Object(b.jsx)(h,{height:"80%"}),Object(b.jsx)("nav",{className:"DesktopOnly",children:Object(b.jsx)(f,{isAuthenticated:e.isAuthenticated})})]})},x=(n(67),n(26)),v=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(x.a,{show:e.open,clicked:e.closed}),Object(b.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(b.jsx)(h,{height:"11%"}),Object(b.jsx)("nav",{children:Object(b.jsx)(f,{isAuthenticated:e.isAuthenticated})})]})]})},y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(m,{clicked:this.sideDrawerToggleHandler,isAuthenticated:this.props.isAuthenticated}),Object(b.jsx)(v,{closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer,isAuthenticated:this.props.isAuthenticated}),Object(b.jsx)("main",{className:"Content",children:this.props.children})]})}}]),n}(r.Component),k=Object(d.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(y),S=n(2),I=n(47),C=(n(71),n(72),function(e){return Object(b.jsxs)("div",{className:"BuildControl",children:[Object(b.jsx)("div",{className:"Label",children:e.label}),Object(b.jsx)("button",{className:"Less",onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(b.jsx)("button",{className:"More",onClick:e.added,children:"More"})]})}),A=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],N=function(e){return Object(b.jsxs)("div",{className:"BuildControls",children:[Object(b.jsxs)("p",{children:["Current Price: ",Object(b.jsxs)("strong",{children:["$",e.price.toFixed(2)]})]}),A.map((function(t){return Object(b.jsx)(C,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(b.jsx)("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"Order Now":"Sign up to order"})]})},T=n(27),w=n(29),D=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.ingredients[t]]},t)}));return Object(b.jsxs)(l.a,{children:[Object(b.jsx)("h3",{children:"Your Order"}),Object(b.jsx)("p",{children:"Burger with the following ingredients:"}),Object(b.jsx)("ul",{children:t}),Object(b.jsx)("p",{children:Object(b.jsxs)("strong",{children:["Total Price: $",e.price.toFixed(2)]})}),Object(b.jsx)("p",{children:"Continue to Checkout?"}),Object(b.jsx)(w.a,{clicked:e.continue,btnType:"Success",children:"CONTINUE"}),Object(b.jsx)(w.a,{clicked:e.cancel,btnType:"Danger",children:"CANCEL"})]})},E=n(35),R=n(18),H=n(36),P=n(17),_=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={purchasing:!1},e.purchasingHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(S.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.err?Object(b.jsx)("p",{children:"ingredients can't be loaded"}):Object(b.jsx)(E.a,{});return this.props.ings&&(r=Object(b.jsxs)(l.a,{children:[Object(b.jsx)(I.a,{ingredients:this.props.ings}),Object(b.jsx)(N,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.prc,isAuth:this.props.isAuthenticated,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchasingHandler})]}),n=Object(b.jsx)(D,{ingredients:this.props.ings,cancel:this.purchaseCancelHandler,continue:this.purchaseContinueHandler,price:this.props.prc})),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(T.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:n}),r]})}}]),n}(r.Component),U=Object(d.b)((function(e){return{ings:e.bgbld.ingredients,prc:e.bgbld.totalPrice,err:e.bgbld.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(P.a(t))},onIngredientRemoved:function(t){return e(P.h(t))},onInitIngredients:function(){return e(P.e())},onInitPurchase:function(){return e(P.g())},onSetAuthRedirectPath:function(t){return e(P.i(t))}}}))(Object(H.a)(_,R.a)),B=n(5),L=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(B.a,{to:"/"})})}}]),n}(r.Component),F=Object(d.b)(null,(function(e){return{onLogout:function(){return e(P.f())}}}))(L),M=function(e){return function(t){Object(s.a)(r,t);var n=Object(u.a)(r);function r(){var e;Object(a.a)(this,r);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={component:null},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(b.jsx)(e,Object(S.a)({},this.props)):null}}]),r}(r.Component)},G=M((function(){return n.e(3).then(n.bind(null,103))})),q=M((function(){return n.e(5).then(n.bind(null,104))})),Y=M((function(){return n.e(4).then(n.bind(null,101))})),z=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignIn()}},{key:"render",value:function(){var e=Object(b.jsxs)(B.d,{children:[Object(b.jsx)(B.b,{path:"/",exact:!0,component:U}),Object(b.jsx)(B.b,{path:"/auth",component:Y}),Object(b.jsx)(B.a,{to:"/"})]});return this.props.isAuth&&(e=Object(b.jsxs)(B.d,{children:[Object(b.jsx)(B.b,{path:"/",exact:!0,component:U}),Object(b.jsx)(B.b,{path:"/auth",component:Y}),Object(b.jsx)(B.b,{path:"/checkout",component:G}),Object(b.jsx)(B.b,{path:"/orders",component:q}),Object(b.jsx)(B.b,{path:"/logout",component:F}),Object(b.jsx)(B.a,{to:"/"})]})),Object(b.jsx)(k,{children:e})}}]),n}(r.Component),V=Object(B.g)(Object(d.b)((function(e){return{isAuth:null!==e.auth.token}}),(function(e){return{onTryAutoSignIn:function(){return e(P.c())}}}))(z)),J=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,102)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},W=n(19),Z=n(49),$=n(22),K=n(3),Q={ingredients:null,totalPrice:4,error:!1,buildling:!1},X={salad:.5,bacon:.7,cheese:.4,meat:1.3},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.a:return Object(S.a)(Object(S.a)({},e),{},{ingredients:Object(S.a)(Object(S.a)({},e.ingredients),{},Object($.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+X[t.ingredientName],building:!0});case K.n:return Object(S.a)(Object(S.a)({},e),{},{ingredients:Object(S.a)(Object(S.a)({},e.ingredients),{},Object($.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-X[t.ingredientName],building:!0});case K.p:return Object(S.a)(Object(S.a)({},e),{},{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1});case K.f:return Object(S.a)(Object(S.a)({},e),{},{error:!0});default:return e}},te={orders:[],purchased:null,loading:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.l:var n=Object(S.a)(Object(S.a)({},t.orderData),{},{id:t.id});return Object(S.a)(Object(S.a)({},e),{},{loading:!1,purchased:!0,orders:e.orders.concat(n)});case K.k:return Object(S.a)(Object(S.a)({},e),{},{purchased:!1,loading:!1});case K.j:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case K.m:return Object(S.a)(Object(S.a)({},e),{},{purchased:!1});case K.h:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case K.i:return Object(S.a)(Object(S.a)({},e),{},{orders:t.orders,loading:!1});case K.g:return Object(S.a)(Object(S.a)({},e),{},{loading:!1});default:return e}},re={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.d:return Object(S.a)(Object(S.a)({},e),{},{error:null,loading:!0});case K.b:return Object(S.a)(Object(S.a)({},e),{},{error:t.error,loading:!1});case K.e:return Object(S.a)(Object(S.a)({},e),{},{token:t.idToken,userId:t.userId,error:null,loading:!1});case K.c:return Object(S.a)(Object(S.a)({},e),{},{token:null,userId:null});case K.o:return Object(S.a)(Object(S.a)({},e),{},{authRedirectPath:t.path});default:return e}},ie=W.d,ae=Object(W.c)({bgbld:ee,ord:ne,auth:ce}),oe=Object(W.e)(ae,ie(Object(W.a)(Z.a)));i.a.render(Object(b.jsx)(d.a,{store:oe,children:Object(b.jsx)(p.a,{basename:"/burger-builder",children:Object(b.jsx)(V,{})})}),document.getElementById("root")),J()}],[[94,1,2]]]);
//# sourceMappingURL=main.335b5dc8.chunk.js.map