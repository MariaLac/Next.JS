import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return (
      <ul className = {styles.navbar}>
        <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/conhecimento">
           Conhecimento
          </Link>
      </li>
      <li>
        <Link href="/grupo">
        Grupo
          </Link>
      </li>
      <li>
      <Link href="/sobre">
         Sobre
          </Link>
      </li>
    </ul>
)
}