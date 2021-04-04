import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nathan's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!!!" />
        <p className="description">
          The site is under construction, please come back later!!!
        </p>
        <p>
          <code>~ Nathan Nunes</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
