// import Spline from "@splinetool/react-spline";
import React, { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));
export default function Header(){
    return (
<header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-cente p-8 relative">
          <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-black md:text-8xl">
                   VisionAI
                </h1>
                <h2 className="text-md md:text-2xl">
                Transform Your Business Today!
                </h2>
              </div>
              <div className="p-wrap flex">
              <p className="ml-7 md:ml-0 max-w-md text-sm md:text-base text-zinc-500 ">
              VisionAI is a cutting-edge AI solutions provider, specializing in digital transformation and intelligent automation. Our platform leverages machine learning and advanced analytics to drive innovation, streamline operations, and create unparalleled customer experiences.
              </p>
              </div>
              <div className="w-full flex items-center justify-center md:justify-start gap-4">
                <button className="w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors">Try 7 days free</button>
                <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors'>Contact</button>
              </div>
            </div>
            <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          {/* <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/> */}
          {/* <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='/atomic.spline'/> */}
          <Suspense fallback={<div>Loading...</div>}>
      <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene="/atomic.spline" />
    </Suspense>
        </div>
      </header>
    )
}