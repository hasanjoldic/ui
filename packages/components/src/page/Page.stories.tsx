import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from "./Page";
import { ThemeProvider } from "@hasan.joldic/theme";

export default {
  title: "Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <ThemeProvider>
    <Page {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  pages: ["Notes", "Resume", "Javni konkursi", "Music"].map((o) => ({
    path: o,
    label: o,
  })),
  onNavigate: () => {},
};
