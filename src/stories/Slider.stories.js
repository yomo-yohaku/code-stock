import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";
import cssCardEvent from "../code/component/card/event/index.css?raw";

import splideSlider from "../code/project/slider/splide-slider/index.html?raw";
import cssSplideSlider from "../code/project/slider/splide-slider/index.css?raw";
import jsSplideSlider from "../code/project/slider/splide-slider/index.js?raw";

export default {
  title: "Project/Slider",
};

export const SplideSlider = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <style>
        ${cssCardEvent}
        ${cssSplideSlider}
      </style>
      ${splideSlider}
    `;

    requestAnimationFrame(() => {
      window.Splide = Splide;
      new Function(jsSplideSlider)();
    });

    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: splideSlider },
      { name: "CSS", code: cssSplideSlider },
      { name: "JavaScript", code: jsSplideSlider },
    ],
  },
};
