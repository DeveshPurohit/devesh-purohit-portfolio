import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'
import exp from 'constants'

type Props = {
  experiences: Experience[]
}

export default function WorkExperience({experiences}: Props) {
  experiences = experiences.sort((a, b) => {
    // @ts-ignore
    return new Date(b.dateStarted) - new Date(a.dateStarted);
  });
  
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        Experience
      </h3>
      <div className='w-full h-[600px] mt-24 flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  )
}