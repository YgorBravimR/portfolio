import { motion } from 'framer-motion'

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-textSecondary text-2xl">
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
        src="https://github.com/ygorbravimr.png"
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h96 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <p className='text-4xl font-semibold'>
          Heres a{" "}
          <span className='underline decoration-detailYellow'>little</span>
          {" "}background
        </p>
        <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit architecto aperiam ipsum error magni temporibus eum quae, ab sint dignissimos doloribus ipsam nemo, aut minima eaque officiis delectus laudantium perspiciatis ex numquam facilis voluptatem corrupti? Omnis vitae deserunt animi nisi magnam odit nemo maiores sunt molestias tempora! Reprehenderit, maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minima odit libero tempora qui repellat ipsum, beatae earum sint quidem!</p>
      </div>
    </motion.div>
  )
}
