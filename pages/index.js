import Head from 'next/head'
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

export default function Home({ commitsArray }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cristianblar: Commits history</title>
        <meta
          name='description'
          content='The commit history of its own repository'
        />
        <link rel='icon' href='/happy-cris.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
    </div>
  )
}
