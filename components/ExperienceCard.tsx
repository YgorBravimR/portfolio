
import { motion } from 'framer-motion';
import Image from 'next/image';
import htmlLogo from '../assets/html-logo.png'
import teslaLogo from '../assets/tesla-logo.png'
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
  experience: Experience
}

export function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-cardBackground p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={urlFor(experience?.companyImage).url()}
          alt=""
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />
      </motion.div>
      <div className='px-0 md:px-10 '>
        <h4 className='text-4xl font-light'> CEO of Tesla</h4>
        <p className='font-bold text-2xl mt-1 uppercase'>TESLA</p>
        <div className='flex space-x-2 mt-2'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt=""
              className='w-10 h-10 rounded-full'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} -
          {experience.isCurrentlyWorkingHere ? "Present" : (
            new Date(experience.dateEnded).toDateString()
          )}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-80'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
