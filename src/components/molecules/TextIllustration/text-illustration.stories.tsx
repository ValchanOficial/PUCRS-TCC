import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import { Fish } from '@svg';
import TextIllustration from ".";

const meta: Meta<typeof TextIllustration> = {
    title: "Molecules/TextIllustration",
    component: TextIllustration,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Title",
        src: Fish
    }
};