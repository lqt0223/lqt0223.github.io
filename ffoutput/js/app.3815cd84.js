(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ffoutput/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("button",{on:{click:e.authorize}},[e._v("AUTH")]),n("button",{on:{click:e.fetchVideos}},[e._v("FETCH")]),n("br"),n("button",{on:{click:e.prevFrame}},[e._v("PF")]),n("button",{on:{click:e.nextFrame}},[e._v("NF")]),n("br"),n("br"),n("span",[e._v("BLUR")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.blur,expression:"blur"}],attrs:{type:"range",min:"0",max:"20",step:"0.25"},domProps:{value:e.blur},on:{__r:function(t){e.blur=t.target.value}}}),n("span",[e._v("PBR")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.playbackRate,expression:"playbackRate"}],attrs:{type:"range",max:"1",min:"0",step:"0.05"},domProps:{value:e.playbackRate},on:{__r:function(t){e.playbackRate=t.target.value}}}),n("br"),n("br"),n("span",[e._v("BR")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.brightness,expression:"brightness"}],attrs:{type:"range",max:"10",min:"0",step:"0.05"},domProps:{value:e.brightness},on:{__r:function(t){e.brightness=t.target.value}}}),n("span",[e._v("SD")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.scaleDown,expression:"scaleDown"}],attrs:{type:"range",max:"1",min:"0",step:"0.05"},domProps:{value:e.scaleDown},on:{__r:function(t){e.scaleDown=t.target.value}}}),e.url?n("video",{ref:"video",style:e.styleObj,attrs:{controls:"",src:e.url},domProps:{playbackRate:e.playbackRate}}):e._e(),null!==e.videos?n("div",e._l(e.videos,(function(t){return n("div",{staticClass:"video-item"},[n("p",[e._v(e._s(t.name))]),n("img",{attrs:{src:t.thumbnailLink}}),n("button",{on:{click:function(n){return e.watch(t)}}},[e._v("watch")]),n("button",{on:{click:function(n){return e.download(t)}}},[e._v("download")]),n("hr")])})),0):e._e(),n("iframe",{staticStyle:{display:"none"},attrs:{src:e.iframeUrl}})])},a=[],i="10Eq2Pabv_UARecpLEQUusz6nmS-3Fct7",s={data:function(){return{videos:null,url:null,iframeUrl:null,blur:0,brightness:1,playbackRate:1,scaleDown:1}},computed:{styleObj:function(){return{filter:"blur(".concat(this.blur,"px) brightness(").concat(this.brightness,")"),transform:"scale(".concat(this.scaleDown,")")}}},methods:{watch:function(e){this.url="https://www.googleapis.com/drive/v3/files/".concat(e.id,"?alt=media")},download:function(e){window.open(e.webContentLink)},fetchVideos:function(){var e=this;gapi.client.drive.files.list({q:'"'.concat(i,'" in parents'),fields:"files(id, name, webContentLink, hasThumbnail, thumbnailLink, videoMediaMetadata)"}).then((function(t){t=JSON.parse(t.body),e.videos=t.files}));var t=gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;navigator.serviceWorker.ready.then((function(e){e.active.postMessage(t)}))},prevFrame:function(){this.$refs.video.pause(),this.$refs.video.currentTime-=1/24},nextFrame:function(){this.$refs.video.pause(),this.$refs.video.currentTime+=1/24},authorize:function(){gapi.auth2.getAuthInstance().signIn()},handleClientLoad:function(){gapi.load("client:auth2",this.initClient)},initClient:function(){gapi.client.init({apiKey:"AIzaSyBf30HVghnNBiz9JeqlMSAX0wPOo9KnZJs",clientId:"271375874139-d2r4cgevop6vugqso2osv3dg17u2ib18.apps.googleusercontent.com",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],scope:"https://www.googleapis.com/auth/drive"})},loadGoogleApisScript:function(){var e=this,t=document.createElement("script");t.async=!0,t.defer=!0,t.src="https://apis.google.com/js/api.js",t.onload=function(){e.handleClientLoad()},document.body.appendChild(t)}},created:function(){var e=this;this.loadGoogleApisScript(),document.addEventListener("keyup",(function(t){","===t.key?e.prevFrame():"."===t.key&&e.nextFrame()}))}},c=s,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,null,null),p=l.exports,d=n("8c4f");r["a"].use(d["a"]);var v=new d["a"]({mode:"history",routes:[]});r["a"].config.productionTip=!1,new r["a"]({router:v,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("e332")},e332:function(e,t,n){}});
//# sourceMappingURL=app.3815cd84.js.map