import Link from "next/link";

export default function Navbar() {
    return (
      <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center">
        <div className="max-m-7xl w-full flex items-center justify-between p-4 ">
          <h6 className="font-bold">Insightful</h6>
          <ul className="flex gap-8">
            <li className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"><Link href="#home">Home</Link></li>
            <li className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"><Link href="#about">About</Link></li>
            <li className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"><Link href="#pricing">Pricing</Link></li>
          </ul>
        </div>
      </div>
    )
  }