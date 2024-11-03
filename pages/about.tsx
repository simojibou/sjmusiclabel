import React from 'react'
import Hero from '../components/About/Hero'
import ArtisteSlider from '../components/ArtisteSlider'
import Container from '../components/Container'
import FavArtists from '../components/FavArtists'
import { BsArrowUpRight } from 'react-icons/bs'
import VideoHero from '../components/VideoHero'
import ContactForm from '../components/ContactForm'
import InstagramPosts from '../components/InstagramPosts'

function about() {
  return (
    <main>
      <Hero />
      <FavArtists />
      <ArtisteSlider />

      <Container>
        <section className="mb-10 flex flex-wrap">
          <div className=" w-full p-5 text-sm font-semibold text-zinc-400 lg:w-1/3">
            UPCOMING TOUR
          </div>
          <h5 className=" w-full p-5 text-2xl text-zinc-200 lg:w-1/3">
            We collaborate with ambitious DJs and producers. let’s build
            something great together.
          </h5>
          <div className=" w-full p-5  text-zinc-200 lg:w-1/3">
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
              lacus ante. Aliquam gravida pretium nisl, quis accumsan dolor.
              Phasellus id purus feugia, scelerisque nisl id, maximus magna.
              Duis quis quam ullamcorper nulla siti es suscipit hendrerit in nec
              metus. Cras eu ornare massa. Aenean placerat etim augue ligula, eu
              rutrum massa imperdiet vitae. Suspendisse a nisl euismod,
              elementum lectus sed, placerat leo…
            </p>
            <div className="mt-10">
              <p className="flex items-center">
                <span className="font-xl mb-2 flex text-xl">
                  simo.jibou@gmail.com
                </span>{' '}
                <BsArrowUpRight className="ml-3 text-lime-400" />
              </p>
              <p className="font-light text-zinc-300">
                Submit music for consideration. Thanks and best of luck!
              </p>
            </div>
          </div>
        </section>
      </Container>

      <VideoHero />
      <ContactForm />
      <InstagramPosts />
    </main>
  )
}

export default about
