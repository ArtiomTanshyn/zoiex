(function(e){function t(t){for(var i,n,r=t[0],l=t[1],c=t[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},o={app:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/zoiex/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"16c5":function(e,t,a){"use strict";a("48a0")},"48a0":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var i={};a.r(i),a.d(i,"setPlatform",(function(){return M})),a.d(i,"setBrowser",(function(){return R})),a.d(i,"setCompatibility",(function(){return j}));var o={};a.r(o),a.d(o,"SET_SNACKBAR_MESSAGE",(function(){return N})),a.d(o,"SET_NOTIFICATION_PERMISSION",(function(){return F})),a.d(o,"SET_PWA_INSTALLING",(function(){return B})),a.d(o,"SET_PWA",(function(){return U})),a.d(o,"SET_PROMPT",(function(){return D})),a.d(o,"SET_PLATFORM",(function(){return q})),a.d(o,"SET_BROWSER",(function(){return z})),a.d(o,"SET_SERVICE_WORKER_LOADED_STATUS",(function(){return G})),a.d(o,"SET_LANGUAGE",(function(){return $})),a.d(o,"SET_APP_LOAD",(function(){return H})),a.d(o,"SET_COMPATIBILITY",(function(){return K}));var s={};a.r(s),a.d(s,"snackbarMessage",(function(){return V})),a.d(s,"isPwa",(function(){return Y})),a.d(s,"isPwaInstalling",(function(){return J})),a.d(s,"promptPWA",(function(){return Q})),a.d(s,"platform",(function(){return X})),a.d(s,"browser",(function(){return Z})),a.d(s,"serviceWorkerLoaded",(function(){return ee})),a.d(s,"language",(function(){return te})),a.d(s,"appLoad",(function(){return ae})),a.d(s,"compatibility",(function(){return ie}));var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.visibleInstallPwaModal?a("InstallPWA",{on:{install:e.install}}):e._e(),a("div",[e._v(e._s(e.language))]),e.serviceWorkerLoaded&&!e.visibleInstallPwaModal?a("IFrame",{attrs:{url:e.url}}):e._e()],1)},l=[],c=a("2f62"),d=a("8336"),p=a("490a"),u=a("8e36"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hiddenFlow install_pwa_body"},[i("div",{staticClass:"headerFull"},[i("div",{staticClass:"container"},[i("img",{staticClass:"image",attrs:{src:a("e347"),alt:""}})])]),i("div",{staticClass:"install_main hiddenMain"},[i("section",{staticClass:"main"},[i("div",{staticClass:"mainImage"},[i("img",{attrs:{src:a("df8b"),alt:""}})]),i("div",{staticClass:"mainText "},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[e._v("Welcome to Cazimbo Social")]),i("p",{staticClass:"text"},[e._v("Temos mais de 70+, incluindo Slots, Blackjack e jogos de Roleta")]),"ios"===e.platform?i("ol",{staticClass:"install-pwa-modal__list"},[i("h3",[e._v("Install App")]),i("li",[e._v(" Tap on "),i("span",{staticClass:"icon-highlight"},[i("iconify-icon",{attrs:{icon:"mdi:compass-outline"}})],1),e._v(" if there is ")]),i("li",[e._v(" Tap on "),i("span",{staticClass:"icon-highlight"},[i("iconify-icon",{attrs:{icon:"mdi:export-variant"}})],1)]),e._m(0)]):e._e(),e.appLoad||"ios"===e.platform?e._e():i(d["a"],{staticClass:"btn",attrs:{disabled:e.disabled},on:{click:e.install}},[e._v(" "+e._s(e.installButtonText)+" "),!e.compatibility||e.isPwa&&e.isPwaInstalling?i(p["a"],{staticClass:"install-btn__loader",attrs:{indeterminate:"",color:"#ffffff",width:"2",size:"16"}}):e._e()],1),e.appLoad?i("div",{staticClass:"progressWrap"},[i("strong",[e._v(e._s(Math.ceil(e.progress))+"%")]),i(u["a"],{staticClass:"loader",attrs:{color:"#34A853",height:"3"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1)])])]),e._m(1)])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v(" Select "),a("span",{staticClass:"text-highlight"},[e._v("Add to Home Screen")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"install_footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"copyRight"},[e._v("© 2022 Cazimbo social . All Rights Reserved.")])])])}],f={name:"InstallPWA",data:()=>({shown:!1,platformLocal:"",disabled:!1,progress:1,base_url:""}),watch:{appLoad(e){if(!0===e){let e=setInterval(()=>{this.progress++,100==this.progress&&clearInterval(e)},150)}}},computed:{...Object(c["c"])({platform:"app/platform",serviceWorkerLoaded:"app/serviceWorkerLoaded",isPwa:"app/isPwa",isPwaInstalling:"app/isPwaInstalling",appLoad:"app/appLoad",compatibility:"app/compatibility"}),installButtonText(){return!this.compatibility&&this.isPwa?(this.disabled=!0,"Compatibility check... "):this.isPwa&&this.serviceWorkerLoaded&&!this.isPwaInstalling?(this.disabled=!1,"Instalar"):this.isPwa&&this.isPwaInstalling?(this.disabled=!0,"Installing... "):(this.disabled=!1,"Open")}},methods:{install(){this.$emit("install")},background(){document.body.classList.add("animateBackground")},toTop(){let e=document.querySelector(".hiddenMain");e.classList.add("newAnim")},headerMoving(){let e=document.querySelector(".headerFull");e.classList.add("headImg")},overFlow(){let e=document.querySelector(".hiddenFlow");e.classList.remove("hiddenFlow")},imgOpacAdd(){let e=document.querySelector(".headerFull");e.classList.add("headOpacity")},imgOpacRem(){let e=document.querySelector(".headerFull");e.classList.remove("headOpacity")}},mounted(){this.imgOpacAdd(),setTimeout(this.imgOpacRem,2e3),setTimeout(this.background,2100),setTimeout(this.headerMoving,2e3),setTimeout(this.toTop,2e3),setTimeout(this.overFlow,2e3)}},w=f,g=(a("fe6c1"),a("2877")),b=Object(g["a"])(w,m,h,!1,null,"bbbf0518",null),v=b.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("iframe",{attrs:{width:"100%",height:"100%",src:e.url,frameborder:"0"}})])},I=[],_={name:"IFrame",props:{url:String}},A=_,S=(a("16c5"),Object(g["a"])(A,P,I,!1,null,"9a74726e",null)),T=S.exports,k={data:()=>({checkPwaInstallInterval:null}),methods:{...Object(c["d"])({setPWA:"app/SET_PWA",setPwaInstalling:"app/SET_PWA_INSTALLING",setPrompt:"app/SET_PROMPT",setAppLoad:"app/SET_APP_LOAD"}),promptInstall(){this.promptPWA&&"prompt"in this.promptPWA&&(this.setPwaInstalling(!0),this.promptPWA.prompt(),this.setPwaInstalling(!0),this.promptPWA.userChoice.then(e=>{"accepted"===e.outcome?(this.pwaInstallChoice=!0,console.log("pwaInstallChoice = "+this.pwaInstallChoice),this.setPwaInstalling(!0),this.listenPwaInstalled(),this.setPwaInstalling(!1),this.setPWA(!1),this.setAppLoad(!0),setTimeout(()=>{this.setAppLoad(!1)},13e3),console.log("User accepted the install prompt")):(window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),this.setPwaInstalling(!1),console.log("User dismissed the install prompt"))}),this.setPrompt(null))},beforeinstallpromptHandler(e){e.preventDefault(),this.setPrompt(e),this.setPWA(!0)},listenPwaInstalled(){null===this.checkPwaInstallInterval&&("getInstalledRelatedApps"in window.navigator?this.checkPwaInstallInterval=setInterval(async()=>{const e=await navigator.getInstalledRelatedApps();console.log("relatedApps",e);for(const t of e)"webapp"===t.platform&&(this.setPwaInstalling(!1),this.setPWA(!1),clearInterval(this.checkPwaInstallInterval))},500):(console.log('"getInstalledRelatedApps" not supported!'),this.setPwaInstalling(!1),this.setPWA(!1),clearInterval(this.checkPwaInstallInterval)))}},computed:{...Object(c["c"])({platform:"app/platform",promptPWA:"app/promptPWA",isPwa:"app/isPwa"})},mounted(){window.addEventListener("beforeinstallprompt",this.beforeinstallpromptHandler.bind(this),{once:!0}),window.addEventListener("load",()=>{navigator.standalone?(console.log("Launched: Installed (iOS)"),this.setPWA(!1)):matchMedia("(display-mode: standalone)").matches?(this.setPWA(!1),console.log("Launched: Installed")):(this.promptPWA?this.setPWA(!0):this.setPWA(!1),console.log("Launched: Browser Tab"))}),window.addEventListener("appinstalled",e=>{console.log("appinstalled"),this.setPwaInstalling(!0),this.listenPwaInstalled(),setTimeout(()=>{this.setPwaInstalling(!1)},1e4),this.setPWA(!1)})},beforeDestroy(){clearInterval(this.checkPwaInstallInterval)}},x={name:"Main",components:{InstallPWA:v,IFrame:T},data:()=>({visibleInstallPwaModal:!1,installed:localStorage.installed||!1,deferredPrompt:localStorage.deferredPrompt||null,userLang:"",url:"",subid:""}),mixins:[k],computed:{...Object(c["c"])({platform:"app/platform",isPwa:"app/isPwa",serviceWorkerLoaded:"app/serviceWorkerLoaded",language:"app/language"})},methods:{...Object(c["b"])({setPlatform:"app/setPlatform"}),...Object(c["d"])({setPWA:"app/SET_PWA",setPwaInstalling:"app/SET_PWA_INSTALLING",setPrompt:"app/SET_PROMPT",setLanguage:"app/SET_LANGUAGE",setCompatibility:"app/SET_COMPATIBILITY"}),install(){this.isPwa&&this.isPwaInstalling?console.log("snackbar.app_installing"):this.isPwa?this.promptInstall():this.serviceWorkerLoaded?("mobile"===this.platform&&window.open("/zoiex/"),this.visibleInstallPwaModal=!1,console.log("else")):console.log("app_loading")}},mounted(){const e=navigator.standalone||matchMedia("(display-mode: standalone)").matches;if(!e){this.visibleInstallPwaModal=!0;const e=navigator.language||navigator.userLanguage;this.setLanguage(e)}const t=new URLSearchParams(window.location.search);this.subid=t.get("UTM")?t.get("UTM"):"",console.log(t.get("UTM")),console.log(this.subid),this.url="pt-BR"===this.language?"https://go.affilirise.com/redirect.aspx?pid=2517&bid=1534&subid="+this.subid:"https://cazimbosocial.com/",console.log(this.url)},watch:{serviceWorkerLoaded(e){e&&navigator.serviceWorker.ready.then(()=>{setTimeout(()=>{this.setCompatibility(!0),this.isPwa&&(this.visibleInstallPwaModal=!0)},2e3),console.log("Service Worker is ready")})}},created(){this.setPlatform(this.Platform)}},y=x,L=(a("e3d5"),Object(g["a"])(y,r,l,!1,null,null,null)),O=L.exports,E=a("9483"),W={snackbarMessage:"",isPwa:!1,isPwaInstalling:!1,serviceWorkerLoaded:!1,promptPWA:null,platform:void 0,browser:void 0,language:"",appLoad:!1,compatibility:!1},C=a("7b46");const M=({commit:e},t)=>{let a;return a=t.is.mobile&&t.is.ios?"ios":t.is.mobile?"mobile":"desktop",e("SET_PLATFORM",a),a},R=({commit:e})=>{const t=Object(C["a"])();t&&e("SET_BROWSER",t.name)},j=({commit:e})=>{e("SET_COMPATIBILITY")},N=(e,t)=>{e.snackbarMessage=t},F=(e,t)=>{e.notificationPermission=t},B=(e,t)=>{e.isPwaInstalling=t},U=(e,t)=>{console.log("set pwa: "+t),e.isPwa=t},D=(e,t)=>{e.promptPWA=t},q=(e,t)=>{e.platform=t},z=(e,t)=>{e.browser=t},G=(e,t)=>{console.log(t),e.serviceWorkerLoaded=t},$=(e,t)=>{console.log(t),e.language=t},H=(e,t)=>{console.log(t),e.appLoad=t},K=(e,t)=>{console.log(t),e.compatibility=t},V=e=>e.snackbarMessage,Y=e=>e.isPwa,J=e=>e.isPwaInstalling,Q=e=>e.promptPWA,X=e=>e.platform,Z=e=>e.browser,ee=e=>e.serviceWorkerLoaded,te=e=>e.language,ae=e=>e.appLoad,ie=e=>e.compatibility;var oe={namespaced:!0,state:W,actions:i,mutations:o,getters:s};n["a"].use(c["a"]);var se=new c["a"].Store({state:{},mutations:{},getters:{},actions:{},modules:{app:oe}});Object(E["a"])("/zoiex/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(e){console.log("Service worker has been registered."),se.commit("app/SET_SERVICE_WORKER_LOADED_STATUS",!0),setInterval(()=>{e.update()},36e5)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){se.commit("app/SET_SERVICE_WORKER_LOADED_STATUS",!0),console.error("Error during service worker registration:",e)}});const ne="undefined"===typeof window;let re,le=!1,ce=ne,de=!1;function pe(e,t){const a=/(edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:a[5]||a[3]||a[1]||"",version:a[2]||a[4]||"0",versionNumber:a[4]||a[2]||"0",platform:t[0]||""}}function ue(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const me=!1===ne&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function he(e){re={is:Object.assign({},e)},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function fe(e){const t=ue(e),a=pe(e,t),i={};a.browser&&(i[a.browser]=!0,i.version=a.version,i.versionNumber=parseInt(a.versionNumber,10)),a.platform&&(i[a.platform]=!0);const o=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return!0===o||e.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,a.browser="edge"):i.crios?(i.chrome=!0,a.browser="chrome"):i.fxios&&(i.firefox=!0,a.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||!0===i.mobile&&!0!==i.ios&&!0!==o)&&(i.webkit=!0),(i.rv||i.iemobile)&&(a.browser="ie",i.ie=!0),(i.safari&&i.blackberry||i.bb)&&(a.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(a.browser="playbook",i.playbook=!0),i.opr&&(a.browser="opera",i.opera=!0),i.safari&&i.android&&(a.browser="android",i.android=!0),i.safari&&i.kindle&&(a.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(a.browser="silk",i.silk=!0),i.vivaldi&&(a.browser="vivaldi",i.vivaldi=!0),i.name=a.browser,i.platform=a.platform,!1===ne&&(e.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:void 0!==window.Capacitor?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):void 0!==window._cordovaNative||void 0!==window.cordova?(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"):!0===me&&!0===i.desktop&&!0===i.mac&&!0===i.safari&&he(i),le=void 0===i.nativeMobile&&void 0===i.electron&&!!document.querySelector("[data-server-rendered]"),!0===le&&(ce=!0)),i}const we=!1===ne?(navigator.userAgent||navigator.vendor||window.opera).toLowerCase():"",ge={has:{touch:!1,webStorage:!1},within:{iframe:!1}},be=!1===ne?{userAgent:we,is:fe(we),has:{touch:me,webStorage:(()=>{try{if(window.localStorage)return!0}catch(e){}return!1})()},within:{iframe:window.self!==window.top}}:ge,ve={install(){n["a"].prototype.Platform=be}};!0===ne?ve.parseSSR=e=>{const t=(e.req.headers["user-agent"]||e.req.headers["User-Agent"]||"").toLowerCase();return{...be,userAgent:t,is:fe(t)}}:de=!0===be.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple");var Pe=ve,Ie=a("f309");n["a"].use(Ie["a"]);var _e=new Ie["a"]({});n["a"].use(Pe),n["a"].config.productionTip=!1,new n["a"]({store:se,vuetify:_e,render:e=>e(O)}).$mount("#app")},"9df4":function(e,t,a){},df8b:function(e,t,a){e.exports=a.p+"img/mainImg.2ac7d9f2.jpg"},e347:function(e,t,a){e.exports=a.p+"img/logo.1aa02e38.svg"},e3d5:function(e,t,a){"use strict";a("ffed")},fe6c1:function(e,t,a){"use strict";a("9df4")},ffed:function(e,t,a){}});
//# sourceMappingURL=app.225b8337.js.map