import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import { TChildren } from '../interfaces'
import Footer from './Footer'
import Label from './Label'

function Layout({ children }: TChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Label />
    </>
  )
}

export default Layout
