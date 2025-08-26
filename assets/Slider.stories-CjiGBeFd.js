/* empty css                */import{c as jt}from"./index-O9w-lcwG.js";function Ht(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function Yt(n,t,e){return t&&Ht(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var Ke="(prefers-reduced-motion: reduce)",Rn=1,$t=2,kn=3,Pn=4,Kn=5,ce=6,le=7,Xt={CREATED:Rn,MOUNTED:$t,IDLE:kn,MOVING:Pn,SCROLLING:Kn,DRAGGING:ce,DESTROYED:le};function _n(n){n.length=0}function bn(n,t,e){return Array.prototype.slice.call(n,t,e)}function U(n){return n.bind.apply(n,[null].concat(bn(arguments,1)))}var vt=setTimeout,Le=function(){};function qe(n){return requestAnimationFrame(n)}function _e(n,t){return typeof t===n}function Un(n){return!De(n)&&_e("object",n)}var ke=Array.isArray,ft=U(_e,"function"),hn=U(_e,"string"),qn=U(_e,"undefined");function De(n){return n===null}function _t(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Zn(n){return ke(n)?n:[n]}function tn(n,t){Zn(n).forEach(t)}function Pe(n,t){return n.indexOf(t)>-1}function se(n,t){return n.push.apply(n,Zn(t)),n}function un(n,t,e){n&&tn(t,function(r){r&&n.classList[e?"add":"remove"](r)})}function sn(n,t){un(n,hn(t)?t.split(" "):t,!0)}function Jn(n,t){tn(t,n.appendChild.bind(n))}function Me(n,t){tn(n,function(e){var r=(t||e).parentNode;r&&r.insertBefore(e,t)})}function Wn(n,t){return _t(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function pt(n,t){var e=n?bn(n.children):[];return t?e.filter(function(r){return Wn(r,t)}):e}function Qn(n,t){return t?pt(n,t)[0]:n.firstElementChild}var Bn=Object.keys;function Sn(n,t,e){return n&&(e?Bn(n).reverse():Bn(n)).forEach(function(r){r!=="__proto__"&&t(n[r],r)}),n}function jn(n){return bn(arguments,1).forEach(function(t){Sn(t,function(e,r){n[r]=t[r]})}),n}function gn(n){return bn(arguments,1).forEach(function(t){Sn(t,function(e,r){ke(e)?n[r]=e.slice():Un(e)?n[r]=gn({},Un(n[r])?n[r]:{},e):n[r]=e})}),n}function Ze(n,t){tn(t||Bn(n),function(e){delete n[e]})}function on(n,t){tn(n,function(e){tn(t,function(r){e&&e.removeAttribute(r)})})}function M(n,t,e){Un(t)?Sn(t,function(r,c){M(n,c,r)}):tn(n,function(r){De(e)||e===""?on(r,t):r.setAttribute(t,String(e))})}function Cn(n,t,e){var r=document.createElement(n);return t&&(hn(t)?sn(r,t):M(r,t)),e&&Jn(e,r),r}function rn(n,t,e){if(qn(e))return getComputedStyle(n)[t];De(e)||(n.style[t]=""+e)}function Hn(n,t){rn(n,"display",t)}function gt(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function an(n,t){return n.getAttribute(t)}function Je(n,t){return n&&n.classList.contains(t)}function nn(n){return n.getBoundingClientRect()}function Tn(n){tn(n,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function ht(n){return Qn(new DOMParser().parseFromString(n,"text/html").body)}function ln(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function mt(n,t){return n&&n.querySelector(t)}function ze(n,t){return t?bn(n.querySelectorAll(t)):[]}function vn(n,t){un(n,t,!1)}function Ie(n){return n.timeStamp}function An(n){return hn(n)?n:n?n+"px":""}var ne="splide",Ve="data-"+ne;function Fn(n,t){if(!n)throw new Error("["+ne+"] "+(t||""))}var mn=Math.min,ue=Math.max,ve=Math.floor,Yn=Math.ceil,J=Math.abs;function Et(n,t,e){return J(n-t)<e}function oe(n,t,e,r){var c=mn(t,e),v=ue(t,e);return r?c<n&&n<v:c<=n&&n<=v}function In(n,t,e){var r=mn(t,e),c=ue(t,e);return mn(ue(r,n),c)}function Ne(n){return+(n>0)-+(n<0)}function Re(n,t){return tn(t,function(e){n=n.replace("%s",""+e)}),n}function Fe(n){return n<10?"0"+n:""+n}var Qe={};function Kt(n){return""+n+Fe(Qe[n]=(Qe[n]||0)+1)}function bt(){var n=[];function t(a,o,d,u){c(a,o,function(i,h,f){var _="addEventListener"in i,s=_?i.removeEventListener.bind(i,h,d,u):i.removeListener.bind(i,d);_?i.addEventListener(h,d,u):i.addListener(d),n.push([i,h,f,d,s])})}function e(a,o,d){c(a,o,function(u,i,h){n=n.filter(function(f){return f[0]===u&&f[1]===i&&f[2]===h&&(!d||f[3]===d)?(f[4](),!1):!0})})}function r(a,o,d){var u,i=!0;return typeof CustomEvent=="function"?u=new CustomEvent(o,{bubbles:i,detail:d}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(o,i,!1,d)),a.dispatchEvent(u),u}function c(a,o,d){tn(a,function(u){u&&tn(o,function(i){i.split(" ").forEach(function(h){var f=h.split(".");d(u,f[0],f[1])})})})}function v(){n.forEach(function(a){a[4]()}),_n(n)}return{bind:t,unbind:e,dispatch:r,destroy:v}}var Ln="mounted",nt="ready",En="move",ee="moved",wt="click",qt="active",Zt="inactive",Jt="visible",Qt="hidden",$="refresh",Q="updated",$n="resize",Ge="resized",nr="drag",er="dragging",tr="dragged",Ue="scroll",Mn="scrolled",rr="overflow",yt="destroy",ar="arrows:mounted",ir="arrows:updated",cr="pagination:mounted",sr="pagination:updated",At="navigation:mounted",St="autoplay:play",or="autoplay:playing",Tt="autoplay:pause",xt="lazyload:loaded",Lt="sk",It="sh",fe="ei";function j(n){var t=n?n.event.bus:document.createDocumentFragment(),e=bt();function r(v,a){e.bind(t,Zn(v).join(" "),function(o){a.apply(a,ke(o.detail)?o.detail:[])})}function c(v){e.dispatch(t,v,bn(arguments,1))}return n&&n.event.on(yt,e.destroy),jn(e,{bus:t,on:r,off:U(e.unbind,t),emit:c})}function pe(n,t,e,r){var c=Date.now,v,a=0,o,d=!0,u=0;function i(){if(!d){if(a=n?mn((c()-v)/n,1):1,e&&e(a),a>=1&&(t(),v=c(),r&&++u>=r))return f();o=qe(i)}}function h(m){m||s(),v=c()-(m?a*n:0),d=!1,o=qe(i)}function f(){d=!0}function _(){v=c(),a=0,e&&e(a)}function s(){o&&cancelAnimationFrame(o),a=0,o=0,d=!0}function l(m){n=m}function E(){return d}return{start:h,rewind:_,pause:f,cancel:s,set:l,isPaused:E}}function dr(n){var t=n;function e(c){t=c}function r(c){return Pe(Zn(c),t)}return{set:e,is:r}}function lr(n,t){var e=pe(0,n,null,1);return function(){e.isPaused()&&e.start()}}function ur(n,t,e){var r=n.state,c=e.breakpoints||{},v=e.reducedMotion||{},a=bt(),o=[];function d(){var s=e.mediaQuery==="min";Bn(c).sort(function(l,E){return s?+l-+E:+E-+l}).forEach(function(l){i(c[l],"("+(s?"min":"max")+"-width:"+l+"px)")}),i(v,Ke),h()}function u(s){s&&a.destroy()}function i(s,l){var E=matchMedia(l);a.bind(E,"change",h),o.push([s,E])}function h(){var s=r.is(le),l=e.direction,E=o.reduce(function(m,g){return gn(m,g[1].matches?g[0]:{})},{});Ze(e),_(E),e.destroy?n.destroy(e.destroy==="completely"):s?(u(!0),n.mount()):l!==e.direction&&n.refresh()}function f(s){matchMedia(Ke).matches&&(s?gn(e,v):Ze(e,Bn(v)))}function _(s,l,E){gn(e,s),l&&gn(Object.getPrototypeOf(e),s),(E||!r.is(Rn))&&n.emit(Q,e)}return{setup:d,destroy:u,reduce:f,set:_}}var ge="Arrow",he=ge+"Left",me=ge+"Right",Nt=ge+"Up",Rt=ge+"Down",et="rtl",Ee="ttb",Ae={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Nt,me],ArrowRight:[Rt,he]};function vr(n,t,e){function r(v,a,o){o=o||e.direction;var d=o===et&&!a?1:o===Ee?0:-1;return Ae[v]&&Ae[v][d]||v.replace(/width|left|right/i,function(u,i){var h=Ae[u.toLowerCase()][d]||u;return i>0?h.charAt(0).toUpperCase()+h.slice(1):h})}function c(v){return v*(e.direction===et?1:-1)}return{resolve:r,orient:c}}var fn="role",On="tabindex",fr="disabled",cn="aria-",te=cn+"controls",Ct=cn+"current",tt=cn+"selected",en=cn+"label",We=cn+"labelledby",Ot=cn+"hidden",Be=cn+"orientation",Xn=cn+"roledescription",rt=cn+"live",at=cn+"busy",it=cn+"atomic",je=[fn,On,fr,te,Ct,en,We,Ot,Be,Xn],dn=ne+"__",wn="is-",Se=ne,ct=dn+"track",_r=dn+"list",be=dn+"slide",kt=be+"--clone",pr=be+"__container",He=dn+"arrows",we=dn+"arrow",Dt=we+"--prev",Pt=we+"--next",ye=dn+"pagination",Mt=ye+"__page",gr=dn+"progress",hr=gr+"__bar",mr=dn+"toggle",Er=dn+"spinner",br=dn+"sr",wr=wn+"initialized",xn=wn+"active",zt=wn+"prev",Vt=wn+"next",Ce=wn+"visible",Oe=wn+"loading",Ft=wn+"focus-in",Gt=wn+"overflow",yr=[xn,Ce,zt,Vt,Oe,Ft,Gt],Ar={slide:be,clone:kt,arrows:He,arrow:we,prev:Dt,next:Pt,pagination:ye,page:Mt,spinner:Er};function Sr(n,t){if(ft(n.closest))return n.closest(t);for(var e=n;e&&e.nodeType===1&&!Wn(e,t);)e=e.parentElement;return e}var Tr=5,st=200,Ut="touchstart mousedown",Te="touchmove mousemove",xe="touchend touchcancel mouseup click";function xr(n,t,e){var r=j(n),c=r.on,v=r.bind,a=n.root,o=e.i18n,d={},u=[],i=[],h=[],f,_,s;function l(){p(),O(),g()}function E(){c($,m),c($,l),c(Q,g),v(document,Ut+" keydown",function(w){s=w.type==="keydown"},{capture:!0}),v(a,"focusin",function(){un(a,Ft,!!s)})}function m(w){var I=je.concat("style");_n(u),vn(a,i),vn(f,h),on([f,_],I),on(a,w?I:["style",Xn])}function g(){vn(a,i),vn(f,h),i=D(Se),h=D(ct),sn(a,i),sn(f,h),M(a,en,e.label),M(a,We,e.labelledby)}function p(){f=L("."+ct),_=Qn(f,"."+_r),Fn(f&&_,"A track/list element is missing."),se(u,pt(_,"."+be+":not(."+kt+")")),Sn({arrows:He,pagination:ye,prev:Dt,next:Pt,bar:hr,toggle:mr},function(w,I){d[I]=L("."+w)}),jn(d,{root:a,track:f,list:_,slides:u})}function O(){var w=a.id||Kt(ne),I=e.role;a.id=w,f.id=f.id||w+"-track",_.id=_.id||w+"-list",!an(a,fn)&&a.tagName!=="SECTION"&&I&&M(a,fn,I),M(a,Xn,o.carousel),M(_,fn,"presentation")}function L(w){var I=mt(a,w);return I&&Sr(I,"."+Se)===a?I:void 0}function D(w){return[w+"--"+e.type,w+"--"+e.direction,e.drag&&w+"--draggable",e.isNavigation&&w+"--nav",w===Se&&xn]}return jn(d,{setup:l,mount:E,destroy:m})}var Dn="slide",zn="loop",re="fade";function Lr(n,t,e,r){var c=j(n),v=c.on,a=c.emit,o=c.bind,d=n.Components,u=n.root,i=n.options,h=i.isNavigation,f=i.updateOnMove,_=i.i18n,s=i.pagination,l=i.slideFocus,E=d.Direction.resolve,m=an(r,"style"),g=an(r,en),p=e>-1,O=Qn(r,"."+pr),L;function D(){p||(r.id=u.id+"-slide"+Fe(t+1),M(r,fn,s?"tabpanel":"group"),M(r,Xn,_.slide),M(r,en,g||Re(_.slideLabel,[t+1,n.length]))),w()}function w(){o(r,"click",U(a,wt,k)),o(r,"keydown",U(a,Lt,k)),v([ee,It,Mn],A),v(At,V),f&&v(En,C)}function I(){L=!0,c.destroy(),vn(r,yr),on(r,je),M(r,"style",m),M(r,en,g||"")}function V(){var R=n.splides.map(function(y){var N=y.splide.Components.Slides.getAt(t);return N?N.slide.id:""}).join(" ");M(r,en,Re(_.slideX,(p?e:t)+1)),M(r,te,R),M(r,fn,l?"button":""),l&&on(r,Xn)}function C(){L||A()}function A(){if(!L){var R=n.index;S(),T(),un(r,zt,t===R-1),un(r,Vt,t===R+1)}}function S(){var R=z();R!==Je(r,xn)&&(un(r,xn,R),M(r,Ct,h&&R||""),a(R?qt:Zt,k))}function T(){var R=H(),y=!R&&(!z()||p);if(n.state.is([Pn,Kn])||M(r,Ot,y||""),M(ze(r,i.focusableNodes||""),On,y?-1:""),l&&M(r,On,y?-1:0),R!==Je(r,Ce)&&(un(r,Ce,R),a(R?Jt:Qt,k)),!R&&document.activeElement===r){var N=d.Slides.getAt(n.index);N&&gt(N.slide)}}function P(R,y,N){rn(N&&O||r,R,y)}function z(){var R=n.index;return R===t||i.cloneStatus&&R===e}function H(){if(n.is(re))return z();var R=nn(d.Elements.track),y=nn(r),N=E("left",!0),F=E("right",!0);return ve(R[N])<=Yn(y[N])&&ve(y[F])<=Yn(R[F])}function B(R,y){var N=J(R-t);return!p&&(i.rewind||n.is(zn))&&(N=mn(N,n.length-N)),N<=y}var k={index:t,slideIndex:e,slide:r,container:O,isClone:p,mount:D,destroy:I,update:A,style:P,isWithin:B};return k}function Ir(n,t,e){var r=j(n),c=r.on,v=r.emit,a=r.bind,o=t.Elements,d=o.slides,u=o.list,i=[];function h(){f(),c($,_),c($,f)}function f(){d.forEach(function(A,S){l(A,S,-1)})}function _(){L(function(A){A.destroy()}),_n(i)}function s(){L(function(A){A.update()})}function l(A,S,T){var P=Lr(n,S,T,A);P.mount(),i.push(P),i.sort(function(z,H){return z.index-H.index})}function E(A){return A?D(function(S){return!S.isClone}):i}function m(A){var S=t.Controller,T=S.toIndex(A),P=S.hasFocus()?1:e.perPage;return D(function(z){return oe(z.index,T,T+P-1)})}function g(A){return D(A)[0]}function p(A,S){tn(A,function(T){if(hn(T)&&(T=ht(T)),_t(T)){var P=d[S];P?Me(T,P):Jn(u,T),sn(T,e.classes.slide),I(T,U(v,$n))}}),v($)}function O(A){Tn(D(A).map(function(S){return S.slide})),v($)}function L(A,S){E(S).forEach(A)}function D(A){return i.filter(ft(A)?A:function(S){return hn(A)?Wn(S.slide,A):Pe(Zn(A),S.index)})}function w(A,S,T){L(function(P){P.style(A,S,T)})}function I(A,S){var T=ze(A,"img"),P=T.length;P?T.forEach(function(z){a(z,"load error",function(){--P||S()})}):S()}function V(A){return A?d.length:i.length}function C(){return i.length>e.perPage}return{mount:h,destroy:_,update:s,register:l,get:E,getIn:m,getAt:g,add:p,remove:O,forEach:L,filter:D,style:w,getLength:V,isEnough:C}}function Nr(n,t,e){var r=j(n),c=r.on,v=r.bind,a=r.emit,o=t.Slides,d=t.Direction.resolve,u=t.Elements,i=u.root,h=u.track,f=u.list,_=o.getAt,s=o.style,l,E,m;function g(){p(),v(window,"resize load",lr(U(a,$n))),c([Q,$],p),c($n,O)}function p(){l=e.direction===Ee,rn(i,"maxWidth",An(e.width)),rn(h,d("paddingLeft"),L(!1)),rn(h,d("paddingRight"),L(!0)),O(!0)}function O(k){var R=nn(i);(k||E.width!==R.width||E.height!==R.height)&&(rn(h,"height",D()),s(d("marginRight"),An(e.gap)),s("width",I()),s("height",V(),!0),E=R,a(Ge),m!==(m=B())&&(un(i,Gt,m),a(rr,m)))}function L(k){var R=e.padding,y=d(k?"right":"left");return R&&An(R[y]||(Un(R)?0:R))||"0px"}function D(){var k="";return l&&(k=w(),Fn(k,"height or heightRatio is missing."),k="calc("+k+" - "+L(!1)+" - "+L(!0)+")"),k}function w(){return An(e.height||nn(f).width*e.heightRatio)}function I(){return e.autoWidth?null:An(e.fixedWidth)||(l?"":C())}function V(){return An(e.fixedHeight)||(l?e.autoHeight?null:C():w())}function C(){var k=An(e.gap);return"calc((100%"+(k&&" + "+k)+")/"+(e.perPage||1)+(k&&" - "+k)+")"}function A(){return nn(f)[d("width")]}function S(k,R){var y=_(k||0);return y?nn(y.slide)[d("width")]+(R?0:z()):0}function T(k,R){var y=_(k);if(y){var N=nn(y.slide)[d("right")],F=nn(f)[d("left")];return J(N-F)+(R?0:z())}return 0}function P(k){return T(n.length-1)-T(0)+S(0,k)}function z(){var k=_(0);return k&&parseFloat(rn(k.slide,d("marginRight")))||0}function H(k){return parseFloat(rn(h,d("padding"+(k?"Right":"Left"))))||0}function B(){return n.is(re)||P(!0)>A()}return{mount:g,resize:O,listSize:A,slideSize:S,sliderSize:P,totalSize:T,getPadding:H,isOverflow:B}}var Rr=2;function Cr(n,t,e){var r=j(n),c=r.on,v=t.Elements,a=t.Slides,o=t.Direction.resolve,d=[],u;function i(){c($,h),c([Q,$n],_),(u=E())&&(s(u),t.Layout.resize(!0))}function h(){f(),i()}function f(){Tn(d),_n(d),r.destroy()}function _(){var m=E();u!==m&&(u<m||!m)&&r.emit($)}function s(m){var g=a.get().slice(),p=g.length;if(p){for(;g.length<m;)se(g,g);se(g.slice(-m),g.slice(0,m)).forEach(function(O,L){var D=L<m,w=l(O.slide,L);D?Me(w,g[0].slide):Jn(v.list,w),se(d,w),a.register(w,L-m+(D?0:p),O.index)})}}function l(m,g){var p=m.cloneNode(!0);return sn(p,e.classes.clone),p.id=n.root.id+"-clone"+Fe(g+1),p}function E(){var m=e.clones;if(!n.is(zn))m=0;else if(qn(m)){var g=e[o("fixedWidth")]&&t.Layout.slideSize(0),p=g&&Yn(nn(v.track)[o("width")]/g);m=p||e[o("autoWidth")]&&n.length||e.perPage*Rr}return m}return{mount:i,destroy:f}}function Or(n,t,e){var r=j(n),c=r.on,v=r.emit,a=n.state.set,o=t.Layout,d=o.slideSize,u=o.getPadding,i=o.totalSize,h=o.listSize,f=o.sliderSize,_=t.Direction,s=_.resolve,l=_.orient,E=t.Elements,m=E.list,g=E.track,p;function O(){p=t.Transition,c([Ln,Ge,Q,$],L)}function L(){t.Controller.isBusy()||(t.Scroll.cancel(),w(n.index),t.Slides.update())}function D(y,N,F,K){y!==N&&k(y>F)&&(A(),I(C(P(),y>F),!0)),a(Pn),v(En,N,F,y),p.start(N,function(){a(kn),v(ee,N,F,y),K&&K()})}function w(y){I(T(y,!0))}function I(y,N){if(!n.is(re)){var F=N?y:V(y);rn(m,"transform","translate"+s("X")+"("+F+"px)"),y!==F&&v(It)}}function V(y){if(n.is(zn)){var N=S(y),F=N>t.Controller.getEnd(),K=N<0;(K||F)&&(y=C(y,F))}return y}function C(y,N){var F=y-B(N),K=f();return y-=l(K*(Yn(J(F)/K)||1))*(N?1:-1),y}function A(){I(P(),!0),p.cancel()}function S(y){for(var N=t.Slides.get(),F=0,K=1/0,X=0;X<N.length;X++){var pn=N[X].index,b=J(T(pn,!0)-y);if(b<=K)K=b,F=pn;else break}return F}function T(y,N){var F=l(i(y-1)-H(y));return N?z(F):F}function P(){var y=s("left");return nn(m)[y]-nn(g)[y]+l(u(!1))}function z(y){return e.trimSpace&&n.is(Dn)&&(y=In(y,0,l(f(!0)-h()))),y}function H(y){var N=e.focus;return N==="center"?(h()-d(y,!0))/2:+N*d(y)||0}function B(y){return T(y?t.Controller.getEnd():0,!!e.trimSpace)}function k(y){var N=l(C(P(),y));return y?N>=0:N<=m[s("scrollWidth")]-nn(g)[s("width")]}function R(y,N){N=qn(N)?P():N;var F=y!==!0&&l(N)<l(B(!1)),K=y!==!1&&l(N)>l(B(!0));return F||K}return{mount:O,move:D,jump:w,translate:I,shift:C,cancel:A,toIndex:S,toPosition:T,getPosition:P,getLimit:B,exceededLimit:R,reposition:L}}function kr(n,t,e){var r=j(n),c=r.on,v=r.emit,a=t.Move,o=a.getPosition,d=a.getLimit,u=a.toPosition,i=t.Slides,h=i.isEnough,f=i.getLength,_=e.omitEnd,s=n.is(zn),l=n.is(Dn),E=U(P,!1),m=U(P,!0),g=e.start||0,p,O=g,L,D,w;function I(){V(),c([Q,$,fe],V),c(Ge,C)}function V(){L=f(!0),D=e.perMove,w=e.perPage,p=k();var b=In(g,0,_?p:L-1);b!==g&&(g=b,a.reposition())}function C(){p!==k()&&v(fe)}function A(b,G,Z){if(!pn()){var Y=T(b),q=B(Y);q>-1&&(G||q!==g)&&(F(q),a.move(Y,q,O,Z))}}function S(b,G,Z,Y){t.Scroll.scroll(b,G,Z,function(){var q=B(a.toIndex(o()));F(_?mn(q,p):q),Y&&Y()})}function T(b){var G=g;if(hn(b)){var Z=b.match(/([+\-<>])(\d+)?/)||[],Y=Z[1],q=Z[2];Y==="+"||Y==="-"?G=z(g+ +(""+Y+(+q||1)),g):Y===">"?G=q?R(+q):E(!0):Y==="<"&&(G=m(!0))}else G=s?b:In(b,0,p);return G}function P(b,G){var Z=D||(X()?1:w),Y=z(g+Z*(b?-1:1),g,!(D||X()));return Y===-1&&l&&!Et(o(),d(!b),1)?b?0:p:G?Y:B(Y)}function z(b,G,Z){if(h()||X()){var Y=H(b);Y!==b&&(G=b,b=Y,Z=!1),b<0||b>p?!D&&(oe(0,b,G,!0)||oe(p,G,b,!0))?b=R(y(b)):s?b=Z?b<0?-(L%w||w):L:b:e.rewind?b=b<0?p:0:b=-1:Z&&b!==G&&(b=R(y(G)+(b<G?-1:1)))}else b=-1;return b}function H(b){if(l&&e.trimSpace==="move"&&b!==g)for(var G=o();G===u(b,!0)&&oe(b,0,n.length-1,!e.rewind);)b<g?--b:++b;return b}function B(b){return s?(b+L)%L||0:b}function k(){for(var b=L-(X()||s&&D?1:w);_&&b-- >0;)if(u(L-1,!0)!==u(b,!0)){b++;break}return In(b,0,L-1)}function R(b){return In(X()?b:w*b,0,p)}function y(b){return X()?mn(b,p):ve((b>=p?L-1:b)/w)}function N(b){var G=a.toIndex(b);return l?In(G,0,p):G}function F(b){b!==g&&(O=g,g=b)}function K(b){return b?O:g}function X(){return!qn(e.focus)||e.isNavigation}function pn(){return n.state.is([Pn,Kn])&&!!e.waitForTransition}return{mount:I,go:A,scroll:S,getNext:E,getPrev:m,getAdjacent:P,getEnd:k,setIndex:F,getIndex:K,toIndex:R,toPage:y,toDest:N,hasFocus:X,isBusy:pn}}var Dr="http://www.w3.org/2000/svg",Pr="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",ae=40;function Mr(n,t,e){var r=j(n),c=r.on,v=r.bind,a=r.emit,o=e.classes,d=e.i18n,u=t.Elements,i=t.Controller,h=u.arrows,f=u.track,_=h,s=u.prev,l=u.next,E,m,g={};function p(){L(),c(Q,O)}function O(){D(),p()}function L(){var S=e.arrows;S&&!(s&&l)&&V(),s&&l&&(jn(g,{prev:s,next:l}),Hn(_,S?"":"none"),sn(_,m=He+"--"+e.direction),S&&(w(),A(),M([s,l],te,f.id),a(ar,s,l)))}function D(){r.destroy(),vn(_,m),E?(Tn(h?[s,l]:_),s=l=null):on([s,l],je)}function w(){c([Ln,ee,$,Mn,fe],A),v(l,"click",U(I,">")),v(s,"click",U(I,"<"))}function I(S){i.go(S,!0)}function V(){_=h||Cn("div",o.arrows),s=C(!0),l=C(!1),E=!0,Jn(_,[s,l]),!h&&Me(_,f)}function C(S){var T='<button class="'+o.arrow+" "+(S?o.prev:o.next)+'" type="button"><svg xmlns="'+Dr+'" viewBox="0 0 '+ae+" "+ae+'" width="'+ae+'" height="'+ae+'" focusable="false"><path d="'+(e.arrowPath||Pr)+'" />';return ht(T)}function A(){if(s&&l){var S=n.index,T=i.getPrev(),P=i.getNext(),z=T>-1&&S<T?d.last:d.prev,H=P>-1&&S>P?d.first:d.next;s.disabled=T<0,l.disabled=P<0,M(s,en,z),M(l,en,H),a(ir,s,l,T,P)}}return{arrows:g,mount:p,destroy:D,update:A}}var zr=Ve+"-interval";function Vr(n,t,e){var r=j(n),c=r.on,v=r.bind,a=r.emit,o=pe(e.interval,n.go.bind(n,">"),w),d=o.isPaused,u=t.Elements,i=t.Elements,h=i.root,f=i.toggle,_=e.autoplay,s,l,E=_==="pause";function m(){_&&(g(),f&&M(f,te,u.track.id),E||p(),D())}function g(){e.pauseOnHover&&v(h,"mouseenter mouseleave",function(V){s=V.type==="mouseenter",L()}),e.pauseOnFocus&&v(h,"focusin focusout",function(V){l=V.type==="focusin",L()}),f&&v(f,"click",function(){E?p():O(!0)}),c([En,Ue,$],o.rewind),c(En,I)}function p(){d()&&t.Slides.isEnough()&&(o.start(!e.resetProgress),l=s=E=!1,D(),a(St))}function O(V){V===void 0&&(V=!0),E=!!V,D(),d()||(o.pause(),a(Tt))}function L(){E||(s||l?O(!1):p())}function D(){f&&(un(f,xn,!E),M(f,en,e.i18n[E?"play":"pause"]))}function w(V){var C=u.bar;C&&rn(C,"width",V*100+"%"),a(or,V)}function I(V){var C=t.Slides.getAt(V);o.set(C&&+an(C.slide,zr)||e.interval)}return{mount:m,destroy:o.cancel,play:p,pause:O,isPaused:d}}function Fr(n,t,e){var r=j(n),c=r.on;function v(){e.cover&&(c(xt,U(o,!0)),c([Ln,Q,$],U(a,!0)))}function a(d){t.Slides.forEach(function(u){var i=Qn(u.container||u.slide,"img");i&&i.src&&o(d,i,u)})}function o(d,u,i){i.style("background",d?'center/cover no-repeat url("'+u.src+'")':"",!0),Hn(u,d?"none":"")}return{mount:v,destroy:U(a,!1)}}var Gr=10,Ur=600,Wr=.6,Br=1.5,jr=800;function Hr(n,t,e){var r=j(n),c=r.on,v=r.emit,a=n.state.set,o=t.Move,d=o.getPosition,u=o.getLimit,i=o.exceededLimit,h=o.translate,f=n.is(Dn),_,s,l=1;function E(){c(En,O),c([Q,$],L)}function m(w,I,V,C,A){var S=d();if(O(),V&&(!f||!i())){var T=t.Layout.sliderSize(),P=Ne(w)*T*ve(J(w)/T)||0;w=o.toPosition(t.Controller.toDest(w%T))+P}var z=Et(S,w,1);l=1,I=z?0:I||ue(J(w-S)/Br,jr),s=C,_=pe(I,g,U(p,S,w,A),1),a(Kn),v(Ue),_.start()}function g(){a(kn),s&&s(),v(Mn)}function p(w,I,V,C){var A=d(),S=w+(I-w)*D(C),T=(S-A)*l;h(A+T),f&&!V&&i()&&(l*=Wr,J(T)<Gr&&m(u(i(!0)),Ur,!1,s,!0))}function O(){_&&_.cancel()}function L(){_&&!_.isPaused()&&(O(),g())}function D(w){var I=e.easingFunc;return I?I(w):1-Math.pow(1-w,4)}return{mount:E,destroy:O,scroll:m,cancel:L}}var Nn={passive:!1,capture:!0};function Yr(n,t,e){var r=j(n),c=r.on,v=r.emit,a=r.bind,o=r.unbind,d=n.state,u=t.Move,i=t.Scroll,h=t.Controller,f=t.Elements.track,_=t.Media.reduce,s=t.Direction,l=s.resolve,E=s.orient,m=u.getPosition,g=u.exceededLimit,p,O,L,D,w,I=!1,V,C,A;function S(){a(f,Te,Le,Nn),a(f,xe,Le,Nn),a(f,Ut,P,Nn),a(f,"click",B,{capture:!0}),a(f,"dragstart",ln),c([Ln,Q],T)}function T(){var x=e.drag;Xe(!x),D=x==="free"}function P(x){if(V=!1,!C){var W=q(x);Y(x.target)&&(W||!x.button)&&(h.isBusy()?ln(x,!0):(A=W?f:window,w=d.is([Pn,Kn]),L=null,a(A,Te,z,Nn),a(A,xe,H,Nn),u.cancel(),i.cancel(),k(x)))}}function z(x){if(d.is(ce)||(d.set(ce),v(nr)),x.cancelable)if(w){u.translate(p+Z(X(x)));var W=pn(x)>st,yn=I!==(I=g());(W||yn)&&k(x),V=!0,v(er),ln(x)}else N(x)&&(w=y(x),ln(x))}function H(x){d.is(ce)&&(d.set(kn),v(tr)),w&&(R(x),ln(x)),o(A,Te,z),o(A,xe,H),w=!1}function B(x){!C&&V&&ln(x,!0)}function k(x){L=O,O=x,p=m()}function R(x){var W=F(x),yn=K(W),Vn=e.rewind&&e.rewindByDrag;_(!1),D?h.scroll(yn,0,e.snap):n.is(re)?h.go(E(Ne(W))<0?Vn?"<":"-":Vn?">":"+"):n.is(Dn)&&I&&Vn?h.go(g(!0)?">":"<"):h.go(h.toDest(yn),!0),_(!0)}function y(x){var W=e.dragMinThreshold,yn=Un(W),Vn=yn&&W.mouse||0,Bt=(yn?W.touch:+W)||10;return J(X(x))>(q(x)?Bt:Vn)}function N(x){return J(X(x))>J(X(x,!0))}function F(x){if(n.is(zn)||!I){var W=pn(x);if(W&&W<st)return X(x)/W}return 0}function K(x){return m()+Ne(x)*mn(J(x)*(e.flickPower||600),D?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}function X(x,W){return G(x,W)-G(b(x),W)}function pn(x){return Ie(x)-Ie(b(x))}function b(x){return O===x&&L||O}function G(x,W){return(q(x)?x.changedTouches[0]:x)["page"+l(W?"Y":"X")]}function Z(x){return x/(I&&n.is(Dn)?Tr:1)}function Y(x){var W=e.noDrag;return!Wn(x,"."+Mt+", ."+we)&&(!W||!Wn(x,W))}function q(x){return typeof TouchEvent<"u"&&x instanceof TouchEvent}function Wt(){return w}function Xe(x){C=x}return{mount:S,disable:Xe,isDragging:Wt}}var $r={Spacebar:" ",Right:me,Left:he,Up:Nt,Down:Rt};function Ye(n){return n=hn(n)?n:n.key,$r[n]||n}var ot="keydown";function Xr(n,t,e){var r=j(n),c=r.on,v=r.bind,a=r.unbind,o=n.root,d=t.Direction.resolve,u,i;function h(){f(),c(Q,_),c(Q,f),c(En,l)}function f(){var m=e.keyboard;m&&(u=m==="global"?window:o,v(u,ot,E))}function _(){a(u,ot)}function s(m){i=m}function l(){var m=i;i=!0,vt(function(){i=m})}function E(m){if(!i){var g=Ye(m);g===d(he)?n.go("<"):g===d(me)&&n.go(">")}}return{mount:h,destroy:_,disable:s}}var Gn=Ve+"-lazy",de=Gn+"-srcset",Kr="["+Gn+"], ["+de+"]";function qr(n,t,e){var r=j(n),c=r.on,v=r.off,a=r.bind,o=r.emit,d=e.lazyLoad==="sequential",u=[ee,Mn],i=[];function h(){e.lazyLoad&&(f(),c($,f))}function f(){_n(i),_(),d?m():(v(u),c(u,s),s())}function _(){t.Slides.forEach(function(g){ze(g.slide,Kr).forEach(function(p){var O=an(p,Gn),L=an(p,de);if(O!==p.src||L!==p.srcset){var D=e.classes.spinner,w=p.parentElement,I=Qn(w,"."+D)||Cn("span",D,w);i.push([p,g,I]),p.src||Hn(p,"none")}})})}function s(){i=i.filter(function(g){var p=e.perPage*((e.preloadPages||1)+1)-1;return g[1].isWithin(n.index,p)?l(g):!0}),i.length||v(u)}function l(g){var p=g[0];sn(g[1].slide,Oe),a(p,"load error",U(E,g)),M(p,"src",an(p,Gn)),M(p,"srcset",an(p,de)),on(p,Gn),on(p,de)}function E(g,p){var O=g[0],L=g[1];vn(L.slide,Oe),p.type!=="error"&&(Tn(g[2]),Hn(O,""),o(xt,O,L),o($n)),d&&m()}function m(){i.length&&l(i.shift())}return{mount:h,destroy:U(_n,i),check:s}}function Zr(n,t,e){var r=j(n),c=r.on,v=r.emit,a=r.bind,o=t.Slides,d=t.Elements,u=t.Controller,i=u.hasFocus,h=u.getIndex,f=u.go,_=t.Direction.resolve,s=d.pagination,l=[],E,m;function g(){p(),c([Q,$,fe],g);var C=e.pagination;s&&Hn(s,C?"":"none"),C&&(c([En,Ue,Mn],V),O(),V(),v(cr,{list:E,items:l},I(n.index)))}function p(){E&&(Tn(s?bn(E.children):E),vn(E,m),_n(l),E=null),r.destroy()}function O(){var C=n.length,A=e.classes,S=e.i18n,T=e.perPage,P=i()?u.getEnd()+1:Yn(C/T);E=s||Cn("ul",A.pagination,d.track.parentElement),sn(E,m=ye+"--"+w()),M(E,fn,"tablist"),M(E,en,S.select),M(E,Be,w()===Ee?"vertical":"");for(var z=0;z<P;z++){var H=Cn("li",null,E),B=Cn("button",{class:A.page,type:"button"},H),k=o.getIn(z).map(function(y){return y.slide.id}),R=!i()&&T>1?S.pageX:S.slideX;a(B,"click",U(L,z)),e.paginationKeyboard&&a(B,"keydown",U(D,z)),M(H,fn,"presentation"),M(B,fn,"tab"),M(B,te,k.join(" ")),M(B,en,Re(R,z+1)),M(B,On,-1),l.push({li:H,button:B,page:z})}}function L(C){f(">"+C,!0)}function D(C,A){var S=l.length,T=Ye(A),P=w(),z=-1;T===_(me,!1,P)?z=++C%S:T===_(he,!1,P)?z=(--C+S)%S:T==="Home"?z=0:T==="End"&&(z=S-1);var H=l[z];H&&(gt(H.button),f(">"+z),ln(A,!0))}function w(){return e.paginationDirection||e.direction}function I(C){return l[u.toPage(C)]}function V(){var C=I(h(!0)),A=I(h());if(C){var S=C.button;vn(S,xn),on(S,tt),M(S,On,-1)}if(A){var T=A.button;sn(T,xn),M(T,tt,!0),M(T,On,"")}v(sr,{list:E,items:l},C,A)}return{items:l,mount:g,destroy:p,getAt:I,update:V}}var Jr=[" ","Enter"];function Qr(n,t,e){var r=e.isNavigation,c=e.slideFocus,v=[];function a(){n.splides.forEach(function(s){s.isParent||(u(n,s.splide),u(s.splide,n))}),r&&i()}function o(){v.forEach(function(s){s.destroy()}),_n(v)}function d(){o(),a()}function u(s,l){var E=j(s);E.on(En,function(m,g,p){l.go(l.is(zn)?p:m)}),v.push(E)}function i(){var s=j(n),l=s.on;l(wt,f),l(Lt,_),l([Ln,Q],h),v.push(s),s.emit(At,n.splides)}function h(){M(t.Elements.list,Be,e.direction===Ee?"vertical":"")}function f(s){n.go(s.index)}function _(s,l){Pe(Jr,Ye(l))&&(f(s),ln(l))}return{setup:U(t.Media.set,{slideFocus:qn(c)?r:c},!0),mount:a,destroy:o,remount:d}}function na(n,t,e){var r=j(n),c=r.bind,v=0;function a(){e.wheel&&c(t.Elements.track,"wheel",o,Nn)}function o(u){if(u.cancelable){var i=u.deltaY,h=i<0,f=Ie(u),_=e.wheelMinThreshold||0,s=e.wheelSleep||0;J(i)>_&&f-v>s&&(n.go(h?"<":">"),v=f),d(h)&&ln(u)}}function d(u){return!e.releaseWheel||n.state.is(Pn)||t.Controller.getAdjacent(u)!==-1}return{mount:a}}var ea=90;function ta(n,t,e){var r=j(n),c=r.on,v=t.Elements.track,a=e.live&&!e.isNavigation,o=Cn("span",br),d=pe(ea,U(i,!1));function u(){a&&(f(!t.Autoplay.isPaused()),M(v,it,!0),o.textContent="…",c(St,U(f,!0)),c(Tt,U(f,!1)),c([ee,Mn],U(i,!0)))}function i(_){M(v,at,_),_?(Jn(v,o),d.start()):(Tn(o),d.cancel())}function h(){on(v,[rt,it,at]),Tn(o)}function f(_){a&&M(v,rt,_?"off":"polite")}return{mount:u,disable:f,destroy:h}}var ra=Object.freeze({__proto__:null,Media:ur,Direction:vr,Elements:xr,Slides:Ir,Layout:Nr,Clones:Cr,Move:Or,Controller:kr,Arrows:Mr,Autoplay:Vr,Cover:Fr,Scroll:Hr,Drag:Yr,Keyboard:Xr,LazyLoad:qr,Pagination:Zr,Sync:Qr,Wheel:na,Live:ta}),aa={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ia={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ar,i18n:aa,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ca(n,t,e){var r=t.Slides;function c(){j(n).on([Ln,$],v)}function v(){r.forEach(function(o){o.style("transform","translateX(-"+100*o.index+"%)")})}function a(o,d){r.style("transition","opacity "+e.speed+"ms "+e.easing),vt(d)}return{mount:c,start:a,cancel:Le}}function sa(n,t,e){var r=t.Move,c=t.Controller,v=t.Scroll,a=t.Elements.list,o=U(rn,a,"transition"),d;function u(){j(n).bind(a,"transitionend",function(_){_.target===a&&d&&(h(),d())})}function i(_,s){var l=r.toPosition(_,!0),E=r.getPosition(),m=f(_);J(l-E)>=1&&m>=1?e.useScroll?v.scroll(l,m,!1,s):(o("transform "+m+"ms "+e.easing),r.translate(l,!0),d=s):(r.jump(_),s())}function h(){o(""),v.cancel()}function f(_){var s=e.rewindSpeed;if(n.is(Dn)&&s){var l=c.getIndex(!0),E=c.getEnd();if(l===0&&_>=E||l>=E&&_===0)return s}return e.speed}return{mount:u,start:i,cancel:h}}var oa=function(){function n(e,r){this.event=j(),this.Components={},this.state=dr(Rn),this.splides=[],this._o={},this._E={};var c=hn(e)?mt(document,e):e;Fn(c,c+" is invalid."),this.root=c,r=gn({label:an(c,en)||"",labelledby:an(c,We)||""},ia,n.defaults,r||{});try{gn(r,JSON.parse(an(c,Ve)))}catch{Fn(!1,"Invalid JSON")}this._o=Object.create(gn({},r))}var t=n.prototype;return t.mount=function(r,c){var v=this,a=this.state,o=this.Components;Fn(a.is([Rn,le]),"Already mounted!"),a.set(Rn),this._C=o,this._T=c||this._T||(this.is(re)?ca:sa),this._E=r||this._E;var d=jn({},ra,this._E,{Transition:this._T});return Sn(d,function(u,i){var h=u(v,o,v._o);o[i]=h,h.setup&&h.setup()}),Sn(o,function(u){u.mount&&u.mount()}),this.emit(Ln),sn(this.root,wr),a.set(kn),this.emit(nt),this},t.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(kn)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},t.go=function(r){return this._C.Controller.go(r),this},t.on=function(r,c){return this.event.on(r,c),this},t.off=function(r){return this.event.off(r),this},t.emit=function(r){var c;return(c=this.event).emit.apply(c,[r].concat(bn(arguments,1))),this},t.add=function(r,c){return this._C.Slides.add(r,c),this},t.remove=function(r){return this._C.Slides.remove(r),this},t.is=function(r){return this._o.type===r},t.refresh=function(){return this.emit($),this},t.destroy=function(r){r===void 0&&(r=!0);var c=this.event,v=this.state;return v.is(Rn)?j(this).on(nt,this.destroy.bind(this,r)):(Sn(this._C,function(a){a.destroy&&a.destroy(r)},!0),c.emit(yt),c.destroy(),r&&_n(this.splides),v.set(le)),this},Yt(n,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),n}(),$e=oa;$e.defaults={};$e.STATES=Xt;const dt=`<div class="tw:bg-slate-200 tw:p-[16px] tw:md:p-[40px]">
  <div class="p-splide-card01">
    <div class="splide">
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev"></button>
        <button class="splide__arrow splide__arrow--next"></button>
      </div>
      <div class="splide__track">
        <div class="splide__list">
          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 右側をはみ出すスライダー -->
<div class="tw:bg-orange-50 tw:py-[16px] tw:md:py-[40px]">
  <p
    class="tw:font-bold tw:text-[16px] tw:md:text-[24px] tw:mb-[16px] tw:md:mb-[24px] tw:text-center"
  >
    右側をはみ出すスライダー
  </p>

  <div class="p-splide-card02">
    <div class="splide">
      <div class="splide__track">
        <div class="splide__list">
          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>

          <div class="c-card-event splide__slide">
            <a href="#" class="c-card-event__link">
              <figure class="c-card-event__amount">
                <img
                  src="https://placehold.jp/660x410.png"
                  alt="タイトルタイトルタイトルタイトル"
                  loading="lazy"
                  decoding="async"
                  width="660"
                  height="410"
                  class="c-card-event__image"
                />
              </figure>
              <div class="c-card-event__wrap">
                <p class="c-card-event__title">
                  タイトルタイトルタイトルタイトル
                </p>
                <p class="c-card-event__text">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div class="c-card-event__schedule">
                  08/09(土), 08/10(日), 08/11(月), 08/15(金), 08/16(土)
                  <span> 他</span>
                </div>
              </div>
            </a>
            <div class="c-card-event__buttons">
              <div class="c-card-event__button --detail">
                <a href="#" class="c-card-event__button-link"> 詳細を見る </a>
              </div>
              <div class="c-card-event__button --reservation">
                <a href="#" target="_blank" class="c-card-event__button-link">
                  予約する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="splide__controller">
        <ul class="splide__pagination"></ul>

        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev"></button>
          <button class="splide__arrow splide__arrow--next"></button>
        </div>
      </div>
    </div>
  </div>
</div>
`,lt=`.p-splide-card01 {
  max-width: 880px;
  padding-inline: 24px;
  margin-inline: auto;
}

.p-splide-card01 .splide {
  z-index: 0;
}

/* 前へ / 次へボタン */
.p-splide-card01 .splide__arrow {
  z-index: 1;
  transition: opacity 0.3s;
}

.p-splide-card01 .splide__arrow:disabled {
  pointer-events: none;
  opacity: 0;
}

.p-splide-card01 .splide__arrow--prev,
.p-splide-card01 .splide__arrow--next {
  --splide-arrow-w: 48px;

  position: absolute;
  top: 0;
  bottom: 0;
  display: grid;
  place-content: center;
  width: var(--splide-arrow-w);
  aspect-ratio: 1;
  margin: auto;
  background-color: #ff6900;
  border-radius: 50%;
}
@media screen and (min-width: 768px) {
  .p-splide-card01 .splide__arrow--prev,
  .p-splide-card01 .splide__arrow--next {
    --splide-arrow-w: 64px;

    width: var(--splide-arrow-w);
  }
}

.p-splide-card01 .splide__arrow--prev {
  right: calc(100% - var(--splide-arrow-w) / 3.5);
}

.p-splide-card01 .splide__arrow--next {
  left: calc(100% - var(--splide-arrow-w) / 3.5);
}

.p-splide-card01 .splide__arrow--prev::after,
.p-splide-card01 .splide__arrow--next::after {
  width: 12px;
  height: 12px;
  content: "";
  border: solid #fff;
  border-width: 3px 3px 0 0;
}

.p-splide-card01 .splide__arrow--prev::after {
  margin-left: 4px;
  transform: rotate(-135deg);
}

.p-splide-card01 .splide__arrow--next::after {
  margin-right: 4px;
  transform: rotate(45deg);
}

/* ページネーション */
.p-splide-card01 .splide__pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 8px;
  justify-content: center;
  margin-top: 32px;
}

.p-splide-card01 .splide__pagination li {
  font-size: 0; /* liタグの下にある余白を消すため */
}

.p-splide-card01 .splide__pagination__page {
  width: 8px;
  aspect-ratio: 1;
  vertical-align: top;
  cursor: pointer;
  background-color: #d1d5dc;
  border-radius: 50%;
  transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
}

.p-splide-card01 .splide__pagination__page.is-active {
  background-color: #ff6900;
}

.p-splide-card02 {
  padding-inline: 24px;
  overflow: hidden;
}
@media screen and (min-width: 768px) {
  .p-splide-card02 {
    padding-inline: 40px;
  }
}
@media screen and (min-width: 1024px) {
  .p-splide-card02 {
    padding-inline: 80px;
  }
}

.p-splide-card02 .splide {
  z-index: 0;
}

.p-splide-card02 .splide__track {
  overflow: visible;
}

.p-splide-card02 .splide__controller {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 32px;
}

/* ページネーション */
.p-splide-card02 .splide__pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 8px;
  justify-content: flex-start;
  margin-right: auto;
}

.p-splide-card02 .splide__pagination li {
  font-size: 0; /* liタグの下にある余白を消すため */
}

.p-splide-card02 .splide__pagination__page {
  width: 8px;
  aspect-ratio: 1;
  vertical-align: top;
  cursor: pointer;
  background-color: #d1d5dc;
  border-radius: 50%;
  transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
}

.p-splide-card02 .splide__pagination__page.is-active {
  background-color: #ff6900;
}

/* 前へ / 次へボタン */
.p-splide-card02 .splide__arrows {
  display: flex;
  gap: 8px;
}
@media screen and (min-width: 768px) {
  .p-splide-card02 .splide__arrows {
    gap: 16px;
  }
}

.p-splide-card02 .splide__arrow {
  z-index: 1;
  transition: opacity 0.3s;
}

.p-splide-card02 .splide__arrow:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.p-splide-card02 .splide__arrow--prev,
.p-splide-card02 .splide__arrow--next {
  --splide-arrow-w: 48px;

  display: grid;
  place-content: center;
  width: var(--splide-arrow-w);
  aspect-ratio: 1;
  margin: auto;
  background-color: #ff6900;
  border-radius: 50%;
}
@media screen and (min-width: 768px) {
  .p-splide-card02 .splide__arrow--prev,
  .p-splide-card02 .splide__arrow--next {
    --splide-arrow-w: 64px;

    width: var(--splide-arrow-w);
  }
}

.p-splide-card02 .splide__arrow--prev {
  right: calc(100% - var(--splide-arrow-w) / 3.5);
}

.p-splide-card02 .splide__arrow--next {
  left: calc(100% - var(--splide-arrow-w) / 3.5);
}

.p-splide-card02 .splide__arrow--prev::after,
.p-splide-card02 .splide__arrow--next::after {
  width: 12px;
  height: 12px;
  content: "";
  border: solid #fff;
  border-width: 3px 3px 0 0;
}

.p-splide-card02 .splide__arrow--prev::after {
  margin-left: 4px;
  transform: rotate(-135deg);
}

.p-splide-card02 .splide__arrow--next::after {
  margin-right: 4px;
  transform: rotate(45deg);
}
`,ut=`const target01 = ".p-splide-card01 .splide";
const options01 = {
  mediaQuery: "min",
  perPage: 1,
  focus: 0,
  omitEnd: true,
  gap: 8,
  breakpoints: {
    768: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
  },
};

const target02 = ".p-splide-card02 .splide";
const options02 = {
  mediaQuery: "min",
  perPage: 1,
  focus: 0,
  omitEnd: true,
  fixedWidth: "240px",
  gap: 8,
  breakpoints: {
    1024: {
      fixedWidth: "360px",
      gap: 16,
    },
  },
};

const mySplide01 = new Splide(target01, options01);
mySplide01.mount();

const mySplide02 = new Splide(target02, options02);
mySplide02.mount();
`,ua={title:"Project/Slider"},ie={render:()=>{const n=document.createElement("div");return n.innerHTML=`
      <style>
        ${jt}
        ${lt}
      </style>
      ${dt}
    `,requestAnimationFrame(()=>{window.Splide=$e,new Function(ut)()}),n},parameters:{sourceCode:[{name:"HTML",code:dt},{name:"CSS",code:lt},{name:"JavaScript",code:ut}]}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = \`
      <style>
        \${cssEvent}
        \${cssSplideCard}
      </style>
      \${splideCard}
    \`;
    requestAnimationFrame(() => {
      window.Splide = Splide;
      new Function(jsSplideCard)();
    });
    return container;
  },
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: splideCard
    }, {
      name: "CSS",
      code: cssSplideCard
    }, {
      name: "JavaScript",
      code: jsSplideCard
    }]
  }
}`,...ie.parameters?.docs?.source}}};const va=["SplideCard"];export{ie as SplideCard,va as __namedExportsOrder,ua as default};
