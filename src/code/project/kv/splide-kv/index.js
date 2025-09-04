(function () {
  const slideDisplayDuration = 7000; // デフォルトのスライド表示時間
  const kv01_selector = ".js-kv-splide .splide";

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
        img.style.transitionDuration = `${slideDelays[i]}ms`;
      }
      if (circle02) {
        circle02.style.animationDuration = `${slideDelays[i]}ms`;
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
