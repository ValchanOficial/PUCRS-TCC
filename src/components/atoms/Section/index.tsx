import styles from './section.module.css';

interface SectionProps {
    children: React.ReactNode;
    theme?: 'base' | 'bicolor' | 'cian' | 'purple';
    className?: string;
    id?: string;
    container?: boolean;
}

export default function Section({ children, theme = 'base', container = true, id = 'section', className }: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${styles[theme]}`}>
            <div className={`${container ? styles.container : styles.noContainer}  ${className}`}>
                {children}
            </div>
        </section>
    )
}