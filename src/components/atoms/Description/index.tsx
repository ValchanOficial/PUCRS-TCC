import React from "react";
import styles from "./description.module.css";

interface DescriptionProps {
    children: React.ReactNode;
    theme?: 'light' | 'dark' | 'gray';
    size?: 'large' | 'medium' | 'small';
    className?: string;
}

export default function Description({ children, theme = 'light', size = 'large', className }: DescriptionProps) {
    return (
        <p className={`${styles[size]} ${styles[theme]} ${className}`} aria-label={String(children)}>{children}</p>
    )
}
