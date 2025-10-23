import{S as En}from"./splide.esm-nHf3Xtr5.js";/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function Sn(n){n.length=0}function V(n,t,e){return Array.prototype.slice.call(n,t,e)}function L(n){return n.bind.apply(n,[null].concat(V(arguments,1)))}function B(n){return requestAnimationFrame(n)}function I(n,t){return typeof t===n}var ln=Array.isArray;L(I,"function");L(I,"string");L(I,"undefined");function dn(n){return ln(n)?n:[n]}function G(n,t){dn(n).forEach(t)}var kn=Object.keys;function Tn(n,t,e){if(n){var i=kn(n);i=i;for(var s=0;s<i.length;s++){var r=i[s];if(r!=="__proto__"&&t(n[r],r)===!1)break}}return n}function On(n){return V(arguments,1).forEach(function(t){Tn(t,function(e,i){n[i]=t[i]})}),n}var An=Math.min;function Cn(){var n=[];function t(c,d,a,f){s(c,d,function(l,p,u){var b="addEventListener"in l,x=b?l.removeEventListener.bind(l,p,a,f):l.removeListener.bind(l,a);b?l.addEventListener(p,a,f):l.addListener(a),n.push([l,p,u,a,x])})}function e(c,d,a){s(c,d,function(f,l,p){n=n.filter(function(u){return u[0]===f&&u[1]===l&&u[2]===p&&(!a||u[3]===a)?(u[4](),!1):!0})})}function i(c,d,a){var f,l=!0;return typeof CustomEvent=="function"?f=new CustomEvent(d,{bubbles:l,detail:a}):(f=document.createEvent("CustomEvent"),f.initCustomEvent(d,l,!1,a)),c.dispatchEvent(f),f}function s(c,d,a){G(c,function(f){f&&G(d,function(l){l.split(" ").forEach(function(p){var u=p.split(".");a(f,u[0],u[1])})})})}function r(){n.forEach(function(c){c[4]()}),Sn(n)}return{bind:t,unbind:e,dispatch:i,destroy:r}}var J="move",X="moved",Ln="updated",U="drag",Dn="dragged",W="scroll",Y="scrolled",$n="destroy";function Fn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=Cn();function i(r,c){e.bind(t,dn(r).join(" "),function(d){c.apply(c,ln(d.detail)?d.detail:[])})}function s(r){e.dispatch(t,r,V(arguments,1))}return n&&n.event.on($n,e.destroy),On(e,{bus:t,on:i,off:L(e.unbind,t),emit:s})}function fn(n,t,e,i){var s=Date.now,r,c=0,d,a=!0,f=0;function l(){if(!a){if(c=n?An((s()-r)/n,1):1,e&&e(c),c>=1&&(t(),r=s(),i&&++f>=i))return u();B(l)}}function p(h){!h&&x(),r=s()-(h?c*n:0),a=!1,B(l)}function u(){a=!0}function b(){r=s(),c=0,e&&e(c)}function x(){d&&cancelAnimationFrame(d),c=0,d=0,a=!0}function S(h){n=h}function y(){return a}return{start:p,rewind:b,pause:u,cancel:x,set:S,isPaused:y}}function zn(n,t){var e;function i(){e||(e=fn(t,function(){n(),e=null},null,1),e.start())}return i}var Mn="is-active",Hn="slide",Nn="fade";function un(n,t,e){return Array.prototype.slice.call(n,t,e)}function K(n){return n.bind(null,...un(arguments,1))}function D(n,t){return typeof t===n}function N(n){return!pn(n)&&D("object",n)}const Vn=Array.isArray;K(D,"function");K(D,"string");const In=K(D,"undefined");function pn(n){return n===null}function Kn(n){return Vn(n)?n:[n]}function C(n,t){Kn(n).forEach(t)}function Pn(n,t,e){n&&C(t,i=>{i&&n.classList[e?"add":"remove"](i)})}const jn=Object.keys;function xn(n,t,e){if(n){let i=jn(n);i=i;for(let s=0;s<i.length;s++){const r=i[s];if(r!=="__proto__"&&t(n[r],r)===!1)break}}return n}function Q(n){return un(arguments,1).forEach(t=>{xn(t,(e,i)=>{n[i]=t[i]})}),n}function qn(n,t){C(n,e=>{C(t,i=>{e&&e.removeAttribute(i)})})}function wn(n,t,e){N(t)?xn(t,(i,s)=>{wn(n,s,i)}):C(n,i=>{pn(e)||e===""?qn(i,t):i.setAttribute(t,String(e))})}const{min:Z,max:nn}=Math;function Rn(n,t,e){const i=Z(t,e),s=nn(t,e);return Z(nn(i,n),s)}const Bn={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},Gn={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function Jn(n,t,e){const{on:i,off:s,bind:r,unbind:c}=Fn(n),{translate:d,getPosition:a,toIndex:f,getLimit:l}=t.Move,{setIndex:p,getIndex:u}=t.Controller,{orient:b}=t.Direction,{toggle:x}=t.Elements,{Live:S}=t,{root:y}=n,h=zn(t.Arrows.update,500);let w={},m,g,$,F,z,k;function mn(){const{autoScroll:o}=e;w=Q({},Bn,N(o)?o:{})}function P(){n.is(Nn)||!m&&e.autoScroll!==!1&&(m=fn(0,hn),gn(),bn())}function j(){m&&(m.cancel(),m=null,k=void 0,s([J,U,W,X,Y]),c(y,"mouseenter mouseleave focusin focusout"),c(x,"click"))}function gn(){w.pauseOnHover&&r(y,"mouseenter mouseleave",o=>{$=o.type==="mouseenter",M()}),w.pauseOnFocus&&r(y,"focusin focusout",o=>{F=o.type==="focusin",M()}),w.useToggleButton&&r(x,"click",()=>{g?_():E()}),i(Ln,vn),i([J,U,W],()=>{z=!0,E(!1)}),i([X,Dn,Y],()=>{z=!1,M()})}function vn(){const{autoScroll:o}=e;o!==!1?(w=Q({},w,N(o)?o:{}),P()):j(),m&&!In(k)&&d(k)}function bn(){w.autoStart&&(document.readyState==="complete"?_():r(window,"load",_))}function _(){H()&&(m.start(!0),S.disable(!0),F=$=g=!1,q())}function E(o=!0){g||(g=o,q(),H()||(m.pause(),S.disable(!1)))}function M(){g||($||F||z?E(!1):_())}function hn(){const o=a(),v=yn(o);o!==v?(d(v),_n(k=a())):(E(!1),w.rewind&&n.go(w.speed>0?0:t.Controller.getEnd())),h()}function yn(o){const v=w.speed||1;return o+=b(v),n.is(Hn)&&(o=Rn(o,l(!1),l(!0))),o}function _n(o){const{length:v}=n,R=(f(o)+v)%v;R!==u()&&(p(R),t.Slides.update(),t.Pagination.update(),e.lazyLoad==="nearby"&&t.LazyLoad.check())}function q(){if(x){const o=g?"startScroll":"pauseScroll";Pn(x,Mn,!g),wn(x,"aria-label",e.i18n[o]||Gn[o])}}function H(){return!m||m.isPaused()}return{setup:mn,mount:P,destroy:j,play:_,pause:E,isPaused:H}}const tn=`<div class="tw:py-[40px]">
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
`,en=`.c-text-flowing__slide {
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
`,on=`const flowingTextOptions = {
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
`,sn=`<div class="tw:flex tw:flex-col tw:gap-[16px] tw:m-[16px]">
  <p><a href="#" class="c-text-link-line01">テキストリンク（下線）</a></p>

  <p><a href="#" class="c-text-link-line02">テキストリンク（下線2）</a></p>

  <p><a href="#" class="c-text-link-opacity">テキストリンク（半透明）</a></p>
</div>
`,rn=`.c-text-link-line01 {
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
`,cn=`<div class="tw:flex tw:flex-col tw:gap-[24px] tw:p-[16px]">
  <p><span class="c-text-deco-marker">テキスト装飾（マーカー）</span></p>

  <p>
    <span class="c-text-deco-underline">テキスト装飾（アンダーライン）</span>
  </p>

  <p>
    <span class="c-text-deco-gradation">テキスト装飾（グラデーション）</span>
  </p>

  <p>
    <span class="c-text-deco-outline">テキスト装飾（アウトライン）</span>
  </p>

  <p>
    <span class="c-text-deco-bubble">
      テキスト装飾（下から呼びかけるフキダシ）
    </span>
  </p>
</div>
`,an=`.c-text-deco-marker {
  background-color: #fff085;
}

.c-text-deco-underline {
  text-decoration: underline;
  text-decoration-thickness: 0.5em;
  text-decoration-color: #fff085;
  text-decoration-skip-ink: none;
  text-underline-offset: -0.2em;
}

.c-text-deco-gradation {
  font-weight: 700;
  color: transparent;
  background: linear-gradient(90deg, #f3966a 0%, #df6da1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.c-text-deco-outline {
  font-size: 40px;
  font-weight: 900;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #ff6900;
  text-fill-color: transparent;
  text-stroke: 1px #ff6900;
}

.c-text-deco-bubble {
  display: inline-flex;
  gap: 4px;
  align-items: end;
}

.c-text-deco-bubble::before,
.c-text-deco-bubble::after {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 30px;
  height: 2px;
  content: "";
  background-color: #ff6900;
  border-radius: 100vmax;
  translate: 0 -10px;
}

.c-text-deco-bubble::before {
  rotate: 60deg;
}

.c-text-deco-bubble::after {
  rotate: -60deg;
}
`,Un={title:"Component/Text"},T={render:()=>{const n=document.createElement("div");return n.innerHTML=`
      <style>${en}</style>
      ${tn}
    `,requestAnimationFrame(()=>{window.Splide=En,window.splide={Extensions:{AutoScroll:Jn}},new Function(on)()}),n},parameters:{sourceCode:[{name:"HTML",code:tn},{name:"CSS",code:en},{name:"JavaScript",code:on}]}},O={render:()=>`
    <style>${rn}</style>
    ${sn}
  `,parameters:{sourceCode:[{name:"HTML",code:sn},{name:"CSS",code:rn}]}},A={render:()=>`
    <style>${an}</style>
    ${cn}
  `,parameters:{sourceCode:[{name:"HTML",code:cn},{name:"CSS",code:an}]}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssDeco}</style>
    \${deco}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: deco
    }, {
      name: "CSS",
      code: cssDeco
    }]
  }
}`,...A.parameters?.docs?.source}}};const Wn=["Flowing","Link","Deco"];export{A as Deco,T as Flowing,O as Link,Wn as __namedExportsOrder,Un as default};
