import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import Anchor from ".";

const meta: Meta<typeof Anchor> = {
    title: "Atoms/Anchor",
    component: Anchor,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Anchor",
        href: "https://www.google.com",
        target: "_blank",
    }
};