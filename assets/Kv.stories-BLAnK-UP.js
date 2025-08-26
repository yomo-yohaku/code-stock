/* empty css                */const t=`<div class="tw:py-[16px] tw:md:py-[40px]">
  <p
    class="tw:font-bold tw:text-[16px] tw:md:text-[24px] tw:mb-[16px] tw:md:mb-[24px] tw:text-center"
  >
    PCとスマホで動画を出し分ける
  </p>

  <div class="p-kv">
    <div class="p-kv__hero">
      <video class="js-kv-movie" muted playsinline loop autoplay></video>
    </div>
  </div>
</div>
`,o=`.p-kv {
  position: relative;
}

.p-kv__hero {
  padding-inline: 16px 0;
}
@media screen and (min-width: 768px) {
  .p-kv__hero {
    padding-inline: 24px;
  }
}

.p-kv__hero video {
  width: 100%;
  aspect-ratio: 750 / 1100;
  object-fit: cover;
  border-radius: 24px 0 0 24px;
}
@media screen and (min-width: 768px) {
  .p-kv__hero video {
    aspect-ratio: 1600 / 900;
    border-radius: 40px;
  }
}
`,i=`// js-kv-movieというクラス名のvideo要素を取得
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
    ? "./assets/video/kv_movie_sp.mp4"
    : "./assets/video/kv_movie_pc.mp4";
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
`,s={title:"Project/Kv"},n={render:()=>{const e=document.createElement("div");return e.innerHTML=`
      <style>${o}</style>
      ${t}
    `,requestAnimationFrame(()=>{new Function(i)()}),e},parameters:{sourceCode:[{name:"HTML",code:t},{name:"CSS",code:o},{name:"JavaScript",code:i}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = \`
      <style>\${cssKv}</style>
      \${video}
    \`;
    requestAnimationFrame(() => {
      new Function(jsKv)();
    });
    return container;
  },
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: video
    }, {
      name: "CSS",
      code: cssKv
    }, {
      name: "JavaScript",
      code: jsKv
    }]
  }
}`,...n.parameters?.docs?.source}}};const c=["Video"];export{n as Video,c as __namedExportsOrder,s as default};
