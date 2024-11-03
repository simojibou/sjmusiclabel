import React from 'react'
import { TChildren } from '../interfaces'

function Container({ children }: TChildren) {
  return (
    <>
      <section className="relative z-30 mx-auto h-fit w-full max-w-[1400px] text-zinc-100">
        {children}
      </section>
    </>
  )
}

export default Container
