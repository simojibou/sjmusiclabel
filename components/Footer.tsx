import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <section className="bg-zinc-900 py-16">
        <Container>
          <section className="flex flex-wrap py-16 px-3 text-zinc-100 ">
            <div className="mb-5 w-full md:mb-0 md:w-1/2 lg:w-1/4 ">
              <Link href="/" passHref>
                <a className="cursor-pointer p-2 text-3xl font-semibold text-zinc-100 md:text-4xl">
                  SJ
                </a>
              </Link>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/4">
              <h4 className="flex items-center">
                <span className="font-xl mb-2 flex text-xl">
                  simo.jibou@gmail.com
                </span>
                <BsArrowUpRight className="ml-3 text-lime-400" />
              </h4>
              <p className="font-light text-zinc-300">
                Book world-renowned and rising music artists, DJs, producers.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="mt-10 w-full border-b border-b-zinc-500"></div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/4"></div>
            <Link href="https://www.instagram.com/simo.jibou/" passHref>
              <h5 className="mt-10 w-full p-2 text-3xl text-zinc-200 hover:text-zinc-50 md:w-1/2 lg:w-1/4 cursor-pointer">
                Instagram
              </h5>
            </Link>
            <Link href="https://x.com/simo_jibou" passHref>
              <h5 className="mt-10 w-full p-2 text-3xl text-zinc-200 hover:text-zinc-50 md:w-1/2 lg:w-1/4 cursor-pointer">
                X
              </h5>
            </Link>
            <Link href="https://www.whatsapp.com/channel/0029Va1kGKLD8SDseD2HcA3M" passHref>
              <h5 className="mt-10 w-full p-2 text-3xl text-zinc-200 hover:text-zinc-50 md:w-1/2 lg:w-1/4 cursor-pointer">
                WhatsApp
              </h5>
            </Link>
          </section>
        </Container>
      </section>
      <div className="w-full bg-lime-400 py-2 px-3 text-sm ">
        <Container>
          <p className="font-semibold text-black">SJ</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
