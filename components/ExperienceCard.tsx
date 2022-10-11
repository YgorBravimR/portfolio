
import { motion } from 'framer-motion';
import Image from 'next/image';
import htmlLogo from '../assets/html-logo.png'
import teslaLogo from '../assets/tesla-logo.png'

export function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-cardBackground p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center bg-red-600/50'
      >
        <Image src={teslaLogo} alt="" />
      </motion.div>
      <div className='px-0 md:px-10 '>
        <h4 className='text-4xl font-light'> CEO of Tesla</h4>
        <p className='font-bold text-2xl mt-1 uppercase'>TESLA</p>
        <div className='flex space-x-2 mt-2'>
          <div className='w-10 h-10 rounded-full'>
            <Image src={htmlLogo} alt="" />
          </div>
          <div className='w-10 h-10 rounded-full'>
            <Image src={htmlLogo} alt="" />
          </div>
          <div className='w-10 h-10 rounded-full'>
            <Image src={htmlLogo} alt="" />
          </div>
          <div className='w-10 h-10 rounded-full'>
            <Image src={htmlLogo} alt="" />
          </div>
        </div>
        <p className='uppercase py-5 text-gray-300'> Started work at</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur suscipit quod?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur suscipit quod?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur suscipit quod?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur suscipit quod?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur suscipit quod?</li>
        </ul>
      </div>
    </article>
  )
}
