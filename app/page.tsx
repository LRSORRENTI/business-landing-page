"use client"
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import Image from "next/image";
import infoCards from "./libs/infoCards";
import { LucideIcon } from "lucide-react";
import { ReactElement } from "react";
import { AnyMxRecord } from "dns";

interface IInfoCardProps {
  title: string;
  Icon: LucideIcon;
  children: ReactElement<any, any>
}

function infoCard({title, Icon, children}: IInfoCardProps){
    return (
      <div className="w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ">
        <div className="p-4 bg-fuchsia-700 rounded-full">
          <Icon/>
        </div>
      </div>
    )
}


export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      <Navbar/>
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-cente p-8 relative overflow-x-hidden">
          <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-black md:text-8xl">
                  Insightful
                </h1>
                <h2 className="text-md md:text-2xl">
                  Start growing today!
                </h2>
              </div>
              <p className="max-w-md text-sm md:text-base text-zinc-500 ">
                Insightful is an AI powered sales optimization tool that provides data-driven insights to boost sales performance.
              </p>
              <div className="w-full flex items-center justify-center md:justify-start gap-4">
                <button className="w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors">Try 7 days free</button>
                <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors'>Contact</button>
              </div>
            </div>
            <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/>
        </div>
      </header>
      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        <div className="absolute -z-10 h-full overflow-hidden">
          <Image src="business-landing-page/public/vercel.svg" alt={"A Nice Image Of Vercel Logo"} fill className="absolute object-cover w-full overflow-visible sm:rotate-90"/>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className="text-4xl md:text-5xl font-bold">No More Time Wasted</h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard) => {
                return {
                  
                }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
