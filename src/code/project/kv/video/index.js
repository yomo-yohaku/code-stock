(function () {
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
