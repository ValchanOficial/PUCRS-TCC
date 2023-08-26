import {
  SectionAbout,
  SectionFooter,
  SectionHeader,
  SectionProducts,
  SectionRestrictions,
  SectionSeller,
  SectionShopping
} from '@organisms';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionHeader />
      <SectionRestrictions />
      <SectionShopping />
      <SectionSeller />
      <SectionAbout />
      <SectionProducts />
      <SectionFooter />
    </main>
  )
}
