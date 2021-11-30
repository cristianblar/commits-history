import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header__container}>
      <Image
        src='/happy_cris.png'
        alt='Happy Cris Memoji'
        width='200'
        height='200'
      />
      <h1>Commits history</h1>
    </div>
  )
}
