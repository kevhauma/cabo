import { ReactNode } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'


type Props = {children :ReactNode}

export default function Layout({children}:Props) {
  return (
    <>
      <Head>
        <title>Swish!</title>
        <meta name="description" content="Swish! The Card Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       {children}
      </main>
    </>
  )
}
