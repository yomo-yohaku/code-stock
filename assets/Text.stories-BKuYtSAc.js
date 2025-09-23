/* empty css                */const e=`<div class="c-text-flowing"></div>
`,t=`.c-text-flowing {
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
`,i={title:"Component/Text"},n={render:()=>`
    <style>${t}</style>
    ${e}
  `,parameters:{sourceCode:[{name:"HTML",code:e},{name:"CSS",code:t}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const r=["Flowing"];export{n as Flowing,r as __namedExportsOrder,i as default};
