(function(e){function t(t){for(var a,n,r=t[0],l=t[1],c=t[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],a=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=o[0]))}return e}var a={},i={app:0},s=[];function n(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=a,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/zoiex/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"16c5":function(e,t,o){"use strict";o("48a0")},"31f8":function(e,t,o){},"48a0":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var a={};o.r(a),o.d(a,"setPlatform",(function(){return C})),o.d(a,"setBrowser",(function(){return M})),o.d(a,"setCompatibility",(function(){return R}));var i={};o.r(i),o.d(i,"SET_SNACKBAR_MESSAGE",(function(){return j})),o.d(i,"SET_NOTIFICATION_PERMISSION",(function(){return N})),o.d(i,"SET_PWA_INSTALLING",(function(){return F})),o.d(i,"SET_PWA",(function(){return B})),o.d(i,"SET_PROMPT",(function(){return D})),o.d(i,"SET_PLATFORM",(function(){return U})),o.d(i,"SET_BROWSER",(function(){return q})),o.d(i,"SET_SERVICE_WORKER_LOADED_STATUS",(function(){return G})),o.d(i,"SET_LANGUAGE",(function(){return z})),o.d(i,"SET_APP_LOAD",(function(){return $})),o.d(i,"SET_COMPATIBILITY",(function(){return H}));var s={};o.r(s),o.d(s,"snackbarMessage",(function(){return K})),o.d(s,"isPwa",(function(){return V})),o.d(s,"isPwaInstalling",(function(){return Y})),o.d(s,"promptPWA",(function(){return J})),o.d(s,"platform",(function(){return Q})),o.d(s,"browser",(function(){return X})),o.d(s,"serviceWorkerLoaded",(function(){return Z})),o.d(s,"language",(function(){return ee})),o.d(s,"appLoad",(function(){return te})),o.d(s,"compatibility",(function(){return oe}));var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e.visibleInstallPwaModal?o("InstallPWA",{on:{install:e.install}}):e._e(),e.serviceWorkerLoaded&&!e.visibleInstallPwaModal?o("IFrame",{attrs:{url:e.url}}):e._e()],1)},l=[],c=o("2f62"),d=o("8336"),p=o("8e36"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hiddenFlow install_pwa_body"},[a("div",{staticClass:"headerFull"},[a("div",{staticClass:"container"},[a("img",{staticClass:"image",attrs:{src:o("e347"),alt:""}})])]),a("div",{staticClass:"install_main hiddenMain"},[a("section",{staticClass:"main"},[a("div",{staticClass:"mainImage"},[a("img",{attrs:{src:o("df8b"),alt:""}})]),a("div",{staticClass:"mainText "},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[e._v("Welcome to Cazimbo Social")]),a("p",{staticClass:"text"},[e._v("Temos mais de 70+, incluindo Slots, Blackjack e jogos de Roleta")]),"ios"===e.platform?a("ol",{staticClass:"install-pwa-modal__list"},[a("h3",[e._v("Install App")]),a("li",[e._v(" Tap on "),a("span",{staticClass:"icon-highlight"},[a("iconify-icon",{attrs:{icon:"mdi:compass-outline"}})],1),e._v(" if there is ")]),a("li",[e._v(" Tap on "),a("span",{staticClass:"icon-highlight"},[a("iconify-icon",{attrs:{icon:"mdi:export-variant"}})],1)]),e._m(0)]):e._e(),e.appLoad||"ios"===e.platform?e._e():a(d["a"],{staticClass:"btn",attrs:{disabled:e.disabled},on:{click:e.install}},[e._v(e._s(e.installButtonText))]),e.appLoad?a("div",{staticClass:"progressWrap"},[a("strong",[e._v(e._s(Math.ceil(e.progress))+"%")]),a(p["a"],{staticClass:"loader",attrs:{color:"#34A853",height:"3"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1)])])]),e._m(1)])},m=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" Select "),o("span",{staticClass:"text-highlight"},[e._v("Add to Home Screen")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"install_footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"copyRight"},[e._v("© 2022 Cazimbo social . All Rights Reserved.")])])])}],h={name:"InstallPWA",data:()=>({shown:!1,platformLocal:"",disabled:!1,progress:1}),watch:{appLoad(e){if(!0===e){let e=setInterval(()=>{this.progress++,100==this.progress&&clearInterval(e)},150)}}},computed:{...Object(c["c"])({platform:"app/platform",serviceWorkerLoaded:"app/serviceWorkerLoaded",isPwa:"app/isPwa",isPwaInstalling:"app/isPwaInstalling",appLoad:"app/appLoad",compatibility:"app/compatibility"}),installButtonText(){return console.log(this.serviceWorkerLoaded),this.compatibility?this.isPwa&&this.serviceWorkerLoaded&&!this.isPwaInstalling?(this.disabled=!1,"Instalar"):this.isPwa&&this.isPwaInstalling?(this.disabled=!0,"Installing..."):(this.disabled=!1,"Open"):(this.disabled=!0,"Compatibility check...")}},methods:{install(){this.$emit("install")},background(){document.body.classList.add("animateBackground")},toTop(){let e=document.querySelector(".hiddenMain");e.classList.add("newAnim")},headerMoving(){let e=document.querySelector(".headerFull");e.classList.add("headImg")},overFlow(){let e=document.querySelector(".hiddenFlow");e.classList.remove("hiddenFlow")},imgOpacAdd(){let e=document.querySelector(".headerFull");e.classList.add("headOpacity")},imgOpacRem(){let e=document.querySelector(".headerFull");e.classList.remove("headOpacity")}},mounted(){this.imgOpacAdd(),setTimeout(this.imgOpacRem,2e3),setTimeout(this.background,2100),setTimeout(this.headerMoving,2e3),setTimeout(this.toTop,2e3),setTimeout(this.overFlow,2e3)}},g=h,w=(o("a6405"),o("2877")),f=Object(w["a"])(g,u,m,!1,null,"d773a3d6",null),v=f.exports,b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrap"},[o("iframe",{attrs:{width:"100%",height:"100%",src:e.url,frameborder:"0"}})])},P=[],I={name:"IFrame",props:{url:String}},_=I,A=(o("16c5"),Object(w["a"])(_,b,P,!1,null,"9a74726e",null)),S=A.exports,k={data:()=>({checkPwaInstallInterval:null}),methods:{...Object(c["d"])({setPWA:"app/SET_PWA",setPwaInstalling:"app/SET_PWA_INSTALLING",setPrompt:"app/SET_PROMPT",setAppLoad:"app/SET_APP_LOAD"}),promptInstall(){console.log(this.promptPWA),this.promptPWA&&"prompt"in this.promptPWA&&(console.log(this.promptPWA),console.log(1),this.setPwaInstalling(!0),this.promptPWA.prompt(),console.log(2),this.setPwaInstalling(!0),this.promptPWA.userChoice.then(e=>{"accepted"===e.outcome?(this.pwaInstallChoice=!0,console.log("pwaInstallChoice = "+this.pwaInstallChoice),this.setPwaInstalling(!0),this.setPwaInstalling(!1),this.setPWA(!1),this.setAppLoad(!0),setTimeout(()=>{this.setAppLoad(!1)},5e3),console.log("User accepted the install prompt")):(window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),console.log("User dismissed the install prompt"))}),this.setPrompt(null))},beforeinstallpromptHandler(e){e.preventDefault(),this.setPrompt(e),this.setPWA(!0),console.log(this.isPwa)},listenPwaInstalled(){null===this.checkPwaInstallInterval&&("getInstalledRelatedApps"in window.navigator?this.checkPwaInstallInterval=setInterval(async()=>{const e=await navigator.getInstalledRelatedApps();console.log("relatedApps",e);for(const t of e)console.log(t),"webapp"===t.platform&&(this.setPwaInstalling(!1),this.setPWA(!1),clearInterval(this.checkPwaInstallInterval))},500):(console.log('"getInstalledRelatedApps" not supported!'),this.setPwaInstalling(!1),this.setPWA(!1),clearInterval(this.checkPwaInstallInterval)))}},computed:{...Object(c["c"])({platform:"app/platform",promptPWA:"app/promptPWA",isPwa:"app/isPwa"})},mounted(){window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),window.addEventListener("load",()=>{navigator.standalone?(console.log("Launched: Installed (iOS)"),this.setPWA(!1)):matchMedia("(display-mode: standalone)").matches?(this.setPWA(!1),console.log("Launched: Installed")):(this.promptPWA?this.setPWA(!0):this.setPWA(!1),console.log("Launched: Browser Tab")),console.log(this.promptPWA)}),window.addEventListener("appinstalled",e=>{console.log("appinstalled"),this.setPwaInstalling(!0),setTimeout(()=>{this.setPwaInstalling(!1)},5e3),this.setPWA(!1)})},beforeDestroy(){clearInterval(this.checkPwaInstallInterval)}},T={name:"Main",components:{InstallPWA:v,IFrame:S},data:()=>({visibleInstallPwaModal:!1,installed:localStorage.installed||!1,deferredPrompt:localStorage.deferredPrompt||null,userLang:"",url:"",subid:""}),mixins:[k],computed:{...Object(c["c"])({platform:"app/platform",isPwa:"app/isPwa",serviceWorkerLoaded:"app/serviceWorkerLoaded",language:"app/language"})},methods:{...Object(c["b"])({setPlatform:"app/setPlatform"}),...Object(c["d"])({setPWA:"app/SET_PWA",setPwaInstalling:"app/SET_PWA_INSTALLING",setPrompt:"app/SET_PROMPT",setLanguage:"app/SET_LANGUAGE",setAppLoad:"app/SET_APP_LOAD",setCompatibility:"app/SET_COMPATIBILITY"}),install(){this.isPwa&&this.isPwaInstalling?console.log("snackbar.app_installing"):this.isPwa?this.promptInstall():this.serviceWorkerLoaded?(window.open("/zoiex/","_blank"),window.close(),this.visibleInstallPwaModal=!1,console.log("else")):console.log("app_loading")}},mounted(){const e=navigator.standalone||matchMedia("(display-mode: standalone)").matches;console.log(e),console.log(this.isPwa),e||(this.visibleInstallPwaModal=!0,console.log(this.visibleInstallPwaModal)),console.log(this.visibleInstallPwaModal),console.log(this.language);const t=new URLSearchParams(window.location.search);this.subid=t.get("UTM"),this.url="pt-BR"===this.language?"https://go.affilirise.com/redirect.aspx?pid=2517&bid=1534&subid="+this.subid:"https://cazimbosocial.com/"},watch:{serviceWorkerLoaded(e){console.log(e),e&&(console.log(navigator),console.log(this.platform),navigator.serviceWorker.ready.then(()=>{setTimeout(()=>{this.isPwa?(console.log("go"),this.setCompatibility(!0),this.visibleInstallPwaModal=!0):"ios"===this.platform&&(console.log("went"),this.visibleInstallPwaModal=!1)},100),console.log("Service Worker is ready")}))}},created(){this.setPlatform(this.Platform);const e=navigator.language||navigator.userLanguage;this.setLanguage(e)}},L=T,x=(o("cd25"),Object(w["a"])(L,r,l,!1,null,null,null)),y=x.exports,O=o("9483"),W={snackbarMessage:"",isPwa:!1,isPwaInstalling:!1,serviceWorkerLoaded:!1,promptPWA:null,platform:void 0,browser:void 0,language:"",appLoad:!1,compatibility:!1},E=o("7b46");const C=({commit:e},t)=>{let o;return console.log(t),o=t.is.mobile&&t.is.ios?"ios":t.is.mobile?"mobile":"desktop",e("SET_PLATFORM",o),o},M=({commit:e})=>{const t=Object(E["a"])();t&&e("SET_BROWSER",t.name)},R=({commit:e})=>{e("SET_COMPATIBILITY")},j=(e,t)=>{e.snackbarMessage=t},N=(e,t)=>{e.notificationPermission=t},F=(e,t)=>{e.isPwaInstalling=t},B=(e,t)=>{console.log("set pwa: "+t),e.isPwa=t},D=(e,t)=>{e.promptPWA=t},U=(e,t)=>{e.platform=t},q=(e,t)=>{e.browser=t},G=(e,t)=>{console.log(t),e.serviceWorkerLoaded=t},z=(e,t)=>{console.log(t),e.language=t},$=(e,t)=>{console.log(t),e.appLoad=t},H=(e,t)=>{console.log(t),e.compatibility=t},K=e=>e.snackbarMessage,V=e=>e.isPwa,Y=e=>e.isPwaInstalling,J=e=>e.promptPWA,Q=e=>e.platform,X=e=>e.browser,Z=e=>e.serviceWorkerLoaded,ee=e=>e.language,te=e=>e.appLoad,oe=e=>e.compatibility;var ae={namespaced:!0,state:W,actions:a,mutations:i,getters:s};n["a"].use(c["a"]);var ie=new c["a"].Store({state:{},mutations:{},getters:{},actions:{},modules:{app:ae}});Object(O["a"])("/zoiex/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(e){console.log("Service worker has been registered."),ie.commit("app/SET_SERVICE_WORKER_LOADED_STATUS",!0),setInterval(()=>{e.update()},36e5)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){ie.commit("app/SET_SERVICE_WORKER_LOADED_STATUS",!0),console.error("Error during service worker registration:",e)}});const se="undefined"===typeof window;let ne,re=!1,le=se,ce=!1;function de(e,t){const o=/(edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:o[5]||o[3]||o[1]||"",version:o[2]||o[4]||"0",versionNumber:o[4]||o[2]||"0",platform:t[0]||""}}function pe(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const ue=!1===se&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function me(e){ne={is:Object.assign({},e)},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function he(e){const t=pe(e),o=de(e,t),a={};o.browser&&(a[o.browser]=!0,a.version=o.version,a.versionNumber=parseInt(o.versionNumber,10)),o.platform&&(a[o.platform]=!0);const i=a.android||a.ios||a.bb||a.blackberry||a.ipad||a.iphone||a.ipod||a.kindle||a.playbook||a.silk||a["windows phone"];return!0===i||e.indexOf("mobile")>-1?(a.mobile=!0,a.edga||a.edgios?(a.edge=!0,o.browser="edge"):a.crios?(a.chrome=!0,o.browser="chrome"):a.fxios&&(a.firefox=!0,o.browser="firefox")):a.desktop=!0,(a.ipod||a.ipad||a.iphone)&&(a.ios=!0),a["windows phone"]&&(a.winphone=!0,delete a["windows phone"]),(a.chrome||a.opr||a.safari||a.vivaldi||!0===a.mobile&&!0!==a.ios&&!0!==i)&&(a.webkit=!0),(a.rv||a.iemobile)&&(o.browser="ie",a.ie=!0),(a.safari&&a.blackberry||a.bb)&&(o.browser="blackberry",a.blackberry=!0),a.safari&&a.playbook&&(o.browser="playbook",a.playbook=!0),a.opr&&(o.browser="opera",a.opera=!0),a.safari&&a.android&&(o.browser="android",a.android=!0),a.safari&&a.kindle&&(o.browser="kindle",a.kindle=!0),a.safari&&a.silk&&(o.browser="silk",a.silk=!0),a.vivaldi&&(o.browser="vivaldi",a.vivaldi=!0),a.name=o.browser,a.platform=o.platform,!1===se&&(e.indexOf("electron")>-1?a.electron=!0:document.location.href.indexOf("-extension://")>-1?a.bex=!0:void 0!==window.Capacitor?(a.capacitor=!0,a.nativeMobile=!0,a.nativeMobileWrapper="capacitor"):void 0!==window._cordovaNative||void 0!==window.cordova?(a.cordova=!0,a.nativeMobile=!0,a.nativeMobileWrapper="cordova"):!0===ue&&!0===a.desktop&&!0===a.mac&&!0===a.safari&&me(a),re=void 0===a.nativeMobile&&void 0===a.electron&&!!document.querySelector("[data-server-rendered]"),!0===re&&(le=!0)),a}const ge=!1===se?(navigator.userAgent||navigator.vendor||window.opera).toLowerCase():"",we={has:{touch:!1,webStorage:!1},within:{iframe:!1}},fe=!1===se?{userAgent:ge,is:he(ge),has:{touch:ue,webStorage:(()=>{try{if(window.localStorage)return!0}catch(e){}return!1})()},within:{iframe:window.self!==window.top}}:we,ve={install(){n["a"].prototype.Platform=fe}};!0===se?ve.parseSSR=e=>{const t=(e.req.headers["user-agent"]||e.req.headers["User-Agent"]||"").toLowerCase();return{...fe,userAgent:t,is:he(t)}}:ce=!0===fe.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple");var be=ve,Pe=o("f309");n["a"].use(Pe["a"]);var Ie=new Pe["a"]({});n["a"].use(be),n["a"].config.productionTip=!1,new n["a"]({store:ie,vuetify:Ie,render:e=>e(y)}).$mount("#app")},"74b0":function(e,t,o){},a6405:function(e,t,o){"use strict";o("31f8")},cd25:function(e,t,o){"use strict";o("74b0")},df8b:function(e,t,o){e.exports=o.p+"img/mainImg.2ac7d9f2.jpg"},e347:function(e,t,o){e.exports=o.p+"img/logo.1aa02e38.svg"}});
//# sourceMappingURL=app.a54deaa8.js.map