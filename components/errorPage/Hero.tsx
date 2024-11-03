import React, { useState, useEffect } from 'react'
import bg from '../../images/Error-page-bg-img.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

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
        <div className=" z-30 -mb-20 max-w-[400px]   text-center text-white">
          <h1 className="font-smeibold my-2 px-5 text-4xl leading-normal">
            Error Page 404
          </h1>
          <p className=" mb-10 mt-5 px-5 font-light	">
            Please try searching for some other page, or return to the website's
            homepage to find what you're looking for.
          </p>
          <Link href="/">
            <a className="mx-auto mt-16  flex w-fit items-center justify-center bg-zinc-900   px-10  py-3 font-semibold text-zinc-100 transition-all ease-in-out hover:bg-zinc-800 ">
              <span> BACK TO HOME</span>
              <BsArrowUpRight className=" ml-3 text-3xl text-lime-400" />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero
