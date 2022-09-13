import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PaletteModeButton } from "./PaletteModeButton";

export default {
  title: "PaletteModeButton",
  component: PaletteModeButton,
} as ComponentMeta<typeof PaletteModeButton>;

export const Primary: ComponentStory<typeof PaletteModeButton> = () => (
  <PaletteModeButton />
);
