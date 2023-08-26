import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import SectionFooter from ".";

const meta: Meta<typeof SectionFooter> = {
    title: "Organisms/SectionFooter",
    component: SectionFooter,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};