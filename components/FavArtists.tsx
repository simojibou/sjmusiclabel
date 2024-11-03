import React from 'react'
import { Tfavs } from '../interfaces/index'

import Container from './Container'
import Image from 'next/image'
import fav1 from '../images/Artist-img-1.jpg'
import fav2 from '../images/Artist-img-2.jpg'
import fav3 from '../images/Artist-img-3.jpg'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

function FavArtists() {
  const favs: Tfavs[] = [
    {
      image: fav1,
      name: 'SIMO JIBOU',
      tag: '#SJ',
    },
   // {
     // image: fav2,
     // name: 'Markus Weigelt',
    //  tag: '#producer',
   // },
   // {
      //image: fav3,
     // name: 'Graham Donovan',
      //tag: '#dj',
   // },
  ]
  return (
    <div>
      <Container>
        <section
          id="favArtist"
          className=" my-10 flex flex-wrap py-10 px-5 text-zinc-100"
        >
          <h2 className="mb-5 w-full text-2xl">Our favorite artist</h2>

          {favs.map((fav) => (
            <div key={fav.name} className=" my-5 w-full p-2 md:w-1/2 lg:w-1/4">
              <div className="flex items-center">
                <Image
                  src={fav.image}
                  objectFit="cover"
                  width={100}
                  height={100}
                  className=" rounded-full"
                />
                <div className="ml-4">
                  <h5 className="text-medium font-medium">{fav.name}</h5>
                  <p className="mt-1 text-sm text-lime-400">{fav.tag}</p>
                </div>
              </div>
            </div>
          ))}

          <Link href="https://www.instagram.com/simo.jibou/">
            <a
              href="#"
              className=" scale my-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-zinc-900 transition-all ease-in-out hover:scale-95"
            >
              <BsArrowUpRight className="text-3xl text-lime-400" />
            </a>
          </Link>
          {/* <div>
              <Image src={}
            </div> */}

          <div className="my-10 w-full text-5xl font-light lg:text-8xl">
            <h5>WE COLLABORATE</h5>
            <h5>
              WITH AMBITIOUS{' '}
              <span className="underline decoration-lime-400 decoration-4">
                DJS
              </span>
            </h5>
            <h5>
              AND{' '}
              <span className="underline decoration-lime-400 decoration-4">
                PRODUCERS.
              </span>
            </h5>
            <h5>LET’S MAKE SOMETHING</h5>
            <h5>GREAT TOGETHER.</h5>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default FavArtists
