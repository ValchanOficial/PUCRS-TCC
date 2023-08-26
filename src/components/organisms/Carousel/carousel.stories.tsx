import '@/app/globals.css';
import { productsMock } from '@/utils';
import { Meta, StoryObj } from "@storybook/react";
import Carousel from ".";

const meta: Meta<typeof Carousel> = {
    title: "Organisms/Carousel",
    component: Carousel,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        list: productsMock,
    }
};

export const ReverseDirectionTrue: Story = {
    args: {
        list: productsMock,
        autoplay: {
            reverseDirection: true,
        }
    }
};

export const ReverseDirectionFalse: Story = {
    args: {
        list: productsMock,
        autoplay: {
            reverseDirection: false,
        }
    }
};