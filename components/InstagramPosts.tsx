import React from 'react'
import Container from './Container'
import Image from 'next/image'
import img1 from '../images/INSTAGRAM_IMAGES/img (1).jpg'
import img2 from '../images/INSTAGRAM_IMAGES/img (2).jpg'
import img3 from '../images/INSTAGRAM_IMAGES/img (3).jpg'
import img4 from '../images/INSTAGRAM_IMAGES/img (4).jpg'
import img5 from '../images/INSTAGRAM_IMAGES/img (5).jpg'
import img6 from '../images/INSTAGRAM_IMAGES/img (6).jpg'
import img7 from '../images/INSTAGRAM_IMAGES/img (7).jpg'
import img8 from '../images/INSTAGRAM_IMAGES/img (8).jpg'
import { AiFillInstagram } from 'react-icons/ai'
function InstagramPosts() {
  const posts: StaticImageData[] = [img1, img2, img3, img4, img5, img6]

  return (
    <>
      <Container>
        <section className="my-10 flex flex-wrap py-10 text-zinc-100">
          {posts.map((post, index) => (
            <div
              className="relative my-0 w-1/2 p-2 md:w-1/3  lg:w-1/4"
              key={index}
            >
              <div className="instagram_post_container relative h-52 w-full">
                <Image
                  src={post}
                  className="mb-5"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="instagram_post_overlay hidden  h-full w-full">
                  <span className=" absolute z-20 flex  h-full w-full items-center justify-center bg-zinc-900 transition-all ease-linear">
                    <AiFillInstagram className="text-xl text-lime-400" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </>
  )
}

export default InstagramPosts
