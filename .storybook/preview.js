/** @type { import('@storybook/html-vite').Preview } */
import "../src/code/tailwind.css";

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
