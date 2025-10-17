/* empty css                */import{S as _n}from"./splide.esm-nHf3Xtr5.js";/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function bn(n){n.length=0}function V(n,t,e){return Array.prototype.slice.call(n,t,e)}function L(n){return n.bind.apply(n,[null].concat(V(arguments,1)))}function R(n){return requestAnimationFrame(n)}function H(n,t){return typeof t===n}var rn=Array.isArray;L(H,"function");L(H,"string");L(H,"undefined");function ln(n){return rn(n)?n:[n]}function B(n,t){ln(n).forEach(t)}var En=Object.keys;function yn(n,t,e){if(n){var i=En(n);i=i;for(var s=0;s<i.length;s++){var r=i[s];if(r!=="__proto__"&&t(n[r],r)===!1)break}}return n}function Sn(n){return V(arguments,1).forEach(function(t){yn(t,function(e,i){n[i]=t[i]})}),n}var On=Math.min;function kn(){var n=[];function t(l,f,a,u){s(l,f,function(c,p,d){var h="addEventListener"in c,w=h?c.removeEventListener.bind(c,p,a,u):c.removeListener.bind(c,a);h?c.addEventListener(p,a,u):c.addListener(a),n.push([c,p,d,a,w])})}function e(l,f,a){s(l,f,function(u,c,p){n=n.filter(function(d){return d[0]===u&&d[1]===c&&d[2]===p&&(!a||d[3]===a)?(d[4](),!1):!0})})}function i(l,f,a){var u,c=!0;return typeof CustomEvent=="function"?u=new CustomEvent(f,{bubbles:c,detail:a}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(f,c,!1,a)),l.dispatchEvent(u),u}function s(l,f,a){B(l,function(u){u&&B(f,function(c){c.split(" ").forEach(function(p){var d=p.split(".");a(u,d[0],d[1])})})})}function r(){n.forEach(function(l){l[4]()}),bn(n)}return{bind:t,unbind:e,dispatch:i,destroy:r}}var G="move",J="moved",Tn="updated",X="drag",An="dragged",U="scroll",W="scrolled",Ln="destroy";function Cn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=kn();function i(r,l){e.bind(t,ln(r).join(" "),function(f){l.apply(l,rn(f.detail)?f.detail:[])})}function s(r){e.dispatch(t,r,V(arguments,1))}return n&&n.event.on(Ln,e.destroy),Sn(e,{bus:t,on:i,off:L(e.unbind,t),emit:s})}function an(n,t,e,i){var s=Date.now,r,l=0,f,a=!0,u=0;function c(){if(!a){if(l=n?On((s()-r)/n,1):1,e&&e(l),l>=1&&(t(),r=s(),i&&++u>=i))return d();R(c)}}function p(_){!_&&w(),r=s()-(_?l*n:0),a=!1,R(c)}function d(){a=!0}function h(){r=s(),l=0,e&&e(l)}function w(){f&&cancelAnimationFrame(f),l=0,f=0,a=!0}function S(_){n=_}function b(){return a}return{start:p,rewind:h,pause:d,cancel:w,set:S,isPaused:b}}function Dn(n,t){var e;function i(){e||(e=an(t,function(){n(),e=null},null,1),e.start())}return i}var Fn="is-active",$n="slide",zn="fade";function cn(n,t,e){return Array.prototype.slice.call(n,t,e)}function I(n){return n.bind(null,...cn(arguments,1))}function C(n,t){return typeof t===n}function N(n){return!fn(n)&&C("object",n)}const Mn=Array.isArray;I(C,"function");I(C,"string");const Nn=I(C,"undefined");function fn(n){return n===null}function Vn(n){return Mn(n)?n:[n]}function A(n,t){Vn(n).forEach(t)}function Hn(n,t,e){n&&A(t,i=>{i&&n.classList[e?"add":"remove"](i)})}const In=Object.keys;function un(n,t,e){if(n){let i=In(n);i=i;for(let s=0;s<i.length;s++){const r=i[s];if(r!=="__proto__"&&t(n[r],r)===!1)break}}return n}function Y(n){return cn(arguments,1).forEach(t=>{un(t,(e,i)=>{n[i]=t[i]})}),n}function Kn(n,t){A(n,e=>{A(t,i=>{e&&e.removeAttribute(i)})})}function dn(n,t,e){N(t)?un(t,(i,s)=>{dn(n,s,i)}):A(n,i=>{fn(e)||e===""?Kn(i,t):i.setAttribute(t,String(e))})}const{min:Q,max:Z}=Math;function Pn(n,t,e){const i=Q(t,e),s=Z(t,e);return Q(Z(i,n),s)}const jn={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},qn={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function Rn(n,t,e){const{on:i,off:s,bind:r,unbind:l}=Cn(n),{translate:f,getPosition:a,toIndex:u,getLimit:c}=t.Move,{setIndex:p,getIndex:d}=t.Controller,{orient:h}=t.Direction,{toggle:w}=t.Elements,{Live:S}=t,{root:b}=n,_=Dn(t.Arrows.update,500);let x={},m,g,D,F,$,O;function pn(){const{autoScroll:o}=e;x=Y({},jn,N(o)?o:{})}function K(){n.is(zn)||!m&&e.autoScroll!==!1&&(m=an(0,gn),wn(),mn())}function P(){m&&(m.cancel(),m=null,O=void 0,s([G,X,U,J,W]),l(b,"mouseenter mouseleave focusin focusout"),l(w,"click"))}function wn(){x.pauseOnHover&&r(b,"mouseenter mouseleave",o=>{D=o.type==="mouseenter",z()}),x.pauseOnFocus&&r(b,"focusin focusout",o=>{F=o.type==="focusin",z()}),x.useToggleButton&&r(w,"click",()=>{g?E():y()}),i(Tn,xn),i([G,X,U],()=>{$=!0,y(!1)}),i([J,An,W],()=>{$=!1,z()})}function xn(){const{autoScroll:o}=e;o!==!1?(x=Y({},x,N(o)?o:{}),K()):P(),m&&!Nn(O)&&f(O)}function mn(){x.autoStart&&(document.readyState==="complete"?E():r(window,"load",E))}function E(){M()&&(m.start(!0),S.disable(!0),F=D=g=!1,j())}function y(o=!0){g||(g=o,j(),M()||(m.pause(),S.disable(!1)))}function z(){g||(D||F||$?y(!1):E())}function gn(){const o=a(),v=vn(o);o!==v?(f(v),hn(O=a())):(y(!1),x.rewind&&n.go(x.speed>0?0:t.Controller.getEnd())),_()}function vn(o){const v=x.speed||1;return o+=h(v),n.is($n)&&(o=Pn(o,c(!1),c(!0))),o}function hn(o){const{length:v}=n,q=(u(o)+v)%v;q!==d()&&(p(q),t.Slides.update(),t.Pagination.update(),e.lazyLoad==="nearby"&&t.LazyLoad.check())}function j(){if(w){const o=g?"startScroll":"pauseScroll";Hn(w,Fn,!g),dn(w,"aria-label",e.i18n[o]||qn[o])}}function M(){return!m||m.isPaused()}return{setup:pn,mount:K,destroy:P,play:E,pause:y,isPaused:M}}const nn=`<div class="tw:py-[40px]">
  <p
    class="tw:font-bold tw:text-[16px] tw:md:text-[24px] tw:mb-[16px] tw:md:mb-[24px] tw:text-center"
  >
    流れるテキスト（.c-text-flowing）
  </p>
  <p
    class="tw:font-bold tw:text-[14px] tw:md:text-[16px] tw:mb-[24px] tw:md:mb-[32px] tw:text-center tw:text-orange-500"
  >
    ※ splide.min.js / splide-core.min.css /
    splide-extension-auto-scroll.min.jsを使用
  </p>

  <div class="c-text-flowing js-text-flowing splide">
    <div class="c-text-flowing__track splide__track">
      <ul class="c-text-flowing__list splide__list">
        <li class="c-text-flowing__slide splide__slide">CODE STOCK</li>
      </ul>
    </div>
  </div>
</div>

<div class="tw:py-[40px]">
  <p
    class="tw:font-bold tw:text-[16px] tw:md:text-[24px] tw:mb-[16px] tw:md:mb-[24px] tw:text-center"
  >
    背景に流れるテキスト（.p-text-flowing / .c-text-flowing）
  </p>
  <p
    class="tw:font-bold tw:text-[14px] tw:md:text-[16px] tw:mb-[24px] tw:md:mb-[32px] tw:text-center tw:text-orange-500"
  >
    ※ splide.min.js / splide-core.min.css /
    splide-extension-auto-scroll.min.jsを使用
  </p>

  <section class="p-text-flowing">
    <div class="p-text-flowing__bg">
      <div class="c-text-flowing js-text-flowing splide">
        <div class="c-text-flowing__track splide__track">
          <ul class="c-text-flowing__list splide__list">
            <li class="c-text-flowing__slide splide__slide">CODE STOCK</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="p-text-flowing__heading">
      <h2 class="p-text-flowing__title">セクション見出し</h2>
      <p class="p-text-flowing__lead">
        ここにリード文。ここにリード文。ここにリード文。
      </p>
    </div>
  </section>
</div>

<div class="tw:py-[40px]">
  <p
    class="tw:font-bold tw:text-[16px] tw:md:text-[24px] tw:mb-[16px] tw:md:mb-[24px] tw:text-center"
  >
    CSSのみで流れるテキスト（.c-text-flowing-css）
  </p>

  <div class="c-text-flowing-css"></div>
</div>
`,tn=`.c-text-flowing__slide {
  font-size: 80px;
  font-weight: bold;
  line-height: 1;
  color: #f5f5f5;
  white-space: nowrap;
  user-select: none;
}
@media screen and (min-width: 768px) {
  .c-text-flowing__slide {
    font-size: 120px;
  }
}

.p-text-flowing {
  --text-flowing-size: 120px;

  position: relative;
  min-height: var(--text-flowing-size);
  overflow: hidden;
}
@media screen and (min-width: 768px) {
  .p-text-flowing {
    --text-flowing-size: 148px;
  }
}

.p-text-flowing .c-text-flowing__slide {
  font-size: var(--text-flowing-size);
}

.p-text-flowing__bg {
  position: absolute;
  top: -8px;
  z-index: -1;
}

.p-text-flowing__heading {
  padding-inline: 24px;
}

.p-text-flowing__title {
  font-size: 24px;
  font-weight: bold;
}

.p-text-flowing__lead {
  margin-top: 16px;
}

.c-text-flowing-css {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.c-text-flowing-css::after,
.c-text-flowing-css::before {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  color: transparent;
  white-space: nowrap;
  content: "CODE STOCK CODE STOCK CODE STOCK CODE STOCK CODE STOCK";
  opacity: 0.1;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #555;
}
@media screen and (min-width: 768px) {
  .c-text-flowing-css::after,
  .c-text-flowing-css::before {
    font-size: 128px;
  }
}

.c-text-flowing-css::before {
  animation: loop 100s linear -50s infinite;
}

.c-text-flowing-css::after {
  animation: loop 100s linear infinite;
}

@keyframes loop {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
`,en=`const flowingTextOptions = {
  type: "loop", // ループさせる
  arrows: false, // 矢印ボタンを非表示
  pagination: false, // ページネーションを非表示
  drag: false, // ドラッグしない
  gap: "0.25em", // スライド間の余白
  autoWidth: true, // スライド幅を要素に合わせる
  autoScroll: {
    speed: 1, // スクロール速度
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  },
};
document.querySelectorAll(".js-text-flowing").forEach((el) => {
  const list = el.querySelector(".splide__list");
  if (list) {
    const slides = Array.from(list.children);
    // スライドを複製して数を増やす
    if (slides.length === 1) {
      // 画面幅に応じて最低3つになるように複製
      for (let i = 0; i < 2; i++) {
        const clone = slides[0].cloneNode(true);
        list.appendChild(clone);
      }
    }
  }
  new Splide(el, flowingTextOptions).mount(window.splide.Extensions);
});
`,on=`<div class="tw:flex tw:flex-col tw:gap-[16px] tw:m-[16px]">
  <p><a href="#" class="c-text-link-line01">テキストリンク（下線）</a></p>

  <p><a href="#" class="c-text-link-line02">テキストリンク（下線2）</a></p>

  <p><a href="#" class="c-text-link-opacity">テキストリンク（半透明）</a></p>
</div>
`,sn=`.c-text-link-line01 {
  position: relative;
  display: inline-block;
  color: #0c0a09;
}

.c-text-link-line01::before {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  content: "";
  background: #0c0a09;
}

@media (any-hover: hover) {
  .c-text-link-line01::before {
    transition: width 0.3s ease;
  }

  .c-text-link-line01:hover::before {
    width: 100%;
  }
}

.c-text-link-line02 {
  position: relative;
  display: inline-block;
  color: #0c0a09;
}

.c-text-link-line02::before {
  position: absolute;
  right: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  content: "";
  background: #0c0a09;
}

@media (any-hover: hover) {
  .c-text-link-line02::before {
    transition: width 0.3s ease;
  }

  .c-text-link-line02:hover::before {
    left: 0;
    inline-size: 100%;
  }
}

.c-text-link-opacity {
  display: inline-block;
  color: #0c0a09;
}

@media (any-hover: hover) {
  .c-text-link-opacity {
    transition: opacity 0.3s ease;
  }

  .c-text-link-opacity:hover {
    opacity: 0.7;
  }
}
`,Jn={title:"Component/Text"},k={render:()=>{const n=document.createElement("div");return n.innerHTML=`
      <style>${tn}</style>
      ${nn}
    `,requestAnimationFrame(()=>{window.Splide=_n,window.splide={Extensions:{AutoScroll:Rn}},new Function(en)()}),n},parameters:{sourceCode:[{name:"HTML",code:nn},{name:"CSS",code:tn},{name:"JavaScript",code:en}]}},T={render:()=>`
    <style>${sn}</style>
    ${on}
  `,parameters:{sourceCode:[{name:"HTML",code:on},{name:"CSS",code:sn}]}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = \`
      <style>\${cssFlowing}</style>
      \${flowing}
    \`;
    requestAnimationFrame(() => {
      window.Splide = Splide;
      window.splide = {
        Extensions: {
          AutoScroll: AutoScroll
        }
      };
      new Function(jsFlowing)();
    });
    return container;
  },
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: flowing
    }, {
      name: "CSS",
      code: cssFlowing
    }, {
      name: "JavaScript",
      code: jsFlowing
    }]
  }
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssLink}</style>
    \${link}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: link
    }, {
      name: "CSS",
      code: cssLink
    }]
  }
}`,...T.parameters?.docs?.source}}};const Xn=["Flowing","Link"];export{k as Flowing,T as Link,Xn as __namedExportsOrder,Jn as default};
