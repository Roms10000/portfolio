import React from 'react'
import {Link} from "react-router";
import LogoLoop from './LogoLoop';
import { FaJs,FaCss3,FaHtml5,FaReact,FaSymfony,FaPhp, FaDocker} from "react-icons/fa";
import { SiTailwindcss,SiMongodb, SiMysql } from 'react-icons/si';
import Carousel from './Carousel';

export default function Aboutme() {

  const techLogos = [
  { node: <FaReact  />, title: "React", href: "https://react.dev" },
  { node: <FaPhp />, title: "Php", href: "https://www.php.net/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <FaSymfony />, title: "Symfony", href: "https://symfony.com/" },
  { node: <SiMongodb />, title: "Mongodb", href: "https://www.mongodb.com/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/fr/" },
  ];

  return (
<div id="aboutme" className="min-h-[140vh] md:min-h-[120vh] lg:min-h-[80vh] bg-zinc-900 text-white grid grid-cols-6 auto-rows-min gap-4 pt-5">
     <h1 className="text-4xl col-start-2 mt-10 col-span-6 md:col-start-3 lg:col-start-2">A propos de moi</h1>
     <hr className='col-start-2 w-30 md:col-start-3 lg:col-start-2'/>
     <div className='col-start-2 col-span-5 md:col-start-2 md:col-span-4 lg:col-span-2 lg:col-start-2 pt-8'>
     <p>Je m'apelle Romain RICHARDON, j'ai 27 ans je suis developpeur web et web mobile depuis mai 2025 après 8 ans dans l'armée de Terre. Si le football et les jeux vidéo sont mes principales passions, j’aime aussi explorer et m’intéresser à de nombreux autres domaines.</p>
      <br/>
      <p>À la recherche d'innombrables projets pour parfaire mon expérience dans le domaine.</p>
      <p className='mt-15'>Voici les différents stacks avec lesquels je suis familier :</p>
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
      className="mt-10"
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
      <div className='flex justify-center'>
      <a href="/CV_Romain_RICHARDON.pdf" download="CV_Romain_RICHARDON.pdf" className="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">Télécharger mon CV</a>
      </div>
     </div>
     <div className='md:col-start-3 lg:col-start-5 md:col-span-2 col-start-2 mt-10'>
      <Carousel />
     </div>
</div>
  )
}