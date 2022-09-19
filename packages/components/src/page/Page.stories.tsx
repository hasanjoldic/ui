import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeProvider } from "@hasanjoldic/theme";

import { Page } from "./Page";

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
