import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import SectionSeller from ".";

const meta: Meta<typeof SectionSeller> = {
    title: "Organisms/SectionSeller",
    component: SectionSeller,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};