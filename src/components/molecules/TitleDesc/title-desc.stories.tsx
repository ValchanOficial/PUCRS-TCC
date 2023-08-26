import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import TitleDesc from ".";

const meta: Meta<typeof TitleDesc> = {
    title: "Molecules/TitleDesc",
    component: TitleDesc,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Title",
        description: "Description",
        theme: "light"
    }
};

export const Dark: Story = {
    args: {
        title: "Title",
        description: "Description",
        theme: "dark"
    }
};

export const DarkRight: Story = {
    args: {
        title: "Title",
        description: "Description",
        theme: "dark",
        position: "right"
    }
};

export const DarkCenter: Story = {
    args: {
        title: "Title",
        description: "Description",
        theme: "dark",
        position: "center"
    }
};