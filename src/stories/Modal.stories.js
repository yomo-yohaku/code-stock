import cssButtonInversion from "../code/component/button/inversion/index.css?raw";

import modal01 from "../code/project/modal/modal01/index.html?raw";
import cssModal01 from "../code/project/modal/modal01/index.css?raw";
import jsModal01 from "../code/project/modal/modal01/index.js?raw";

export default {
  title: "Project/Modal",
};

export const Modal01 = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <style>${cssModal01}${cssButtonInversion}</style>
      ${modal01}
    `;
    requestAnimationFrame(() => {
      new Function(jsModal01)();
    });
    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: modal01 },
      { name: "CSS", code: cssModal01 },
      { name: "JavaScript", code: jsModal01 },
    ],
  },
};
