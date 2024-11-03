import React, { useState, useEffect } from 'react'
import bg from '../../images/aboutbg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Container from '../Container'

function Hero() {
  return (
    <>
      <div className="relative flex h-[70vh] w-full items-center ">
        <Image
          src={bg}
          layout="fill"
          className="z-10"
          alt="logo"
          objectFit="cover"
          priority
          loading="eager"
        />

        <Container>
          <div className=" z-30  text-zinc-100">
            {' '}
            <h1 className="my-2 px-5 text-6xl font-light ">About Us</h1>{' '}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Hero
