(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[3],{103:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),i=n(9),c=n(8),l=n(1),o=n(47),s=n(29),u=(n(97),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"CheckoutSummary",children:[Object(u.jsx)("h1",{children:"Enjoy your burger!"}),Object(u.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(u.jsx)(o.a,{ingredients:e.ingredients})}),Object(u.jsx)(s.a,{btnType:"Danger",clicked:e.cancel,children:"Cancel"}),Object(u.jsx)(s.a,{btnType:"Success",clicked:e.continue,children:"Continue"})]})},h=n(5),p=n(2),j=(n(98),n(18)),v=n(35),b=n(95),m=n(36),g=n(16),f=n(17),O=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zip:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0}},formisValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:n,userId:e.props.userId};e.props.OnOrderSubmit(r,e.props.token)},e.inputChangedHandler=function(t,n){var a=Object(p.a)({},e.state.orderForm),r=Object(p.a)({},a[n]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),r.touched=!0,a[n]=r;var i=!0;for(var c in a)i=a[c].valid&&i;e.setState({orderForm:a,formisValid:i})},e}return Object(r.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()),n&&t.minLength&&(n=e.length>=t.minLength),n&&t.maxLength&&(n=e.length<=t.maxLength),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=Object(u.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(u.jsx)(b.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(u.jsx)(s.a,{btnType:"Success",clicked:this.orderHandler,disabled:!this.state.formisValid,children:"ORDER NOW"})]});return this.props.loading&&(a=Object(u.jsx)(v.a,{})),Object(u.jsxs)("div",{className:"ContactData",children:[Object(u.jsx)("h4",{children:"Enter Contact Information"}),a]})}}]),n}(l.Component),y=Object(g.b)((function(e){return{ings:e.bgbld.ingredients,price:e.bgbld.totalPrice,loading:e.ord.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{OnOrderSubmit:function(t,n){return e(f.j(t,n))}}}))(Object(m.a)(O,j.a)),x=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).purchaseContinueHandler=function(){e.props.history.push("/checkout/contact-data")},e.cancelPurchaseHandler=function(){e.props.history.goBack()},e}return Object(r.a)(n,[{key:"render",value:function(){var e=Object(u.jsx)(h.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?Object(u.jsx)(h.a,{to:"/"}):null;e=Object(u.jsxs)("div",{children:[t,Object(u.jsx)(d,{ingredients:this.props.ings,cancel:this.cancelPurchaseHandler,continue:this.purchaseContinueHandler}),Object(u.jsx)(h.b,{path:this.props.match.path+"/contact-data",component:y})]})}return Object(u.jsx)("div",{children:e})}}]),n}(l.Component);t.default=Object(g.b)((function(e){return{ings:e.bgbld.ingredients,purchased:e.ord.purchased}}))(x)},95:function(e,t,n){"use strict";var a=n(2),r=(n(1),n(96),n(0));t.a=function(e){var t,n=["MyInputElement"];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push("Invalid"),e.elementType){case"input":t=Object(r.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(r.jsx)("select",{className:n.join(" "),onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;case"textarea":t=Object(r.jsx)("textarea",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;default:t=Object(r.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(r.jsxs)("div",{className:"MyInput",children:[Object(r.jsx)("label",{className:"MyLabel",children:e.label}),t]})}},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}}]);
//# sourceMappingURL=3.96bd34aa.chunk.js.map