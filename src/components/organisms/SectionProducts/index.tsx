"use client"
import { Section } from "@atoms";
import { TitleDesc } from "@molecules";

import { companiesMock, productsMock } from "@/utils";
import Carousel from "../Carousel";
import styles from './section-products.module.css';

export default function SectionProducts() {
    return (
        <Section theme="purple" className={styles.section}>
            <TitleDesc
                title="Dê uma espiada aqui"
                description="Lojas e produtos que fazem parte do nosso ecossistema"
                theme='light'
                position='center'
                className={styles.titleDesc}
            />
            <Carousel list={productsMock} className={styles.carousel} options={{ reverseDirection: true }} />
            <Carousel list={companiesMock} />
        </Section>
    )
} 