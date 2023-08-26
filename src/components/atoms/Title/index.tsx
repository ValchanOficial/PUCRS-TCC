import React from "react";
import styles from "./title.module.css";

interface TitleProps {
    children: React.ReactNode;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Title({ children, tag = 'h1' }: TitleProps) {
    const Tag: React.ElementType = tag

    return (
        <Tag className={styles.title} title={String(children)} >{children}</Tag>
    )
}