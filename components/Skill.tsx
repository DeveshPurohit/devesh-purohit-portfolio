import { urlFor } from '@/sanity'
import { Skill } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft: boolean
    skill: Skill
}

export default function SkillBall({directionLeft, skill}: Props) {
  
  return (
    <div className='group flex relative cursor-pointer'>
        <motion.img initial={{x: directionLeft ? -100 : 100,
        opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1}} src={urlFor(skill.image).url()} className='rounded-full border border-gray-500 object-cover h-16 w-16 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'/>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'><div className='flex items-center justify-center h-full'><p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p></div></div>
    </div>
  )
}
