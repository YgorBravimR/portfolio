import { motion } from "framer-motion";
import { Skill } from "../typings";
import { TechSkill } from "./TechSkill";

type Props = {
  skills: Skill[]
}

export function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen max-w-[1280px] xl:px-10  justify-center  items-center lg:pt-40">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-textSecondary text-2xl ml-5">
        Skills
      </h3>
      <p className="absolute top-36 uppercase tracking-[3px] sm:tracking-[4px] text-textSecondary text-sm text-center">Hover over a skill for current proficiency</p>
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <TechSkill key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <TechSkill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}
