import { motion } from "framer-motion";
import { Experience } from "../@types/typings";
import { ExperienceCard } from "./ExperienceCard";

type Props = {
  experiences: Experience[]
}

export function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-textSecondary text-2xl ml-5">
        Experience
      </h3>

      <div className="w-full flex space-x-8 mt-16 overflow-x-scroll p-5 sm:p-10 snap-x snap-mandatory">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}
