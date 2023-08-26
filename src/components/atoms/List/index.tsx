import ListItem, { Item } from "../ListItem";
import styles from "./list.module.css";

interface ListProps {
    items: string[] | Item[];
    title?: string;
    dot?: 'show' | 'hide';
    align?: 'horizontal' | 'vertical';
    contentColor?: 'white' | 'black' | 'yellow';
}

export default function List({
    title,
    dot = 'hide',
    align = 'vertical',
    contentColor = 'white',
    items = []
}: ListProps) {
    return (
        <ul className={`${title ? styles.listWithTitle : styles.list} ${styles[dot]} ${styles[align]} ${styles[`content-${contentColor}`]}`}>
            {items && items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </ul>
    )
}
