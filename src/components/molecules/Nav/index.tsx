import Link from "next/link";

import styles from "./nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href="#companies" aria-label="Para empresas">Para Empresas</Link>
            <Link href="#about" aria-label="Sobre Nós">Sobre Nós</Link>
            <Link href="#contact" aria-label="Contato">Contato</Link>
            <Link href="/login" aria-label="Login">Login</Link>
        </nav>
    )
}