import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import Image from 'next/image';
import * as SVG from ".";

const meta: Meta<typeof SVG> = {
    title: "Atoms/SVG",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Image
            src={SVG.Account}
            quality={100}
            alt='Account'
        />
    ),
};

export const Eggs: Story = {
    render: () => (
        <Image
            src={SVG.Eggs}
            quality={100}
            alt='Eggs'
        />
    ),
};

export const Fish: Story = {
    render: () => (
        <Image
            src={SVG.Fish}
            quality={100}
            alt='Fish'
        />
    ),
};

export const Gluten: Story = {
    render: () => (
        <Image
            src={SVG.Gluten}
            quality={100}
            alt='Gluten'
        />
    ),
};

export const Milk: Story = {
    render: () => (
        <Image
            src={SVG.Milk}
            quality={100}
            alt='Milk'
        />
    ),
};

export const Order: Story = {
    render: () => (
        <Image
            src={SVG.Order}
            quality={100}
            alt='Order'
        />
    ),
};

export const Receive: Story = {
    render: () => (
        <Image
            src={SVG.Receive}
            quality={100}
            alt='Receive'
        />
    ),
};

export const Soy: Story = {
    render: () => (
        <Image
            src={SVG.Soy}
            quality={100}
            alt='Soy'
        />
    ),
};

export const Sugar: Story = {
    render: () => (
        <Image
            src={SVG.Sugar}
            quality={100}
            alt='Sugar'
        />
    ),
};

export const Vegan: Story = {
    render: () => (
        <Image
            src={SVG.Vegan}
            quality={100}
            alt='Vegan'
        />
    ),
};

export const Vegetarian: Story = {
    render: () => (
        <Image
            src={SVG.Vegetarian}
            quality={100}
            alt='Vegetarian'
        />
    ),
};

export const ImgOnlineShopping: Story = {
    render: () => (
        <Image
            src={SVG.OnlineShopping}
            quality={100}
            alt='ImgOnlineShopping'
        />
    ),
};

export const ImgSales: Story = {
    render: () => (
        <Image
            src={SVG.Sales}
            quality={100}
            alt='ImgSales'
        />
    ),
};
export const ImgShopping: Story = {
    render: () => (
        <Image
            src={SVG.Shopping}
            quality={100}
            alt='ImgShopping'
        />
    ),
};