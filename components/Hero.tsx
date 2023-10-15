"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
};

export default function Hero({pageInfo}: Props) {
  
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name is ${pageInfo.name}`,
      "Guy-who-loves-Coffee.tsx",
      "<ButLoves-ToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile"
        className="rounded-full relative object-cover mx-auto"
        height={128}
        width={128}
      />
      <div className="z-20">
        <h2 className="text-lg md:text-xl text-gray-500 uppercase tracking-[15px] pb-2">
          {pageInfo.role}
        </h2>
        <h1 className="relative font-semibold text-5xl lg:text-6xl px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 flex flex-col md:flex-row justify-center items-center">
          <Link href='#about'><button className="heroBtn">About</button></Link>
          <Link href='#experience'><button className="heroBtn">Experience</button></Link>
          <Link href='#skills'><button className="heroBtn">Skills</button></Link>
          <Link href='#projects'><button className="heroBtn">Projects</button></Link>
          <Link href='#contact'><button className="heroBtn">Contact Me</button></Link>
        </div>
      </div>
    </div>
  );
}
