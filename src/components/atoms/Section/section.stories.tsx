import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import Section from ".";

const meta: Meta<typeof Section> = {
    title: "Atoms/Section",
    component: Section,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        theme: "base",
        children: <div style={{ width: '50rem', height: '50rem' }}>Exemplo Children</div>
    }
};

export const Cian: Story = {
    args: {
        theme: "cian",
        children: <div style={{ width: '50rem', height: '50rem' }}>Exemplo Children</div>
    }
};

export const Purple: Story = {
    args: {
        theme: "purple",
        children: <div style={{ width: '50rem', height: '50rem' }}>Exemplo Children</div>
    }
};

export const Bicolor: Story = {
    args: {
        theme: "bicolor",
        children: <div style={{ width: '50rem', height: '50rem' }}>Exemplo Children</div>
    }
};