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

export default function Home(
  {textAnimation,iconRowOne,iconRowTwo} : {textAnimation: string[],iconRowOne:string[],iconRowTwo:string[]}) 
  
  {
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
        <About textAnimation={textAnimation}/>
        <Stack iconRowOne={iconRowOne} iconRowTwo={iconRowTwo}/>
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

export async function getStaticProps() {

  const textAnimation = [
    'Hi, I am JP. \nI develop apps with\nTypescript', 2700,
    'Hi, I am JP. \nI develop apps with\nJavascript', 2700,
    'Hi, I am JP. \nI develop apps with\nReact', 2700,
    'Hi, I am JP. \nI develop apps with\nNode', 2700,
    // 'Hi, I am JP. \nI develop apps with\nReact Query', 2700,
    'Hi, I am JP. \nI develop apps with\nNext', 2700,
    'Hi, I am JP. \nI develop apps with\nPostgres', 2700,
    'Hi, I am JP. \nI develop apps with\nFirebase', 2700,
    'Hi, I am JP. \nI develop apps with\nMongoDB', 2700,
    // 'Hi, I am JP. \nI develop apps with\nGraphQL', 2700,
    'Hi, I am JP. \nI develop apps with\nTailwind', 2700,
    'Hi, I am JP. \nI develop apps with\nJest', 2700,
]

  const iconRowOne = ['typescript','javascript','reactjs','nodejs','next']
  const iconRowTwo = ['firebase','mongodb','postgres', 'tailwind','jest']
  
  return {
    props: {
      iconRowOne,
      iconRowTwo,
      textAnimation
    },
  }
}