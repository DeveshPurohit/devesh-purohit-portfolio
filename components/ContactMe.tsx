'use client' 
import React, { useState } from 'react'
import {PhoneIcon, EnvelopeIcon} from "@heroicons/react/24/solid";

type Props = {}

export default function ContactMe({}: Props) {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Subject, setSubject] = useState('')
  const [Message, setMessage] = useState('')

  return (
    <div className="h-screen flex relative flex-col text-center mx-40 md:text-left md:flex-row justify-evenly  items-center"> <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
    Contact
  </h3>
  <div className="flex flex-col space-y-8 mt-14 w-[43vh] md:w-min">
<h4 className="text-2xl font-semibold text-center ">
I have got just what you need. {""}
<span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
</h4>
<div className="space-y-5">
<div className="flex items-center space-x-5 justify-center">
<PhoneIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse" />
<p className="text-xl">8209370677</p>
</div>
<div className="flex items-center space-x-5 justify-center">
<EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse" />
<p className="text-xl">purohitdev08@gmail.com</p>
</div>
</div>
<div className=''>
<form className="flex flex-col space-y-2 mx-auto">
<div className="flex space-x-2">
<input placeholder="Name" className="contactInput w-[11rem] md:w-min" type="text" onChange={e=>setName(e.target.value)}/>
<input placeholder="Email" className="contactInput w-[11rem] md:w-min" type="text" onChange={e=>setEmail(e.target.value)}/>
</div>
<input placeholder="Subject" className="contactInput" type="text" onChange={e=>setSubject(e.target.value)}/>
<textarea placeholder="Message" className="contactInput" onChange={e=>setMessage(e.target.value)}/>
<button
type="submit"
className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg ">
Submit
</button>
</form>
</div>

</div></div>
  )
}