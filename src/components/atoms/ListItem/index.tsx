import { Anchor } from "..";
import { getIcon } from "../Icons";
import styles from "./list-item.module.css";

export type Item = {
    name: string;
    link?: string;
    icon?: string;
    target?: string;
}

export interface ListItemProps {
    item: Item | string;
    key: number;
}

export default function ListItem({ item, key }: ListItemProps) {
    if (typeof item === 'object') {
        const { name, link, icon, target } = item;
        const Icon = getIcon(item.icon);
        return (
            <>
                {
                    !link && icon && (
                        <li key={key} className={styles.listItem} aria-label={name}>
                            <Icon />
                        </li>
                    )
                }
                {link && icon && (
                    <li key={key} className={styles.listItem}>
                        <Anchor
                            href={link}
                            target={target}
                            aria-label={name}>
                            <Icon />
                        </Anchor>
                    </li>
                )}
                {link && !icon && (
                    <li key={key} className={styles.listItem}>
                        <Anchor
                            href={link}
                            target={target}
                            aria-label={name}
                        >
                            {name}
                        </Anchor>
                    </li>
                )}
            </>
        )
    }
    return (
        <li key={key} className={styles.listItem}>{item}</li>
    )
}
