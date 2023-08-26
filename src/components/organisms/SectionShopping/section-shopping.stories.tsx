import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import SectionShopping from ".";

const meta: Meta<typeof SectionShopping> = {
    title: "Organisms/SectionShopping",
    component: SectionShopping,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};