/* empty css                */import{S as _n}from"./splide.esm-nHf3Xtr5.js";/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function yn(n){n.length=0}function V(n,t,e){return Array.prototype.slice.call(n,t,e)}function O(n){return n.bind.apply(n,[null].concat(V(arguments,1)))}function K(n){return requestAnimationFrame(n)}function H(n,t){return typeof t===n}var rn=Array.isArray;O(H,"function");O(H,"string");O(H,"undefined");function ln(n){return rn(n)?n:[n]}function B(n,t){ln(n).forEach(t)}var En=Object.keys;function bn(n,t,e){if(n){var i=En(n);i=i;for(var s=0;s<i.length;s++){var r=i[s];if(r!=="__proto__"&&t(n[r],r)===!1)break}}return n}function Sn(n){return V(arguments,1).forEach(function(t){bn(t,function(e,i){n[i]=t[i]})}),n}var An=Math.min;function Ln(){var n=[];function t(l,u,a,f){s(l,u,function(c,p,d){var h="addEventListener"in c,w=h?c.removeEventListener.bind(c,p,a,f):c.removeListener.bind(c,a);h?c.addEventListener(p,a,f):c.addListener(a),n.push([c,p,d,a,w])})}function e(l,u,a){s(l,u,function(f,c,p){n=n.filter(function(d){return d[0]===f&&d[1]===c&&d[2]===p&&(!a||d[3]===a)?(d[4](),!1):!0})})}function i(l,u,a){var f,c=!0;return typeof CustomEvent=="function"?f=new CustomEvent(u,{bubbles:c,detail:a}):(f=document.createEvent("CustomEvent"),f.initCustomEvent(u,c,!1,a)),l.dispatchEvent(f),f}function s(l,u,a){B(l,function(f){f&&B(u,function(c){c.split(" ").forEach(function(p){var d=p.split(".");a(f,d[0],d[1])})})})}function r(){n.forEach(function(l){l[4]()}),yn(n)}return{bind:t,unbind:e,dispatch:i,destroy:r}}var G="move",J="moved",Tn="updated",U="drag",kn="dragged",W="scroll",Y="scrolled",On="destroy";function Fn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=Ln();function i(r,l){e.bind(t,ln(r).join(" "),function(u){l.apply(l,rn(u.detail)?u.detail:[])})}function s(r){e.dispatch(t,r,V(arguments,1))}return n&&n.event.on(On,e.destroy),Sn(e,{bus:t,on:i,off:O(e.unbind,t),emit:s})}function an(n,t,e,i){var s=Date.now,r,l=0,u,a=!0,f=0;function c(){if(!a){if(l=n?An((s()-r)/n,1):1,e&&e(l),l>=1&&(t(),r=s(),i&&++f>=i))return d();K(c)}}function p(_){!_&&w(),r=s()-(_?l*n:0),a=!1,K(c)}function d(){a=!0}function h(){r=s(),l=0,e&&e(l)}function w(){u&&cancelAnimationFrame(u),l=0,u=0,a=!0}function S(_){n=_}function y(){return a}return{start:p,rewind:h,pause:d,cancel:w,set:S,isPaused:y}}function $n(n,t){var e;function i(){e||(e=an(t,function(){n(),e=null},null,1),e.start())}return i}var Dn="is-active",Cn="slide",zn="fade";function cn(n,t,e){return Array.prototype.slice.call(n,t,e)}function I(n){return n.bind(null,...cn(arguments,1))}function F(n,t){return typeof t===n}function N(n){return!un(n)&&F("object",n)}const Mn=Array.isArray;I(F,"function");I(F,"string");const Nn=I(F,"undefined");function un(n){return n===null}function Vn(n){return Mn(n)?n:[n]}function k(n,t){Vn(n).forEach(t)}function Hn(n,t,e){n&&k(t,i=>{i&&n.classList[e?"add":"remove"](i)})}const In=Object.keys;function fn(n,t,e){if(n){let i=In(n);i=i;for(let s=0;s<i.length;s++){const r=i[s];if(r!=="__proto__"&&t(n[r],r)===!1)break}}return n}function Q(n){return cn(arguments,1).forEach(t=>{fn(t,(e,i)=>{n[i]=t[i]})}),n}function Pn(n,t){k(n,e=>{k(t,i=>{e&&e.removeAttribute(i)})})}function dn(n,t,e){N(t)?fn(t,(i,s)=>{dn(n,s,i)}):k(n,i=>{un(e)||e===""?Pn(i,t):i.setAttribute(t,String(e))})}const{min:X,max:Z}=Math;function jn(n,t,e){const i=X(t,e),s=Z(t,e);return X(Z(i,n),s)}const qn={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},Rn={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function Kn(n,t,e){const{on:i,off:s,bind:r,unbind:l}=Fn(n),{translate:u,getPosition:a,toIndex:f,getLimit:c}=t.Move,{setIndex:p,getIndex:d}=t.Controller,{orient:h}=t.Direction,{toggle:w}=t.Elements,{Live:S}=t,{root:y}=n,_=$n(t.Arrows.update,500);let x={},m,g,$,D,C,A;function pn(){const{autoScroll:o}=e;x=Q({},qn,N(o)?o:{})}function P(){n.is(zn)||!m&&e.autoScroll!==!1&&(m=an(0,gn),wn(),mn())}function j(){m&&(m.cancel(),m=null,A=void 0,s([G,U,W,J,Y]),l(y,"mouseenter mouseleave focusin focusout"),l(w,"click"))}function wn(){x.pauseOnHover&&r(y,"mouseenter mouseleave",o=>{$=o.type==="mouseenter",z()}),x.pauseOnFocus&&r(y,"focusin focusout",o=>{D=o.type==="focusin",z()}),x.useToggleButton&&r(w,"click",()=>{g?E():b()}),i(Tn,xn),i([G,U,W],()=>{C=!0,b(!1)}),i([J,kn,Y],()=>{C=!1,z()})}function xn(){const{autoScroll:o}=e;o!==!1?(x=Q({},x,N(o)?o:{}),P()):j(),m&&!Nn(A)&&u(A)}function mn(){x.autoStart&&(document.readyState==="complete"?E():r(window,"load",E))}function E(){M()&&(m.start(!0),S.disable(!0),D=$=g=!1,q())}function b(o=!0){g||(g=o,q(),M()||(m.pause(),S.disable(!1)))}function z(){g||($||D||C?b(!1):E())}function gn(){const o=a(),v=vn(o);o!==v?(u(v),hn(A=a())):(b(!1),x.rewind&&n.go(x.speed>0?0:t.Controller.getEnd())),_()}function vn(o){const v=x.speed||1;return o+=h(v),n.is(Cn)&&(o=jn(o,c(!1),c(!0))),o}function hn(o){const{length:v}=n,R=(f(o)+v)%v;R!==d()&&(p(R),t.Slides.update(),t.Pagination.update(),e.lazyLoad==="nearby"&&t.LazyLoad.check())}function q(){if(w){const o=g?"startScroll":"pauseScroll";Hn(w,Dn,!g),dn(w,"aria-label",e.i18n[o]||Rn[o])}}function M(){return!m||m.isPaused()}return{setup:pn,mount:P,destroy:j,play:E,pause:b,isPaused:M}}const nn=`<div class="tw:py-[40px]">
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
`,Jn={title:"Component/Text"},L={render:()=>{const n=document.createElement("div");return n.innerHTML=`
      <style>${tn}</style>
      ${nn}
    `,requestAnimationFrame(()=>{window.Splide=_n,window.splide={Extensions:{AutoScroll:Kn}},new Function(en)()}),n},parameters:{sourceCode:[{name:"HTML",code:nn},{name:"CSS",code:tn},{name:"JavaScript",code:en}]}},T={render:()=>`
    <style>${sn}</style>
    ${on}
  `,parameters:{sourceCode:[{name:"HTML",code:on},{name:"CSS",code:sn}]}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const Un=["Flowing","Link"];export{L as Flowing,T as Link,Un as __namedExportsOrder,Jn as default};
