(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],p=0,u=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},i={app:0},n=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/zoiex/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"16c5":function(e,t,o){"use strict";o("48a0")},4351:function(e,t,o){},"48a0":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var a={};o.r(a),o.d(a,"setPlatform",(function(){return E})),o.d(a,"setBrowser",(function(){return L}));var i={};o.r(i),o.d(i,"SET_SNACKBAR_MESSAGE",(function(){return C})),o.d(i,"SET_NOTIFICATION_PERMISSION",(function(){return M})),o.d(i,"SET_PWA_INSTALLING",(function(){return R})),o.d(i,"SET_PWA",(function(){return j})),o.d(i,"SET_PROMPT",(function(){return F})),o.d(i,"SET_PLATFORM",(function(){return N})),o.d(i,"SET_BROWSER",(function(){return B})),o.d(i,"SET_SERVICE_WORKER_LOADED_STATUS",(function(){return q}));var n={};o.r(n),o.d(n,"snackbarMessage",(function(){return U})),o.d(n,"isPwa",(function(){return D})),o.d(n,"isPwaInstalling",(function(){return $})),o.d(n,"promptPWA",(function(){return z})),o.d(n,"platform",(function(){return H})),o.d(n,"browser",(function(){return K})),o.d(n,"serviceWorkerLoaded",(function(){return G}));var s=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e.visibleInstallPwaModal&&e.isPwa?o("InstallPWA",{on:{install:e.install}}):e._e(),e.serviceWorkerLoaded&&!e.visibleInstallPwaModal?o("IFrame",{attrs:{url:e.url}}):e._e()],1)},l=[],c=o("2f62"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hiddenFlow install_pwa_body"},[a("div",{staticClass:"headerFull"},[a("div",{staticClass:"container"},[a("img",{staticClass:"image",attrs:{src:o("e347"),alt:""}})])]),a("div",{staticClass:"install_main hiddenMain"},[a("section",{staticClass:"main"},[a("div",{staticClass:"mainImage"},[a("img",{attrs:{src:o("df8b"),alt:""}})]),a("div",{staticClass:"mainText "},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[e._v("Welcome to Cazimbo Social")]),a("p",{staticClass:"text"},[e._v("Temos mais de 70+, incluindo Slots, Blackjack e jogos de Roleta")]),"ios"===e.platform?a("ol",{staticClass:"install-pwa-modal__list"},[a("h3",[e._v("Install App")]),a("li",[e._v(" Tap on "),a("span",{staticClass:"icon-highlight"},[a("iconify-icon",{attrs:{icon:"mdi:compass-outline"}})],1),e._v(" if there is ")]),a("li",[e._v(" Tap on "),a("span",{staticClass:"icon-highlight"},[a("iconify-icon",{attrs:{icon:"mdi:export-variant"}})],1)]),e._m(0)]):a("div",{staticClass:"btn",on:{click:e.install}},[e._v(e._s(e.installButtonText))])])])])]),e._m(1)])},p=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" Select "),o("span",{staticClass:"text-highlight"},[e._v("Add to Home Screen")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"install_footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"copyRight"},[e._v("© 2022 Cazimbo social . All Rights Reserved.")])])])}],u={name:"InstallPWA",data:()=>({shown:!1,platformLocal:""}),computed:{...Object(c["c"])({platform:"app/platform",isPwa:"app/isPwa",isPwaInstalling:"app/isPwaInstalling"}),installButtonText(){return this.isPwa&&this.isPwaInstalling?"Installing...":this.isPwa?"Install":"Open"}},methods:{install(){this.$emit("install")},background(){document.body.classList.add("animateBackground")},toTop(){let e=document.querySelector(".hiddenMain");e.classList.add("newAnim")},headerMoving(){let e=document.querySelector(".headerFull");e.classList.add("headImg")},overFlow(){let e=document.querySelector(".hiddenFlow");e.classList.remove("hiddenFlow")},imgOpacAdd(){let e=document.querySelector(".headerFull");e.classList.add("headOpacity")},imgOpacRem(){let e=document.querySelector(".headerFull");e.classList.remove("headOpacity")}},mounted(){this.imgOpacAdd(),setTimeout(this.imgOpacRem,2e3),setTimeout(this.background,2100),setTimeout(this.headerMoving,2e3),setTimeout(this.toTop,2e3),setTimeout(this.overFlow,2e3)}},m=u,h=(o("ffd3"),o("2877")),w=Object(h["a"])(m,d,p,!1,null,"69d1e8d0",null),f=w.exports,g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrap"},[o("iframe",{attrs:{width:"100%",height:"100%",src:e.url,frameborder:"0"}})])},v=[],b={name:"IFrame",props:{url:String}},P=b,I=(o("16c5"),Object(h["a"])(P,g,v,!1,null,"9a74726e",null)),S=I.exports,_={data:()=>({checkPwaInstallInterval:null}),methods:{...Object(c["d"])({setPWA:"app/SET_PWA",setPwaInstalling:"app/SET_PWA_INSTALLING",setPrompt:"app/SET_PROMPT"}),promptInstall(){console.log(his.promptPWA),this.promptPWA&&"prompt"in this.promptPWA&&(console.log(his.promptPWA),this.promptPWA.prompt(),this.promptPWA.userChoice.then(e=>{"accepted"===e.outcome?(this.pwaInstallChoice=!0,console.log("pwaInstallChoice = "+this.pwaInstallChoice),this.setPwaInstalling(!0),this.listenPwaInstalled(),console.log("User accepted the install prompt")):(window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),console.log("User dismissed the install prompt"))}),this.setPrompt(null))},beforeinstallpromptHandler(e){this.setPrompt(e),this.setPWA(!0)},listenPwaInstalled(){null===this.checkPwaInstallInterval&&("getInstalledRelatedApps"in window.navigator?this.checkPwaInstallInterval=setInterval(async()=>{const e=await navigator.getInstalledRelatedApps();console.log("relatedApps",e);for(const t of e)"webapp"===t.platform&&(this.setPwaInstalling(!1),this.setPWA(!1),clearInterval(this.checkPwaInstallInterval))},500):(console.log('"getInstalledRelatedApps" not supported!'),this.setPwaInstalling(!1),this.setPWA(!1),clearInterval(this.checkPwaInstallInterval)))}},computed:{...Object(c["c"])({promptPWA:"app/promptPWA"})},mounted(){window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),window.addEventListener("load",()=>{navigator.standalone?(console.log("Launched: Installed (iOS)"),this.setPWA(!1)):matchMedia("(display-mode: standalone)").matches?(this.setPWA(!1),console.log("Launched: Installed")):(this.promptPWA?this.setPWA(!0):this.setPWA(!1),console.log("Launched: Browser Tab"))}),window.addEventListener("appinstalled",e=>{console.log("appinstalled"),this.setPwaInstalling(!0),this.listenPwaInstalled()})},beforeDestroy(){clearInterval(this.checkPwaInstallInterval)}},k={name:"Main",components:{InstallPWA:f,IFrame:S},data:()=>({visibleInstallPwaModal:!1,installed:localStorage.installed||!1,deferredPrompt:localStorage.deferredPrompt||null,userLang:"",url:"",subid:""}),mixins:[_],computed:{...Object(c["c"])({platform:"app/platform",isPwa:"app/isPwa",serviceWorkerLoaded:"app/serviceWorkerLoaded"})},methods:{...Object(c["b"])({setPlatform:"app/setPlatform"}),install(){this.isPwa&&this.isPwaInstalling?console.log("snackbar.app_installing"):this.isPwa?this.promptInstall():this.serviceWorkerLoaded?console.log("else"):console.log("app_loading")}},mounted(){const e=navigator.standalone||matchMedia("(display-mode: standalone)").matches;console.log(e),e||(this.visibleInstallPwaModal=!0);const t=new URLSearchParams(window.location.search);this.subid=t.get("UTM"),this.url="pt-BR"===this.userLang?"https://go.affilirise.com/redirect.aspx?pid=2517&bid=1534&subid="+this.subid:"https://cazimbosocial.com/"},watch:{serviceWorkerLoaded(e){console.log(e),e&&(console.log(navigator),console.log(this.platform),navigator.serviceWorker.ready.then(()=>{setTimeout(()=>{this.isPwa&&(console.log("go"),this.visibleInstallPwaModal=!0)},1e4),console.log("Service Worker is ready")}))}},created(){this.setPlatform(this.Platform),localStorage.installed&&(this.installed=localStorage.installed),localStorage.deferredPrompt&&(this.deferredPrompt=localStorage.deferredPrompt),localStorage.userLang||(localStorage.userLang=navigator.language||navigator.userLanguage),this.userLang=localStorage.userLang}},x=k,A=(o("84ef"),Object(h["a"])(x,r,l,!1,null,null,null)),O=A.exports,y=o("9483"),T={snackbarMessage:"",isPwa:!1,isPwaInstalling:!1,serviceWorkerLoaded:!1,promptPWA:null,platform:void 0,browser:void 0},W=o("7b46");const E=({commit:e},t)=>{let o;return console.log(t),o=t.is.mobile&&t.is.ios?"ios":t.is.mobile?"mobile":"desktop",e("SET_PLATFORM",o),o},L=({commit:e})=>{const t=Object(W["a"])();t&&e("SET_BROWSER",t.name)},C=(e,t)=>{e.snackbarMessage=t},M=(e,t)=>{e.notificationPermission=t},R=(e,t)=>{e.isPwaInstalling=t},j=(e,t)=>{console.log("set pwa: "+t),e.isPwa=t},F=(e,t)=>{e.promptPWA=t},N=(e,t)=>{e.platform=t},B=(e,t)=>{e.browser=t},q=(e,t)=>{e.serviceWorkerLoaded=t},U=e=>e.snackbarMessage,D=e=>e.isPwa,$=e=>e.isPwaInstalling,z=e=>e.promptPWA,H=e=>e.platform,K=e=>e.browser,G=e=>e.serviceWorkerLoaded;var V={namespaced:!0,state:T,actions:a,mutations:i,getters:n};s["a"].use(c["a"]);var J=new c["a"].Store({state:{},mutations:{},getters:{},actions:{},modules:{app:V}});Object(y["a"])("/zoiex/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(e){console.log("Service worker has been registered."),J.commit("app/SET_SERVICE_WORKER_LOADED_STATUS",!0),setInterval(()=>{e.update()},36e5)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){J.commit("app/SET_SERVICE_WORKER_LOADED_STATUS",!0),console.error("Error during service worker registration:",e)}});const Q="undefined"===typeof window;let X,Y=!1,Z=Q,ee=!1;function te(e,t){const o=/(edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:o[5]||o[3]||o[1]||"",version:o[2]||o[4]||"0",versionNumber:o[4]||o[2]||"0",platform:t[0]||""}}function oe(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const ae=!1===Q&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function ie(e){X={is:Object.assign({},e)},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function ne(e){const t=oe(e),o=te(e,t),a={};o.browser&&(a[o.browser]=!0,a.version=o.version,a.versionNumber=parseInt(o.versionNumber,10)),o.platform&&(a[o.platform]=!0);const i=a.android||a.ios||a.bb||a.blackberry||a.ipad||a.iphone||a.ipod||a.kindle||a.playbook||a.silk||a["windows phone"];return!0===i||e.indexOf("mobile")>-1?(a.mobile=!0,a.edga||a.edgios?(a.edge=!0,o.browser="edge"):a.crios?(a.chrome=!0,o.browser="chrome"):a.fxios&&(a.firefox=!0,o.browser="firefox")):a.desktop=!0,(a.ipod||a.ipad||a.iphone)&&(a.ios=!0),a["windows phone"]&&(a.winphone=!0,delete a["windows phone"]),(a.chrome||a.opr||a.safari||a.vivaldi||!0===a.mobile&&!0!==a.ios&&!0!==i)&&(a.webkit=!0),(a.rv||a.iemobile)&&(o.browser="ie",a.ie=!0),(a.safari&&a.blackberry||a.bb)&&(o.browser="blackberry",a.blackberry=!0),a.safari&&a.playbook&&(o.browser="playbook",a.playbook=!0),a.opr&&(o.browser="opera",a.opera=!0),a.safari&&a.android&&(o.browser="android",a.android=!0),a.safari&&a.kindle&&(o.browser="kindle",a.kindle=!0),a.safari&&a.silk&&(o.browser="silk",a.silk=!0),a.vivaldi&&(o.browser="vivaldi",a.vivaldi=!0),a.name=o.browser,a.platform=o.platform,!1===Q&&(e.indexOf("electron")>-1?a.electron=!0:document.location.href.indexOf("-extension://")>-1?a.bex=!0:void 0!==window.Capacitor?(a.capacitor=!0,a.nativeMobile=!0,a.nativeMobileWrapper="capacitor"):void 0!==window._cordovaNative||void 0!==window.cordova?(a.cordova=!0,a.nativeMobile=!0,a.nativeMobileWrapper="cordova"):!0===ae&&!0===a.desktop&&!0===a.mac&&!0===a.safari&&ie(a),Y=void 0===a.nativeMobile&&void 0===a.electron&&!!document.querySelector("[data-server-rendered]"),!0===Y&&(Z=!0)),a}const se=!1===Q?(navigator.userAgent||navigator.vendor||window.opera).toLowerCase():"",re={has:{touch:!1,webStorage:!1},within:{iframe:!1}},le=!1===Q?{userAgent:se,is:ne(se),has:{touch:ae,webStorage:(()=>{try{if(window.localStorage)return!0}catch(e){}return!1})()},within:{iframe:window.self!==window.top}}:re,ce={install(){s["a"].prototype.Platform=le}};!0===Q?ce.parseSSR=e=>{const t=(e.req.headers["user-agent"]||e.req.headers["User-Agent"]||"").toLowerCase();return{...le,userAgent:t,is:ne(t)}}:ee=!0===le.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple");var de=ce;s["a"].use(de),s["a"].config.productionTip=!1,new s["a"]({store:J,render:e=>e(O)}).$mount("#app")},8481:function(e,t,o){},"84ef":function(e,t,o){"use strict";o("8481")},df8b:function(e,t,o){e.exports=o.p+"img/mainImg.2ac7d9f2.jpg"},e347:function(e,t,o){e.exports=o.p+"img/logo.1aa02e38.svg"},ffd3:function(e,t,o){"use strict";o("4351")}});
//# sourceMappingURL=app.2d5271bd.js.map