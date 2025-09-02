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
`,i=`// デバイス幅に応じて動画ソースを切り替える
(function () {
  const video = document.querySelector(".js-kv-movie");
  let currentType = null;
  let resizeTimer;

  function setVideoSource() {
    const isSp = window.innerWidth <= 768;
    const type = isSp ? "sp" : "pc";
    const newSrc = isSp
      ? "./assets/video/kv_movie_sp.mp4"
      : "./assets/video/kv_movie_pc.mp4";
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
