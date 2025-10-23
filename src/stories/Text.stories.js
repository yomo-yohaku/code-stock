import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import flowing from "../code/component/text/flowing/index.html?raw";
import cssFlowing from "../code/component/text/flowing/index.css?raw";
import jsFlowing from "../code/component/text/flowing/index.js?raw";

import link from "../code/component/text/link/index.html?raw";
import cssLink from "../code/component/text/link/index.css?raw";

import deco from "../code/component/text/deco/index.html?raw";
import cssDeco from "../code/component/text/deco/index.css?raw";

export default {
  title: "Component/Text",
};

export const Flowing = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <style>${cssFlowing}</style>
      ${flowing}
    `;

    requestAnimationFrame(() => {
      window.Splide = Splide;
      window.splide = {
        Extensions: {
          AutoScroll: AutoScroll,
        },
      };

      new Function(jsFlowing)();
    });

    return container;
  },
  parameters: {
    sourceCode: [
      { name: "HTML", code: flowing },
      { name: "CSS", code: cssFlowing },
      { name: "JavaScript", code: jsFlowing },
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

export const Deco = {
  render: () => `
    <style>${cssDeco}</style>
    ${deco}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: deco },
      { name: "CSS", code: cssDeco },
    ],
  },
};
