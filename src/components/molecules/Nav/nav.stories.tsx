import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import Nav from ".";

const meta: Meta<typeof Nav> = {
    title: "Molecules/Nav",
    component: Nav,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};