import "destyle.css";
import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";

import splideCard from "../code/project/slider/splide-card/index.html?raw";
import cssEvent from "../code/component/card/event/index.css?raw";
import cssSplideCard from "../code/project/slider/splide-card/index.css?raw";
import jsSplideCard from "../code/project/slider/splide-card/index.js?raw";

export default {
  title: "Project/Slider",
};

export const SplideCard = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <style>
        ${cssEvent}
        ${cssSplideCard}
      </style>
      ${splideCard}
    `;

    requestAnimationFrame(() => {
      window.Splide = Splide;
      new Function(jsSplideCard)();
    });

    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: splideCard },
      { name: "CSS", code: cssSplideCard },
      { name: "JavaScript", code: jsSplideCard },
    ],
  },
};
