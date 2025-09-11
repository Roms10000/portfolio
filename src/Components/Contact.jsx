import React, {useState} from 'react';
import {Link} from "react-router";
import Formulaire from "./Formulaire"
import Info from "./Info"

export default function Contact () {



  return (
<>
    <div id="contact" className='min-h-[100vh] md:min-h-[70vh] lg:min-h-[50vh] xl:min-h-[50vh] bg-zinc-900 flex flex-col lg:flex-row  lg:justify-evenly pt-20'>
        <div className='flex flex-col '>
            <Info />
        </div>
        <div className='flex'>
            <Formulaire />
        </div>
    </div>
</>
  )
}