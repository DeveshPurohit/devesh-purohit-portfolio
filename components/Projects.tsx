"use client";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-col max-w-full mx-auto justify-evenly items-center z-0"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        Projects
      </h3>
      <div className="mt-12 md:mt-4 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mb-9 md:mb-24">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 p-16 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt=""
              className="w-52 h-52 md:w-80 md:h-80"
            />
            <div className="space-y-3 max-w-6xl px-0 md:px-10">
              <h4 className="font-semibold text-xl md:text-3xl text-center">
                <span className="">
                  Case study {i + 1} of {projects.length} :
                </span>{" "}
                <Link href={`${project?.linkToBuild}`}><span className="underline decoration-slate-400">{project.title}</span></Link>
              </h4>
              <div className="flex items-center space-x-4 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="skills"
                  />
                ))}
              </div>
              <p className="text-base md:text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] h-[400px] bg-[#F7AB0A]/10 left-0 -skew-y-12"></div>
    </motion.div>
  );
}
