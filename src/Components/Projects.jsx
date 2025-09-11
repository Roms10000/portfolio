import React from 'react'
import {Link} from "react-router";
import {FaGithub,FaVideo} from "react-icons/fa";
import SpotlightCard from './SpotlightCard'


export default function Projects() {

  return (
<>
    <div id="projects" className='min-h-[100vh] md:min-h-[60vh] xl:min-h-[80vh] bg-zinc-800'>
        <h1 className='text-4xl text-center pt-10'>Mes projets</h1>
            <div className='flex justify-center pt-3'><hr className='w-30 '/></div>
            <div className='flex flex-col items-center justify-center md:flex-row md:justify-center gap-30 pt-30'>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.4)">
                    <h5 className="mb-2 text-xl lg:text-2xl font-bold  text-white underline underline-offset-4">Site de demande de prestation</h5>
                    <img src="/site_devis.jpg"></img>
                    <div className='flex justify-center mt-5'>
                    <a href="/demo_pdev.mp4" target="_blank" className="text-black bg-white  hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"><FaVideo size={20} className="text-black cursor-pointer" /></a>
                    <a href="https://github.com/Roms10000/front_end_website_devis" target="_blank" className="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 cursor-pointer"><FaGithub size={20} className="text-black cursor-pointer" /></a>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.4)">
                    <h5 className="mb-2 text-xl lg:text-2xl font-bold  text-white underline underline-offset-4 ">Site de demande de réservation</h5>
                    <img src="/site_reservation.jpg"></img>
                    <div className='flex justify-center mt-5'>
                    <a href="/demo_resa_salles.mp4" target='_blank' className="text-black bg-white  hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"><FaVideo size={20} className="text-black cursor-pointer" /></a>
                    <a href="https://github.com/TPierre86/Projet-Calendrier-Reservation" target="_blank"  className="text-black bg-white  hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 cursor-pointer"><FaGithub size={20} className="text-black cursor-pointer" /></a>
                    </div>
                </SpotlightCard>
            </div>
    </div>
</>
  )
}