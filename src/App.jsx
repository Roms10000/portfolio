import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import Home from './Components/Home'
import Aboutme from './Components/Aboutme'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default function App () {

  return (
  <>
    <Home />
    <Aboutme />
    <Projects />
    <Contact />
    <Analytics />
  </>
  )
}