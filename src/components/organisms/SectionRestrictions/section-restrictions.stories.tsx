import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import SectionRestrictions from ".";

const meta: Meta<typeof SectionRestrictions> = {
    title: "Organisms/SectionRestrictions",
    component: SectionRestrictions,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};