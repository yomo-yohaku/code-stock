import profile from "../code/project/table/profile/index.html?raw";
import cssProfile from "../code/project/table/profile/index.css?raw";

export default {
  title: "Project/Table",
};

export const Profile = {
  render: () => `
    <style>${cssProfile}</style>
    ${profile}
  `,
  parameters: {
    sourceCode: [
      { name: "HTML", code: profile },
      { name: "CSS", code: cssProfile },
    ],
  },
};
