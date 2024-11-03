import React, { useRef, useState } from 'react'
import img1 from '../images/ARTISTS/img (1).jpg'
import img4 from '../images/ARTISTS/img (2).jpg'
import img3 from '../images/ARTISTS/img (3).jpg'
import img2 from '../images/ARTISTS/img (4).jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import { Autoplay } from 'swiper'

import Image from 'next/image'

function ArtisteSlider() {
  const [isCursor, setIsCursor] = useState(false)

  const swiperRef = useRef<HTMLDivElement>(null!)
  const cursorRef = useRef<HTMLDivElement>(null!)
  const handleDragCursor = (event: any) => {
    cursorRef.current.style.left = event.clientX + 'px'
    cursorRef.current.style.top = event.clientY + 'px'
  }

  const events = [
    {
      image: img1,
      artiste: ' SIMO JIBOU',
    },
    {
      image: img2,
      artiste: ' SIMO JIBOU',
    },
    {
      image: img3,
      artiste: ' Boccus & Zaa',
    },
    {
      image: img4,
      artiste: ' Oden ',
    },
  ]
  return (
    <div
      onMouseMove={handleDragCursor}
      onMouseEnter={() => setIsCursor(true)}
      onMouseLeave={() => setIsCursor(false)}
      className="relative my-24 cursor-none overflow-hidden px-5 py-10 text-zinc-100"
    >
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
          delay: 4000,
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
              className="artiste_container relative h-[500px] w-full  lg:w-[600px]"
            >
              <Image
                src={events.image}
                className="z-10"
                layout="fill"
                objectFit="cover"
              />

              <div className="artiste_name absolute right-0 z-30  hidden bg-lime-400 p-5 text-black transition-all delay-1000 ease-linear">
                <h4 className="mt-5 mb-3 text-xl">{events.artiste}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={cursorRef}
        className={`${
          isCursor ? 'block' : 'hidden'
        }  absolute z-20  flex h-32 w-32 items-center justify-center rounded-full bg-white  bg-opacity-20 text-xl text-zinc-300  backdrop-blur-xl `}
      >
        <h5> DRAG</h5>
      </div>
    </div>
  )
}

export default ArtisteSlider
