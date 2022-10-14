import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BackgroundCircles } from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

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
      <div className='h-32 w-32 mx-auto relative'>
        <img src={urlFor(pageInfo?.heroImage).url()} alt="" className="rounded-full" />
      </div>
      <div className='z-20'>
        <h1 className='text-sm uppercase text-textSecondary pb-2 tracking-[12px]'>
          {pageInfo?.role}
        </h1>
        <h2 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='var(--detailYellow)' />
        </h2>

        <div className='pt-5'>
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