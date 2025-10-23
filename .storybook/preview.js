/** @type { import('@storybook/html-vite').Preview } */
import "destyle.css";
import "../src/code/tailwind.css";
import "./preview.css";

const preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
  },
};
export default preview;
