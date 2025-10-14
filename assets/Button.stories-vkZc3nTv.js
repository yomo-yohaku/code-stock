/* empty css                */const o=`<div class="tw:flex tw:flex-col tw:gap-[16px] tw:m-[16px]">
  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-brightness">テキスト</a>
  </div>

  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-brightness --arrow">テキスト</a>
  </div>

  <div class="tw:max-w-[320px]">
    <a href="#" target="_blank" class="c-button-brightness">テキスト</a>
  </div>
</div>
`,s=`.c-button-brightness {
  display: grid;
  justify-content: center;
  padding: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #ff6900;
  border-radius: 9999px;
}

.c-button-brightness.--arrow {
  grid-template-columns: 1fr auto 1fr;
  column-gap: 8px;
  align-items: center;
}

.c-button-brightness.--arrow::before {
  content: "";
}

.c-button-brightness.--arrow::after {
  justify-self: end;
  width: 16px;
  height: 16px;
  content: "";
  background-color: #fff;
  mask-image: url("./assets/images/common/icon_arrow_right.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
}

.c-button-brightness[target="_blank"] {
  grid-template-columns: 1fr auto 1fr;
  column-gap: 8px;
  align-items: center;
}

.c-button-brightness[target="_blank"]::before {
  content: "";
}

.c-button-brightness[target="_blank"]::after {
  justify-self: end;
  width: 16px;
  height: 16px;
  content: "";
  background-color: #fff;
  mask-image: url("./assets/images/common/icon_open_in_new.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
}

@media (any-hover: hover) {
  .c-button-brightness {
    transition: filter 0.3s;
  }

  .c-button-brightness:hover {
    filter: brightness(1.25);
  }
}
`,i=`<div class="tw:flex tw:flex-col tw:gap-[16px] tw:m-[16px]">
  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-inversion">テキスト</a>
  </div>

  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-inversion --arrow">テキスト</a>
  </div>
</div>
`,a=`.c-button-inversion {
  display: grid;
  justify-content: center;
  padding: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #ff6900;
  background-color: #fff;
  border: 1px solid #ff6900;
  border-radius: 9999px;
}

.c-button-inversion.--arrow {
  grid-template-columns: 1fr auto 1fr;
  column-gap: 8px;
  align-items: center;
}

.c-button-inversion.--arrow::before {
  content: "";
}

.c-button-inversion.--arrow::after {
  justify-self: end;
  width: 16px;
  height: 16px;
  content: "";
  background-color: #ff6900;
  mask-image: url("./assets/images/common/icon_arrow_right.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
}

@media (any-hover: hover) {
  .c-button-inversion {
    transition: background-color 0.3s;
  }

  .c-button-inversion:hover {
    color: #fff;
    background-color: #ff6900;
  }

  .c-button-inversion.--arrow:hover::after {
    background-color: #fff;
  }
}
`,c=`<div class="tw:flex tw:flex-col tw:gap-[16px] tw:m-[16px]">
  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-gradation"> テキストテキストテキスト </a>
  </div>

  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-gradation --blue">
      テキストテキストテキストテキストテキストテキストテキスト
    </a>
  </div>
</div>
`,l=`.c-button-gradation {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 8px;
  align-items: center;
  padding: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-image: linear-gradient(
    135deg,
    #fb2c36 0%,
    #ff6900 50%,
    #fb2c36 100%
  );
  background-position: 0% center;
  background-size: 200% 100%;
  border-radius: 9999px;
}

.c-button-gradation::before {
  content: "";
}

.c-button-gradation::after {
  justify-self: end;
  width: 16px;
  height: 16px;
  content: "";
  background-color: #fff;
  mask-image: url("./assets/images/common/icon_arrow_right.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
}

@media (any-hover: hover) {
  .c-button-gradation {
    transition: background-position 0.3s;
  }

  .c-button-gradation:hover {
    background-position: 100% center;
  }
}

.c-button-gradation.--blue {
  background-image: linear-gradient(
    135deg,
    #155dfc 0%,
    #4f39f6 50%,
    #155dfc 100%
  );
}
`,p=`<div
  class="tw:flex tw:flex-col tw:gap-[32px] tw:p-[32px] tw:bg-slate-200 tw:h-screen"
>
  <div>
    <a href="#" class="c-button-ripples">ボタン</a>
  </div>

  <div>
    <div class="c-button-ripples-circle">
      <a href="#" class="c-button-ripples-circle__link">
        <span class="c-button-ripples-circle__text">丸ボタン</span>
      </a>
    </div>
  </div>
</div>
`,d=`.c-button-ripples {
  --button-ripples-w: 240px;
  --button-ripples-pulse: calc(var(--button-ripples-w) + 24px);

  position: relative;
  display: grid;
  justify-content: center;
  width: var(--button-ripples-w);
  padding: 24px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #ff6900;
  border-radius: 9999px;
}

.c-button-ripples::before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  width: 0;
  height: 0;
  content: "";
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: 1s;
}

@media (any-hover: hover) {
  .c-button-ripples:hover::before {
    width: calc(var(--button-ripples-w) + 40px);
    aspect-ratio: 1;
    opacity: 0.4;
    transition: all 0.5s ease-out;
  }

  .c-button-ripples:hover {
    transition: all 0.5s ease-out;
  }

  .c-button-ripples:hover::after {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -2;
    width: 0;
    height: 0;
    content: "";
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: button-ripples-pulse 2s infinite;
  }
}

@keyframes button-ripples-pulse {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }

  100% {
    width: var(--button-ripples-pulse);
    height: var(--button-ripples-pulse);
    opacity: 0;
  }
}

.c-button-ripples-circle {
  --button-ripples-circle-w: 160px;
  --button-ripples-circle-pulse: calc(var(--button-ripples-circle-w) + 24px);

  position: relative;
  display: inline-flex;
}

.c-button-ripples-circle::before {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: var(--button-ripples-circle-pulse);
  aspect-ratio: 1;
  content: "";
  border: 2px solid #fff;
  border-radius: 50%;
  translate: -50% -50%;
}

.c-button-ripples-circle__link {
  position: relative;
  display: inline-block;
  width: var(--button-ripples-circle-w);
  aspect-ratio: 1;
  overflow: hidden;
  font-weight: 700;
  color: #fff;
  background-image: linear-gradient(
    135deg,
    #155dfc 0%,
    #4f39f6 50%,
    #155dfc 100%
  );
  border-radius: 50%;
  clip-path: circle(50% at 50% 50%);
}

.c-button-ripples-circle__link::before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  width: 0;
  height: 0;
  content: "";
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: 1s;
}

.c-button-ripples-circle__text {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  transform: translate(-50%, -50%);
}

@media (any-hover: hover) {
  .c-button-ripples-circle__link:hover::before {
    width: calc(var(--button-ripples-circle-w) + 40px);
    aspect-ratio: 1;
    opacity: 0.4;
    transition: all 0.5s ease-out;
  }

  .c-button-ripples-circle__link:hover {
    transition: all 0.5s ease-out;
  }

  .c-button-ripples-circle__link:hover::after {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -2;
    width: 0;
    height: 0;
    content: "";
    background-color: rgb(29, 29, 29);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: button-ripples-circle-pulse 2s infinite;
  }
}

@keyframes button-ripples-circle-pulse {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }

  100% {
    width: var(--button-ripples-circle-pulse);
    height: var(--button-ripples-circle-pulse);
    opacity: 0;
  }
}
`,f={title:"Component/Button"},n={render:()=>`
    <style>${s}</style>
    ${o}
  `,parameters:{sourceCode:[{name:"HTML",code:o},{name:"CSS",code:s}]}},e={render:()=>`
    <style>${a}</style>
    ${i}
  `,parameters:{sourceCode:[{name:"HTML",code:i},{name:"CSS",code:a}]}},t={render:()=>`
    <style>${l}</style>
    ${c}
  `,parameters:{sourceCode:[{name:"HTML",code:c},{name:"CSS",code:l}]}},r={render:()=>`
    <style>${d}</style>
    ${p}
  `,parameters:{sourceCode:[{name:"HTML",code:p},{name:"CSS",code:d}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssBrightness}</style>
    \${brightness}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: brightness
    }, {
      name: "CSS",
      code: cssBrightness
    }]
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssInversion}</style>
    \${inversion}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: inversion
    }, {
      name: "CSS",
      code: cssInversion
    }]
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssGradation}</style>
    \${gradation}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: gradation
    }, {
      name: "CSS",
      code: cssGradation
    }]
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssRipples}</style>
    \${ripples}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: ripples
    }, {
      name: "CSS",
      code: cssRipples
    }]
  }
}`,...r.parameters?.docs?.source}}};const b=["Brightness","Inversion","Gradation","Ripples"];export{n as Brightness,t as Gradation,e as Inversion,r as Ripples,b as __namedExportsOrder,f as default};
