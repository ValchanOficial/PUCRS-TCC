import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import SectionAbout from ".";

const meta: Meta<typeof SectionAbout> = {
    title: "Organisms/SectionAbout",
    component: SectionAbout,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};