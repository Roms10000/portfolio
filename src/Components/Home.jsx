import React from 'react'
import {Link} from "react-router";
import SplitText from "./SplitText";
import Header from './Header'
import Social from './Social'

export default function Home() {

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

  return (
<>
  <div id="home" className="h-[100vh] bg-[url('/back.jpg')] bg-cover bg-center text-white ">
      <Header/>
      <div className='h-[100vh] grid grid-cols-10 grid-rows-12'>
        <div className=' flex col-start-2 row-start-8 xl:row-start-9 row-span-2'>
          <Social/>
        </div>
        <div className='col-start-4 col-span-2 row-start-4 md:col-start-3 md:col-span-4 md:row-start-4'>
        <SplitText
          text="Romain RICHARDON -"
          className="text-4xl md:text-6xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
  />
  </div>
    <div className='col-start-4 col-span-6 row-start-6 md:col-start-3 md:col-span-4 md:row-start-7 lg:col-start-3 lg:col-span-4 lg:row-start-7 xl:col-start-5 xl:col-span-4 xl:row-start-6'>
      <SplitText
        text="DEVELOPPEUR WEB ET WEB MOBILE"
        className="text-xl md:text-2xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  </div>
</div>
</>
  )
}
