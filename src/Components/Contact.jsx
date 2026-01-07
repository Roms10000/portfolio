import React, {useState} from 'react';
import {Link} from "react-router";
import Formulaire from "./Formulaire"
import Info from "./Info"

export default function Contact () {



  return (
<>
  <div id="contact" className='min-h-[100svh] md:min-h-[70svh] lg:min-h-[50svh] xl:min-h-[50svh] bg-zinc-900 flex flex-col lg:flex-row  lg:justify-evenly pt-20'>
    <div className='flex flex-col '>
      <Info />
    </div>
    <div className='flex mt-10'>
      <Formulaire />
    </div>
  </div>
</>
  )
}