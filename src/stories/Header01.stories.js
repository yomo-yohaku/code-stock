import "destyle.css";

import header01 from "../code/layout/header/header01/index.html?raw";
import cssHeader01 from "../code/layout/header/header01/index.css?raw";
import jsHeader01 from "../code/layout/header/header01/index.js?raw";

export default {
  title: "Layout/Header",
};

export const Header01 = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <style>${cssHeader01}</style>
      ${header01}
    `;
    requestAnimationFrame(() => {
      new Function(jsHeader01)();
    });
    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: header01 },
      { name: "CSS", code: cssHeader01 },
      { name: "JavaScript", code: jsHeader01 },
    ],
  },
};
