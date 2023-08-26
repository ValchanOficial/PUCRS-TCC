import { Section } from "@atoms";
import { TextIllustration, TitleDesc } from "@molecules";
import { Account, Order, Receive } from "@svg";

import styles from './section-shopping.module.css';

export default function SectionShopping() {
    return (
        <Section theme="purple" className={styles.section}>
            <TitleDesc
                title="Super rápido e fácil!"
                theme='light'
                position='center'
            />
            <div>
                <TextIllustration title="Faça seu cadastro" src={Account} key={0} />
                <TextIllustration title="Compre os produtos que deseja" src={Order} key={1} />
                <TextIllustration title="Receba em casa" src={Receive} key={2} />
            </div>
        </Section>
    )
} 