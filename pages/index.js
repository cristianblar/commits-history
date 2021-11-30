import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.github.com/repos/cristianblar/commits-history/commits'
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      commitsArray: data
    }
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cristianblar: Commits history</title>
        <meta
          name='description'
          content='The commit history of its own repository'
        />
        <link rel='icon' href='/happy-cris.ico' />
      </Head>
    </div>
  )
}
