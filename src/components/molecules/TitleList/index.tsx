import { Item, List } from "@atoms";
import styles from "./title-list.module.css";

interface TitleListProps {
    title: string;
    items: Item[] | string[];
    color?: 'white' | 'black' | 'yellow' | 'dark-yellow';
    contentColor?: 'white' | 'black' | 'yellow';
    dot?: 'show' | 'hide';
    align?: 'horizontal' | 'vertical';
}

export default function TitleList({
    title,
    items = [],
    color = 'white',
    contentColor = 'white',
    dot = 'hide',
    align = 'vertical',
}: TitleListProps) {
    return (
        <div className={`${styles.container}`}>
            {title && <h3 className={`${styles.title} ${styles[color]}`}>{title}</h3>}
            <List items={items} align={align} dot={dot} title={title} contentColor={contentColor} />
        </div>
    )
}
