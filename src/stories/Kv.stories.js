import "destyle.css";

import video from "../code/project/kv/video/index.html?raw";
import cssKv from "../code/project/kv/video/index.css?raw";
import jsKv from "../code/project/kv/video/index.js?raw";

export default {
  title: "Project/Kv",
};

export const Video = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <style>${cssKv}</style>
      ${video}
    `;
    requestAnimationFrame(() => {
      new Function(jsKv)();
    });
    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: video },
      { name: "CSS", code: cssKv },
      { name: "JavaScript", code: jsKv },
    ],
  },
};
