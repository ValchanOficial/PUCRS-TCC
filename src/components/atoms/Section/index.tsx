import styles from './section.module.css';

interface SectionProps {
    children: React.ReactNode;
    theme?: 'base' | 'bicolor' | 'cian' | 'purple';
    className?: string;
    id?: string;
}

export default function Section({ children, theme = 'base', id = 'section', className }: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${styles[theme]} ${className}`}>
            {children}
        </section>
    )
}