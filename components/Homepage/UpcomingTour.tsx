import React from 'react'
import Container from '../Container'
import { BsArrowUpRight } from 'react-icons/bs'
import { Ttours } from '../../interfaces/index'

function UpcomingTour() {
  const tours = [
    {
      date: '17',
      month: 'May',
      title: 'Wonderland Beats Festival Graham Donovan',
      city: 'Florida',
      state: 'Miami',
    },
    {
      date: '23',
      month: 'Apr',
      title: 'Dreamland Kingdom Fest SIMO JIBOU',
      city: 'Paris',
      state: 'France',
    },
    {
      date: '14',
      month: 'Feb',
      title: 'Turbosounds Festival 2022 Graham Donovan',
      city: 'Florida',
      state: 'Miami',
    },
    {
      date: '17',
      month: 'May',
      title: 'Wonderland Beats Festival Graham Donovan',
      city: 'Florida',
      state: 'Miami',
    },
  ]
  return (
    <Container>
      <h2 className="mx-5 my-20 mb-2 w-full border-b border-b-zinc-700 py-10 pb-2 text-4xl font-light md:mb-5">
        Explore Upcoming Tour
      </h2>

      {tours.map((tour, index) => (
        <div
          key={index}
          className="mt-5 flex flex-wrap items-center justify-between border-b border-b-zinc-700 py-7 px-4 transition-all ease-linear hover:border-b-lime-400 md:mt-0"
        >
          <h4 className="w-full md:w-[10%]">
            <span className="text-6xl">{tour.date}</span>
            <sup className="ml-3 text-base">{tour.month}</sup>
          </h4>

          <h5 className="w-full text-lg font-medium md:w-1/4 lg:w-1/4">
            {tour.title}
          </h5>

          <div className="flex w-full md:w-1/4 lg:w-1/4">
            <span className="mr-4 text-lime-400">{tour.state}</span>
            <span className="text-zinc-500">{tour.city}</span>
          </div>

          <h3 className="flex w-full cursor-pointer items-center hover:text-lime-400 md:w-1/4 lg:w-1/4 lg:justify-end ">
            <span>Buy Tickets</span>{' '}
            <BsArrowUpRight className="ml-2 text-lg text-lime-400" />
          </h3>
        </div>
      ))}
    </Container>
  )
}

export default UpcomingTour
