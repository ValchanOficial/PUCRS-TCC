import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import SectionHeader from ".";

const meta: Meta<typeof SectionHeader> = {
    title: "Organisms/SectionHeader",
    component: SectionHeader,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};