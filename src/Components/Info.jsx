import React, {useState} from 'react';
import SpotlightCard from './SpotlightCard'
import { FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa";

export default function Info () {


return (
<>
    <div className='flex flex-col items-center'>
        <p className='text-4xl'>Contact</p>
        <hr className='w-20'/>
    </div>
    <div className='flex justify-center'>
        <p className='text-white mt-10'>N'hésitez pas à me contacter je prendrais toujours le temps de vous répondre peu importe le sujet !</p>
    </div>
    <div className='flex flex-col xxl:flex-row gap-10 xxl:gap-50 mt-20'>
        <div className='flex flex-col items-center'>
            <p className='mb-2 text-xl '>Adresse:</p>
            <p className='text-white '>10000 Troyes</p>
        </div>
        <div className='flex flex-col items-center'>
            <p className='mb-2 text-xl'>Email:</p>
            <a href="mailto:roms.10@outlook.fr" className='text-white mb-2'>roms.10@outlook.fr</a>
        </div>
        <div className='flex flex-row xxl:flex-col gap-5 justify-center'>
              <a 
                href="https://www.linkedin.com/in/romain-richardon-4b8083245" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} className="text-white cursor-pointer" />
              </a>
              <a 
                href="https://www.instagram.com/romain23456789/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} className="text-white cursor-pointer" />
              </a>
              <a 
                href="https://github.com/Roms10000" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub size={30} className="text-white cursor-pointer" />
              </a>
        </div>
    </div>

</>
    )
}