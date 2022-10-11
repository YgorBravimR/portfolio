import { ArrowUpIcon } from '@heroicons/react/24/solid'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { WorkExperience } from '../components/WorkExperience'


const Home: NextPage = () => {
  return (
    <div className='bg-background h-screen text-textPrimary snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Head>
        <title>Ygor Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      <section id="contact" className='snap-start'>
        <Contact />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpIcon className='h-10 w-10 p-1 rounded-full filter text-textSecondary hover:text-detailYellow cursor-pointer border-[3px] border-textSecondary hover:border-detailYellow' />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home
