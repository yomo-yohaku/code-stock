import pattern from "../code/component/background/pattern/index.html?raw";
import cssPattern from "../code/component/background/pattern/index.css?raw";

import texture from "../code/component/background/texture/index.html?raw";
import cssTexture from "../code/component/background/texture/index.css?raw";

export default {
  title: "Component/Background",
};

export const Pattern = {
  render: () => `
    <style>${cssPattern}</style>
    ${pattern}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: pattern },
      { name: "CSS", code: cssPattern },
    ],
  },
};

export const Texture = {
  render: () => `
    <style>${cssTexture}</style>
    ${texture}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: texture },
      { name: "CSS", code: cssTexture },
    ],
  },
};
