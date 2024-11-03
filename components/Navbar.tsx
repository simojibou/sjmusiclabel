import React, { useState, useEffect } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'
import Container from './Container'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter()
  const [isNavbarActive, setIsNavbarActive] = useState(false)

  type TNavLinks = {
    title: string
    path: string
  }

  // navbar links

  const navLinks: TNavLinks[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Events',
      path: '/events',
    },

    {
      title: '404',
      path: '/error',
    },

    {
      title: 'Contact',
      path: '/contact',
    },
  ]
  // navabar toogle state
  const [isSidebar, setIsSidebar] = useState(false)

  // change header background on-scroll
  const listenToScroll: EventListener = (event: Event) => {
    if (window.scrollY >= 100) {
      setIsNavbarActive(true)
    } else {
      setIsNavbarActive(false)
    }
  }

  useEffect(() => {
    const win: Window = window
    win.addEventListener('scroll', listenToScroll)
  })
  return (
    <header
      className={`${
        isNavbarActive
          ? 'border-b border-b-zinc-700 bg-black'
          : 'bg-transparent'
      }  fixed top-0 z-50 max-h-28 w-full overflow-hidden border-b-zinc-700  py-3 transition-all  ease-in-out `}
    >
      <Container>
        <nav className=" flex  items-center justify-between px-5 md:px-3 ">
          <Link href="/" passHref>
            {/* logo */}
            <a className="cursor-pointer text-2xl font-semibold text-zinc-100 md:text-3xl">
              SJ
            </a>
          </Link>

          <div className="flex">
            <div
              className={` ${
                isSidebar ? 'block bg-black ' : 'hidden'
              } duration-400 fixed inset-0  h-screen  ease-in-out lg:relative
          lg:block lg:h-full`}
            >
              <MdOutlineClose
                className="absolute right-10  top-10 cursor-pointer text-3xl text-zinc-600  lg:hidden"
                onClick={() => setIsSidebar(false)}
              />

              <ul
                className={` ml-auto -mt-10 flex h-full flex-col items-center  justify-center  text-zinc-600 dark:text-zinc-100 md:-mt-0 lg:flex-row`}
              >
                {navLinks.map((navLink) => (
                  <li
                    className={` ${
                      router.pathname === navLink.path
                        ? 'text-lime-400'
                        : 'text-zinc-100'
                    } my-4 flex flex-col items-center px-4 py-2   font-medium uppercase hover:text-lime-400   lg:my-1 lg:capitalize`}
                    onClick={() => setIsSidebar(false)}
                    key={navLink.title}
                  >
                    <Link href={navLink.path}>
                      <a>{navLink.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* navbar toggle icon */}
            <div
              onClick={() => setIsSidebar(true)}
              className="mr-3 flex w-fit cursor-pointer flex-col  transition-all ease-in-out hover:scale-x-50 lg:mr-0 lg:hidden"
            >
              <div className="h-0.5 w-12 rounded bg-lime-400 lg:w-24"></div>
              <div className="mt-2 -ml-5 h-0.5 w-12 rounded bg-lime-400 lg:-ml-10 lg:w-24"></div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
