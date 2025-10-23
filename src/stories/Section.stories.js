import cssCardEvent from "../code/component/card/event/index.css?raw";

import rightOver from "../code/project/section/right-over/index.html?raw";
import cssRightOver from "../code/project/section/right-over/index.css?raw";

export default {
  title: "Project/Section",
};

export const RightOver = {
  render: () => `
    <style>
        ${cssCardEvent}
        ${cssRightOver}
      </style>
    ${rightOver}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: rightOver },
      { name: "CSS", code: cssRightOver },
    ],
  },
};
