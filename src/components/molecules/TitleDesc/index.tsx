import { Description, Title } from "@atoms";
import styles from "./title-desc.module.css";

interface TitleDescProps {
    title: string;
    description?: string;
    theme?: 'light' | 'dark';
    position?: 'left' | 'center' | 'right';
    className?: string;
}

export default function TitleDesc({ title, description, theme = 'light', position = 'left', className }: TitleDescProps) {
    return (
        <div className={`${styles.container} ${styles[position]} ${className}`}>
            <Title tag="h2">{title}</Title>
            {description && <Description theme={theme}>{description}</Description>}
        </div>
    )
}