import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <Head>
    <title>Página Principal</title>
    <meta name="keyworkds" content="Primeiros passos, tutorial, Next.Js"></meta>
   </Head>
   <div className={styles.title}>
      <h1>Primeiros passos com o Next.Js</h1>
      <img src="/images/Logotype.avif" 
      width="900px"
      height="500px"
      alt="Next.Js Logo" />
    </div>
   </>
  )
}
