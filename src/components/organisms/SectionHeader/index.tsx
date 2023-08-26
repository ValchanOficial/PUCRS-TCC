import { Illustration, Section } from "@atoms";
import { Nav, TitleDesc, TitleList } from "@molecules";
import { Shopping } from "@svg";

import styles from './section-header.module.css';

export default function SectionHeader() {
    const list = [
        'Diabéticos',
        'Intolerantes à Lactose',
        'Celíacos',
        'Alérgicos',
        'Veganos',
        'Vegetarianos',
    ]

    return (
        <Section theme="bicolor" className={styles.section}>
            <header className={styles.header}>
                <div className={styles.right}>
                    <TitleDesc
                        title="Possui restrições alimentares?"
                        description="Aqui você vai encontrar o que procura!"
                        theme='light'
                    />
                    <TitleList title='Produtos para:' items={list} dot="show" />
                </div>
                <div className={styles.left}>
                    <Nav />
                    <Illustration
                        alt='Moça feliz comprando'
                        src={Shopping}
                        priority
                    />
                </div>
            </header>
        </Section>
    )
}