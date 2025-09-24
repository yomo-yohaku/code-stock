/* empty css                */const t=`<div class="c-text-flowing"></div>
`,o=`.c-text-flowing {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.c-text-flowing::after,
.c-text-flowing::before {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  color: transparent;
  white-space: nowrap;
  content: "CODE STOCK CODE STOCK CODE STOCK CODE STOCK CODE STOCK";
  opacity: 0.1;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #555;
}
@media screen and (min-width: 768px) {
  .c-text-flowing::after,
  .c-text-flowing::before {
    font-size: 128px;
  }
}

.c-text-flowing::before {
  animation: loop 100s linear -50s infinite;
}

.c-text-flowing::after {
  animation: loop 100s linear infinite;
}

@keyframes loop {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
`,i=`<div class="tw:grid tw:gap-[16px] tw:m-[16px]">
  <p><a href="#" class="c-text-link-line01">テキストリンク（下線）</a></p>

  <p><a href="#" class="c-text-link-line02">テキストリンク（下線2）</a></p>

  <p><a href="#" class="c-text-link-opacity">テキストリンク（半透明）</a></p>
</div>
`,a=`.c-text-link-line01 {
  position: relative;
  display: inline-block;
  color: #0c0a09;
}

.c-text-link-line01::before {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  content: "";
  background: #0c0a09;
}

@media (any-hover: hover) {
  .c-text-link-line01::before {
    transition: width 0.3s ease;
  }

  .c-text-link-line01:hover::before {
    width: 100%;
  }
}

.c-text-link-line02 {
  position: relative;
  display: inline-block;
  color: #0c0a09;
}

.c-text-link-line02::before {
  position: absolute;
  right: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  content: "";
  background: #0c0a09;
}

@media (any-hover: hover) {
  .c-text-link-line02::before {
    transition: width 0.3s ease;
  }

  .c-text-link-line02:hover::before {
    left: 0;
    inline-size: 100%;
  }
}

.c-text-link-opacity {
  display: inline-block;
  color: #0c0a09;
}

@media (any-hover: hover) {
  .c-text-link-opacity {
    transition: opacity 0.3s ease;
  }

  .c-text-link-opacity:hover {
    opacity: 0.7;
  }
}
`,r={title:"Component/Text"},n={render:()=>`
    <style>${o}</style>
    ${t}
  `,parameters:{sourceCode:[{name:"HTML",code:t},{name:"CSS",code:o}]}},e={render:()=>`
    <style>${a}</style>
    ${i}
  `,parameters:{sourceCode:[{name:"HTML",code:i},{name:"CSS",code:a}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssFlowing}</style>
    \${flowing}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: flowing
    }, {
      name: "CSS",
      code: cssFlowing
    }]
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssLink}</style>
    \${link}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: link
    }, {
      name: "CSS",
      code: cssLink
    }]
  }
}`,...e.parameters?.docs?.source}}};const l=["Flowing","Link"];export{n as Flowing,e as Link,l as __namedExportsOrder,r as default};
