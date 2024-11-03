import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'
import poster from '../images/Event-img-1.jpg'
import { BsArrowUpRight } from 'react-icons/bs'
import {
  FaFacebookSquare,
  FaSpotify,
  FaTwitter,
  FaYoutube,
  FaSoundcloud,
} from 'react-icons/fa'

function events() {
  return (
    <main className="pt-24">
      <Container>
        <section className="mb-20 flex  flex-wrap justify-between px-5">
          <div className="w-full lg:w-1/4">
            <div className=" relative h-[500px] w-full  ">
              <Image src={poster} layout="fill" objectFit="contain" />
            </div>
            <h3 className="mt-10 mb-5 text-2xl">DETAILS</h3>
            <ul className="text-lg">
              <li>
                <b className="mr-2">Date:</b>{' '}
                <span className="text-zinc-400">17 - 21 Jul</span>{' '}
              </li>
              <li>
                <b className="mr-2">Time:</b>{' '}
                <span className="text-zinc-400">8PM</span>{' '}
              </li>
              <li>
                <b className="mr-2">Location:</b>{' '}
                <span className="text-zinc-400">Eko Hotel</span>{' '}
              </li>
              <li>
                <b className="mr-2">Organized By:</b>{' '}
                <span className="text-zinc-400">SIMO JIBOU</span>{' '}
              </li>
            </ul>

            <button className="my-10 flex items-center justify-center  bg-zinc-900 px-7 py-4">
              <span>Buy Tickets</span>
              <BsArrowUpRight className="ml-3 text-lime-400" />
            </button>
          </div>

          <div className="w-full overflow-hidden p-2 px-4 lg:w-[70%]">
            {/* <h3 className="ml-3  mb-3 w-full text-xl font-semibold">
              MAP YOUR WAY TO US
            </h3> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.659892332181!2d3.341970449414799!3d6.564542386946468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dfee1f1bb7d%3A0xf71d0e068a8f70fb!2sArowojobe%20Street%2C%20Mafoluku%20Oshodi%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1651576586800!5m2!1sen!2sng"
              width={100 + '%'}
              height={480 + 'px'}
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

            <h2 className="mt-10 text-3xl">About event</h2>
            <p className="text-light mt-5 text-zinc-300">
              Lorem ipsum dolor sit amet, est ad graecis principes. Ad vis
              iisque saperet. Eu eos quod affert. Vim invidunt efficiendi ea, eu
              eos veniam percipit dignissim, an cum suas laudem. Eum eu ipsum
              men titum delectus. Te vix solet consula expetendis. Dictas elige
              ndi antiopam has ne, admodum hendreriteu vis.
            </p>
            <p className="text-light mt-5 text-zinc-300">
              Lorem ipsum dolor sit amet, est ad graecis principes. Ad vis
              iisque saperet. Eu eos quod affert. Vim invidunt efficiendi ea, eu
              eos veniam percipit dignissim, an cum suas laudem. Eum eu ipsum
              men titum delectus. Te vix solet consula expetendis. Dictas elige
              ndi antiopam has ne, admodum hendreriteu vis.
            </p>

            <h2 className="mt-6 text-2xl">SJ </h2>

            <p className="my-3 flex text-xl text-zinc-100">
              <FaTwitter className="mr-5 hover:text-lime-400" />
              <FaFacebookSquare className="mx-5 hover:text-lime-400" />
              <FaYoutube className="mx-5 hover:text-lime-400" />
              <FaSpotify className="https://open.spotify.com/artist/435SbwFjs0ZPb6dchnjfZS?si=9cSQ4YbuS0CGr2-hei2rng" />
              <FaSoundcloud className="mx-5 hover:text-lime-400" />
            </p>
          </div>
        </section>
      </Container>
    </main>
  )
}

export default events
