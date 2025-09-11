import React from 'react'
import { Link } from "react-scroll";

export default function Header() {

  return (
<>
    <div className='h-35 bgNone'>
        <nav>
            <ul className="gap-5 md:gap-40 flex justify-center pt-2 md:pt-5">
                <li>
                <Link
                    to="aboutme"
                    className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] text-xl cursor-pointer">A propos de moi
                </Link>
                </li>
                <li>
                <Link
                to="projects"
                className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] text-xl cursor-pointer">Mes projets
                </Link>
                </li>
                <li>
                <Link
                to="contact"
                className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] text-xl cursor-pointer">Contact
                </Link>
                </li>
            </ul>
        </nav>
            <div className='flex items-start fixed top-30 md:top-25 md:left-5 md:z-50 lg:top-5 lg:left-5 lg:z-50 xl:top-5 xl:left-25 xl:z-50'>
                <Link to="home"><img className="cursor-pointer" src="fusée.png" width={80}/></Link>
            </div>
    </div>
</>
  )
}