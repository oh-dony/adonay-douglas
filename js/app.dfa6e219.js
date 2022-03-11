(function(){"use strict";var e={345:function(e,o,t){var n=t(9242),a=t(3396),r=t(8342);const i={class:"header"},l=(0,a._)("div",{class:"logo"},[(0,a._)("a",{href:"/adonay-douglas",title:"Adonay Douglas"},[(0,a._)("img",{src:r,alt:"Adonay Douglas"}),(0,a._)("h1",null,"Adonay Douglas")])],-1),c={class:"navbar",id:"nav"},d={class:"header-links"},u=(0,a.Uk)("Home"),s=(0,a.Uk)("Sobre"),m=(0,a.Uk)("Portfólio"),f=(0,a.Uk)("Contato"),g=(0,a.uE)('<div class="social-medias"><div class="pretty p-switch p-fill"><input type="checkbox" id="darkmod"><div class="state"><label class="darkmode-btn">DarkMode</label></div></div><a href="https://www.facebook.com/adonay.douglas.7/" title="Facebook de Adonay Douglas" target="_blank"><i class="fab fa-facebook-f"></i></a><a href="https://www.instagram.com/donay_douglas/" title="instagram de Adonay Douglas" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://github.com/Abominattion" title="GitHub de Adonay Douglas" target="_blank"><i class="fab fa-github"></i></a><a href="https://codepen.io/abominattion" title="CodePen de Adonay Douglas" target="_blank"><i class="fab fa-codepen"></i></a></div>',1),p=(0,a._)("button",{class:"btn-header-mobile",id:"btn-mobile"},[(0,a._)("span",{class:"hamburger"})],-1),h=(0,a._)("footer",null,[(0,a._)("div",{class:"copyright"},[(0,a._)("p",null,[(0,a._)("small",null,[(0,a.Uk)(" Copyright © Todos os direitos reservados "),(0,a._)("strong",null,[(0,a._)("a",{href:"https://www.facebook.com/adonay.douglas.7/",target:"_blank"},[(0,a._)("strong",null,"Adonay Douglas")])]),(0,a._)("i",{class:"icon-heart text-danger","aria-hidden":"true"})])])])],-1);function v(e,o){const t=(0,a.up)("router-link"),n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("header",i,[l,(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(t,{to:"/adonay-douglas",title:"Home"},{default:(0,a.w5)((()=>[u])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"/adonay-douglas/sobre",title:"Sobre"},{default:(0,a.w5)((()=>[s])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"/adonay-douglas/portfolio",title:"Portfólio"},{default:(0,a.w5)((()=>[m])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(t,{to:"/adonay-douglas/contato",title:"Contato"},{default:(0,a.w5)((()=>[f])),_:1})])])]),g]),p]),(0,a.Wm)(n),h],64)}var b=t(89);const y={},_=(0,b.Z)(y,[["render",v]]);var k=_,w=t(678);function S(e,o,t,n,r,i){const l=(0,a.up)("HeroContent");return(0,a.wg)(),(0,a.j4)(l)}var L=t(6166),T=t(5219);const O={class:"hero-top",id:"home"},j={class:"dev-hero"},A=(0,a._)("div",{class:"hero-avatar-content"},[(0,a._)("div",{class:"hero-avatar"},[(0,a._)("img",{src:L,alt:""})])],-1),H={class:"hero-description"},M=(0,a._)("h2",{id:"hero-description"},"Full Stack Web Developer",-1),x=(0,a._)("p",null,"Sou desenvolvedor front-end e back-end em Andradas, MG. Tenho uma paixão séria por efeitos de interface do usuário, animações e criação de experiências de usuário intuitivas e dinâmicas. Vamos fazer algo especial.",-1),C=(0,a.Uk)("Me conheça"),D=(0,a._)("div",{class:"imgBx"},[(0,a._)("img",{src:T,alt:""})],-1);function E(e,o){const t=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",O,[(0,a._)("div",j,[A,(0,a._)("div",H,[M,x,(0,a.Wm)(t,{to:"/sobre",title:"Sobre"},{default:(0,a.w5)((()=>[C])),_:1})])]),D])}const P={},q=(0,b.Z)(P,[["render",E]]);var W=q,U={components:{HeroContent:W}};const F=(0,b.Z)(U,[["render",S]]);var I=F;const $=[{path:"/adonay-douglas",name:"home",component:I},{path:"/adonay-douglas/sobre",name:"sobre",component:()=>t.e(780).then(t.bind(t,7780))},{path:"/adonay-douglas/portfolio",name:"portfolio",component:()=>t.e(12).then(t.bind(t,3012))},{path:"/adonay-douglas/contato",name:"contato",component:()=>t.e(437).then(t.bind(t,2437))}],N=(0,w.p7)({history:(0,w.PO)(),routes:$});var Z=N;(0,n.ri)(k).use(Z).mount("#app");var B="#ffffff",G="#141414";null==localStorage.getItem("idmode")&&(document.head.innerHTML=document.head.innerHTML+`<meta name="theme-color" content="${B}">`);const z=document.querySelector("#darkmod");z.addEventListener("click",(()=>{if(document.documentElement.classList.toggle("darkmode"),document.documentElement.classList.contains("darkmode"))return localStorage.setItem("idmode",!0),document.head.innerHTML=document.head.innerHTML+`<meta name="theme-color" content="${G}">`,void document.querySelector("[name='theme-color']").remove();localStorage.removeItem("idmode"),document.querySelector("[name='theme-color']").remove(),document.head.innerHTML=document.head.innerHTML+`<meta name="theme-color" content="${B}">`}));const V=localStorage.getItem("idmode");V&&(document.documentElement.classList.add("darkmode"),document.head.innerHTML=document.head.innerHTML+`<meta name="theme-color" content="${G}">`,z.checked=!0);let Y=document.querySelector(".btn-header-mobile"),J=document.querySelector(".btn-header-mobile"),K=document.querySelector(".navbar");Y.addEventListener("click",(()=>{J.classList.toggle("active"),K.classList.toggle("nav-mobile")}))},5219:function(e,o,t){e.exports=t.p+"img/undraw_programming_re_kg9v.6805ca93.svg"},6166:function(e,o,t){e.exports=t.p+"img/adonay-avatar.fbf3aa83.jpg"},8342:function(e,o,t){e.exports=t.p+"img/logo.3ba5255f.png"}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(o,n,a,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],r=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(l=!1,r<i&&(i=r));if(l){e.splice(u--,1);var d=a();void 0!==d&&(o=d)}}return o}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,n){return t.f[n](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{12:"38573edc",437:"7f89836f",780:"cdc486c8"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="adonay-douglas:";t.l=function(n,a,r,i){if(e[n])e[n].push(a);else{var l,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==o+r){l=s;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",o+r),l.src=n),e[n]=[a];var m=function(o,t){l.onerror=l.onload=null,clearTimeout(f);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(t)})),o)return o(t)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/adonay-douglas/"}(),function(){var e={143:0};t.f.j=function(o,n){var a=t.o(e,o)?e[o]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(t,n){a=e[o]=[t,n]}));n.push(a[2]=r);var i=t.p+t.u(o),l=new Error,c=function(n){if(t.o(e,o)&&(a=e[o],0!==a&&(e[o]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+o+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}};t.l(i,c,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,n){var a,r,i=n[0],l=n[1],c=n[2],d=0;if(i.some((function(o){return 0!==e[o]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(c)var u=c(t)}for(o&&o(n);d<i.length;d++)r=i[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},n=self["webpackChunkadonay_douglas"]=self["webpackChunkadonay_douglas"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(345)}));n=t.O(n)})();
//# sourceMappingURL=app.dfa6e219.js.map