/* empty css                */import{S as a}from"./splide.esm-nHf3Xtr5.js";const s=`<div class="tw:py-[16px] tw:md:py-[40px]">
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
            <div class="p-kv-splide__slide-image">
              <img
                src="./assets/images/kv/kv_01.jpg"
                width="3840"
                height="2563"
                alt=""
                decoding="async"
              />
            </div>
            <div class="p-kv-splide__slide-fraction">
              <div class="splide__fraction"></div>
            </div>
          </div>

          <div class="p-kv-splide__slide splide__slide">
            <div class="p-kv-splide__slide-image">
              <img
                src="./assets/images/kv/kv_02.jpg"
                width="3840"
                height="2563"
                alt=""
                decoding="async"
              />
            </div>
            <div class="p-kv-splide__slide-fraction">
              <div class="splide__fraction"></div>
            </div>
          </div>

          <div class="p-kv-splide__slide splide__slide">
            <div class="p-kv-splide__slide-image">
              <img
                src="./assets/images/kv/kv_03.jpg"
                width="3840"
                height="2563"
                alt=""
                decoding="async"
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
`,r=`.p-kv-splide .p-kv-splide__slide-image img {
  transform: scale(1.05);
  transition: 7s ease-out;
}

.p-kv-splide .splide__slide[class*="-active"] .p-kv-splide__slide-image img {
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
`,o=`(function () {
  const slideDisplayDuration = 7000; // デフォルトのスライド表示時間
  const kv01_selector = ".js-kv-splide .splide";

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

  // 各スライドに設定された data-splide-interval 属性から表示時間を取得
  // もし属性がなければデフォルトのスライド表示時間を使う
  function getSlideDelays(slides, defaultDelay) {
    return Array.prototype.map.call(slides, (el) => {
      const attr = el.getAttribute("data-splide-interval");
      return attr !== null ? Number(attr) : defaultDelay;
    });
  }

  function setupFractions(slides, fractions, slideDelays) {
    for (let i = 0; i < slides.length; i++) {
      const slideEl = slides[i];
      const fractionEl = fractions[i];
      if (!fractionEl) continue;

      if (!fractionEl.querySelector(".circle")) {
        fractionEl.insertAdjacentHTML("beforeend", createFractionEl());
      }

      const img = slideEl.querySelector("img");
      const circle02 = fractionEl.querySelector(".circle-02");
      const current = fractionEl.querySelector(".current");

      if (img) {
        img.style.transitionDuration = \`\${slideDelays[i]}ms\`;
      }
      if (circle02) {
        circle02.style.animationDuration = \`\${slideDelays[i]}ms\`;
      }
      if (current) {
        current.textContent = String(i + 1).padStart(2, "0");
      }
    }
  }

  /**
   * Splideのintervalを公式APIで変更する
   * @param {Splide} splide
   * @param {number} interval
   */
  function setSplideInterval(splide, interval) {
    // Splide 4.x 以降は setInterval メソッドがある
    if (typeof splide.Components.Autoplay?.setInterval === "function") {
      splide.Components.Autoplay.setInterval(interval);
    } else if (splide.options) {
      // 非推奨: 直接optionsを書き換える
      splide.options.interval = interval;
    }
  }

  /**
   * プログレスバー更新関数
   * @param {number} index
   */
  function updateProgress(index) {
    // 必要に応じてここでプログレスバーの更新処理を実装
    // 例: 各スライドの.circle-02のアニメーションをリセットするなど
    // 今回はダミー実装
    // console.log("Progress update:", index);
  }

  function initSplideKV() {
    const slides = document.querySelectorAll(".js-kv-splide .splide__slide");
    const fractions = document.querySelectorAll(
      ".js-kv-splide .splide__fraction",
    );
    const slideDelays = getSlideDelays(slides, slideDisplayDuration);

    setupFractions(slides, fractions, slideDelays);

    const kv01_options = {
      type: "fade",
      rewind: true,
      autoplay: true,
      speed: 1000,
      interval: slideDelays[0] || slideDisplayDuration,
      arrows: false,
      pagination: false,
      pauseOnHover: false,
      pauseOnFocus: false,
    };
    const kv01 = new Splide(kv01_selector, kv01_options);

    kv01.on("move", (newIndex) => {
      setSplideInterval(kv01, slideDelays[newIndex] || slideDisplayDuration);
      updateProgress(newIndex);
    });

    kv01.on("autoplay:play", () => {
      const index = kv01.index;
      setSplideInterval(kv01, slideDelays[index] || slideDisplayDuration);
    });

    kv01.mount();

    updateProgress(0);
  }

  initSplideKV();
})();
`,v={title:"Project/Kv"},e={render:()=>{const n=document.createElement("div");return n.innerHTML=`
      <style>${t}</style>
      ${s}
    `,requestAnimationFrame(()=>{new Function(d)()}),n},parameters:{sourceCode:[{name:"HTML",code:s},{name:"CSS",code:t},{name:"JavaScript",code:d}]}},i={render:()=>{const n=document.createElement("div");return n.innerHTML=`
      <style>
        ${r}
      </style>
      ${l}
    `,requestAnimationFrame(()=>{window.Splide=a,new Function(o)()}),n},parameters:{sourceCode:[{name:"HTML",code:l},{name:"CSS",code:r},{name:"JavaScript",code:o}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const m=["Video","SplideKv"];export{i as SplideKv,e as Video,m as __namedExportsOrder,v as default};
