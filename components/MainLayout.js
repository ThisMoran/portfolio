import Head from 'next/head'
import style from '../styles/main.module.scss'
import Footer from '../components/Footer.js'

export function MainLayout({ children, title = 'Next Portfolio' }) {
  console.log()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="This my next portfolio" />
        <meta charSet='utf-8' />
      </Head>
      <main className={style.container}>
        {children}
      </main>
      <Footer />
    </>
  )
}