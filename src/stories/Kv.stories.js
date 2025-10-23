import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";

import video from "../code/project/kv/video/index.html?raw";
import cssVideo from "../code/project/kv/video/index.css?raw";
import jsVideo from "../code/project/kv/video/index.js?raw";

import splideKv from "../code/project/kv/splide-kv/index.html?raw";
import cssSplideKv from "../code/project/kv/splide-kv/index.css?raw";
import jsSplidKv from "../code/project/kv/splide-kv/index.js?raw";

export default {
  title: "Project/Kv",
};

export const Video = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <style>${cssVideo}</style>
      ${video}
    `;
    requestAnimationFrame(() => {
      new Function(jsVideo)();
    });
    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: video },
      { name: "CSS", code: cssVideo },
      { name: "JavaScript", code: jsVideo },
    ],
  },
};

export const SplideKv = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <style>
        ${cssSplideKv}
      </style>
      ${splideKv}
    `;

    requestAnimationFrame(() => {
      window.Splide = Splide;
      new Function(jsSplidKv)();
    });

    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: splideKv },
      { name: "CSS", code: cssSplideKv },
      { name: "JavaScript", code: jsSplidKv },
    ],
  },
};
