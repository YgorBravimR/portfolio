import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
  socials: Social[]
}

export function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-999 xl:itens-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'
      >
        {socials.map((social) => (
          <div key={social._id} className="group-hover:bg-red-100"
          >
            <SocialIcon
              url={social.url}
              fgColor='var(--detailGray)'
              bgColor='transparent'
              target="_blank"
            />
          </div>
        ))}

      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex flex-row items-center text-gray-400 cursor-pointer'
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'

          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header >
  )
}