import "destyle.css";

import brightness from "../code/component/button/brightness/index.html?raw";
import cssBrightness from "../code/component/button/brightness/index.css?raw";

import inversion from "../code/component/button/inversion/index.html?raw";
import cssInversion from "../code/component/button/inversion/index.css?raw";

import gradation from "../code/component/button/gradation/index.html?raw";
import cssGradation from "../code/component/button/gradation/index.css?raw";

import ripples from "../code/component/button/ripples/index.html?raw";
import cssRipples from "../code/component/button/ripples/index.css?raw";

export default {
  title: "Component/Button",
};

export const Brightness = {
  render: () => `
    <style>${cssBrightness}</style>
    ${brightness}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: brightness },
      { name: "CSS", code: cssBrightness },
    ],
  },
};

export const Inversion = {
  render: () => `
    <style>${cssInversion}</style>
    ${inversion}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: inversion },
      { name: "CSS", code: cssInversion },
    ],
  },
};

export const Gradation = {
  render: () => `
    <style>${cssGradation}</style>
    ${gradation}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: gradation },
      { name: "CSS", code: cssGradation },
    ],
  },
};

export const Ripples = {
  render: () => `
    <style>${cssRipples}</style>
    ${ripples}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: ripples },
      { name: "CSS", code: cssRipples },
    ],
  },
};
