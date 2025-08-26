/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@jls-digital/storybook-addon-code"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};
export default config;
