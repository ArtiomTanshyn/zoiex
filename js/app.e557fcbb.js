(function(e){function t(t){for(var o,n,r=t[0],l=t[1],c=t[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(o=!1)}o&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},i={app:0},s=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/zoiex/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"16c5":function(e,t,a){"use strict";a("48a0")},"48a0":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var o={};a.r(o),a.d(o,"setPlatform",(function(){return M})),a.d(o,"setBrowser",(function(){return N})),a.d(o,"setCompatibility",(function(){return R}));var i={};a.r(i),a.d(i,"SET_SNACKBAR_MESSAGE",(function(){return j})),a.d(i,"SET_NOTIFICATION_PERMISSION",(function(){return F})),a.d(i,"SET_PWA_INSTALLING",(function(){return B})),a.d(i,"SET_PWA",(function(){return U})),a.d(i,"SET_PROMPT",(function(){return D})),a.d(i,"SET_PLATFORM",(function(){return q})),a.d(i,"SET_BROWSER",(function(){return G})),a.d(i,"SET_SERVICE_WORKER_LOADED_STATUS",(function(){return z})),a.d(i,"SET_LANGUAGE",(function(){return $})),a.d(i,"SET_APP_LOAD",(function(){return H})),a.d(i,"SET_COMPATIBILITY",(function(){return K})),a.d(i,"SET_PWA_INSTALLED",(function(){return V})),a.d(i,"SET_APP_NOT_COMPATIBLE",(function(){return Y}));var s={};a.r(s),a.d(s,"snackbarMessage",(function(){return J})),a.d(s,"isPwa",(function(){return Q})),a.d(s,"isPwaInstalling",(function(){return X})),a.d(s,"promptPWA",(function(){return Z})),a.d(s,"platform",(function(){return ee})),a.d(s,"browser",(function(){return te})),a.d(s,"serviceWorkerLoaded",(function(){return ae})),a.d(s,"language",(function(){return oe})),a.d(s,"appLoad",(function(){return ie})),a.d(s,"compatibility",(function(){return se})),a.d(s,"pwaInstalled",(function(){return ne})),a.d(s,"appNotCompatible",(function(){return re}));var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.visibleInstallPwaModal?a("InstallPWA",{on:{install:e.install}}):e._e(),a("div",[e._v(e._s(e.language))]),a("div",[e._v(e._s(e.url))]),e.serviceWorkerLoaded&&!e.visibleInstallPwaModal?a("IFrame",{attrs:{url:e.url}}):e._e()],1)},l=[],c=a("2f62"),p=a("8336"),d=a("490a"),u=a("8e36"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hiddenFlow install_pwa_body"},[o("div",{staticClass:"headerFull"},[o("div",{staticClass:"container"},[o("img",{staticClass:"image",attrs:{src:a("e347"),alt:""}})])]),o("div",{staticClass:"install_main hiddenMain"},[o("section",{staticClass:"main"},[o("div",{staticClass:"mainImage"},[o("img",{attrs:{src:a("df8b"),alt:""}})]),o("div",{staticClass:"mainText "},[o("div",{staticClass:"container"},[o("div",{staticClass:"title"},[e._v("Welcome to Cazimbo Social")]),o("p",{staticClass:"text"},[e._v("Temos mais de 70+, incluindo Slots, Blackjack e jogos de Roleta")]),"ios"===e.platform?o("ol",{staticClass:"install-pwa-modal__list"},[o("h3",[e._v("Install App")]),o("li",[e._v(" Tap on "),o("span",{staticClass:"icon-highlight"},[o("iconify-icon",{attrs:{icon:"mdi:compass-outline"}})],1),e._v(" if there is ")]),o("li",[e._v(" Tap on "),o("span",{staticClass:"icon-highlight"},[o("iconify-icon",{attrs:{icon:"mdi:export-variant"}})],1)]),e._m(0)]):e._e(),e.appLoad||"ios"===e.platform||e.appNotCompatible?e._e():o(p["a"],{staticClass:"btn",attrs:{disabled:e.disabled},on:{click:e.install}},[e._v(" "+e._s(e.installButtonText)+" "),!e.compatibility||e.isPwa&&e.isPwaInstalling?o(d["a"],{staticClass:"install-btn__loader",attrs:{indeterminate:"",color:"#ffffff",width:"2",size:"16"}}):e._e()],1),e.appLoad&&!e.appNotCompatible?o("div",{staticClass:"progressWrap"},[o("strong",[e._v(e._s(Math.ceil(e.progress))+"%")]),o(u["a"],{staticClass:"loader",attrs:{color:"#34A853",height:"3"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e(),e.appNotCompatible?o("di",{staticClass:"notCompatibility"},[o("strong",[e._v("Oops... Application not compatible")])]):e._e()],1)])])])])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v(" Select "),a("span",{staticClass:"text-highlight"},[e._v("Add to Home Screen")])])}],w={name:"InstallPWA",data:()=>({shown:!1,platformLocal:"",disabled:!1,progress:1,base_url:""}),watch:{appLoad(e){if(!0===e){let e=setInterval(()=>{this.progress++,100==this.progress&&clearInterval(e)},150)}}},computed:{...Object(c["c"])({platform:"app/platform",serviceWorkerLoaded:"app/serviceWorkerLoaded",isPwa:"app/isPwa",isPwaInstalling:"app/isPwaInstalling",appLoad:"app/appLoad",compatibility:"app/compatibility",pwaInstalled:"app/pwaInstalled",appNotCompatible:"app/appNotCompatible"}),installButtonText(){return!this.compatibility&&this.isPwa?(this.disabled=!0,"Compatibility check... "):this.isPwa&&this.serviceWorkerLoaded&&!this.isPwaInstalling?(this.disabled=!1,"Instalar"):this.isPwa&&this.isPwaInstalling?(this.disabled=!0,"Installing... "):this.pwaInstalled?(this.disabled=!1,"Open"):(this.disabled=!0,!1)}},methods:{install(){this.$emit("install")},background(){document.body.classList.add("animateBackground")},toTop(){let e=document.querySelector(".hiddenMain");e.classList.add("newAnim")},headerMoving(){let e=document.querySelector(".headerFull");e.classList.add("headImg")},overFlow(){let e=document.querySelector(".hiddenFlow");e.classList.remove("hiddenFlow")},imgOpacAdd(){let e=document.querySelector(".headerFull");e.classList.add("headOpacity")},imgOpacRem(){let e=document.querySelector(".headerFull");e.classList.remove("headOpacity")}},mounted(){this.imgOpacAdd(),setTimeout(this.imgOpacRem,2e3),setTimeout(this.background,2100),setTimeout(this.headerMoving,2e3),setTimeout(this.toTop,2e3),setTimeout(this.overFlow,2e3)}},f=w,g=(a("cf9e"),a("2877")),b=Object(g["a"])(f,m,h,!1,null,"27a4db8a",null),v=b.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("iframe",{attrs:{width:"100%",height:"100%",src:e.url,frameborder:"0"}})])},I=[],_={name:"IFrame",props:{url:String}},A=_,T=(a("16c5"),Object(g["a"])(A,P,I,!1,null,"9a74726e",null)),S=T.exports,L={data:()=>({checkPwaInstallInterval:null}),methods:{...Object(c["d"])({setPWA:"app/SET_PWA",setPwaInstalling:"app/SET_PWA_INSTALLING",setPrompt:"app/SET_PROMPT",setAppLoad:"app/SET_APP_LOAD",setPwaInstalled:"app/SET_PWA_INSTALLED",setAppNotCompatible:"app/SET_APP_NOT_COMPATIBLE"}),promptInstall(){this.promptPWA&&"prompt"in this.promptPWA&&(this.setPwaInstalling(!0),this.promptPWA.prompt(),this.setPwaInstalling(!0),this.promptPWA.userChoice.then(e=>{"accepted"===e.outcome?(this.pwaInstallChoice=!0,console.log("pwaInstallChoice = "+this.pwaInstallChoice),this.setPwaInstalling(!0),this.listenPwaInstalled(),this.setPwaInstalling(!1),this.setPWA(!1),this.setAppLoad(!0),setTimeout(()=>{this.setAppLoad(!1)},13e3),console.log("User accepted the install prompt")):(window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),this.setPwaInstalled(!1),this.setPwaInstalling(!1),console.log("User dismissed the install prompt"))}),this.setPrompt(null))},beforeinstallpromptHandler(e){e.preventDefault(),this.setPrompt(e),this.setAppNotCompatible(!1),this.setPWA(!0),this.setPwaInstalled(!1)},listenPwaInstalled(){null===this.checkPwaInstallInterval&&("getInstalledRelatedApps"in window.navigator?this.checkPwaInstallInterval=setInterval(async()=>{const e=await navigator.getInstalledRelatedApps();console.log("relatedApps",e);for(const t of e)"webapp"===t.platform&&(this.setPwaInstalling(!1),this.setPWA(!1),this.setPwaInstalled(!0),clearInterval(this.checkPwaInstallInterval))},500):(console.log('"getInstalledRelatedApps" not supported!'),this.setPwaInstalling(!1),this.setPWA(!1),this.setPwaInstalled(!1),this.setAppNotCompatible(!0),clearInterval(this.checkPwaInstallInterval)))}},computed:{...Object(c["c"])({platform:"app/platform",promptPWA:"app/promptPWA",isPwa:"app/isPwa"})},mounted(){window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),window.addEventListener("load",()=>{navigator.standalone?(console.log("Launched: Installed (iOS)"),this.setPWA(!1)):matchMedia("(display-mode: standalone)").matches?(this.setPWA(!1),console.log("Launched: Installed")):(this.promptPWA?this.setPWA(!0):this.setPWA(!1),console.log("Launched: Browser Tab"))}),window.addEventListener("appinstalled",e=>{console.log("appinstalled"),this.setPwaInstalling(!0),this.listenPwaInstalled(),setTimeout(()=>{this.setPwaInstalling(!1)},1e4),this.setPWA(!1)})},beforeDestroy(){clearInterval(this.checkPwaInstallInterval)}},k={name:"Main",components:{InstallPWA:v,IFrame:S},data:()=>({visibleInstallPwaModal:!1,installed:localStorage.installed||!1,deferredPrompt:localStorage.deferredPrompt||null,userLang:"",url:"",subid:""}),mixins:[L],computed:{...Object(c["c"])({platform:"app/platform",isPwa:"app/isPwa",serviceWorkerLoaded:"app/serviceWorkerLoaded",language:"app/language"})},methods:{...Object(c["b"])({setPlatform:"app/setPlatform"}),...Object(c["d"])({setPWA:"app/SET_PWA",setPwaInstalling:"app/SET_PWA_INSTALLING",setPrompt:"app/SET_PROMPT",setLanguage:"app/SET_LANGUAGE",setCompatibility:"app/SET_COMPATIBILITY"}),install(){this.isPwa&&this.isPwaInstalling?console.log("snackbar.app_installing"):this.isPwa?this.promptInstall():this.serviceWorkerLoaded?("mobile"===this.platform&&window.open("/zoiex/"),this.visibleInstallPwaModal=!1,console.log("else")):console.log("app_loading")}},mounted(){const e=navigator.standalone||matchMedia("(display-mode: standalone)").matches;e||(this.visibleInstallPwaModal=!0);const t=new URLSearchParams(window.location.search);this.subid=t.get("UTM")?t.get("UTM"):"",console.log(t.get("UTM")),console.log(this.subid),this.url="pt-BR"===this.language||"pt"===this.language?"https://go.affilirise.com/redirect.aspx?pid=2517&bid=1534&subid="+this.subid:"https://cazimbosocial.com/",console.log(this.url)},watch:{serviceWorkerLoaded(e){e&&navigator.serviceWorker.ready.then(e=>{setTimeout(()=>{this.isPwa&&(this.setCompatibility(!0),this.visibleInstallPwaModal=!0)},3e3),console.log("Service Worker is ready")})}},created(){this.setPlatform(this.Platform);const e=navigator.language||navigator.userLanguage;this.setLanguage(e)}},x=k,y=(a("c358"),Object(g["a"])(x,r,l,!1,null,null,null)),O=y.exports,E=a("9483"),C={snackbarMessage:"",isPwa:!1,isPwaInstalling:!1,serviceWorkerLoaded:!1,promptPWA:null,platform:void 0,browser:void 0,language:"",appLoad:!1,compatibility:!1,setPwaInstalled:!1,appNotCompatible:!1},W=a("7b46");const M=({commit:e},t)=>{let a;return a=t.is.mobile&&t.is.ios?"ios":t.is.mobile?"mobile":"desktop",e("SET_PLATFORM",a),a},N=({commit:e})=>{const t=Object(W["a"])();t&&e("SET_BROWSER",t.name)},R=({commit:e})=>{e("SET_COMPATIBILITY")},j=(e,t)=>{e.snackbarMessage=t},F=(e,t)=>{e.notificationPermission=t},B=(e,t)=>{e.isPwaInstalling=t},U=(e,t)=>{console.log("set pwa: "+t),e.isPwa=t},D=(e,t)=>{e.promptPWA=t},q=(e,t)=>{e.platform=t},G=(e,t)=>{e.browser=t},z=(e,t)=>{console.log(t),e.serviceWorkerLoaded=t},$=(e,t)=>{console.log(t),e.language=t},H=(e,t)=>{console.log(t),e.appLoad=t},K=(e,t)=>{console.log(t),e.compatibility=t},V=(e,t)=>{console.log(t),e.setPwaInstalled=t};appNotCompatible;const Y=(e,t)=>{console.log(t),e.setAppNotCompatible=t},J=e=>e.snackbarMessage,Q=e=>e.isPwa,X=e=>e.isPwaInstalling,Z=e=>e.promptPWA,ee=e=>e.platform,te=e=>e.browser,ae=e=>e.serviceWorkerLoaded,oe=e=>e.language,ie=e=>e.appLoad,se=e=>e.compatibility,ne=e=>e.pwaInstalled,re=e=>e.appNotCompatible;var le={namespaced:!0,state:C,actions:o,mutations:i,getters:s};n["a"].use(c["a"]);var ce=new c["a"].Store({state:{},mutations:{},getters:{},actions:{},modules:{app:le}});Object(E["a"])("/zoiex/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(e){console.log("Service worker has been registered."),ce.commit("app/SET_SERVICE_WORKER_LOADED_STATUS",!0),setInterval(()=>{e.update()},36e5)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){ce.commit("app/SET_SERVICE_WORKER_LOADED_STATUS",!0),console.error("Error during service worker registration:",e)}});const pe="undefined"===typeof window;let de,ue=!1,me=pe,he=!1;function we(e,t){const a=/(edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:a[5]||a[3]||a[1]||"",version:a[2]||a[4]||"0",versionNumber:a[4]||a[2]||"0",platform:t[0]||""}}function fe(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const ge=!1===pe&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function be(e){de={is:Object.assign({},e)},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function ve(e){const t=fe(e),a=we(e,t),o={};a.browser&&(o[a.browser]=!0,o.version=a.version,o.versionNumber=parseInt(a.versionNumber,10)),a.platform&&(o[a.platform]=!0);const i=o.android||o.ios||o.bb||o.blackberry||o.ipad||o.iphone||o.ipod||o.kindle||o.playbook||o.silk||o["windows phone"];return!0===i||e.indexOf("mobile")>-1?(o.mobile=!0,o.edga||o.edgios?(o.edge=!0,a.browser="edge"):o.crios?(o.chrome=!0,a.browser="chrome"):o.fxios&&(o.firefox=!0,a.browser="firefox")):o.desktop=!0,(o.ipod||o.ipad||o.iphone)&&(o.ios=!0),o["windows phone"]&&(o.winphone=!0,delete o["windows phone"]),(o.chrome||o.opr||o.safari||o.vivaldi||!0===o.mobile&&!0!==o.ios&&!0!==i)&&(o.webkit=!0),(o.rv||o.iemobile)&&(a.browser="ie",o.ie=!0),(o.safari&&o.blackberry||o.bb)&&(a.browser="blackberry",o.blackberry=!0),o.safari&&o.playbook&&(a.browser="playbook",o.playbook=!0),o.opr&&(a.browser="opera",o.opera=!0),o.safari&&o.android&&(a.browser="android",o.android=!0),o.safari&&o.kindle&&(a.browser="kindle",o.kindle=!0),o.safari&&o.silk&&(a.browser="silk",o.silk=!0),o.vivaldi&&(a.browser="vivaldi",o.vivaldi=!0),o.name=a.browser,o.platform=a.platform,!1===pe&&(e.indexOf("electron")>-1?o.electron=!0:document.location.href.indexOf("-extension://")>-1?o.bex=!0:void 0!==window.Capacitor?(o.capacitor=!0,o.nativeMobile=!0,o.nativeMobileWrapper="capacitor"):void 0!==window._cordovaNative||void 0!==window.cordova?(o.cordova=!0,o.nativeMobile=!0,o.nativeMobileWrapper="cordova"):!0===ge&&!0===o.desktop&&!0===o.mac&&!0===o.safari&&be(o),ue=void 0===o.nativeMobile&&void 0===o.electron&&!!document.querySelector("[data-server-rendered]"),!0===ue&&(me=!0)),o}const Pe=!1===pe?(navigator.userAgent||navigator.vendor||window.opera).toLowerCase():"",Ie={has:{touch:!1,webStorage:!1},within:{iframe:!1}},_e=!1===pe?{userAgent:Pe,is:ve(Pe),has:{touch:ge,webStorage:(()=>{try{if(window.localStorage)return!0}catch(e){}return!1})()},within:{iframe:window.self!==window.top}}:Ie,Ae={install(){n["a"].prototype.Platform=_e}};!0===pe?Ae.parseSSR=e=>{const t=(e.req.headers["user-agent"]||e.req.headers["User-Agent"]||"").toLowerCase();return{..._e,userAgent:t,is:ve(t)}}:he=!0===_e.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple");var Te=Ae,Se=a("f309");n["a"].use(Se["a"]);var Le=new Se["a"]({});n["a"].use(Te),n["a"].config.productionTip=!1,new n["a"]({store:ce,vuetify:Le,render:e=>e(O)}).$mount("#app")},c358:function(e,t,a){"use strict";a("d614")},cf9e:function(e,t,a){"use strict";a("f3e9")},d614:function(e,t,a){},df8b:function(e,t,a){e.exports=a.p+"img/mainImg.2ac7d9f2.jpg"},e347:function(e,t,a){e.exports=a.p+"img/logo.1aa02e38.svg"},f3e9:function(e,t,a){}});
//# sourceMappingURL=app.e557fcbb.js.map