import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import {
  BsArrowUpRight,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from 'react-icons/bs'

function VideoHero() {
  // toggle play and pause icon
  const [isPlay, setIsPlay] = useState(false)
  const [isCursor, setIsCursor] = useState(false)
  // video tag ref
  const videoRef = useRef<HTMLVideoElement>(null!)
  // div tag as cursor  ref
  const playRef = useRef<HTMLDivElement>(null!)

  const handlePlayCursor = (event: any) => {
    playRef.current.style.left = event.clientX + 'px'
    playRef.current.style.top = event.clientY + 'px'
    setIsCursor(true)
  }

  const handleVideoToogle = () => {
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
    setIsPlay(!isPlay)
  }
  return (
    <section
      onMouseMove={handlePlayCursor}
      onMouseLeave={() => setIsCursor(false)}
      className="relative my-10 h-full w-full  cursor-none overflow-hidden"
    >
      <video
        src="https://rawtracks.qodeinteractive.com/wp-content/uploads/label-home-video.mp4"
        className=" left-0 z-10 w-full"
        loop
        ref={videoRef}
        onClick={handleVideoToogle}
      ></video>

      <Container>
        <a
          onMouseEnter={() => setIsCursor(false)}
          href="#"
          className=" absolute bottom-10 left-5 z-30  flex h-52 w-52 flex-col bg-lime-400 p-4 text-black hover:bg-lime-500 lg:left-20 lg:bottom-24"
        >
          <BsArrowUpRight className="ml-auto text-2xl" />

          <h5 className="mt-auto mb-3 font-semibold ">
            Dynamic Festival 2022 Official
          </h5>
        </a>
      </Container>
      {/* <div className="absolute z-50 h-full w-full bg-slate-500 "> */}
      <div
        className={`${
          isCursor ? 'block' : 'hidden'
        }  absolute z-20 flex h-32 w-32 items-center justify-center rounded-full bg-white  bg-opacity-20 text-6xl text-lime-400  backdrop-blur-xl `}
        ref={playRef}
      >
        {isPlay ? <BsPauseCircleFill /> : <BsPlayCircleFill />}
      </div>
      {/* </div> */}
    </section>
  )
}

export default VideoHero
