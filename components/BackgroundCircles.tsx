import { motion } from 'framer-motion'

export function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0, 0.2],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'
    >
      {/* <div className='absolute border border-textSecondary h-[200px] w-[200px] rounded-full mt-52' /> */}
      <div className='absolute border border-detailDarkGray h-[300px] w-[300px] rounded-full mt-52' />
      <div className='absolute border border-detailDarkGray h-[500px] w-[500px] rounded-full mt-52' />
      <div className='absolute border border-detailPrimary h-[650px] w-[650px] rounded-full mt-52 animate-pulse' />
      <div className='absolute border border-detailDarkGray h-[800px] w-[800px] rounded-full mt-52' />
    </motion.div>
  )
}
