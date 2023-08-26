import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import Description from ".";

const meta: Meta<typeof Description> = {
    title: "Atoms/Description",
    component: Description,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Description",
        theme: "light"
    }
};

export const Dark: Story = {
    args: {
        children: "Description",
        theme: "dark"
    }
};

export const Gray: Story = {
    args: {
        children: "Description",
        theme: "gray",
    }
};

export const GrayMedium: Story = {
    args: {
        children: "Description",
        theme: "gray",
        size: "medium"
    }
};