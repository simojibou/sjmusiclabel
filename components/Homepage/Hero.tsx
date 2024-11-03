import React, { useState, useEffect } from 'react'
import bg from '../../images/bg2.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowDown } from 'react-icons/ai'

function Hero() {
  return (
    <>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          src={bg}
          layout="fill"
          className="z-10"
          alt="logo"
          objectFit="cover"
          priority
          loading="eager"
        />

        {/* <span className=" absolute z-20 h-full w-full bg-[#00000062]"></span> */}
        <div className=" z-30 max-w-[400px] text-center   text-white ">
          <h1 className="font-smeibold my-2 px-5 text-4xl leading-normal">
            Producing hits for rising artists
          </h1>
          <p className=" mb-10 mt-5 px-5 font-light	">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          </p>
          <Link href="/about">
            <a className="mt-16   bg-lime-400 px-10 py-4 font-semibold text-black transition-all ease-in-out hover:bg-lime-500 ">
              LEARN MORE
            </a>
          </Link>
        </div>
        {/* bouncing arrow */}
        <a href="#favArtist">
          <AiOutlineArrowDown className="absolute bottom-[5%] left-1/2 z-30 animate-bounce text-4xl text-zinc-100" />
        </a>
        {/* popup */}
      </div>
    </>
  )
}

export default Hero
