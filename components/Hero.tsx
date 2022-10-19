import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BackgroundCircles } from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../@types/typings';
import { urlFor } from '../@types/sanity'

type Props = {
  pageInfo: PageInfo
}

export function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hey, i'm ${pageInfo?.name}`, "<Developer />", "React.tsx"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img src={urlFor(pageInfo?.heroImage).url()} alt="" className="rounded-full w-32 mx-auto relative" />
      <div className='z-20'>
        <h1 className='text-sm uppercase text-textSecondary pb-2 tracking-[8px] sm:tracking-[12px]'>
          {pageInfo?.role}
        </h1>
        <h2 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='var(--detailPrimary)' />
        </h2>

        <div className='pt-4 sm:pt-9 grid gap-4 sm:block'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}