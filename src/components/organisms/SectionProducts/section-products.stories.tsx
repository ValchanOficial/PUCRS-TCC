import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import SectionProducts from ".";

const meta: Meta<typeof SectionProducts> = {
    title: "Organisms/SectionProducts",
    component: SectionProducts,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};