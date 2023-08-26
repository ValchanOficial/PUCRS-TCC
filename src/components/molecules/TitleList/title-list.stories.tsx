import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import TitleList from ".";

const meta: Meta<typeof TitleList> = {
    title: "Molecules/TitleList",
    component: TitleList,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Title",
        items: ["Item 1", "Item 2", "Item 3"],
    }
};

export const ListWithTitleAndDot: Story = {
    args: {
        title: "List Title",
        items: ["Item 1", "Item 2", "Item 3"],
        dot: "show",
    }
};

export const ListHorizontalWithTitle: Story = {
    args: {
        title: "List Title",
        items: ["Item 1", "Item 2", "Item 3"],
        align: "horizontal",
    }
};

export const ListYellowWithTitle: Story = {
    args: {
        title: "List Title",
        items: ["Item 1", "Item 2", "Item 3"],
        contentColor: "yellow",
    }
};