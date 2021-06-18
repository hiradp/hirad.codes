import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'

import styles from '../styles/Home.module.css'

export default function Home({ content }: InferGetStaticPropsType<typeof getStaticProps>) {
  /* eslint-disable react/no-children-prop */
  return (
    <div className={styles.container}>
      <Head>
        <title>hirad.codes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔥</text></svg>" />
      </Head>

      <main className={styles.main}>
        <div className='markdown-body'>
          <ReactMarkdown children={content} />
        </div>
      </main>
    </div>
  )
  /* eslint-enable */
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://raw.githubusercontent.com/hiradp/hiradp/main/README.md')
  const content = await res.text()

  if (!content || content === '404: Not Found') {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      content,
    },
  }
}

