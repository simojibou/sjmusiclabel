import React, { useState, useEffect } from 'react'
import bg from '../../images/bg3.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container'
import { BsArrowUpRight } from 'react-icons/bs'
function Hero2() {
  return (
    <>
      <div className="relative mt-16 flex h-[60vh] w-full items-center justify-center bg-fixed">
        <Image
          src={bg}
          layout="fill"
          className="z-10 bg-fixed"
          alt="logo"
          objectFit="cover"
          loading="eager"
        />

        <Container>
          <a
            href="#"
            className=" absolute bottom-10 right-5  z-30  flex h-52 w-52 flex-col bg-lime-400 p-4 text-black hover:bg-lime-500  lg:bottom-24"
          >
            <BsArrowUpRight className="ml-auto text-2xl" />

            <h5 className="mt-auto mb-3 font-semibold ">
              West Palm Beach Online 2022 Official
            </h5>
          </a>
        </Container>
      </div>
    </>
  )
}

export default Hero2
