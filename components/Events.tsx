import React from 'react'
import { TEvents } from '../interfaces/index'
import img1 from '../images/EVENTS/img (1).jpg'
import img4 from '../images/EVENTS/img (2).jpg'
import img3 from '../images/EVENTS/img (3).jpg'
import img2 from '../images/EVENTS/img (4).jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import { Autoplay } from 'swiper'

import Image from 'next/image'

function Events() {
  const events: TEvents[] = [
    {
      image: img1,
      title: 'Nella feat. Tommy',
      artiste: ' SIMO JIBOU',
      tag: '#techno',
    },
    {
      image: img2,
      title: 'Sunday Mix',
      artiste: ' SIMO JIBOU',
      tag: '#techno',
    },
    {
      image: img3,
      title: 'Hypnotic Society',
      artiste: ' SIMO JIBOU',
      tag: '#techno',
    },
    {
      image: img4,
      title: 'Looking Beyond',
      artiste: ' Oden # Fatzo & Boccus',
      tag: '#drum & bass',
    },
  ]
  return (
    <section className="px-5 text-zinc-100">
      <Swiper
        spaceBetween={200}
        slidesPerView={'auto'}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          // delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}

        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {events.map((events, index) => (
          <SwiperSlide>
            <div
              key={index}
              className="relative  h-[350px] w-full lg:w-[600px]"
            >
              <Image src={events.image} layout="fill" objectFit="cover" />
            </div>
            <div>
              <h4 className="mt-5 mb-3 text-xl">{events.title}</h4>
              <p className="flex">
                <span className="mr-5 text-lime-400">{events.tag}</span>
                <span className="text-zinc-500 ">{events.artiste}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Events
