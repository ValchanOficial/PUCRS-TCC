import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
    title: "Pages/Home",
    component: Page,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};