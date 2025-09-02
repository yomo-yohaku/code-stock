/* empty css                */const r=`<div class="tw:grid tw:gap-[16px] tw:m-[16px]">
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
`,o=`.c-button-brightness {
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
  display: grid;
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

.c-button-brightness[target=_blank] {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 8px;
  align-items: center;
}

.c-button-brightness[target=_blank]::before {
  content: "";
}

.c-button-brightness[target=_blank]::after {
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
`,s=`<div class="tw:grid tw:gap-[16px] tw:m-[16px]">
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

@media (any-hover: hover) {
  .c-button-inversion {
    transition: background-color 0.3s;
  }

  .c-button-inversion:hover {
    color: #fff;
    background-color: #ff6900;
  }
}

.c-button-inversion.--arrow {
  display: grid;
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
  .c-button-inversion.--arrow:hover::after {
    background-color: #fff;
  }
}
`,i=`<div class="tw:grid tw:gap-[16px] tw:m-[16px]">
  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-gradation">
      テキストテキストテキスト
    </a>
  </div>

  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-gradation --blue">
      テキストテキストテキストテキストテキストテキストテキスト
    </a>
  </div>
</div>
`,c=`.c-button-gradation {
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
    #FB2C36 0%,
    #FF6900 50%,
    #FB2C36 100%
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
    transition: background 0.3s;
  }

  .c-button-gradation:hover {
    background-position: 100% center;
  }
}

.c-button-gradation.--blue {
  background-image: linear-gradient(
    135deg,
    #155DFC 0%,
    #4F39F6 50%,
    #155DFC 100%
  );
}
`,g={title:"Component/Button"},n={render:()=>`
    <style>${o}</style>
    ${r}
  `,parameters:{sourceCode:[{name:"HTML",code:r},{name:"CSS",code:o}]}},e={render:()=>`
    <style>${a}</style>
    ${s}
  `,parameters:{sourceCode:[{name:"HTML",code:s},{name:"CSS",code:a}]}},t={render:()=>`
    <style>${c}</style>
    ${i}
  `,parameters:{sourceCode:[{name:"HTML",code:i},{name:"CSS",code:c}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const m=["Brightness","Inversion","Gradation"];export{n as Brightness,t as Gradation,e as Inversion,m as __namedExportsOrder,g as default};
