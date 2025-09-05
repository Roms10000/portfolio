import React, {useState} from 'react';
import {Link} from "react-router";
import Formulaire from "./Formulaire"
import Info from "./Info"

export default function Contact () {



  return (
<>
    <div id="contact" className='h-[70vh] bg-zinc-900 grid grid-cols-6 pt-20'>
        <div className='col-start-2 col-span-2 flex flex-col'>
            <Info />
        </div>
        <div className='col-start-4 col-span-2'>
            <Formulaire />
        </div>
    </div>
</>
  )
}