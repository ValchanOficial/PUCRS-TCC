import Image from 'next/image'
import ShoppingImg from '../assets/Shopping.png'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <div>
        <Image
          src={ShoppingImg}
          alt="Pessoa feliz com compras com um notebook mostrando a tela de um mercado online ao fundo"
          width={895}
          height={730}
          quality={100}
          priority
        />
      </div>
    </main>
  )
}
