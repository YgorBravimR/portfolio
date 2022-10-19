import { motion } from 'framer-motion';
import { urlFor } from '../@types/sanity'
import { Experience } from '../@types/typings';

type Props = {
  experience: Experience
}

export function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 sm:space-y-7 flex-shrink-0 max-h-[65vh] sm:max-h-max w-80 sm:w-[500px] md:w-[600px] lg:w-[780px] lg:h-[60vh] snap-center bg-cardBackground py-5 px-10 sm:p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>

      <div className='flex flex-col w-full lg:flex-row lg:justify-evenly items-center gap-4'>

        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={urlFor(experience?.companyImage).url()}
          alt=""
          className='w-28 h-28 sm:w-32 sm:h-32 rounded-full xl:h-[20vh] lg:top-16 object-cover object-center'
        />

        <div className='px-0 md:px-10 self-start'>
          <h4 className='text-2xl sm:text-4xl font-light'>{experience.jobTitle}</h4>
          <p className='font-bold text-1xl mt-1 uppercase'>{experience.company}</p>
          <div className='flex space-x-2 mt-0'>
            {experience.technologies.map((technology) => (
              <img
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt=""
                className='w-7 h-7 sm:w-10 sm:h-10 rounded-full'
              />
            ))}
          </div>
          <p className='uppercase py-5 text-gray-300'>
            {new Date(experience.dateStarted).toDateString()} -
            {experience.isCurrentlyWorkingHere ? " Present" : (
              new Date(experience.dateEnded).toDateString()
            )}
          </p>
        </div>
      </div>
      <ul className='list-inside list-disc space-y-4 ml-5 text-lg overflow-y-scroll sm:max-h-80 marker:text-detailPrimary'>
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  )
}
