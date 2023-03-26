import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Todo(){
    
    const router = useRouter()
    
    const todoid = router.query.todoid
    
    return(
        <>
        <Link href="/">
            Voltar
        </Link>
        <h1>Exibindo o todo: {todoid}</h1>
        
        </>
    )
}