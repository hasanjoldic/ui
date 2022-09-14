import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeProvider } from "./ThemeProvider";
import { PaletteModeButton } from "./components";

export default {
  title: "ThemeProvider",
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>;

export const Template: ComponentStory<typeof ThemeProvider> = () => (
  <ThemeProvider>
    <Box width="100vw" height="100vh">
      <PaletteModeButton></PaletteModeButton>
      <Button>Test</Button>
    </Box>
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.parameters = {
  cookie: {
    paletteMode: "dark",
  },
};
