import "destyle.css";

import flowing from "../code/component/text/flowing/index.html?raw";
import cssFlowing from "../code/component/text/flowing/index.css?raw";

import link from "../code/component/text/link/index.html?raw";
import cssLink from "../code/component/text/link/index.css?raw";

export default {
  title: "Component/Text",
};

export const Flowing = {
  render: () => `
    <style>${cssFlowing}</style>
    ${flowing}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: flowing },
      { name: "CSS", code: cssFlowing },
    ],
  },
};

export const Link = {
  render: () => `
    <style>${cssLink}</style>
    ${link}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: link },
      { name: "CSS", code: cssLink },
    ],
  },
};
