import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill
  directionLeft?: boolean;
}

export function TechSkill({ skill, directionLeft }: Props) {
  { console.log(skill) }
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-detailGray object-cover h-16 w-14 sm:w-24 sm:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-14 sm:w-24 sm:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl sm:text-3xl font-bold text-detailBlack opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}
