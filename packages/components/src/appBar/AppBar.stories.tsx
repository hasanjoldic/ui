import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppBar } from "./AppBar";

export default {
  title: "AppBar",
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pages: ["Notes", "Resume", "Javni konkursi", "Music"].map((o) => ({
    path: o,
    label: o,
  })),
  onNavigate: () => {},
};
