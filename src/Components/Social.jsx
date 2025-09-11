import React from 'react'
import { FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa";

export default function Social () {

  return (
  
    <div className="flex text-3xs rotate-270 gap-3">
      <p className="">SOCIAL</p>
      <ul className="flex gap-3">
    <li>
      <a 
        href="https://www.linkedin.com/in/romain-richardon-4b8083245" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedin size={20} className="text-white cursor-pointer" />
      </a>
    </li>
    <li>
      <a 
        href="https://www.instagram.com/romain23456789/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram size={20} className="text-white cursor-pointer" />
      </a>
    </li>
    <li>
      <a 
        href="https://github.com/Roms10000" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub size={20} className="text-white cursor-pointer" />
      </a>
    </li>
      </ul>
    </div>
  )
}