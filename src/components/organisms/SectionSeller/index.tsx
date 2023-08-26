import { Description, Illustration, Section } from "@atoms";
import { TitleDesc } from "@molecules";
import { Sales } from "@svg";

import styles from './section-seller.module.css';

export default function SectionSeller() {
    return (
        <Section id="companies" className={styles.section}>
            <Illustration alt="Moça anunciando produtos" src={Sales} size="default" />
            <div className={styles.container}>
                <TitleDesc
                    title="Deseja vender?"
                    description="Esta é uma plataforma online que permite que você crie seu e-commerce de forma simples"
                    theme='dark'
                    position='left'
                />
                <Description theme="gray" size="medium">
                    Cadastre-se e começe a vender seus produtos!<br /><br />
                    Faça com que mais pessoas conheçam seus produtos! 🚀<br /><br />
                    Tenha acesso a um painel de vendas!
                </Description>
            </div>

        </Section>
    )
} 