import title from "../code/component/heading/title/index.html?raw";
import cssTitle from "../code/component/heading/title/index.css?raw";

export default {
  title: "Component/Heading",
};

export const Title = {
  render: () => `
    <style>${cssTitle}</style>
    ${title}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: title },
      { name: "CSS", code: cssTitle },
    ],
  },
};
