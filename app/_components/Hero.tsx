import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function Hero() {
  return (
    <section className="">
        <div className='flex items-baseline 
        justify-center pt-20'>
        

        </div>
  <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
      Smarter technical 
        <strong className="text-gray-600 sm:block text-5xl font-semibold hover:text-black dark:text-gray-400 dark:hover:text-white"> 
        design  automation! </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed  text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
      All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium  shadow hover:bg-slate-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          <LoginLink postLoginRedirectURL="/dashboard"> Try CleanSlate</LoginLink>
          
        </a>

       
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero