import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Stack from '../components/sections/Stack'
import OpenSource from '../components/sections/OpenSource'
import Foundation from '../components/sections/Foundation'

export default function Home() {
  return (
    <div>
      
      <Head>
        <title>JP</title>
        <meta name="description" content="Jun Peng is an experienced developer with expertise in front-end and back-end development. View his portfolio to see his projects and skills in action."/>
        <meta name="keywords" content="software engineer, software developer, react developer, next developer, portfolio, front-end, back-end, projects, skills"/>

        {/* meta tags are used to customize how a webpage appears when shared on social media platforms. */}
        <meta property="og:title" content="JP - Portfolio"/>
        <meta property="og:description" content="Jun Peng is an experienced developer with expertise in front-end and back-end development. View his portfolio to see his projects and skills in action."/>
        <meta property="og:image" content="/favicon.ico"/>
        <meta property="og:url" content="https://chasingtherain.vercel.app/"/>


        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Navbar/>
        <About/>
        <Stack/>
        <Projects/>
        <OpenSource/>
        <Foundation/>
        <Contact/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
