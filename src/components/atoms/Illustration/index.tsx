import { Shopping } from '@svg';

import Image from 'next/image';
import styles from "./illustration.module.css";

interface ImageProps {
    alt: string;
    src: string;
    theme?: 'light' | 'dark';
    size?: 'default' | 'large' | 'medium' | 'small';
    priority?: boolean;
}

export default function Illustration({ alt, src = Shopping, priority = true, theme = 'light', size = 'default' }: ImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            priority={priority}
            quality={100}
            className={`${styles[size]} ${styles[theme]}`}
        />
    )
}
