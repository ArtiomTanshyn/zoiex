(function(){"use strict";var e={449:function(e,t,r){var n=r(144),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("Header",{on:{getSearchGifs:e.getSearchGifs}}),r("v-main",[r("router-view",{attrs:{searching:e.searching}})],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"#333",dark:""}},[n("v-container",[n("v-row",{attrs:{align:"center"}},[n("img",{attrs:{width:"50",src:r(5087)},on:{click:function(t){return e.$router.push({name:"home"})}}}),n("v-spacer"),e.$route.params.id?n("v-btn",{staticClass:"link",on:{click:function(t){return e.$router.push({name:"home"})}}},[e._v("View All")]):n("Search",{on:{getSearchGifs:e.getSearchGifs}})],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-text-field",{attrs:{placeholder:"Search","prepend-inner-icon":"mdi-magnify","hide-details":"auto"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})},c=[],u={name:"Search",data:()=>({search:null}),methods:{searchGifs(e){this.$emit("getSearchGifs",e)}},watch:{search:{deep:!0,handler(e){this.searchGifs(e)}}}},d=u,h=r(1001),f=r(3453),g=r.n(f),p=r(9430),v=(0,h.Z)(d,l,c,!1,null,null,null),m=v.exports;g()(v,{VTextField:p.Z});var w={data(){return{}},methods:{async getSearchGifs(e){this.$emit("getSearchGifs",e)}},components:{Search:m}},y=w,b=r(3407),_=r(5711),Z=r(1819),x=r(7894),S=r(2515),k=(0,h.Z)(y,o,s,!1,null,null,null),G=k.exports;g()(k,{VAppBar:b.Z,VBtn:_.Z,VContainer:Z.Z,VRow:x.Z,VSpacer:S.Z});var V={name:"App",components:{Header:G},data:()=>({searching:null}),methods:{getSearchGifs(e){this.searching=e}}},C=V,A=r(303),O=r(4021),$=(0,h.Z)(C,i,a,!1,null,null,null),j=$.exports;g()($,{VApp:A.Z,VMain:O.Z});var T=r(5205);(0,T.z)("/zoiex/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var z=r(8345),B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("Loader",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}],attrs:{loader:e.loader}}),e.gifs.not_found?r("v-row",{attrs:{dense:""}},[r("h2",[e._v("Ooooops! Gifs not found")])]):e._e(),e.gifs.not_found?e._e():r("Gifs",{attrs:{gifs:e.gifs}}),e.searching&&!e.gifs.not_found&&e.gifs.length?r("v-row",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.handleScrolledToBottom,expression:"handleScrolledToBottom"}]}):e._e()],1)},E=[],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{dense:""}},e._l(e.gifs,(function(t){return r("v-col",{key:t.id,staticClass:"col-12 col-sm-6 col-lg-4 col-md-6"},[r("v-img",{staticClass:"white--text align-end",attrs:{src:t.gif_url,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"300px",width:"auto"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[[r("v-row",{staticClass:"fill-height mt-0 mr-5 mb-5 ml-5",attrs:{align:"end",justify:"space-between"}},[r("v-btn",{attrs:{color:"#fff",icon:""},on:{click:function(r){return e.copyInfo(t)}}},[r("v-icon",[e._v("mdi-share-variant")])],1),r("v-btn",{attrs:{icon:"",color:"#fff"},on:{click:function(r){return e.$router.push({name:"single",params:{id:t.id}})}}},[r("v-icon",[e._v("mdi-eye")])],1)],1)]],2)],1)})),1)},P=[],U={name:"Gifs",props:{gifs:{type:Array}},data:()=>({}),computed:{webShareApiSupported(){return navigator.share}},methods:{copyInfo(e){this.webShareApiSupported?navigator.share({url:e.gif_url,text:e.name}):alert("oooops...")},infiniteScrolling(){this.$emit("infiniteScrolling")}}},F=U,N=r(7024),R=r(4456),I=r(5288),H=r(3297),M=(0,h.Z)(F,L,P,!1,null,null,null),q=M.exports;g()(M,{VBtn:_.Z,VCol:N.Z,VIcon:R.Z,VImg:I.Z,VProgressCircular:H.Z,VRow:x.Z});var D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",position:"fixed",top:"0",left:"0",width:"100%",height:"100vh",background:"RGBA(0, 0, 0, 0.7)","z-index":"100"}},[r("v-card",{attrs:{width:"75%",height:"123px",dark:""}},[r("v-card-text",[e._v(" Loading... "),r("v-progress-linear",{staticClass:"mb-0 mt-5",attrs:{indeterminate:"",color:"white",height:"20"}})],1)],1)],1)},Q=[],X=r(2026),J=r(5255),K=r(6962),W={},Y=(0,h.Z)(W,D,Q,!1,null,null,null),ee=Y.exports;g()(Y,{VCard:X.Z,VCardText:J.ZB,VProgressLinear:K.Z});var te=r(3653),re=r.n(te);const ne=re().create({baseURL:"https://api.giphy.com"});var ie=ne,ae=r(3279),oe=r.n(ae),se={name:"ListGifs",components:{Gifs:q,Loader:ee},props:{searching:{type:String,default:null}},data:()=>({trandUrl:"v1/gifs/trending",searchUrl:"v1/gifs/search",api_key:"bHXi6e54UeAetadh1gr7DAe5QnOG0Fr0",gifs:[],loader:!1,limit:9}),async mounted(){await this.getGifs()},methods:{async getGifs(){this.loader=!0;const e=await ie.get(this.trandUrl,{params:{api_key:this.api_key}});this.gifs=this.convertArray(e.data.data),this.loader=!1},searchGifs:oe()((async function(e){this.loader=!0;const t=await ie.get(this.searchUrl,{params:{api_key:this.api_key,q:e,limit:this.limit}});this.gifs=0!=t.data.data.length?this.convertArray(t.data.data):{not_found:!0},this.loader=!1}),500),handleScrolledToBottom:oe()((async function(e){e&&this.searching&&(this.limit+=9,console.log(this.limit),await this.searchGifs(this.searching))}),500),convertArray(e){return e.filter((e=>null!=e.images)).map((e=>({gif_url:e.images.downsized.url,name:e.title,id:e.id})))}},watch:{searching:{async handler(e){this.gifs=[],this.limit=9,e?await this.searchGifs(e):await this.getGifs()}}}},le=se,ce=(0,h.Z)(le,B,E,!1,null,null,null),ue=ce.exports;g()(ce,{VContainer:Z.Z,VRow:x.Z});var de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("Loader",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}],attrs:{loader:e.loader}}),e.gif?r("v-row",{attrs:{dense:""}},[r("v-col",[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.gif.gif_url,width:"100%",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,4034393411)})],1)],1):e._e()],1)},he=[],fe={name:"SingleGif",components:{Loader:ee},data:()=>({url:"v1/gifs/",api_key:"bHXi6e54UeAetadh1gr7DAe5QnOG0Fr0",gif:null,loader:!1}),async mounted(){await this.getGifs()},methods:{async getGifs(){this.loader=!0;const e=await ie.get(this.url+this.$route.params.id,{params:{api_key:this.api_key}});this.gif={id:e.data.data.id,gif_url:e.data.data.images.downsized.url},this.loader=!1}}},ge=fe,pe=(0,h.Z)(ge,de,he,!1,null,null,null),ve=pe.exports;g()(pe,{VCol:N.Z,VContainer:Z.Z,VImg:I.Z,VProgressCircular:H.Z,VRow:x.Z}),n.Z.use(z.Z);const me=[{path:"/",name:"home",component:ue,props:!0},{path:"/:id",name:"single",component:ve}],we=new z.Z({mode:"history",base:"/zoiex/",routes:me});var ye=we,be=r(6482);n.Z.use(be.Z);var _e=new be.Z({}),Ze=r(4347);n.Z.use(Ze.ZP),n.Z.config.productionTip=!1,new n.Z({router:ye,vuetify:_e,render:e=>e(j)}).$mount("#app")},5087:function(e,t,r){e.exports=r.p+"img/g.243aea80.png"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],a=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,i,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/zoiex/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,o=n[0],s=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var u=l(r)}for(t&&t(n);c<o.length;c++)a=o[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunkzoiex"]=self["webpackChunkzoiex"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(449)}));n=r.O(n)})();
//# sourceMappingURL=app.d20437ef.js.map