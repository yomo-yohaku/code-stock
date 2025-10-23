import{S as o}from"./splide.esm-nHf3Xtr5.js";const s=`<div class="tw:py-[16px] tw:md:py-[40px]">
  <p
    class="tw:font-bold tw:text-[16px] tw:md:text-[24px] tw:mb-[16px] tw:md:mb-[24px] tw:text-center"
  >
    PCとスマホで動画を出し分ける（.p-kv-video）
  </p>

  <div class="p-kv-video">
    <div class="p-kv-video__hero">
      <video class="js-kv-video" muted playsinline loop autoplay></video>
    </div>
  </div>
</div>
`,t=`.p-kv-video {
  position: relative;
}

.p-kv-video__hero {
  padding-inline: 16px 0;
}
@media screen and (min-width: 768px) {
  .p-kv-video__hero {
    padding-inline: 24px;
  }
}

.p-kv-video__hero video {
  width: 100%;
  aspect-ratio: 750 / 1100;
  object-fit: cover;
  border-radius: 24px 0 0 24px;
}
@media screen and (min-width: 768px) {
  .p-kv-video__hero video {
    aspect-ratio: 1600 / 900;
    border-radius: 40px;
  }
}
`,d=`(function () {
  const video = document.querySelector(".js-kv-video");
  let currentType = null;
  let resizeTimer;

  function setVideoSource() {
    const isSp = window.innerWidth <= 768;
    const type = isSp ? "sp" : "pc";
    const newSrc = isSp
      ? "./assets/video/kv/kv_movie_sp.mp4"
      : "./assets/video/kv/kv_movie_pc.mp4";
    if (currentType !== type) {
      video.src = newSrc;
      currentType = type;
    }
  }

  setVideoSource();
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setVideoSource, 200);
  });
})();
`,l=`<div class="tw:py-[16px] tw:md:py-[40px]">
  <p
    class="tw:font-bold tw:text-[16px] tw:md:text-[24px] tw:mb-[16px] tw:md:mb-[24px] tw:text-center"
  >
    スライドと連動したプログレスバー（.p-kv-splide）
  </p>

  <div class="p-kv-splide js-kv-splide">
    <div class="splide">
      <div class="splide__track">
        <div class="splide__list">
          <div
            class="p-kv-splide__slide splide__slide"
            data-splide-interval="3500"
          >
            <div class="p-kv-splide__slide-amount">
              <img
                src="./assets/images/kv/kv_01.jpg"
                width="3840"
                height="2563"
                alt=""
                decoding="async"
                class="p-kv-splide__slide-image"
              />
            </div>
            <div class="p-kv-splide__slide-fraction">
              <div class="splide__fraction"></div>
            </div>
          </div>

          <div class="p-kv-splide__slide splide__slide">
            <div class="p-kv-splide__slide-amount">
              <img
                src="./assets/images/kv/kv_02.jpg"
                width="3840"
                height="2563"
                alt=""
                decoding="async"
                class="p-kv-splide__slide-image"
              />
            </div>
            <div class="p-kv-splide__slide-fraction">
              <div class="splide__fraction"></div>
            </div>
          </div>

          <div class="p-kv-splide__slide splide__slide">
            <div class="p-kv-splide__slide-amount">
              <img
                src="./assets/images/kv/kv_03.jpg"
                width="3840"
                height="2563"
                alt=""
                decoding="async"
                class="p-kv-splide__slide-image"
              />
            </div>
            <div class="p-kv-splide__slide-fraction">
              <div class="splide__fraction"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,a=`.p-kv-splide .p-kv-splide__slide-amount {
  width: 100%;
  max-height: 800px;
  aspect-ratio: 1552 / 872;
}

.p-kv-splide .p-kv-splide__slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: 7s ease-out;
}

.p-kv-splide .splide__slide[class*="-active"] .p-kv-splide__slide-image {
  transform: scale(1);
}

.p-kv-splide .p-kv-splide__slide-fraction {
  position: absolute;
  bottom: 24px;
  left: 24px;
}
@media screen and (min-width: 768px) {
  .p-kv-splide .p-kv-splide__slide-fraction {
    bottom: 32px;
    left: 32px;
  }
}

.p-kv-splide .splide__fraction {
  position: relative;
  font-weight: bold;
  text-align: center;

  --slide-fraction-size: 64px;
}
@media screen and (min-width: 768px) {
  .p-kv-splide .splide__fraction {
    --slide-fraction-size: 96px;
  }
}

.p-kv-splide .splide__fraction .circle {
  display: block;
  width: var(--slide-fraction-size);
  height: var(--slide-fraction-size);
  transform: rotate(-90deg);
}

.p-kv-splide .splide__fraction .circle svg {
  width: 100%;
  height: 100%;
  fill: none;
}

.p-kv-splide .splide__fraction .circle-01 {
  stroke: rgba(255, 255, 255, 0.3);
  stroke-width: 1px;
}

.p-kv-splide .splide__fraction .circle-02 {
  stroke: #ff6900;
  stroke-width: 2px;
  stroke-dasharray: 201.056px;
  stroke-dashoffset: 201.056px;
}

