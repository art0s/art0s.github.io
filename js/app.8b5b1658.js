(function(e){function t(t){for(var n,a,o=t[0],u=t[1],l=t[2],c=0,f=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);h&&h(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},s={app:0},i=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-20f2f1db":"a03000e2","chunk-67361300":"d4188470"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-20f2f1db":1,"chunk-67361300":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-20f2f1db":"fc820419","chunk-67361300":"5f288eed"}[e]+".css",s=u.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===s))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],c=l.getAttribute("data-href");if(c===n||c===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],h.parentNode.removeChild(h),r(i)},h.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=o(e);var f=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(h);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}s[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var h=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0748":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table"},[r("table",[e.columns&&e.columns.length?r("thead",[r("tr",e._l(e.columns,(function(t){return r("th",{key:t.id,style:t.style},[e._v(" "+e._s(t.name)+" ")])})),0)]):e._e(),r("tbody",[e.rows&&e.rows.length?e._l(e.rows,(function(t,n){return r("tr",{key:n},e._l(e.columns,(function(a){return r("td",{key:n+"-"+a.id,class:"td-"+a.type,attrs:{"aria-label":a.name}},[a.link?r("a",{staticClass:"cell",attrs:{href:e.makeLink(a.link,t)},on:{click:function(r){return r.preventDefault(),e.goTo(r,a,t)}}},[e._v(" "+e._s(t[a.id])+" ")]):r("span",{staticClass:"cell"},["bool"===a.type?[r("span",{class:""+!!t[a.id]},[e._v(e._s(t[a.id]?"✔":"✘"))])]:[e._v(e._s(t[a.id]))]],2)])})),0)})):r("tr",[r("td",{staticClass:"empty",attrs:{colspan:e.columns.length}},[r("span",{staticClass:"cell",class:{error:"error-message"}},[e.error?[e._v(e._s(e.error))]:e.rows?e.rows.length?e._e():[e._v("Table is empty...")]:void 0],2)])])],2)])])},a=[],s=(r("ac1f"),r("466d"),r("5319"),{name:"Table",props:{error:{required:!0,type:String},columns:{required:!0,type:Array},rows:{required:!0,type:[Boolean,Array]}},methods:{makeLink:function(e,t){if(!e||!t)return null;var r=e.match(/^\/\w+\/:(\w+)/i);return r&&r.length>1&&r[1]&&t[r[1]]?e.replace(":".concat(r[1]),t[r[1]]):e},goTo:function(e,t,r){var n=this,a=e.target.getAttribute("href");a&&t.onClick&&"function"===typeof t.onClick&&t.onClick(this.$store,r,(function(){return n.$router.push(a)}))}}}),i=s,o=(r("2b60"),r("2877")),u=Object(o["a"])(i,n,a,!1,null,"7f0a3b1e",null);t["a"]=u.exports},"2b60":function(e,t,r){"use strict";var n=r("582e"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i=(r("5c0b"),r("2877")),o={},u=Object(i["a"])(o,a,s,!1,null,null,null),l=u.exports,c=(r("d3b7"),r("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"users"},[r("h1",{class:!!e.isLoading&&"loading"},[e._v("List of users")]),r("Paginator",{staticClass:"visible-xs",attrs:{current:e.currentPage,lastPage:e.lastPage,disable:e.isRequesting}}),r("Table",{class:!!e.isLoading&&"loading",attrs:{columns:e.columns,rows:e.rows,error:e.error}}),r("Paginator",{attrs:{current:e.currentPage,lastPage:e.lastPage,disable:e.isRequesting}})],1)},h=[],d=(r("99af"),r("fb6a"),r("e25e"),r("ac1f"),r("5319"),r("bc3a")),p=r.n(d),g=r("9c03"),m=r("0748"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"paginator"},[r("div",{staticClass:"navigator"},e._l(e.links,(function(t,n){return r("div",{key:n,class:n},[t.href?r("router-link",{attrs:{to:t.href},domProps:{innerHTML:e._s(t.text)}}):r("span",{domProps:{innerHTML:e._s(t.text)}})],1)})),0),r("div",{staticClass:"pages"})])},b=[],y=(r("a9e3"),{name:"Paginator",props:{current:{required:!0,type:Number},lastPage:{required:!0,type:Number},disable:{required:!0,type:Boolean}},data:function(){return{links:{first:{text:"&laquo;",href:null},prev:{text:"&lsaquo;",href:null},current:{text:null,href:null},next:{text:"&rsaquo;",href:null},last:{text:"&raquo;",href:null}}}},methods:{initLinks:function(){var e=this.current-1,t=this.current+1;this.links.first.href=this.current>1?"/":null,this.links.prev.href=this.current<=1?null:e<=1?"/":"/page/".concat(e),this.links.current.text=this.current,this.links.next.href=t<=this.lastPage?"/page/".concat(t):null,this.links.last.href=this.current<this.lastPage?"/page/".concat(this.lastPage):null}},watch:{current:{handler:function(){this.initLinks()},immediate:!0},lastPage:{handler:function(){this.initLinks()},immediate:!0},disable:{handler:function(e){if(e)for(var t in this.links)this.links[t].href=null;else this.initLinks()},immediate:!0}}}),P=y,k=(r("f841"),Object(i["a"])(P,v,b,!1,null,"020ebab2",null)),w=k.exports,_={name:"users",data:function(){return{error:"",url:"https://jsonplaceholder.typicode.com/users",columns:[{id:"name",name:"Name",type:"string",style:"width: 30%",link:"/user/:id",onClick:function(e,t,r){e.dispatch("setUserData",t).then((function(){return r()}))}},{id:"email",name:"Email",type:"string"},{id:"phone",name:"Phone",type:"phone",style:"width: 170px"}],currentPage:1,lastPage:1,totalRows:0,rowsPerPage:5,rows:!1,isRequesting:!1}},mixins:[g["a"]],methods:{getCurrentPage:function(){this.currentPage=1,this.$route.params.page&&(this.currentPage=parseInt(this.$route.params.page,10),(isNaN(this.currentPage)||this.currentPage<1)&&this.$router.replace("/").catch((function(){})))},getList:function(){var e=this;this.error="",this.setLoader(!0),this.isRequesting=!0,p.a.get("".concat(this.url,"?_page=").concat(this.currentPage,"&_limit=").concat(this.rowsPerPage)).then((function(t){if(t&&200===t.status){t.headers&&t.headers["x-total-count"]&&(e.totalRows=parseInt(t.headers["x-total-count"],10),isNaN(e.totalRows)&&(e.totalRows=0));var r=Math.ceil(e.totalRows/e.rowsPerPage);if((!r||isNaN(r)||r<1)&&(r=1),e.lastPage=r,e.currentPage>e.lastPage)return e.$router.replace("/page/".concat(e.lastPage)).catch((function(){}));t.data&&t.data.length?e.rows=t.data.slice():e.rows=[]}})).catch((function(t){e.error="Data is not accessable...",t&&t.message&&(e.error=t.message)})).then((function(){e.setLoader(!1),e.isRequesting=!1}))}},watch:{$route:{handler:function(){this.$store.dispatch("setUserData",null),this.getCurrentPage(),this.getList()},immediate:!0}},components:{Table:m["a"],Paginator:w}},x=_,L=Object(i["a"])(x,f,h,!1,null,null,null),C=L.exports;n["a"].use(c["a"]);var T=[{path:"/",name:"users",component:C},{path:"/page/:page",name:"users-page",component:C},{path:"/user/:id",name:"todoList",component:function(){return r.e("chunk-20f2f1db").then(r.bind(null,"a7b9"))}},{path:"*",name:"not-found",component:function(){return r.e("chunk-67361300").then(r.bind(null,"9703"))}}],q=new c["a"]({mode:"history",base:"/",routes:T}),j=q,O=r("2f62");n["a"].use(O["a"]);var E=new O["a"].Store({state:{userData:null},mutations:{setUserData:function(e,t){e.userData=t}},actions:{setUserData:function(e,t){var r=e.commit;r("setUserData",t)}}});n["a"].config.productionTip=!1,new n["a"]({router:j,store:E,render:function(e){return e(l)}}).$mount("#app")},"582e":function(e,t,r){},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c03":function(e,t,r){"use strict";var n={data:function(){return{isLoading:!1,loaderTimer:null}},beforeDestroy:function(){clearTimeout(this.loaderTimer)},methods:{setLoader:function(e){var t=this;if(clearTimeout(this.loaderTimer),e){if(this.isLoading)return}else if(!this.isLoading)return;this.loaderTimer=setTimeout((function(){t.isLoading=e}),e?100:400)}}};t["a"]=n},"9c0c":function(e,t,r){},e4e5:function(e,t,r){},f841:function(e,t,r){"use strict";var n=r("e4e5"),a=r.n(n);a.a}});
//# sourceMappingURL=app.8b5b1658.js.map