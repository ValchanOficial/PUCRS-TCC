import { Section } from "@atoms";
import { TextIllustration, TitleDesc } from "@molecules";
import { Fish, Gluten, Milk, Sugar } from "@svg";

import styles from './section-restrictions.module.css';

export default function SectionRestrictions() {
    return (
        <Section theme="cian" className={styles.section}>
            <TitleDesc
                title="Feitos para você! 😉"
                description="Aqui você encontra:"
                theme='light'
                position='center'
            />
            <div>
                <TextIllustration title="Zero Lactose" src={Milk} key={0} />
                <TextIllustration title="Zero Glúten" src={Gluten} key={1} />
                <TextIllustration title="Zero Açúcar" src={Sugar} key={2} />
                <TextIllustration title="Zero Frutos do Mar" src={Fish} key={3} />
            </div>
        </Section>
    )
} 