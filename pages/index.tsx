import { ArrowUpIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { WorkExperience } from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../@types/typings';
import { fetchExperience } from '../utils/fetchExperience'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type HomeProps = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, experiences, skills, projects, socials }: HomeProps) => {
  return (
    <div className='bg-background h-screen text-textPrimary snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Head>
        <title>Ygor Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className='snap-center hidden'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id="contact" className='snap-start'>
        <Contact pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpIcon className='h-8 w-8 p-1 rounded-full filter text-textSecondary hover:text-detailPrimary cursor-pointer border-[2px] border-textSecondary hover:border-detailPrimary' />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  }
}

