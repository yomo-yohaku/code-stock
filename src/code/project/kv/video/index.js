// js-kv-movieというクラス名のvideo要素を取得
const video = document.querySelector(".js-kv-movie");
// 現在のデバイスタイプ（spまたはpc）を保持する変数
let currentType = null;

// 動画ソースをデバイス幅に応じて切り替える関数
function setVideoSource() {
  // 画面幅が768px以下ならSPと判定
  const isSp = window.innerWidth <= 768;
  // デバイスタイプを判定
  const type = isSp ? "sp" : "pc";
  // デバイスタイプに応じた動画パスを設定
  const newSrc = isSp
    ? "/assets/video/kv_movie_sp.mp4"
    : "/assets/video/kv_movie_pc.mp4";
  // デバイスタイプが変わった場合のみ動画ソースを切り替える
  if (currentType !== type) {
    video.src = newSrc;
    currentType = type;
  }
}

// 初回ロード時に動画ソースを設定
setVideoSource();

// リサイズ時に動画ソースを切り替える（リサイズイベントの連続発火を防ぐためタイマーで制御）
let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer); // 既存のタイマーをクリア
  resizeTimer = setTimeout(setVideoSource, 200); // 200ms後にsetVideoSourceを実行
});
