import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import Illustration from ".";

const meta: Meta<typeof Illustration> = {
    title: "Atoms/Illustration",
    component: Illustration,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        theme: "light",
        size: "default"
    }
};

export const Dark: Story = {
    args: {
        theme: "dark",
        size: "default"
    }
};

export const Large: Story = {
    args: {
        theme: "light",
        size: "large"
    }
};


export const Medium: Story = {
    args: {
        theme: "light",
        size: "medium"
    }
};

export const Small: Story = {
    args: {
        theme: "light",
        size: "small"
    }
};