import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import lr1 from '../../images/LR/img (1).jpg'
import lr2 from '../../images/LR/img (2).jpg'
import lr3 from '../../images/LR/img (3).jpg'
import lr4 from '../../images/LR/img (4).jpg'
import lr5 from '../../images/LR/img (5).jpg'
import lr6 from '../../images/LR/img (6).jpg'
import lr7 from '../../images/LR/img (7).jpg'
import { TReleases } from '../../interfaces/index'

function LatestRelease() {
  const releases: TReleases[] = [
    {
      image: lr1,
      title: 'Nella feat. Tommy',
      artiste: ' SIMO JIBOU',
      tag: '#techno',
      genre: 'driving/peak time',
    },
    {
      image: lr2,
      title: 'Sunday Mix',
      artiste: ' SIMO JIBOU',
      tag: '#techno',
      genre: 'driving/peak time',
    },
    {
      image: lr3,
      title: 'Hypnotic Society',
      artiste: ' SIMO JIBOU',
      tag: '#techno',
      genre: 'driving/peak time',
    },
    {
      image: lr4,
      title: 'Looking Beyond',
      artiste: ' Oden # Fatzo & Boccus',
      tag: '#drum & bass',
      genre: 'clubing/ warmup',
    },
    {
      image: lr5,
      title: 'Psychedelic Mix',
      artiste: ' Oden # Fatzo & Boccus',
      tag: '#drum & bass',
      genre: 'clubing/ warmup',
    },
    {
      image: lr6,
      title: 'Rare Footage Mix',
      artiste: ' SIMO JIBOU',
      tag: '#drum & bass',
      genre: 'driving/peak time',
    },
    {
      image: lr7,
      title: 'The Outer Space Mix',
      artiste: ' Oden # Fatzo & Boccus',
      tag: '#drum & bass',
      genre: 'clubing/ warmup',
    },
  ]
  return (
    <>
      <Container>
        <section className="my-10 flex flex-wrap py-10 text-zinc-100">
          <h2 className="mx-5 mb-2 w-full border-b border-b-zinc-700 pb-2 text-4xl font-light md:mb-7">
            Latest Releases
          </h2>

          {releases.map((release, index) => (
            <div className="my-6 w-full p-5 md:w-1/2 lg:w-1/4" key={index}>
              <div className="relative h-72 w-full">
                <Image
                  src={release.image}
                  className="mb-5"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h5 className="mt-5 text-xl">
                  {release.title} <br /> {release.artiste}
                </h5>
                <p className="mt-3 flex text-sm">
                  {' '}
                  <span className="mr-5 text-lime-400">{release.tag}</span>
                  <span className="text-zinc-500">{release.genre}</span>
                </p>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </>
  )
}

export default LatestRelease
