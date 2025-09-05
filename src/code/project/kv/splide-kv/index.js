(function () {
  const DEFAULT_INTERVAL = 7000; // スライドのデフォルト表示時間（ミリ秒）
  const KV_SELECTOR = ".js-kv-splide .splide";

  function createFractionEl() {
    return `
      <span class="circle">
        <svg viewBox="0 0 64 64">
          <circle class="circle-01" cx="50%" cy="50%" r="31"></circle>
          <circle class="circle-02" cx="50%" cy="50%" r="31"></circle>
        </svg>
      </span>
      <span class="current"></span>
    `;
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

      img && (img.style.transitionDuration = `${slideDelays[i]}ms`);
      circle02 && (circle02.style.animationDuration = `${slideDelays[i]}ms`);
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
