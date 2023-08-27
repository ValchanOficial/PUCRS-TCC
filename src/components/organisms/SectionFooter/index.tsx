import { helpList, paymentList, socialMediaList } from "@/utils";
import { Anchor, Description, Section } from "@atoms";

import { TitleList } from "@molecules";
import styles from './section-footer.module.css';

export default function SectionFooter() {
    return (
        <Section id="contact" theme="purple" container={false} className={styles.section}>
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <TitleList title="Precisa de ajuda?" color='dark-yellow' contentColor="black" items={helpList} />
                    <TitleList title="Formas de pagamento" color='dark-yellow' align="horizontal" contentColor="black" items={paymentList} />
                    <TitleList title="Redes sociais" color='dark-yellow' align="horizontal" contentColor="black" items={socialMediaList} />
                </div>
                <Description size="small" className={styles.description}>
                    {`${new Date().getFullYear()}`} ~ Feito com ❤️ por <Anchor href="https://github.com/ValchanOficial" target="_blank" aria-label="Link para o GitHub @ValchanOficial">
                        Valéria Padilha de Vargas
                    </Anchor>
                </Description>
            </footer>
        </Section>

    )
}