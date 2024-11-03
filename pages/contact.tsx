import React from 'react'
import Hero from '../components/Contact/Hero'
import ContactForm from '../components/ContactForm'
import Container from '../components/Container'
import InstagramPosts from '../components/InstagramPosts'
import { BsArrowUpRight } from 'react-icons/bs'

function contact() {
  return (
    <main>
      <Hero />
      <Container>
        <section className="my-20 flex flex-wrap ">
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.659892332181!2d3.341970449414799!3d6.564542386946468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dfee1f1bb7d%3A0xf71d0e068a8f70fb!2sArowojobe%20Street%2C%20Mafoluku%20Oshodi%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1651576586800!5m2!1sen!2sng"
          width={100 + '%'}
          height={600 + 'px'}
          style={{ border: 0 }}
          loading="lazy"
          className="my-16"
        ></iframe>
      </Container>
      <ContactForm />
      <InstagramPosts />
    </main>
  )
}

export default contact
