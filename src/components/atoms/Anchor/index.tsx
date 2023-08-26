import Link from 'next/link'
import { ReactNode } from 'react'

import styles from './anchor.module.css'

type AnchorProps = {
    href: string
    children: ReactNode
    passHref?: boolean
    target?: string
}

export default function Anchor({ href, passHref, target, children }: AnchorProps) {
    return (
        <Link legacyBehavior href={href} passHref={passHref}>
            <a className={styles.link} href={href} target={target} rel="noopener noreferrer">
                {children}
            </a>
        </Link>
    )
}