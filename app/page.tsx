import Navbar from "./components/Navbar";

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
          </div>
      </header>
    </main>
  );
}
