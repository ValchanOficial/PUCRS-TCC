import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import List from ".";

const meta: Meta<typeof List> = {
    title: "Atoms/List",
    component: List,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: ["Item 1", "Item 2", "Item 3"],
    }
};

export const ListDot: Story = {
    args: {
        items: ["Item 1", "Item 2", "Item 3"],
        dot: "show",
    }
};


export const ListYellow: Story = {
    args: {
        items: ["Item 1", "Item 2", "Item 3"],
        contentColor: "yellow",
    }
};