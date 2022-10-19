import { motion } from 'framer-motion'
import { PageInfo } from '../@types/typings'
import { urlFor } from '../@types/sanity'

type Props = {
  pageInfo: PageInfo
}

export function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 md:px-20 justify-center mx-auto items-center gap-8 align-middle">
      <h3 className="absolute top-24 uppercase tracking-[20px] ml-5 text-textSecondary text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className='flex-shrink-0 w-48 h-48 mt-20 rounded-full object-cover md:mt-0 md:rounded-lg md:w-64 md:h96 xl:w-[500px] xl:h-[50vh]'
      />
      <div className='space-y-8 px-0 md:px-10'>
        <p className='text-3xl font-semibold'>
          Heres a{" "}
          <span className='underline decoration-detailPrimary'>little</span>
          {" "}background
        </p>
        <p className='md:text-xl text-base h-[25vh] md:h-auto overflow-x-hidden'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}
