'use client';
import React, { useState, useEffect } from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

export default function ContactMe({}: Props) {
  const [state, handleSubmit] = useForm('meqbwpyd');
  const [formValues, setFormValues] = useState({
    Name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Submitted Successfully!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      // Clear the form values on successful submission
      setFormValues({
        Name: '',
        email: '',
        message: '',
      });
    }
  }, [state.succeeded]);

  return (
    <div className="h-screen flex relative flex-col text-center mx-40 md:text-left md:flex-row justify-evenly items-center">
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">Contact</h3>
      <div className="flex flex-col space-y-8 mt-14 w-[43vh] md:w-min">
        <h4 className="text-2xl font-semibold text-center ">
          I have got just what you need. {''}
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
        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mx-0 md:mx-5">
            <div className="flex space-x-2">
              <input
                id="Name"
                name="Name"
                placeholder="Name"
                className="contactInput w-[11rem] md:w-min"
                type="text"
                value={formValues.Name}
                onChange={(e) => setFormValues({ ...formValues, Name: e.target.value })}
              />
              <ValidationError prefix="Name" field="Name" errors={state.errors} />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="contactInput w-[11rem] md:w-min"
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="contactInput w-[22.5rem] md:w-auto"
              value={formValues.message}
              onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg w-[22.5rem] md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
