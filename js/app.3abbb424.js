(function(e){function t(t){for(var a,n,r=t[0],l=t[1],c=t[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],a=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=o[0]))}return e}var a={},i={app:0},s=[];function n(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=a,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/zoiex/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"16c5":function(e,t,o){"use strict";o("48a0")},"48a0":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var a={};o.r(a),o.d(a,"setPlatform",(function(){return W})),o.d(a,"setBrowser",(function(){return C})),o.d(a,"setCompatibility",(function(){return M}));var i={};o.r(i),o.d(i,"SET_SNACKBAR_MESSAGE",(function(){return R})),o.d(i,"SET_NOTIFICATION_PERMISSION",(function(){return j})),o.d(i,"SET_PWA_INSTALLING",(function(){return N})),o.d(i,"SET_PWA",(function(){return F})),o.d(i,"SET_PROMPT",(function(){return B})),o.d(i,"SET_PLATFORM",(function(){return D})),o.d(i,"SET_BROWSER",(function(){return U})),o.d(i,"SET_SERVICE_WORKER_LOADED_STATUS",(function(){return q})),o.d(i,"SET_LANGUAGE",(function(){return G})),o.d(i,"SET_APP_LOAD",(function(){return $})),o.d(i,"SET_COMPATIBILITY",(function(){return z}));var s={};o.r(s),o.d(s,"snackbarMessage",(function(){return H})),o.d(s,"isPwa",(function(){return K})),o.d(s,"isPwaInstalling",(function(){return Y})),o.d(s,"promptPWA",(function(){return V})),o.d(s,"platform",(function(){return J})),o.d(s,"browser",(function(){return Q})),o.d(s,"serviceWorkerLoaded",(function(){return X})),o.d(s,"language",(function(){return Z})),o.d(s,"appLoad",(function(){return ee})),o.d(s,"compatibility",(function(){return te}));var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e.visibleInstallPwaModal?o("InstallPWA",{on:{install:e.install}}):e._e(),e.serviceWorkerLoaded&&!e.visibleInstallPwaModal?o("IFrame",{attrs:{url:e.url}}):e._e()],1)},l=[],c=o("2f62"),d=o("8e36"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hiddenFlow install_pwa_body"},[a("div",{staticClass:"headerFull"},[a("div",{staticClass:"container"},[a("img",{staticClass:"image",attrs:{src:o("e347"),alt:""}})])]),a("div",{staticClass:"install_main hiddenMain"},[a("section",{staticClass:"main"},[a("div",{staticClass:"mainImage"},[a("img",{attrs:{src:o("df8b"),alt:""}})]),a("div",{staticClass:"mainText "},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[e._v("Welcome to Cazimbo Social")]),a("p",{staticClass:"text"},[e._v("Temos mais de 70+, incluindo Slots, Blackjack e jogos de Roleta")]),"ios"===e.platform?a("ol",{staticClass:"install-pwa-modal__list"},[a("h3",[e._v("Install App")]),a("li",[e._v(" Tap on "),a("span",{staticClass:"icon-highlight"},[a("iconify-icon",{attrs:{icon:"mdi:compass-outline"}})],1),e._v(" if there is ")]),a("li",[e._v(" Tap on "),a("span",{staticClass:"icon-highlight"},[a("iconify-icon",{attrs:{icon:"mdi:export-variant"}})],1)]),e._m(0)]):e._e(),e.appLoad||"ios"===e.platform?e._e():a("div",{staticClass:"btn",on:{click:e.install}},[e._v(e._s(e.installButtonText))]),e.appLoad?a(d["a"],{staticClass:"loader",attrs:{color:"#34A853",indeterminate:"",rounded:"",height:"25"}}):e._e()],1)])])]),e._m(1)])},u=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" Select "),o("span",{staticClass:"text-highlight"},[e._v("Add to Home Screen")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"install_footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"copyRight"},[e._v("© 2022 Cazimbo social . All Rights Reserved.")])])])}],m={name:"InstallPWA",data:()=>({shown:!1,platformLocal:""}),computed:{...Object(c["c"])({platform:"app/platform",serviceWorkerLoaded:"app/serviceWorkerLoaded",isPwa:"app/isPwa",isPwaInstalling:"app/isPwaInstalling",appLoad:"app/appLoad",compatibility:"app/compatibility"}),installButtonText(){return console.log(this.serviceWorkerLoaded),this.compatibility?this.isPwa&&this.serviceWorkerLoaded&&!this.isPwaInstalling?"Install":this.isPwa&&this.isPwaInstalling?"Installing...":"Open":"Compatibility check..."}},methods:{install(){this.$emit("install")},background(){document.body.classList.add("animateBackground")},toTop(){let e=document.querySelector(".hiddenMain");e.classList.add("newAnim")},headerMoving(){let e=document.querySelector(".headerFull");e.classList.add("headImg")},overFlow(){let e=document.querySelector(".hiddenFlow");e.classList.remove("hiddenFlow")},imgOpacAdd(){let e=document.querySelector(".headerFull");e.classList.add("headOpacity")},imgOpacRem(){let e=document.querySelector(".headerFull");e.classList.remove("headOpacity")}},mounted(){this.imgOpacAdd(),setTimeout(this.imgOpacRem,2e3),setTimeout(this.background,2100),setTimeout(this.headerMoving,2e3),setTimeout(this.toTop,2e3),setTimeout(this.overFlow,2e3)}},h=m,w=(o("7bd4"),o("2877")),g=Object(w["a"])(h,p,u,!1,null,"70e3651a",null),f=g.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrap"},[o("iframe",{attrs:{width:"100%",height:"100%",src:e.url,frameborder:"0"}})])},b=[],P={name:"IFrame",props:{url:String}},I=P,_=(o("16c5"),Object(w["a"])(I,v,b,!1,null,"9a74726e",null)),A=_.exports,S={data:()=>({checkPwaInstallInterval:null}),methods:{...Object(c["d"])({setPWA:"app/SET_PWA",setPwaInstalling:"app/SET_PWA_INSTALLING",setPrompt:"app/SET_PROMPT",setAppLoad:"app/SET_APP_LOAD",compatibility:"app/SET_COMPATIBILITY"}),promptInstall(){console.log(this.promptPWA),this.promptPWA&&"prompt"in this.promptPWA&&(console.log(this.promptPWA),console.log(1),this.setPwaInstalling(!0),this.promptPWA.prompt(),console.log(2),this.setPwaInstalling(!0),this.promptPWA.userChoice.then(e=>{"accepted"===e.outcome?(this.pwaInstallChoice=!0,console.log("pwaInstallChoice = "+this.pwaInstallChoice),this.setPwaInstalling(!0),this.setPwaInstalling(!1),this.setPWA(!1),this.setAppLoad(!0),setTimeout(()=>{this.setAppLoad(!1)},5e3),console.log("User accepted the install prompt")):(window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),console.log("User dismissed the install prompt"))}),this.setPrompt(null))},beforeinstallpromptHandler(e){e.preventDefault(),this.setPrompt(e),this.setPWA(!0),console.log(this.isPwa)},listenPwaInstalled(){null===this.checkPwaInstallInterval&&("getInstalledRelatedApps"in window.navigator?this.checkPwaInstallInterval=setInterval(async()=>{const e=await navigator.getInstalledRelatedApps();console.log("relatedApps",e);for(const t of e)console.log(t),"webapp"===t.platform&&(this.setPwaInstalling(!1),this.setPWA(!1),clearInterval(this.checkPwaInstallInterval))},500):(console.log('"getInstalledRelatedApps" not supported!'),this.setPwaInstalling(!1),this.setPWA(!1),clearInterval(this.checkPwaInstallInterval)))}},computed:{...Object(c["c"])({platform:"app/platform",promptPWA:"app/promptPWA",isPwa:"app/isPwa"})},mounted(){window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),window.addEventListener("load",()=>{navigator.standalone?(this.compatibility(!0),console.log("Launched: Installed (iOS)"),this.setPWA(!1)):matchMedia("(display-mode: standalone)").matches?(this.compatibility(!0),this.setPWA(!1),console.log("Launched: Installed")):(this.compatibility(!0),this.promptPWA?this.setPWA(!0):this.setPWA(!1),console.log("Launched: Browser Tab")),console.log(this.promptPWA)}),window.addEventListener("appinstalled",e=>{console.log("appinstalled"),this.setPwaInstalling(!0),setTimeout(()=>{this.setPwaInstalling(!1)},5e3),this.setPWA(!1)})},beforeDestroy(){clearInterval(this.checkPwaInstallInterval)}},T={name:"Main",components:{InstallPWA:f,IFrame:A},data:()=>({visibleInstallPwaModal:!1,installed:localStorage.installed||!1,deferredPrompt:localStorage.deferredPrompt||null,userLang:"",url:"",subid:""}),mixins:[S],computed:{...Object(c["c"])({platform:"app/platform",isPwa:"app/isPwa",serviceWorkerLoaded:"app/serviceWorkerLoaded",language:"app/language"})},methods:{...Object(c["b"])({setPlatform:"app/setPlatform"}),...Object(c["d"])({setPWA:"app/SET_PWA",setPwaInstalling:"app/SET_PWA_INSTALLING",setPrompt:"app/SET_PROMPT",setLanguage:"app/SET_LANGUAGE",setAppLoad:"app/SET_APP_LOAD",setCompatibility:"app/SET_COMPATIBILITY"}),install(){this.isPwa&&this.isPwaInstalling?console.log("snackbar.app_installing"):this.isPwa?this.promptInstall():this.serviceWorkerLoaded?(this.visibleInstallPwaModal=!1,console.log("else")):console.log("app_loading")}},mounted(){const e=navigator.standalone||matchMedia("(display-mode: standalone)").matches;console.log(e),console.log(this.isPwa),e||(this.visibleInstallPwaModal=!0,console.log(this.visibleInstallPwaModal)),console.log(this.visibleInstallPwaModal),console.log(this.language);const t=new URLSearchParams(window.location.search);this.subid=t.get("UTM"),this.url="pt-BR"===this.language?"https://go.affilirise.com/redirect.aspx?pid=2517&bid=1534&subid="+this.subid:"https://cazimbosocial.com/"},watch:{serviceWorkerLoaded(e){console.log(e),e&&(console.log(navigator),console.log(this.platform),navigator.serviceWorker.ready.then(()=>{setTimeout(()=>{this.isPwa?(console.log("go"),this.setCompatibility(!0),this.visibleInstallPwaModal=!0):"ios"===this.platform&&(console.log("went"),this.visibleInstallPwaModal=!1)},1e4),console.log("Service Worker is ready")}))}},created(){this.setPlatform(this.Platform);const e=navigator.language||navigator.userLanguage;this.setLanguage(e)}},k=T,y=(o("f45f"),Object(w["a"])(k,r,l,!1,null,null,null)),L=y.exports,x=o("9483"),O={snackbarMessage:"",isPwa:!1,isPwaInstalling:!1,serviceWorkerLoaded:!1,promptPWA:null,platform:void 0,browser:void 0,language:"",appLoad:!1,compatibility:!1},E=o("7b46");const W=({commit:e},t)=>{let o;return console.log(t),o=t.is.mobile&&t.is.ios?"ios":t.is.mobile?"mobile":"desktop",e("SET_PLATFORM",o),o},C=({commit:e})=>{const t=Object(E["a"])();t&&e("SET_BROWSER",t.name)},M=({commit:e})=>{e("SET_COMPATIBILITY")},R=(e,t)=>{e.snackbarMessage=t},j=(e,t)=>{e.notificationPermission=t},N=(e,t)=>{e.isPwaInstalling=t},F=(e,t)=>{console.log("set pwa: "+t),e.isPwa=t},B=(e,t)=>{e.promptPWA=t},D=(e,t)=>{e.platform=t},U=(e,t)=>{e.browser=t},q=(e,t)=>{console.log(t),e.serviceWorkerLoaded=t},G=(e,t)=>{console.log(t),e.language=t},$=(e,t)=>{console.log(t),e.appLoad=t},z=(e,t)=>{console.log(t),e.compatibility=t},H=e=>e.snackbarMessage,K=e=>e.isPwa,Y=e=>e.isPwaInstalling,V=e=>e.promptPWA,J=e=>e.platform,Q=e=>e.browser,X=e=>e.serviceWorkerLoaded,Z=e=>e.language,ee=e=>e.appLoad,te=e=>e.compatibility;var oe={namespaced:!0,state:O,actions:a,mutations:i,getters:s};n["a"].use(c["a"]);var ae=new c["a"].Store({state:{},mutations:{},getters:{},actions:{},modules:{app:oe}});Object(x["a"])("/zoiex/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(e){alert("registration"),console.log("Service worker has been registered."),ae.commit("modules/app/SET_SERVICE_WORKER_LOADED_STATUS",!0),setInterval(()=>{e.update()},36e5)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){ae.commit("modules/app/SET_SERVICE_WORKER_LOADED_STATUS",!0),console.error("Error during service worker registration:",e)}});const ie="undefined"===typeof window;let se,ne=!1,re=ie,le=!1;function ce(e,t){const o=/(edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:o[5]||o[3]||o[1]||"",version:o[2]||o[4]||"0",versionNumber:o[4]||o[2]||"0",platform:t[0]||""}}function de(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const pe=!1===ie&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function ue(e){se={is:Object.assign({},e)},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function me(e){const t=de(e),o=ce(e,t),a={};o.browser&&(a[o.browser]=!0,a.version=o.version,a.versionNumber=parseInt(o.versionNumber,10)),o.platform&&(a[o.platform]=!0);const i=a.android||a.ios||a.bb||a.blackberry||a.ipad||a.iphone||a.ipod||a.kindle||a.playbook||a.silk||a["windows phone"];return!0===i||e.indexOf("mobile")>-1?(a.mobile=!0,a.edga||a.edgios?(a.edge=!0,o.browser="edge"):a.crios?(a.chrome=!0,o.browser="chrome"):a.fxios&&(a.firefox=!0,o.browser="firefox")):a.desktop=!0,(a.ipod||a.ipad||a.iphone)&&(a.ios=!0),a["windows phone"]&&(a.winphone=!0,delete a["windows phone"]),(a.chrome||a.opr||a.safari||a.vivaldi||!0===a.mobile&&!0!==a.ios&&!0!==i)&&(a.webkit=!0),(a.rv||a.iemobile)&&(o.browser="ie",a.ie=!0),(a.safari&&a.blackberry||a.bb)&&(o.browser="blackberry",a.blackberry=!0),a.safari&&a.playbook&&(o.browser="playbook",a.playbook=!0),a.opr&&(o.browser="opera",a.opera=!0),a.safari&&a.android&&(o.browser="android",a.android=!0),a.safari&&a.kindle&&(o.browser="kindle",a.kindle=!0),a.safari&&a.silk&&(o.browser="silk",a.silk=!0),a.vivaldi&&(o.browser="vivaldi",a.vivaldi=!0),a.name=o.browser,a.platform=o.platform,!1===ie&&(e.indexOf("electron")>-1?a.electron=!0:document.location.href.indexOf("-extension://")>-1?a.bex=!0:void 0!==window.Capacitor?(a.capacitor=!0,a.nativeMobile=!0,a.nativeMobileWrapper="capacitor"):void 0!==window._cordovaNative||void 0!==window.cordova?(a.cordova=!0,a.nativeMobile=!0,a.nativeMobileWrapper="cordova"):!0===pe&&!0===a.desktop&&!0===a.mac&&!0===a.safari&&ue(a),ne=void 0===a.nativeMobile&&void 0===a.electron&&!!document.querySelector("[data-server-rendered]"),!0===ne&&(re=!0)),a}const he=!1===ie?(navigator.userAgent||navigator.vendor||window.opera).toLowerCase():"",we={has:{touch:!1,webStorage:!1},within:{iframe:!1}},ge=!1===ie?{userAgent:he,is:me(he),has:{touch:pe,webStorage:(()=>{try{if(window.localStorage)return!0}catch(e){}return!1})()},within:{iframe:window.self!==window.top}}:we,fe={install(){n["a"].prototype.Platform=ge}};!0===ie?fe.parseSSR=e=>{const t=(e.req.headers["user-agent"]||e.req.headers["User-Agent"]||"").toLowerCase();return{...ge,userAgent:t,is:me(t)}}:le=!0===ge.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple");var ve=fe,be=o("f309");n["a"].use(be["a"]);var Pe=new be["a"]({});n["a"].use(ve),n["a"].config.productionTip=!1,new n["a"]({store:ae,vuetify:Pe,render:e=>e(L)}).$mount("#app")},"7bd4":function(e,t,o){"use strict";o("fbbd")},df8b:function(e,t,o){e.exports=o.p+"img/mainImg.2ac7d9f2.jpg"},e347:function(e,t,o){e.exports=o.p+"img/logo.1aa02e38.svg"},e9d0:function(e,t,o){},f45f:function(e,t,o){"use strict";o("e9d0")},fbbd:function(e,t,o){}});
//# sourceMappingURL=app.3abbb424.js.map