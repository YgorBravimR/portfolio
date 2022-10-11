import { motion } from "framer-motion";
import { TechSkill } from "./TechSkill";

export function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-textSecondary text-2xl">
        Skills
      </h3>
      <p className="absolute top-36 uppercase tracking-[4px] text-textSecondary text-sm">Hover over a skill for current proficiency</p>
      <div className="grid grid-cols-4 gap-5 ">
        <TechSkill />
        <TechSkill />
        <TechSkill />
        <TechSkill />
        <TechSkill />
        <TechSkill />
        <TechSkill />
        <TechSkill />
        <TechSkill />
        <TechSkill />
        <TechSkill />
      </div>
    </motion.div>
  )
}
