import { Description, Illustration } from "@atoms";
import styles from "./text-illustration.module.css";

interface TextIllustrationProps {
    title: string;
    src: string;
}

export default function TextIllustration({ title, src }: TextIllustrationProps) {
    return (
        <div className={`${styles.container}`}>
            <Illustration alt={title} src={src} size="large" />
            <Description theme="light">{title}</Description>
        </div>
    )
}