.p-kv-splide .splide__slide[class*="-active"] .splide__fraction .circle-02 {
  animation: p-kv-splide-circle linear both;
}

@keyframes p-kv-splide-circle {
  100% {
    stroke-dashoffset: 0;
  }
}

.p-kv-splide .splide__fraction .current {
  position: absolute;
  inset: 0;
  width: var(--slide-fraction-size);
  font-size: 24px;
  line-height: var(--slide-fraction-size);
  color: #ff6900;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .p-kv-splide .splide__fraction .current {
    font-size: 32px;
  }
}
`,r=`(function () {
  const DEFAULT_INTERVAL = 7000; // スライドのデフォルト表示時間（ミリ秒）
  const KV_SELECTOR = ".js-kv-splide .splide";

  function createFractionEl() {
    return \`
      <span class="circle">
        <svg viewBox="0 0 64 64">
          <circle class="circle-01" cx="50%" cy="50%" r="31"></circle>
          <circle class="circle-02" cx="50%" cy="50%" r="31"></circle>
        </svg>
      </span>
      <span class="current"></span>
    \`;
  }

  // data-splide-interval 属性があればその値、なければデフォルト
  function getSlideDelays(slides, defaultDelay) {
    return Array.from(
      slides,
      (el) => Number(el.dataset.splideInterval) || defaultDelay,
    );
  }

  function setupFractions(slides, fractions, slideDelays) {
    slides.forEach((slideEl, i) => {
      const fractionEl = fractions[i];
      if (!fractionEl) return;

      if (!fractionEl.querySelector(".circle")) {
        fractionEl.insertAdjacentHTML("beforeend", createFractionEl());
      }

      const img = slideEl.querySelector("img");
      const circle02 = fractionEl.querySelector(".circle-02");
      const current = fractionEl.querySelector(".current");

      img && (img.style.transitionDuration = \`\${slideDelays[i]}ms\`);
      circle02 && (circle02.style.animationDuration = \`\${slideDelays[i]}ms\`);
      current && (current.textContent = String(i + 1).padStart(2, "0"));
    });
  }

  function setSplideInterval(splide, interval) {
    const autoplay = splide.Components.Autoplay;
    if (autoplay?.setInterval) {
      autoplay.setInterval(interval);
    } else {
      splide.options.interval = interval;
    }
  }

  function initSplideKV() {
    const slides = document.querySelectorAll(".js-kv-splide .splide__slide");
    const fractions = document.querySelectorAll(
      ".js-kv-splide .splide__fraction",
    );
    const slideDelays = getSlideDelays(slides, DEFAULT_INTERVAL);

    setupFractions(slides, fractions, slideDelays);

    const splide = new Splide(KV_SELECTOR, {
      type: "fade", // フェード切り替え
      rewind: true, // 最後まで行ったら最初に戻る
      autoplay: true, // 自動再生ON
      speed: 1000, // フェード切り替えの速度
      interval: slideDelays[0], // 最初のスライドの表示時間
      arrows: false, // 矢印ナビゲーションなし
      pagination: false, // ページネーションなし
      pauseOnHover: false, // ホバー時に一時停止しない
      pauseOnFocus: false, // フォーカス時に一時停止しない
    });

    splide.on("move", (newIndex) => {
      setSplideInterval(splide, slideDelays[newIndex]);
    });

    splide.on("autoplay:play", () => {
      setSplideInterval(splide, slideDelays[splide.index]);
    });

    splide.mount();
  }

  initSplideKV();
})();
`,p={title:"Project/Kv"},e={render:()=>{const n=document.createElement("div");return n.innerHTML=`
      <style>${t}</style>
      ${s}
    `,requestAnimationFrame(()=>{new Function(d)()}),n},parameters:{sourceCode:[{name:"HTML",code:s},{name:"CSS",code:t},{name:"JavaScript",code:d}]}},i={render:()=>{const n=document.createElement("div");return n.innerHTML=`
      <style>
        ${a}
      </style>
      ${l}
    `,requestAnimationFrame(()=>{window.Splide=o,new Function(r)()}),n},parameters:{sourceCode:[{name:"HTML",code:l},{name:"CSS",code:a},{name:"JavaScript",code:r}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = \`
      <style>\${cssVideo}</style>
      \${video}
    \`;
    requestAnimationFrame(() => {
      new Function(jsVideo)();
    });
    return container;
  },
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: video
    }, {
      name: "CSS",
      code: cssVideo
    }, {
      name: "JavaScript",
      code: jsVideo
    }]
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = \`
      <style>
        \${cssSplideKv}
      </style>
      \${splideKv}
    \`;
    requestAnimationFrame(() => {
      window.Splide = Splide;
      new Function(jsSplidKv)();
    });
    return container;
  },
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: splideKv
    }, {
      name: "CSS",
      code: cssSplideKv
    }, {
      name: "JavaScript",
      code: jsSplidKv
    }]
  }
}`,...i.parameters?.docs?.source}}};const v=["Video","SplideKv"];export{i as SplideKv,e as Video,v as __namedExportsOrder,p as default};
