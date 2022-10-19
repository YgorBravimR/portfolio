import { motion } from "framer-motion"
import { urlFor } from "../@types/sanity";
import { Project } from '../@types/typings';

type Props = {
  projects: Project[];
}

export function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-textSecondary text-2xl ml-5">
        Projects
      </h3 >
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-4 sm:pt-0">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col lg:flex-row space-y-5 items-center justify-start md:justify-center p-14 pt-40"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt=""
              className="h-48 sm:h-[40vh] lg:h-auto lg:w-[50vw] xl:w-[30vw]"
            />
            <div className="space-y-6 sm:space-y-10 px-0 md:px-10 max-w-full sm:max-w-6xl">
              <h4 className="text-2xl sm:text-4xl font-semibold text-center">
                <span className="underline decoration-detailPrimary50 lg:block">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex gap-2 items-center justify-center">
                {project?.technologies.map((technology) => (
                  <div key={technology._id}>
                    <img
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt=""
                      className='w-8 md:w-12 h-8 md:h-12 rounded-full'
                    />
                  </div>
                ))}
              </div>
              <p className="text-lg text-center">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-detailPrimary10 left-0 h-[500px] -skew-y-12">

      </div>
    </motion.div >
  )
}
