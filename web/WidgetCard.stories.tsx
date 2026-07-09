import type { Meta, StoryObj } from "@storybook/react";
import { WidgetCard } from "./index";

const meta = { title: "Base/WidgetCard", component: WidgetCard } satisfies Meta<typeof WidgetCard>;
export default meta;

export const Default: StoryObj<typeof WidgetCard> = {
  args: { title: "Example widget", children: "Any widget renders inside this card shell." },
};
