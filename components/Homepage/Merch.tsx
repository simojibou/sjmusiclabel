import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import merch1 from '../../images/MERCH/img (1).jpg'
import merch2 from '../../images/MERCH/img (2).jpg'
import merch3 from '../../images/MERCH/img (3).jpg'
import merch4 from '../../images/MERCH/img (4).jpg'
import merch5 from '../../images/MERCH/img (5).jpg'
import merch6 from '../../images/MERCH/img (6).jpg'
import merch7 from '../../images/MERCH/img (7).jpg'
import { TMerch } from '../../interfaces/index'

function Merch() {
  const merchs: TMerch[] = [
    {
      image: merch1,
      title: 'Nella feat. Tommy',
      price: ' SIMO JIBOU',
    },
    {
      image: merch2,
      title: 'Sunday Mix',
      price: ' SIMO JIBOU',
    },
    {
      image: merch3,
      title: 'Hypnotic Album',
      price: ' SIMO JIBOU',
    },
    {
      image: merch4,
      title: 'Looking Beyond',
      price: ' Oden # Fatzo & Boccus',
    },
    {
      image: merch5,
      title: 'Psychedelic Mix',
      price: ' Oden # Fatzo & Boccus',
    },
    {
      image: merch6,
      title: 'Rare Footage Mix',
      price: ' SIMO JIBOU',
    },
    {
      image: merch7,
      title: 'The Outer Space Mix',
      price: ' Oden # Fatzo & Boccus',
    },
  ]
  return (
    <>
      <Container>
        <section className="my-10 flex flex-wrap py-10 text-zinc-100">
          <h2 className="mx-5 mb-2 w-full border-b border-b-zinc-700 pb-2 text-4xl font-light md:mb-7">
            Latest Merch
          </h2>

          {merchs.map((merch, index) => (
            <div className="my-6 w-full p-5 md:w-1/2 lg:w-1/4" key={index}>
              <div className="relative h-72 w-full">
                <Image
                  src={merch.image}
                  className="mb-5"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h5 className="mt-5 text-xl">{merch.title}</h5>
                <p className="mt-3 flex text-sm text-zinc-500">{merch.price}</p>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </>
  )
}

export default Merch
