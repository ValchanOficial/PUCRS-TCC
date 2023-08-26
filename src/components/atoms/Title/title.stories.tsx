import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import Title from ".";

const meta: Meta<typeof Title> = {
    title: "Atoms/Title",
    component: Title,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Title H1",
        tag: "h1",
    }
};

export const H2: Story = {
    args: {
        children: "Title H2",
        tag: "h2",
    }
};

export const H3: Story = {
    args: {
        children: "Title H3",
        tag: "h3",
    }
};

export const H4: Story = {
    args: {
        children: "Title H4",
        tag: "h4",
    }
};

export const H5: Story = {
    args: {
        children: "Title H5",
        tag: "h5",
    }
};

export const H6: Story = {
    args: {
        children: "Title H6",
        tag: "h6",
    }
};