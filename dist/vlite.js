!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vlitejs=t():e.vlitejs=t()}(globalThis,(function(){return(()=>{var e={894:(e,t,n)=>{"use strict";var s,i,r=function(e){return e&&e.__esModule?e:{default:e}};s=[n,t,n(360)],void 0===(i=function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n=r(n);class s extends n.default{init(){this.waitUntilVideoIsReady().then((()=>{super.onDurationChange(),super.onPlayerReady(),this.addSpecificEvents()}))}waitUntilVideoIsReady(){return new window.Promise(((e,t)=>{this.element.addEventListener("canplay",e,{once:!0})}))}addSpecificEvents(){this.options.controls&&(this.options.time&&this.element.addEventListener("durationchange",super.onDurationChange.bind(this)),this.element.addEventListener("timeupdate",super.onTimeUpdate.bind(this))),this.element.addEventListener("ended",super.onVideoEnded.bind(this)),this.element.addEventListener("playing",this.onPlaying.bind(this)),this.element.addEventListener("waiting",this.onWaiting.bind(this)),this.element.addEventListener("seeking",this.onSeeking.bind(this)),this.element.addEventListener("seeked",this.onSeeked.bind(this))}getInstance(){return this.element}getCurrentTime(){return new window.Promise((e=>e(this.element.currentTime)))}setCurrentTime(e){this.element.currentTime=e}getDuration(){return new window.Promise((e=>e(this.element.duration)))}methodPlay(){this.element.play()}methodPause(){this.element.pause()}methodMute(){this.element.muted=!0,this.element.setAttribute("muted","")}methodUnMute(){this.element.muted=!1,this.element.removeAttribute("muted")}onWaiting(){this.vliteInstance.loading(!0)}onPlaying(){this.vliteInstance.loading(!1)}onSeeking(){this.vliteInstance.loading(!0)}onSeeked(){this.vliteInstance.loading(!1)}removeSpecificEvents(){this.options.time&&this.element.removeEventListener("durationchange",this.onDurationChange),this.element.removeEventListener("timeupdate",this.onTimeUpdate),this.element.removeEventListener("playing",this.onPlaying),this.element.removeEventListener("waiting",this.onWaiting),this.element.removeEventListener("seeking",this.onSeeking),this.element.removeEventListener("seeked",this.onSeeked),this.element.removeEventListener("ended",this.onVideoEnded)}destroy(){this.removeSpecificEvents(),super.destroy()}}t.default=s}.apply(t,s))||(e.exports=i)},483:(e,t,n)=>{"use strict";var s,i,r=function(e){return e&&e.__esModule?e:{default:e}};s=[n,t,n(7),n(363)],void 0===(i=function(e,t,n,s){Object.defineProperty(t,"__esModule",{value:!0}),s=r(s),t.default=function(){return n.createElement("button",{className:"v-bigPlay",innerHTML:s.default})}}.apply(t,s))||(e.exports=i)},800:(e,t,n)=>{"use strict";var s,i,r=function(e){return e&&e.__esModule?e:{default:e}};s=[n,t,n(7),n(341),n(706)],void 0===(i=function(e,t,n,s,i){Object.defineProperty(t,"__esModule",{value:!0}),s=r(s),i=r(i);t.default=class{constructor({container:e,options:t,type:n,playerInstance:s}){this.container=e,this.options=t,this.type=n,this.playerInstance=s,this.controlBar=null,this.progressBar=null,this.volumeButton=null,this.fullscreenButton=null,this.player=this.container.querySelector(".vlite-js"),this.onInputProgressBar=this.onInputProgressBar.bind(this),this.onChangeProgressBar=this.onChangeProgressBar.bind(this),this.onClickOnControlBar=this.onClickOnControlBar.bind(this),this.togglePlayPause=this.togglePlayPause.bind(this),this.toggleVolume=this.toggleVolume.bind(this),this.toggleFullscreen=this.toggleFullscreen.bind(this)}init(){this.controlBar=this.container.querySelector(".v-controlBar"),this.controlBar&&(this.options.progressBar&&(this.progressBar=this.controlBar.querySelector(".v-progressBar")),this.options.progressBar&&(this.volumeButton=this.controlBar.querySelector(".v-volumeButton")),this.options.progressBar&&(this.fullscreenButton=this.controlBar.querySelector(".v-fullscreenButton")),this.options.volume&&this.volumeButton&&this.volumeButton.setAttribute("aria-label",this.player.muted?"Unmute":"Mute")),this.addEvents()}onPlayerReady(){this.playerInstance.getDuration().then((e=>{this.progressBar&&this.progressBar.setAttribute("aria-valuemax",`${e}`)}))}addEvents(){this.progressBar&&(this.progressBar.addEventListener("input",this.onInputProgressBar),this.progressBar.addEventListener("change",this.onChangeProgressBar)),this.controlBar&&this.controlBar.addEventListener("click",this.onClickOnControlBar)}onInputProgressBar(e){this.playerInstance.progressBarIsMoving=!0;const t=e.target;t.style.setProperty("--value",`${t.value}%`),this.playerInstance.getCurrentTime().then((e=>t.setAttribute("aria-valuenow",`${e}`))),this.playerInstance.getDuration().then((t=>{const n=e.target;this.playerInstance.setCurrentTime(parseInt(n.value)*t/100)}))}onChangeProgressBar(){this.playerInstance.progressBarIsMoving=!1}onClickOnControlBar(e){const t=e.target,n=s.default({target:t,selectorString:".v-playPauseButton",nodeName:["button"]}),i=s.default({target:t,selectorString:".v-volumeButton",nodeName:["button"]}),r=s.default({target:t,selectorString:".v-fullscreenButton",nodeName:["button"]});n?this.togglePlayPause(e):i?this.toggleVolume(e):r&&this.toggleFullscreen(e)}togglePlayPause(e){e&&e.preventDefault(),this.container.classList.contains("v-paused")?this.playerInstance.play():this.playerInstance.pause()}toggleVolume(e){e.preventDefault(),this.volumeButton.classList.contains("v-pressed")?(this.playerInstance.unMute(),this.volumeButton.setAttribute("aria-label","Mute")):(this.playerInstance.mute(),this.volumeButton.setAttribute("aria-label","Unmute"))}toggleFullscreen(e){e.preventDefault(),this.playerInstance.isFullScreen?(this.playerInstance.exitFullscreen(),this.fullscreenButton.setAttribute("aria-label","Enter fullscreen")):(this.playerInstance.requestFullscreen(),this.fullscreenButton.setAttribute("aria-label","Exit fullscreen"))}getTemplate(){return n.createElement(i.default,{options:this.options,isMuted:this.player.muted,type:this.type})}removeEvents(){this.progressBar&&(this.progressBar.removeEventListener("input",this.onInputProgressBar),this.progressBar.removeEventListener("change",this.onChangeProgressBar)),this.controlBar&&this.controlBar.removeEventListener("click",this.onClickOnControlBar)}destroy(){this.removeEvents(),this.controlBar&&this.controlBar.remove()}}}.apply(t,s))||(e.exports=i)},706:(e,t,n)=>{"use strict";var s,i,r=function(e){return e&&e.__esModule?e:{default:e}};s=[n,t,n(7),n(169),n(951),n(418),n(569),n(804),n(299),n(158)],void 0===(i=function(e,t,n,s,i,o,a,l,c,u){Object.defineProperty(t,"__esModule",{value:!0}),s=r(s),i=r(i),o=r(o),a=r(a),l=r(l),c=r(c),t.default=function({options:e,isMuted:t,type:r}){return n.createElement("div",{className:`v-controlBar v-style${u.capitalized(r)}`},e.playPause&&n.createElement("button",{className:"v-playPauseButton v-controlButton","aria-label":"Play"},n.createElement("span",{className:"v-controlButtonIcon v-iconPlay",innerHTML:s.default}),n.createElement("span",{className:"v-controlButtonIcon v-iconPause",innerHTML:i.default})),e.time&&n.createElement("div",{className:"v-time"},n.createElement("span",{className:"v-currentTime"},"00:00")," / ",n.createElement("span",{className:"v-duration"})),e.progressBar&&n.createElement("input",{type:"range",className:"v-progressBar",min:"0",max:"100",step:"0.01",value:"0","aria-label":"Seek","aria-valuemin":0}),e.volume&&n.createElement("button",{className:"v-volumeButton v-controlButton"+(t?" v-pressed":"")},n.createElement("span",{className:"v-controlButtonIcon v-iconVolumeHigh",innerHTML:o.default}),n.createElement("span",{className:"v-controlButtonIcon v-iconVolumeMute",innerHTML:a.default})),e.fullscreen&&n.createElement("button",{className:"v-fullscreenButton v-controlButton","aria-label":"Enter fullscreen"},n.createElement("span",{className:"v-controlButtonIcon v-iconFullscreen",innerHTML:l.default}),n.createElement("span",{className:"v-controlButtonIcon v-iconShrink",innerHTML:c.default})))}}.apply(t,s))||(e.exports=i)},375:(e,t,n)=>{"use strict";var s,i;s=[n,t,n(7)],void 0===(i=function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.createElement("div",{className:"v-loader"},n.createElement("div",{className:"v-loaderContent"},n.createElement("div",{className:"v-loaderBounce1"}),n.createElement("div",{className:"v-loaderBounce2"}),n.createElement("div",{className:"v-loaderBounce3"})))}}.apply(t,s))||(e.exports=i)},153:(e,t,n)=>{"use strict";var s,i;s=[n,t,n(7)],void 0===(i=function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.createElement("div",{className:"v-overlay"})}}.apply(t,s))||(e.exports=i)},175:(e,t,n)=>{"use strict";var s,i;s=[n,t,n(7)],void 0===(i=function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({posterUrl:e=""}){const t={backgroundImage:e&&`url(${e})`};return n.createElement("div",{className:"v-poster v-active",style:t})}}.apply(t,s))||(e.exports=i)},158:(e,t,n)=>{"use strict";var s;void 0===(s=function(e,t){function n(){if(document.exitFullscreen instanceof Function)return"";return["webkit","moz","ms"].find((e=>document[e+"ExitFullscreen"]instanceof Function||document[`${e}CancelFullScreen`]instanceof Function))||""}Object.defineProperty(t,"__esModule",{value:!0}),t.getBrowserPrefix=t.checkSupportFullScreen=t.formatVideoTime=t.capitalized=void 0,t.capitalized=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},t.formatVideoTime=function(e){const t=1e3*e,n=t/1e3/60<<0,s=t/1e3%60<<0;let i="";return i+=n<10?"0":"",i+=n+":",i+=s<10?"0":"",i+=s,i},t.checkSupportFullScreen=function(){const e=n();return{requestFn:e?`${e}RequestFullScreen`:"requestFullscreen",cancelFn:e?`${e}ExitFullscreen`:"exitFullscreen",changeEvent:e?`${e}fullscreenchange`:"fullscreenchange",isFullScreen:e?`${e}FullscreenElement`:"fullscreenElement"}},t.getBrowserPrefix=n}.apply(t,[n,t]))||(e.exports=s)},360:(e,t,n)=>{"use strict";var s,i;s=[n,t,n(158)],void 0===(i=function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor({element:e,container:t,options:n,onCallbackReady:s,vliteInstance:i}){this.element=e,this.container=t,this.options=n,this.onCallbackReady=s,this.vliteInstance=i,this.progressBarIsMoving=!1,this.isFullScreen=!1,this.isPaused=null,this.delayAutoHide=3e3}init(){throw new Error('You have to implement the function "init".')}waitUntilVideoIsReady(){throw new Error('You have to implement the function "waitUntilVideoIsReady".')}getInstance(){throw new Error('You have to implement the function "getInstance".')}getCurrentTime(){throw new Error('You have to implement the function "getCurrentTime".')}setCurrentTime(e){throw new Error('You have to implement the function "setCurrentTime".')}getDuration(){throw new Error('You have to implement the function "getDuration".')}methodPlay(){throw new Error('You have to implement the function "methodPlay".')}methodPause(){throw new Error('You have to implement the function "methodPause".')}methodMute(){throw new Error('You have to implement the function "methodMute".')}methodUnMute(){throw new Error('You have to implement the function "methodUnMute".')}onPlayerReady(){this.onCallbackReady(this),this.options.autoplay&&(!this.element.muted&&this.mute(),this.play())}onDurationChange(){this.options.time&&this.getDuration().then((e=>{const t=this.container.querySelector(".v-duration");t&&(t.innerHTML=n.formatVideoTime(e)),this.container.dispatchEvent(new CustomEvent("durationchange"))}))}onTimeUpdate(){this.options.time&&Promise.all([this.getCurrentTime(),this.getDuration()]).then((([e,t])=>{const s=Math.round(e),i=this.container.querySelector(".v-progressBar");if(i){const e=100*s/t;this.progressBarIsMoving||(i.value=`${e}`),i.style.setProperty("--value",`${e}%`)}const r=this.container.querySelector(".v-currentTime");r&&(r.innerHTML=n.formatVideoTime(s)),this.container.dispatchEvent(new CustomEvent("timeupdate"))}))}onVideoEnded(){this.container.classList.replace("v-playing","v-paused"),this.container.classList.add("v-firstStart");const e=this.container.querySelector(".v-poster");this.options.poster&&e&&e.classList.add("v-active");const t=this.container.querySelector(".v-progressBar");t&&(t.value="0",t.style.setProperty("--value","0%"),t.removeAttribute("aria-valuenow"));const n=this.container.querySelector(".v-currentTime");n&&(n.innerHTML="00:00"),this.container.dispatchEvent(new CustomEvent("ended"))}play(){if(this.container.classList.contains("v-firstStart")){this.container.classList.remove("v-firstStart");const e=this.container.querySelector(".v-poster");"video"===this.vliteInstance.type&&e&&e.classList.remove("v-active"),"video"===this.vliteInstance.type&&this.container.focus()}this.methodPlay(),this.isPaused=!1,this.container.classList.replace("v-paused","v-playing");const e=this.container.querySelector(".v-playPauseButton");e&&e.setAttribute("aria-label","Pause");const t=this.container.querySelector(".v-bigPlay");"video"===this.vliteInstance.type&&t&&t.setAttribute("aria-label","Pause"),this.afterPlayPause(),this.container.dispatchEvent(new CustomEvent("play"))}pause(){this.methodPause(),this.isPaused=!0,this.container.classList.replace("v-playing","v-paused");const e=this.container.querySelector(".v-playPauseButton");e&&e.setAttribute("aria-label","Play");const t=this.container.querySelector(".v-bigPlay");"video"===this.vliteInstance.type&&t&&t.setAttribute("aria-label","Play"),this.afterPlayPause(),this.container.dispatchEvent(new CustomEvent("pause"))}afterPlayPause(){this.vliteInstance.autoHideGranted&&(this.vliteInstance.stopAutoHideTimer(),!this.isPaused&&this.vliteInstance.startAutoHideTimer())}mute(){this.methodMute();const e=this.container.querySelector(".v-volumeButton");e&&e.classList.add("v-pressed"),this.container.dispatchEvent(new CustomEvent("volumechange"))}unMute(){this.methodUnMute();const e=this.container.querySelector(".v-volumeButton");e&&e.classList.remove("v-pressed"),this.container.dispatchEvent(new CustomEvent("volumechange"))}seekTo(e){this.setCurrentTime(e),this.container.dispatchEvent(new CustomEvent("seeked"))}requestFullscreen(){const{requestFn:e}=this.vliteInstance.supportFullScreen;if(this.element[e]){this.container[e](),this.isFullScreen=!0,this.container.classList.add("v-fullscreenButton-display");const t=this.container.querySelector(".v-fullscreenButton");t&&t.classList.add("v-pressed"),this.container.dispatchEvent(new CustomEvent("enterfullscreen"))}}exitFullscreen({escKey:e=!1}={}){const{cancelFn:t}=this.vliteInstance.supportFullScreen;if(document[t]){!e&&document[t](),this.isFullScreen=!1,this.container.classList.remove("v-fullscreenButton-display");const n=this.container.querySelector(".v-fullscreenButton");n&&n.classList.remove("v-pressed"),this.container.dispatchEvent(new CustomEvent("exitfullscreen"))}}destroy(){this.pause(),this.options.controls&&this.controlBar&&this.controlBar.removeEvents(),this.container.remove()}}}.apply(t,s))||(e.exports=i)},555:(e,t,n)=>{"use strict";var s;void 0===(s=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.initializePlugins=t.registerPlugin=t.getPluginInstance=void 0;const n={};function s(e){const t=[],s=Object.keys(n);return e.forEach((e=>{if(!s.includes(e))throw new Error(`vlitejs :: Unknown plugin "${e}".`);t.push({id:e,Plugin:n[e]})})),t}t.getPluginInstance=s,t.registerPlugin=function(e,t){if(void 0!==t){if(!Object.keys(n).includes(e))return void(n[e]=t);throw new Error(`vlitejs :: The plugin id "${e}" is already registered.`)}throw new Error(`vlitejs :: The plugin id "${e}" is undefined.`)},t.initializePlugins=function({plugins:e,provider:t,type:n,playerInstance:i}){s(e).forEach((({id:e,Plugin:s})=>{const r=new s({player:i});if(!r.providers.includes(t)||!r.types.includes(n))throw new Error(`vlitejs :: The "${e}" plugin is only compatible with providers:"${r.providers}" and types:"${r.types}"`);r.init()}))}}.apply(t,[n,t]))||(e.exports=s)},972:(e,t,n)=>{"use strict";var s,i,r=function(e){return e&&e.__esModule?e:{default:e}};s=[n,t,n(894)],void 0===(i=function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.registerProvider=t.getProviderInstance=void 0;const s={html5:(n=r(n)).default};t.getProviderInstance=function(e){const t=s[e];if(t)return t;throw new Error(`vlitejs :: Unknown provider "${e}"`)},t.registerProvider=function(e,t){if(void 0!==t){if(!Object.keys(s).includes(e))return void(s[e]=t);throw new Error(`vlitejs :: The provider id "${e}" is already registered.`)}throw new Error(`vlitejs :: The provider id "${e}" is undefined.`)}}.apply(t,s))||(e.exports=i)},829:(e,t,n)=>{"use strict";var s,i,r=function(e){return e&&e.__esModule?e:{default:e}};
/**
 * @license MIT
 * @name vlitejs
 * @version 4.0.0
 * @author: Yoriiis aka Joris DANIEL <joris.daniel@gmail.com>
 * @description: vLitejs is a fast and lightweight Javascript library for customizing HTML5 and Youtube video players in Javascript with a minimalist theme
 * {@link https://yoriiis.github.io/vlitejs}
 * @copyright 2021 Joris DANIEL <https://yoriiis.github.io/vlitejs>
 **/s=[n,t,n(360),n(7),n(341),n(158),n(375),n(483),n(153),n(175),n(800),n(972),n(555)],void 0===(i=function(e,t,n,s,i,o,a,l,c,u,d,h,p){Object.defineProperty(t,"__esModule",{value:!0}),n=r(n),i=r(i),a=r(a),l=r(l),c=r(c),u=r(u),d=r(d);const v={audio:{autoplay:!1,controls:!0,playPause:!0,progressBar:!0,time:!0,volume:!0,loop:!1},video:{autoplay:!1,controls:!0,playPause:!0,progressBar:!0,time:!0,volume:!0,fullscreen:!0,poster:null,bigPlay:!0,autoHide:!1,playsinline:!0,loop:!1,muted:!1}};class m{constructor({selector:e,options:t,provider:n="html5",plugins:s=[],onReady:i}){if("string"==typeof e)this.element=document.querySelector(e);else{if(!(e instanceof HTMLElement))throw new TypeError("vlitejs :: The element or selector supplied is not valid.");this.element=e}this.plugins=s,this.onReady=i,this.isPaused=!0,this.delayAutoHide=3e3,this.type=this.element instanceof HTMLAudioElement?"audio":"video",this.supportFullScreen=o.checkSupportFullScreen(),this.element.hasAttribute("autoplay")&&(t.autoplay=!0),this.element.hasAttribute("playsinline")&&(t.playsinline=!0),this.element.hasAttribute("muted")&&(t.muted=!0),this.element.hasAttribute("loop")&&(t.loop=!0),this.options=Object.assign(Object.assign({},v[this.type]),t),this.autoHideGranted="video"===this.type&&!!this.options.autoHide&&!!this.options.controls,this.options.playsinline&&(this.element.setAttribute("playsinline",""),this.element.setAttribute("webkit-playsinline","")),this.onClickOnPlayer=this.onClickOnPlayer.bind(this),this.onDoubleClickOnPlayer=this.onDoubleClickOnPlayer.bind(this),this.onKeyup=this.onKeyup.bind(this),this.onMousemove=this.onMousemove.bind(this),this.onChangeFullScreen=this.onChangeFullScreen.bind(this);const r=h.getProviderInstance(n);this.wrapElement(),this.container=this.element.parentNode,this.playerInstance=new r({element:this.element,container:this.container,options:this.options,onCallbackReady:this.onCallbackReady.bind(this),vliteInstance:this}),this.playerInstance.init(),this.controlBar=new d.default({container:this.container,options:this.options,type:this.type,playerInstance:this.playerInstance}),this.render(),this.addEvents(),p.initializePlugins({plugins:s,provider:n,type:this.type,playerInstance:this.playerInstance})}wrapElement(){const e=document.createElement("div");e.classList.add("v-vlite","v-firstStart","v-paused","v-loading",`v-style${o.capitalized(this.type)}`),e.setAttribute("tabindex","0");this.element.parentNode.insertBefore(e,this.element),e.appendChild(this.element)}render(){this.container.appendChild(s.createElement(s.Fragment,null,"audio"===this.type?this.renderAudioElement():this.renderVideoElement())),this.options.controls&&this.controlBar.init()}renderVideoElement(){return s.createElement(s.Fragment,null,s.createElement(c.default,null),s.createElement(a.default,null),this.options.poster&&s.createElement(u.default,{posterUrl:this.options.poster}),this.options.bigPlay&&s.createElement(l.default,null),this.options.controls&&this.controlBar.getTemplate())}renderAudioElement(){return this.controlBar.getTemplate()}addEvents(){this.container.addEventListener("click",this.onClickOnPlayer),this.container.addEventListener("dblclick",this.onDoubleClickOnPlayer),this.container.addEventListener("keyup",this.onKeyup),this.autoHideGranted&&this.container.addEventListener("mousemove",this.onMousemove),window.addEventListener(this.supportFullScreen.changeEvent,this.onChangeFullScreen)}onClickOnPlayer(e){const t=e.target;i.default({target:t,selectorString:".v-poster, .v-overlay, .v-bigPlay",nodeName:["div","button"]})&&this.togglePlayPause(e)}onDoubleClickOnPlayer(e){const t=e.target;i.default({target:t,selectorString:".v-overlay",nodeName:["div"]})&&this.controlBar.toggleFullscreen(e)}onKeyup(e){this.autoHideGranted&&[9,32,37,39].includes(e.keyCode)&&(this.stopAutoHideTimer(),this.startAutoHideTimer()),32===e.keyCode?this.togglePlayPause(e):37===e.keyCode?this.fastForward("backward"):39===e.keyCode&&this.fastForward("forward")}onMousemove(){this.isPaused||(this.stopAutoHideTimer(),this.startAutoHideTimer())}onChangeFullScreen(e){!document[this.supportFullScreen.isFullScreen]&&this.playerInstance.isFullScreen&&this.playerInstance.exitFullscreen({escKey:!0})}togglePlayPause(e){e.preventDefault(),this.container.classList.contains("v-paused")?this.playerInstance.play():this.playerInstance.pause()}fastForward(e){this.playerInstance.getCurrentTime().then((t=>{this.playerInstance.seekTo("backward"===e?t-5:t+5)}))}stopAutoHideTimer(){const e=this.container.querySelector(".v-controlBar");"video"===this.type&&e&&(e.classList.remove("hidden"),clearTimeout(this.timerAutoHide))}startAutoHideTimer(){const e=this.container.querySelector(".v-controlBar");"video"===this.type&&!this.isPaused&&e&&(this.timerAutoHide=window.setTimeout((()=>{e.classList.add("hidden")}),this.delayAutoHide))}onCallbackReady(e){this.loading(!1),this.onReady instanceof Function&&this.onReady(e)}loading(e){this.container.classList[e?"add":"remove"]("v-loading"),this.container.dispatchEvent(new CustomEvent("progress"))}removeEvents(){this.container.removeEventListener("click",this.onClickOnPlayer),this.container.removeEventListener("dblclick",this.onDoubleClickOnPlayer),this.container.removeEventListener("keyup",this.onKeyup),this.autoHideGranted&&this.container.removeEventListener("mousemove",this.onMousemove),window.removeEventListener(this.supportFullScreen.changeEvent,this.onChangeFullScreen)}destroy(){this.removeEvents(),this.playerInstance.destroy(),this.controlBar.destroy()}}m.Player=n.default,m.registerProvider=h.registerProvider,m.registerPlugin=p.registerPlugin,t.default=m}.apply(t,s))||(e.exports=i)},294:(e,t,n)=>{"use strict";n(792),n(483)},43:(e,t,n)=>{"use strict";n(564),n(800)},469:(e,t,n)=>{"use strict";n(176),n(375)},940:(e,t,n)=>{"use strict";n(47),n(153)},192:(e,t,n)=>{"use strict";n(115),n(175)},7:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j,Component:()=>b,Fragment:()=>E,SVGNamespace:()=>m,className:()=>f,createElement:()=>B,createFactory:()=>w,createRef:()=>u,h:()=>B,isRef:()=>d,jsx:()=>P,jsxs:()=>P,memo:()=>i,preventDefault:()=>A,stopPropagation:()=>O,useCallback:()=>i,useClassList:()=>F,useMemo:()=>h,useRef:()=>u,useText:()=>T});const s=Object.keys;function i(e){return e}function r(e){return"string"==typeof e}function o(e){return"number"==typeof e}function a(e){return"object"==typeof e?null!==e:l(e)}function l(e){return"function"==typeof e}function c(e,t){if(e)for(const n of s(e))t(e[n],n)}function u(){return Object.seal({current:null})}function d(e){return a(e)&&"current"in e}function h(e){return e()}const p={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0};const v=["Webkit","ms","Moz","O"];s(p).forEach((e=>{v.forEach((t=>{p[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(t,e)]=0}))}));const m="http://www.w3.org/2000/svg";function f(e){return Array.isArray(e)?e.map(f).filter(Boolean).join(" "):a(e)?s(e).filter((t=>e[t])).join(" "):function(e){return t=e,!("boolean"==typeof t||null==e);var t}(e)?""+e:""}const g={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0},y=/^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;function w(e){return B.bind(null,e)}function E(e){const t=document.createDocumentFragment();return x(e.children,t),t}function b(e){this.props=e}function P(e,{children:t,...n}){let i;return n.namespaceURI||0!==g[e]||(n={...n,namespaceURI:m}),r(e)?(i=n.namespaceURI?document.createElementNS(n.namespaceURI,e):document.createElement(e),function(e,t){for(const n of s(e))k(n,e[n],t)}(n,i),C(t,i)):l(e)&&(a(e.defaultProps)&&(n={...e.defaultProps,...n}),i=function(e){const t=e.prototype;return!(!t||!t.isReactComponent)}(e)?new e({...e.defaultProps,...n,children:t}).render():e({...n,children:t})),d(n.ref)?n.ref.current=i:l(n.ref)&&n.ref(i),i}function B(e,t,...n){return(r(t)||Array.isArray(t))&&(n.unshift(t),t={}),null==(t=t||{}).children||n.length||({children:n,...t}=t),P(e,{...t,children:n},t.key)}function C(e,t){var n,s;a(s=e)&&"number"==typeof s.length&&"number"!=typeof s.nodeType?x(e,t):r(e)||o(e)?S(document.createTextNode(e),t):null===e?S(document.createComment(""),t):(n=e)&&"number"==typeof n.nodeType&&S(e,t)}function x(e,t){for(const n of[...e])C(n,t);return t}function S(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}function L(e,t){return e.replace(/[A-Z\d]/g,(e=>t+e.toLowerCase()))}function k(e,t,n){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":return void M(n,"http://www.w3.org/1999/xlink",L(e,":"),t);case"xmlnsXlink":return void I(n,L(e,":"),t);case"xmlBase":case"xmlLang":case"xmlSpace":return void M(n,"http://www.w3.org/XML/1998/namespace",L(e,":"),t)}switch(e){case"htmlFor":return void I(n,"for",t);case"dataset":return void c(t,((e,t)=>{null!=e&&(n.dataset[t]=e)}));case"innerHTML":case"innerText":case"textContent":return void(n[e]=t);case"dangerouslySetInnerHTML":return void(a(t)&&(n.innerHTML=t.__html));case"spellCheck":return void(n.spellcheck=t);case"class":case"className":return void(l(t)?t(n):I(n,"class",f(t)));case"ref":case"namespaceURI":return;case"style":if(a(t))return void c(t,((e,t)=>{o(e)&&0!==p[t]?n.style[t]=e+"px":n.style[t]=e}))}if(l(t)){if("o"===e[0]&&"n"===e[1]){const s=e.toLowerCase();null==n[s]?n[s]=t:n.addEventListener(e,t)}}else!0===t?I(n,e,""):!1!==t&&null!=t&&(n instanceof SVGElement&&!y.test(e)?I(n,L(e,"-"),t):I(n,e,t))}function I(e,t,n){e.setAttribute(t,n)}function M(e,t,n,s){e.setAttributeNS(t,n,s)}function T(e){const t=new Text;function n(e){t.textContent=e}return Object.defineProperty(t,"toString",{value(){return this.textContent}}),null!=e&&n(e),[t,n]}function F(e){const t=document.createElement("div");null!=e&&(t.className=f(e));let n=t.classList;function s(e){e.className=n.value,n=e.classList}return Object.defineProperties(s,Object.getOwnPropertyDescriptors({get size(){return n.length},get value(){return n.value},add(...e){n.add(...e)},remove(...e){n.remove(...e)},toggle(e,t){n.toggle(e,t)},contains:e=>n.contains(e)})),s}function A(e){return e.preventDefault(),e}function O(e){return e.stopPropagation(),e}Object.defineProperties(b.prototype,{isReactComponent:{value:!0},render:{value:()=>null}});const j={createElement:B,Fragment:E,Component:b}},256:(e,t,n)=>{"use strict";n.r(t)},129:(e,t,n)=>{"use strict";n.r(t)},792:(e,t,n)=>{"use strict";n.r(t)},564:(e,t,n)=>{"use strict";n.r(t)},176:(e,t,n)=>{"use strict";n.r(t)},47:(e,t,n)=>{"use strict";n.r(t)},115:(e,t,n)=>{"use strict";n.r(t)},604:(e,t,n)=>{"use strict";n.r(t)},341:e=>{
/**
 * @license MIT
 * @name validateTarget
 * @version 2.0.0
 * @author: Yoriiis aka Joris DANIEL <joris.daniel@gmail.com>
 * @description: Easily validate target of an HTML element especially during event delegation
 * {@link https://github.com/yoriiis/validate-target}
 * @copyright 2020 Joris DANIEL
 **/
e.exports=function({target:e,selectorString:t,nodeName:n}){if("string"==typeof n&&(n=[n]),Array.isArray(n)&&n.length)return n.map((n=>e.nodeName.toLowerCase()===n&&e.matches(t))).includes(!0)}},363:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67a1 1 0 010 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84z"/></svg>'},299:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v2zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2z"/></svg>'},804:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"/></svg>'},951:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/></svg>'},169:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 000-1.69L9.54 5.98A.998.998 0 008 6.82z"/></svg>'},418:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z"/></svg>'},569:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"/></svg>'}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";var e=s;e.default=void 0;var t,i=(t=n(829))&&t.__esModule?t:{default:t};n(256),n(129),n(604),n(469),n(43),n(294),n(940),n(192);var r=i.default;e.default=r})(),s=s.default})()}));