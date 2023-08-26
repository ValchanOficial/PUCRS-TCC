import { Illustration, Section } from "@atoms";
import { TitleDesc } from "@molecules";
import { OnlineShopping } from "@svg";

import styles from './section-about.module.css';

export default function SectionAbout() {
    return (
        <Section id="about" theme="cian" className={styles.section}>
            <TitleDesc
                title="Sobre nós"
                description="Somos uma plataforma online que liga pessoas que possuem restrições alimentares com lojas que vendem produtos para este público."
                theme='light'
                position='left'
            />
            <Illustration alt="Moça feliz com compras" src={OnlineShopping} size="default" />
        </Section>
    )
} 