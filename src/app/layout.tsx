import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';

const roboto = Roboto({ weight: ['500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PUCRS TCC',
  description: 'PUCRS - Projeto de conclusão de curso - Desenvolvido por Valéria Padilha de Vargas',
  icons: [
    {
      rel: 'icon',
      url: './favicon.ico',
      fetchPriority: 'high',
    },
  ],
  viewport: "width=device-width, initial-scale=1.0",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  )
}
