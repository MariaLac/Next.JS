import Link from 'next/link'
import Head from 'next/head'

export default function Conhecimento(){
    return(
        <>
        <Head>
            <title>Conhecimento</title>
        </Head>

        <h1>Conhecimento</h1>

        <li>
        <Link href="/">
            Voltar
        </Link>
        </li>

        <li>
        <Link href="/conhecimento/NextJS">
        Conhecimento Necessário
        </Link>
        </li>
        </>  
    ) 
}