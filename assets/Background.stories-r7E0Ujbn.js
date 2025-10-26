const r=`<div class="tw:flex tw:flex-col tw:gap-[24px] tw:p-[16px]">
  <div class="c-bg-pattern-dot01 tw:w-full tw:h-[200px]">
    <p>水玉模様・ドット柄の背景（.c-bg-pattern-dot01）</p>
  </div>

  <div class="c-bg-pattern-dot01-02 tw:w-full tw:h-[200px]">
    <p>水玉模様・ドット柄の背景（.c-bg-pattern-dot01-02）</p>
  </div>

  <div class="c-bg-pattern-dot02 tw:w-full tw:h-[200px]">
    <p>水玉模様・ドット柄の背景（.c-bg-pattern-dot02）</p>
  </div>

  <div class="c-bg-pattern-dot02-02 tw:w-full tw:h-[200px]">
    <p>水玉模様・ドット柄の背景（.c-bg-pattern-dot02-02）</p>
  </div>
</div>
`,t=`.c-bg-pattern-dot01 {
  --dot-diameter: 2px; /* 水玉模様・ドット柄の直径 */
  --dot-color: #46edd5; /* 水玉模様・ドット柄の色 */
  --bg-color: #fff; /* 背景色 */
  --spacing-x: 8px; /* X軸のドット中心間隔 */
  --spacing-y: 8px; /* Y軸のドット中心間隔 */

  /* 計算用 */
  --dot-radius: calc(var(--dot-diameter) / 2);
  --size-x: calc(2 * var(--spacing-x));
  --size-y: calc(2 * var(--spacing-y));
  --offset-x: var(--spacing-x);
  --offset-y: var(--spacing-y);

  background-color: var(--bg-color);
  background-image:
    radial-gradient(
      circle,
      var(--dot-color) var(--dot-radius),
      transparent var(--dot-radius)
    ),
    radial-gradient(
      circle,
      var(--dot-color) var(--dot-radius),
      transparent var(--dot-radius)
    );
  background-position:
    0 0,
    var(--offset-x) var(--offset-y);
  background-size: var(--size-x) var(--size-y);
}

.c-bg-pattern-dot01-02 {
  --dot-diameter: 8px; /* ドットの直径 */
  --dot-color1: #fb2c36; /* ドット色1 */
  --dot-color2: #ff8904; /* ドット色2 */
  --bg-color: #fff; /* 背景色 */
  --spacing-x: 24px; /* 横方向のドット間隔 */
  --spacing-y: 24px; /* 縦方向のドット間隔 */

  /* 計算用 */
  --dot-radius: calc(var(--dot-diameter) / 2);
  --size-x: calc(2 * var(--spacing-x));
  --size-y: calc(2 * var(--spacing-y));

  background-color: var(--bg-color);
  background-image:
    radial-gradient(
      circle,
      var(--dot-color1) var(--dot-radius),
      transparent var(--dot-radius)
    ),
    radial-gradient(
      circle,
      var(--dot-color2) var(--dot-radius),
      transparent var(--dot-radius)
    ),
    radial-gradient(
      circle,
      var(--dot-color2) var(--dot-radius),
      transparent var(--dot-radius)
    ),
    radial-gradient(
      circle,
      var(--dot-color1) var(--dot-radius),
      transparent var(--dot-radius)
    );
  background-position:
    0 0,
    var(--spacing-x) 0,
    calc(var(--spacing-x) / 2) var(--spacing-y),
    calc(var(--spacing-x) + var(--spacing-x) / 2) var(--spacing-y);
  background-size: var(--size-x) var(--size-y);
}

.c-bg-pattern-dot02 {
  --dot-diameter: 2px; /* 水玉模様・ドット柄の直径 */
  --dot-color: #e7e5e4; /* 水玉模様・ドット柄の色 */
  --bg-color: #fff7ed; /* 背景色 */
  --spacing-x: 4px; /* X軸のドット中心間隔 */
  --spacing-y: 4px; /* Y軸のドット中心間隔 */

  /* 計算用 */
  --dot-radius: calc(var(--dot-diameter) / 2);
  --size-x: calc(2 * var(--spacing-x));
  --size-y: calc(2 * var(--spacing-y));
  --offset-x: 0;
  --offset-y: 0;

  background-color: var(--bg-color);
  background-image: radial-gradient(
    circle,
    var(--dot-color) var(--dot-radius),
    transparent var(--dot-radius)
  );
  background-position: var(--offset-x) var(--offset-y);
  background-size: var(--size-x) var(--size-y);
}

.c-bg-pattern-dot02-02 {
  --dot-diameter: 4px; /* 水玉模様・ドット柄の直径 */
  --dot-color1: #737373; /* ドット色1 */
  --dot-color2: #fff; /* ドット色2 */
  --bg-color: #d4d4d4; /* 背景色 */
  --spacing-x: 20px; /* X軸のドット中心間隔 */
  --spacing-y: 20px; /* Y軸のドット中心間隔 */

  /* 計算用 */
  --dot-radius: calc(var(--dot-diameter) / 2);
  --size-x: calc(2 * var(--spacing-x));
  --size-y: calc(2 * var(--spacing-y));

  background-color: var(--bg-color);
  background-image:
    radial-gradient(
      circle,
      var(--dot-color1) var(--dot-radius),
      transparent var(--dot-radius)
    ),
    radial-gradient(
      circle,
      var(--dot-color2) var(--dot-radius),
      transparent var(--dot-radius)
    ),
    radial-gradient(
      circle,
      var(--dot-color2) var(--dot-radius),
      transparent var(--dot-radius)
    ),
    radial-gradient(
      circle,
      var(--dot-color1) var(--dot-radius),
      transparent var(--dot-radius)
    );
  background-position:
    0 0,
    var(--spacing-x) 0,
    0 var(--spacing-y),
    var(--spacing-x) var(--spacing-y);
  background-size: var(--size-x) var(--size-y);
}
`,e=`<div class="tw:flex tw:flex-col tw:gap-[24px] tw:p-[16px]">
  <div class="c-bg-texture-noise tw:w-full tw:h-[200px]">
    <p>ノイズのテクスチャの背景（.c-bg-texture-noise）</p>
  </div>
</div>
`,o=`.c-bg-texture-noise {
  background-color: #ff8904;
  background-image: url("./assets/images/background/bg_noise.png");
  background-repeat: repeat;
  background-size:
    100px 100px,
    auto;
  background-blend-mode: color-dodge, normal;
}
`,c={title:"Component/Background"},n={render:()=>`
    <style>${t}</style>
    ${r}
  `,parameters:{sourceCode:[{name:"HTML",code:r},{name:"CSS",code:t}]}},a={render:()=>`
    <style>${o}</style>
    ${e}
  `,parameters:{sourceCode:[{name:"HTML",code:e},{name:"CSS",code:o}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssPattern}</style>
    \${pattern}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: pattern
    }, {
      name: "CSS",
      code: cssPattern
    }]
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssTexture}</style>
    \${texture}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: texture
    }, {
      name: "CSS",
      code: cssTexture
    }]
  }
}`,...a.parameters?.docs?.source}}};const d=["Pattern","Texture"];export{n as Pattern,a as Texture,d as __namedExportsOrder,c as default};
