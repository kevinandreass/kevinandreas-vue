(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d577439"],{a724:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("7a23"),c=Object(n["g"])("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[Object(n["g"])("h1",{class:"h2"},"Create New User")],-1),r={key:0,class:"alert alert-danger",role:"alert"},s={key:1,class:"alert alert-success",role:"alert"},l={class:"mb-3"},o=Object(n["g"])("label",{for:"name",class:"form-label"},"Name",-1),u={class:"mb-3"},i=Object(n["g"])("label",{for:"username",class:"form-label"},"Username",-1),b=Object(n["g"])("button",{type:"submit",class:"btn btn-primary"},"Simpan",-1);function d(e,t,a,d,f,g){var j=Object(n["A"])("layout-main");return Object(n["s"])(),Object(n["f"])("div",null,[Object(n["j"])(j,null,{default:Object(n["G"])((function(){return[c,Object(n["g"])("div",null,[null==f.datausers&&null!==f.errormessage?(Object(n["s"])(),Object(n["f"])("div",r,Object(n["C"])(f.errormessage),1)):Object(n["e"])("",!0),null!==f.successmessage?(Object(n["s"])(),Object(n["f"])("div",s,Object(n["C"])(f.successmessage),1)):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["I"])((function(){return g.createNewUser&&g.createNewUser.apply(g,arguments)}),["prevent"]))},[Object(n["g"])("div",l,[o,Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.user.name=e}),type:"text",class:"form-control",id:"name"},null,512),[[n["E"],f.user.name]])]),Object(n["g"])("div",u,[i,Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.user.username=e}),type:"text",class:"form-control",id:"username"},null,512),[[n["E"],f.user.username]])]),b],32)])]})),_:1})])}a("d3b7"),a("e9c4");var f=a("d09e"),g={components:{LayoutMain:f["a"]},data:function(){return{user:{name:null,username:null},datausers:null,errormessage:null,successmessage:null}},methods:{createNewUser:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/",{headers:{"Content-type":"application/json; charset=UTF-8"},method:"POST",body:JSON.stringify(this.user)}).then((function(e){return e.json()})).then((function(t){void 0!==(null===t||void 0===t?void 0:t.id)?(e.datausers=t,e.successmessage="User berhasil disimpan!"):e.errormessage="Data user gagal disimpan!"})).catch((function(t){console.log(t),e.errormessage="Gagal, silakan coba lag!"}))}}},j=a("6b0d"),O=a.n(j);const m=O()(g,[["render",d]]);t["default"]=m},ab17:function(e,t,a){"use strict";a("ac1c")},ac1c:function(e,t,a){},b0c0:function(e,t,a){var n=a("83ab"),c=a("5e77").EXISTS,r=a("e330"),s=a("9bf2").f,l=Function.prototype,o=r(l.toString),u=/^\s*function ([^ (]*)/,i=r(u.exec),b="name";n&&!c&&s(l,b,{configurable:!0,get:function(){try{return i(u,o(this))[1]}catch(e){return""}}})},d09e:function(e,t,a){"use strict";var n=a("7a23"),c=function(e){return Object(n["v"])("data-v-5cd347f9"),e=e(),Object(n["t"])(),e},r={class:"dashboard"},s={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},l=c((function(){return Object(n["g"])("a",{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3",href:"#"},"KevinKudou",-1)})),o=c((function(){return Object(n["g"])("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["g"])("span",{class:"navbar-toggler-icon"})],-1)})),u=c((function(){return Object(n["g"])("input",{class:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search"},null,-1)})),i={class:"navbar-nav"},b={class:"nav-item text-nowrap"},d=Object(n["i"])("Sign out"),f={class:"container-fluid"},g={class:"row"},j={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},O={class:"position-sticky pt-3"},m={class:"nav flex-column"},p={class:"nav-item"},v=c((function(){return Object(n["g"])("span",{"data-feather":"home"},null,-1)})),h=Object(n["i"])(" Dashboard "),y={class:"nav-item"},k=c((function(){return Object(n["g"])("span",{"data-feather":"file"},null,-1)})),w=Object(n["i"])(" Profil "),x={class:"nav-item"},S=c((function(){return Object(n["g"])("span",{"data-feather":"shopping-cart"},null,-1)})),F=Object(n["i"])(" About "),U={class:"nav-item"},D=c((function(){return Object(n["g"])("span",{"data-feather":"shopping-cart"},null,-1)})),N=Object(n["i"])(" Users "),_={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"};function G(e,t,a,c,G,A){var C=Object(n["A"])("router-link");return Object(n["s"])(),Object(n["f"])("div",r,[Object(n["g"])("header",s,[l,o,u,Object(n["g"])("div",i,[Object(n["g"])("div",b,[Object(n["j"])(C,{to:"/login",class:"nav-link px-3"},{default:Object(n["G"])((function(){return[d]})),_:1})])])]),Object(n["g"])("div",f,[Object(n["g"])("div",g,[Object(n["g"])("nav",j,[Object(n["g"])("div",O,[Object(n["g"])("ul",m,[Object(n["g"])("li",p,[Object(n["j"])(C,{to:"/dashboard",class:"nav-link active","aria-current":"page"},{default:Object(n["G"])((function(){return[v,h]})),_:1})]),Object(n["g"])("li",y,[Object(n["j"])(C,{to:"/profil",class:"nav-link"},{default:Object(n["G"])((function(){return[k,w]})),_:1})]),Object(n["g"])("li",x,[Object(n["j"])(C,{to:"/about",class:"nav-link"},{default:Object(n["G"])((function(){return[S,F]})),_:1})]),Object(n["g"])("li",U,[Object(n["j"])(C,{to:"/users",class:"nav-link"},{default:Object(n["G"])((function(){return[D,N]})),_:1})])])])]),Object(n["g"])("main",_,[Object(n["z"])(e.$slots,"default",{},void 0,!0)])])])])}var A={name:"LayoutMain"},C=(a("ab17"),a("6b0d")),J=a.n(C);const M=J()(A,[["render",G],["__scopeId","data-v-5cd347f9"]]);t["a"]=M},e9c4:function(e,t,a){var n=a("23e7"),c=a("da84"),r=a("d066"),s=a("2ba4"),l=a("e330"),o=a("d039"),u=c.Array,i=r("JSON","stringify"),b=l(/./.exec),d=l("".charAt),f=l("".charCodeAt),g=l("".replace),j=l(1..toString),O=/[\uD800-\uDFFF]/g,m=/^[\uD800-\uDBFF]$/,p=/^[\uDC00-\uDFFF]$/,v=function(e,t,a){var n=d(a,t-1),c=d(a,t+1);return b(m,e)&&!b(p,c)||b(p,e)&&!b(m,n)?"\\u"+j(f(e,0),16):e},h=o((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&n({target:"JSON",stat:!0,forced:h},{stringify:function(e,t,a){for(var n=0,c=arguments.length,r=u(c);n<c;n++)r[n]=arguments[n];var l=s(i,null,r);return"string"==typeof l?g(l,O,v):l}})}}]);
//# sourceMappingURL=chunk-3d577439.921da0bc.js.map