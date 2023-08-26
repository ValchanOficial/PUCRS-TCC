import '@/app/globals.css';
import { Meta, StoryObj } from "@storybook/react";
import ListItem from ".";

const meta: Meta<typeof ListItem> = {
    title: "Atoms/ListItem",
    component: ListItem,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        key: 0,
        item: 'Item 1',
    }
};

export const ListItemWithLink: Story = {
    args: {
        key: 0,
        item: {
            name: 'Item 1',
            link: 'https://github.com/ValchanOficial',
        },
    }
};

export const ListItemWithExternalLink: Story = {
    args: {
        key: 0,
        item: {
            name: 'Item 1',
            link: 'https://github.com/ValchanOficial',
            target: '_blank',
        },
    }
};

export const ListItemWithIcon: Story = {
    args: {
        key: 0,
        item: {
            name: 'Item 1',
            icon: 'github',
        },
    }
};

export const ListItemWithIconAndLink: Story = {
    args: {
        key: 0,
        item: {
            name: 'Item 1',
            icon: 'github',
            link: 'https://github.com/ValchanOficial',
        },
    }
};