import { addons } from "storybook/manager-api";
import codeStockTheme from "./CodeStockTheme";

addons.setConfig({
  title: "Code Stock",
  theme: codeStockTheme,
});
