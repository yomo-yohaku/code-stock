/* empty css                */const o=`<div class="tw:max-w-[320px] tw:p-[16px]">
  <a href="#" class="c-button-brightness">テキスト</a>
</div>
`,t=`.c-button-brightness {
  display: grid;
  justify-content: center;
  padding: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #ff6900;
  border-radius: calc(infinity * 1px);
}

@media (any-hover: hover) {
  .c-button-brightness {
    transition: filter 0.3s;
  }

  .c-button-brightness:hover {
    filter: brightness(1.25);
  }
}
`,a=`<div class="tw:max-w-[320px] tw:p-[16px]">
  <a href="#" class="c-button-inversion">テキスト</a>
</div>

<div class="tw:max-w-[320px] tw:p-[16px]">
  <a href="#" class="c-button-inversion --arrow">テキスト</a>
</div>
`,s=`.c-button-inversion {
  display: grid;
  justify-content: center;
  padding: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #ff6900;
  background-color: #fff;
  border: 1px solid #ff6900;
  border-radius: calc(infinity * 1px);
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
  width: 24px;
  height: 24px;
  content: "";
  background-color: #ff6900;
  mask-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M14.1 12L9.5 7.4L10.9 6L16.9 12L10.9 18L9.5 16.6L14.1 12Z'/></svg>");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
}

@media (any-hover: hover) {
  .c-button-inversion.--arrow:hover::after {
    background-color: #fff;
  }
}
`,i=`<div class="tw:grid tw:gap-[16px] tw:p-[16px]">
  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-gradation --blue">
      テキストテキストテキスト
    </a>
  </div>

  <div class="tw:max-w-[320px]">
    <a href="#" class="c-button-gradation --pink">
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
    #afe3e8 0%,
    #67e1e5 12.5%,
    #10d7b2 50%,
    #67e1e5 70%,
    #4dcbda 85%,
    #10d7b2 100%
  );
  background-position: 0% center;
  background-size: 200% 100%;
  border-radius: calc(infinity * 1px);
}

.c-button-gradation::before {
  content: "";
}

.c-button-gradation::after {
  justify-self: end;
  width: 8px;
  height: 8px;
  content: "";
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
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
    #afe3e8 0%,
    #67e1e5 12.5%,
    #10d7b2 50%,
    #67e1e5 70%,
    #4dcbda 85%,
    #10d7b2 100%
  );
}

.c-button-gradation.--pink {
  background-image: linear-gradient(
    135deg,
    #f78ca0 0%,
    #f9748f 12.5%,
    #fd868c 30%,
    #fe9a8b 50%,
    #fd868c 70%,
    #f9748f 85%,
    #f78ca0 100%
  );
}
`,g={title:"Component/Button"},n={render:()=>`
    <style>${t}</style>
    ${o}
  `,parameters:{sourceCode:[{name:"HTML",code:o},{name:"CSS",code:t}]}},e={render:()=>`
    <style>${s}</style>
    ${a}
  `,parameters:{sourceCode:[{name:"HTML",code:a},{name:"CSS",code:s}]}},r={render:()=>`
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const p=["Brightness","Inversion","Gradation"];export{n as Brightness,r as Gradation,e as Inversion,p as __namedExportsOrder,g as default};
