(function(e){function t(t){for(var s,a,o=t[0],c=t[1],u=t[2],l=0,p=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);h&&h(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,a=1;a<r.length;a++){var o=r[a];0!==n[o]&&(s=!1)}s&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var s={},a={app:0},n={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"bee8c695"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var s="css/"+({about:"about"}[e]||e)+"."+{about:"40b5ce1a"}[e]+".css",n=c.p+s,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===n))return t()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){u=p[o],l=u.getAttribute("data-href");if(l===s||l===n)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var s=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete a[e],h.parentNode.removeChild(h),r(i)},h.href=n;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,r){s=n[e]=[t,r]}));t.push(s[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var r=n[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",p.name="ChunkLoadError",p.type=s,p.request=a,r[1](p)}n[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(r,s,function(t){return e[t]}.bind(null,s));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://shershen08.github.io/vue-starters-directory/dist/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var h=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"5c0b":function(e,t,r){"use strict";var s=r("e332"),a=r.n(s);a.a},7590:function(e,t,r){"use strict";var s=r("de36"),a=r.n(s);a.a},9591:function(e,t,r){},9766:function(e,t,r){"use strict";var s=r("ff67"),a=r.n(s);a.a},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"with-title",attrs:{id:"app"}},[r("header",{on:{click:e.toSearch}},[e._m(0),e._m(1)]),r("router-view"),r("footer",[r("div",{attrs:{id:"nav"}},[r("span",[e._v("v.0.3.0")]),r("router-link",{attrs:{to:"/"}},[e._v("Search")]),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),r("a",{attrs:{href:"https://github.com/shershen08/vue-starters-directory/blob/master/data/starters.ts",target:"_blank"}},[e._v("Contribute")]),r("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?","data-text":"#vue starters directory - find best bootstrap you #vuejs project","data-show-count":"true"}},[e._v("Tweet")])],1)])],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("img",{attrs:{alt:"Vue logo",src:r("cf05")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Vue"),r("br"),e._v("Starters"),r("br"),e._v("directory")])}],i=r("d225"),o=r("b0b4"),c=r("308d"),u=r("6bb5"),l=r("4e2b"),p=r("9ab4"),h=r("60a3"),d=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"toSearch",value:function(){"/"!==this.$router.currentRoute.fullPath&&this.$router.push("/")}}]),t}(h["d"]);d=Object(p["c"])([h["a"]],d);var v=d,b=v,f=(r("5c0b"),r("2877")),g=Object(f["a"])(b,a,n,!1,null,null,null),m=g.exports,w=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Search")],1)},j=[],k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("SearchForm",{attrs:{labels:e.labels},on:{"search:text":e.onSeachTextChanged,"search:tag":e.onSeachTagChanged}}),r("div",{staticClass:"results"},[e.searched?r("p",{staticClass:"subtitle results-count"},[e._v(e._s(e.results.length)+" starters found")]):r("p",{staticClass:"subtitle results-count"},[e._v(e._s(e.results.length)+" starters available")]),e._l(e.results,(function(t,s){return r("SearchItem",{key:s,attrs:{details:t},on:{"search:tag":e.onSeachTagChanged}})}))],2)],1)},O=[],_=(r("6762"),r("2fdb"),r("5df3"),r("4f7f"),r("75fc")),x=(r("ac6a"),r("55dd"),[{title:"Vue Starter Kit",published:!0,stars:62,desc:"",repo:"vue-starter-kit",owner:"ademilter",link:"https://github.com/ademilter/vue-starter-kit",features:["router","i18n","vee-validate","axios"]},{title:"vue-starter",published:!0,stars:53,desc:"A Vue.js starter kit that lets you focus on more programming and less configuration",repo:"vue-starter",owner:"rohitkrai03",link:"https://github.com/rohitkrai03/vue-starter",features:["eslint","i18n","vee-validate","axios"]},{title:"vue-seed",stars:20,published:!0,desc:"",repo:"vue-seed",owner:"dulin666",link:"https://github.com/dulin666/vue-seed",features:["eslint","i18n","vee-validate","axios"]},{title:"vue-express-mongo-boilerplate",stars:2300,published:!0,desc:"MEVN Full stack JS web app boilerplate with NodeJS, Express, Mongo and VueJS ",repo:"vue-express-mongo-boilerplate",owner:"icebob",link:"https://github.com/icebob/vue-express-mongo-boilerplate",features:["express","mongo","axios","apollo","router","axios","jade","vuex"]},{title:"vuesion",stars:1800,published:!0,desc:"The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices",repo:"vuesion",owner:"vuesion",link:"https://github.com/vuesion/vuesion",features:["i18n","storybook","prettier","vue-router","ssr","jest","typescript","vuex"]},{title:"cordovue",stars:66,desc:"A sample Apache Cordova application using VueJS.",published:!0,repo:"cordovue",owner:"TheMushrr00m",link:"https://github.com/TheMushrr00m/cordovue",features:["cordova","vue-router","vuex","eslint"]},{title:"vue-enterprise-boilerplate",stars:4800,desc:"An ever-evolving, very opinionated architecture and dev environment for new Vue SPA projects using Vue CLI 3.",published:!0,repo:"vue-enterprise-boilerplate",owner:"chrisvfritz",link:"https://github.com/chrisvfritz/vue-enterprise-boilerplate",features:["vue-router","vuex","eslint","prettier","jest","axios","normalize.css","vuepress","docker"]},{title:"mevn-cli",desc:"Light speed setup for MEVN(Mongo Express Vue Node) Apps",stars:273,published:!0,repo:"mevn-cli",owner:"madlabsinc",link:"https://github.com/madlabsinc/mevn-cli",features:["eslint","prettier","jest","vuepress","express"]},{title:"friendly-vue-starter",desc:"Full featured Vue.js starter project for browser apps",stars:35,published:!0,repo:"friendly-vue-starter",owner:"mcongy",link:"https://github.com/mcongy/friendly-vue-starter",features:["vuex","vue-router","apollo-client","eslint","critical","vue-property-decorator"]},{title:"vuepack",desc:"A modern starter which uses Vue 2, Vuex, Vue-router and Webpack 2 (and even Electron)",stars:2400,published:!0,repo:"vuepack",owner:"egoist",link:"https://github.com/egoist/vuepack",features:["vuex","vue-router","TestCafe","electron","eslint","webpack2.x"]},{title:"spa-starter-kit",desc:"A highly opinionated starter kit for building Single Page Applications with Laravel and Vue.js",stars:926,published:!0,repo:"spa-starter-kit",owner:"codecasts",link:"https://github.com/codecasts/spa-starter-kit",features:["vuex","vue-router","element-ui","axios","eslint","karma","Laravel","jwt"]},{title:"vuejs-wordpress-theme-starter",desc:"A WordPress theme with the guts ripped out and replaced with Vue. ",stars:960,published:!0,repo:"vuejs-wordpress-theme-starter",owner:"EvanAgee",link:"https://github.com/EvanAgee/vuejs-wordpress-theme-starter",features:["vuex","vue-router","axios"]},{title:"node-vue-template",desc:"A starter template for building complete application using Node.js and Vue.js with some included packages and configurations to help start the development quickly.",stars:45,published:!0,repo:"vuejs-wordpress-theme-starter",owner:"mubaidr",link:"https://github.com/mubaidr/node-vue-template",features:["vue-router","eslint","webpack4.x","bootswatch"]},{title:"aspnetcore-Vue-starter",desc:"*NEW* Asp.net Core & Vue.js (ES6) SPA Starter kit - Vuex, webpack, Web API, Docker, and more",stars:1100,published:!0,repo:"aspnetcore-Vue-starter",owner:"TrilonIO",link:"https://github.com/TrilonIO/aspnetcore-Vue-starter",features:["vue-router","vuex","webpack4.x","axios","eslint","fortawesome","ssr"]}]),C=x,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("section",{staticClass:"nes-btn top-block",on:{click:e.onClick}},[r("div",{staticClass:"basic-details"},[r("div",{staticClass:"title"},[r("h3",[e._v(e._s(e.details.title))])]),r("div",{staticClass:"link-details"},[e.opened?r("i",{staticClass:"nes-icon arrow-down"},[e._v("-")]):e._e(),e.opened?e._e():r("i",{staticClass:"nes-icon arrow-right"},[e._v("+")])])]),r("div",{staticClass:"top-details"},[r("div",{staticClass:"star-count"},[r("i",{staticClass:"nes-icon star"}),e._v(e._s(e.details.stars)+"\n            ")]),r("p",[e._v(e._s(e.details.desc))])])]),e.opened?r("section",{staticClass:"nes-container showcase"},[e._v("\n           Features: "),e._l(e.details.features,(function(t,s){return r("div",{key:s,staticClass:"feature-item",on:{click:function(r){return e.searchTag(t)}}},[e._v("\n                    "+e._s(t)+"\n                ")])})),r("br"),e._v("\n        Repo link: "),r("a",{attrs:{href:e.details.link,title:e.details.link,target:"_blank"}},[e._v(e._s(e.details.owner+"/"+e.details.repo))])],2):e._e()])},F=[],E=(r("96cf"),r("3b8d")),A=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.opened=!1,e.hello={},e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"searchTag",value:function(e){return e}},{key:"onClick",value:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.opened=!this.opened;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),t}(h["d"]);Object(p["c"])([Object(h["c"])()],A.prototype,"details",void 0),Object(p["c"])([Object(h["b"])("search:tag")],A.prototype,"searchTag",null),A=Object(p["c"])([h["a"]],A);var P=A,T=P,V=(r("fd07"),Object(f["a"])(T,S,F,!1,null,"2b40873f",null)),N=V.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"search-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"searchInput",staticClass:"search-input nes-input",attrs:{id:"tags",placeholder:"type something"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),r("div",{staticClass:"clear-button"},[""!=e.search?r("button",{staticClass:"nes-btn",attrs:{type:"button",title:"Clear filters"},on:{click:e.onClear}},[e._v("x")]):e._e()]),r("div",{staticClass:"list"},[r("button",{directives:[{name:"show",rawName:"v-show",value:!e.showFilters,expression:"!showFilters"}],staticClass:"nes-btn filter-button",attrs:{type:"button"},on:{click:e.toggleFilters}},[e._v("filters ("+e._s(e.activeFlags.length)+") ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilters,expression:"showFilters"}],staticClass:"filters-container"},[r("div",{staticClass:"wrapper nes-container "},[r("button",{staticClass:"nes-btn filter-button",attrs:{type:"button"},on:{click:e.toggleFilters}},[e._v("filters ("+e._s(e.activeFlags.length)+")")]),r("br"),r("br"),e._l(e.labels,(function(t,s){return r("label",{key:s,class:{active:e.activeFlags.includes(t)}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.activeFlags,expression:"activeFlags"}],staticClass:"nes-checkbox",attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.activeFlags)?e._i(e.activeFlags,t)>-1:e.activeFlags},on:{change:function(r){var s=e.activeFlags,a=r.target,n=!!a.checked;if(Array.isArray(s)){var i=t,o=e._i(s,i);a.checked?o<0&&(e.activeFlags=s.concat([i])):o>-1&&(e.activeFlags=s.slice(0,o).concat(s.slice(o+1)))}else e.activeFlags=n}}}),r("span",[e._v(e._s(t))])])}))],2)])])])},L=[],M=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.search="",e.activeFlags=[],e.showFilters=!1,e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"onSeachChanged",value:function(e,t){return e}},{key:"onTagChanged",value:function(e){return e}},{key:"toggleFilters",value:function(){this.showFilters=!this.showFilters,this.onTagChanged(this.activeFlags)}},{key:"onClear",value:function(){this.search=""}}]),t}(h["d"]);Object(p["c"])([Object(h["c"])()],M.prototype,"labels",void 0),Object(p["c"])([Object(h["e"])("search"),Object(h["b"])("search:text")],M.prototype,"onSeachChanged",null),Object(p["c"])([Object(h["e"])("activeFlags"),Object(h["b"])("search:tag")],M.prototype,"onTagChanged",null),M=Object(p["c"])([h["a"]],M);var $=M,D=$,J=(r("9766"),Object(f["a"])(D,I,L,!1,null,"4fb3b6ba",null)),W=J.exports,B=function(e,t){return e.stars===t.stars?1:e.stars>t.stars?-1:1},R=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.list=C,e.labels=[],e.results=[],e.searched=!1,e.searchState={text:"",tags:[]},e.components={SearchItem:N,SearchForm:W},e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"mounted",value:function(){var e=this;this.results=this.list.sort(B),this.list.forEach((function(t){e.labels=e.labels.concat(t.features)})),this.labels=Object(_["a"])(new Set(this.labels))}},{key:"onSeachTextChanged",value:function(e){this.searchState.text=e,this.searched=!0,this.applySearchFilters()}},{key:"onSeachTagChanged",value:function(e){this.searchState.tags=e,this.searched=!0,this.applySearchFilters()}},{key:"applySearchFilters",value:function(){var e=this;this.results=this.list.filter((function(t){return t.title.toLowerCase().includes(e.searchState.text.toLowerCase())})).filter((function(t){if(0===e.searchState.tags.length)return!0;var r=!0;return e.searchState.tags.forEach((function(e){t.features.includes(e)||(r=!1)})),r})).sort(B)}}]),t}(h["d"]);R=Object(p["c"])([Object(h["a"])({name:"Search",components:{SearchItem:N,SearchForm:W}})],R);var q=R,z=q,K=(r("7590"),Object(f["a"])(z,k,O,!1,null,"013825d3",null)),U=K.exports,H=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(h["d"]);H=Object(p["c"])([Object(h["a"])({components:{Search:U}})],H);var G=H,Y=G,Q=Object(f["a"])(Y,y,j,!1,null,"32e0604c",null),X=Q.exports;s["a"].use(w["a"]);var Z=new w["a"]({base:"https://shershen08.github.io/vue-starters-directory/dist/",routes:[{path:"/",name:"search",component:X},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),ee=r("2f62");s["a"].use(ee["a"]);var te=new ee["a"].Store({state:{},mutations:{},actions:{}}),re=r("522d"),se=(r("8e6e"),r("456d"),r("bd86")),ae=r("74ca"),ne=r("478e"),ie=r("2bf2"),oe=r("c2c3");function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(r,!0).forEach((function(t){Object(se["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=Object(ne["a"])({uri:"https://api.github.com/graphql"}),pe=new ie["a"],he=Object(oe["a"])((function(e,t){var r=t.headers,s="YOUR_GIHUB_API_TOKEN";return{headers:ue({},r,{authorization:s?"Bearer ".concat(s):""})}})),de=new ae["a"]({link:he.concat(le),cache:pe}),ve=new re["a"]({defaultClient:de}),be=ve;s["a"].config.productionTip=!1,s["a"].use(re["a"]),new s["a"]({apolloProvider:be,router:Z,store:te,render:function(e){return e(m)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.43687ba7.png"},de36:function(e,t,r){},e332:function(e,t,r){},fd07:function(e,t,r){"use strict";var s=r("9591"),a=r.n(s);a.a},ff67:function(e,t,r){}});
//# sourceMappingURL=app.9819f6e1.js.map