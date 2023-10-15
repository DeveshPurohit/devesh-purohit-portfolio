'use client'

import React from 'react'
import { motion } from "framer-motion";
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  experience: Experience
}

export default function ExperienceCard({experience}: Props) {
  
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-7 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
<motion.img
initial={{
    y: -100,
    opacity: 0,
    }}
    transition={{ duration: 1.2 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{once:true}}
className="h-24 xl:h-[10rem] object-cover
object-bottom"
src={urlFor(experience.companyImage).url()}
alt=""/>
<div className="px-20 md:px-10">
<h4 className="text-2xl md:text-3xl font-light">{experience.jobTitle}</h4>
<p className="font-bold text-xl md:text-2xl mt-1">{experience.company}</p>
<div className="flex space-x-2 my-2">
{experience.technologies.map((technology) => (
  <img key={technology._id} src={urlFor(technology.image).url()} className='h-10 w-10 rounded-full' alt="technology" />
))}
</div>
<p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}</p>
<ul className="list-disc space-y-4 ml-5 text-base h-52 overflow-y-scroll scrollbar-thin scrollbar-track-black pb-5 pr-4">
{experience.points.map((point)=>(
  <li key={point}>{point}</li>
))}
</ul>
</div>
</article>
  )
}