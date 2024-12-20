import React from 'react'
import card1 from '../Componenets/Assets/cards/xvy5qb3xpehbmfuirk10 (1).png'
import card2 from '../Componenets/Assets/cards/krishna_ifsxre.png'
import card3 from '../Componenets/Assets/cards/1699889296377-removebg-preview_lk2w0x.png'
import card4 from '../Componenets/Assets/cards/Vaibhav_Aggarwal_kh4ece.jpg'
import { FaLinkedinIn } from "react-icons/fa6";

export default function Mentors() {
  return (
    <div>

      <p className='text-[35px]  ' >Get Mentored By <span className='text-pink-400' >The Best</span>
      </p>
      <div className='p-4 flex gap-5  ' >
        <div className='h-96 w-72 rounded-md  border-1 border-white    shadow-md ' >
          <img className='h-72  object-cover w-72' src={card1} alt="" />

          <p className='text-center p-2 ' > <span className='font-semibold text-xl' >Ravi Singh</span>   <br />
            <span className=' opacity-50  text-sm  ' >Software Developer @ EXL</span> </p>

            <FaLinkedinIn />


        </div>

        <div className='h-96 w-72 rounded-md  border-1 border-white    shadow-md ' >
          <img className='h-72  object-cover w-72' src={card2} alt="" />

          <p className='text-center p-2 ' > <span className='font-semibold text-xl' >Ravi Singh</span>   <br />
            <span className=' opacity-50  text-sm  ' >Software Developer @ EXL</span> </p>


        </div>


        <div className='h-96 w-72 rounded-md  border-1 border-white    shadow-md ' >
          <img className='h-72  object-cover w-72' src={card3} alt="" />

          <p className='text-center p-2 ' > <span className='font-semibold text-xl' >Ravi Singh</span>   <br />
            <span className=' opacity-50  text-sm  ' >Software Developer @ EXL</span> </p>


        </div>


        <div className='h-96 w-72 rounded-md  border-1 border-white    shadow-md ' >
          <img className='h-72  object-cover w-72' src={card4} alt="" />

          <p className='text-center p-2 ' > <span className='font-semibold text-xl' >Ravi Singh</span>   <br />
            <span className=' opacity-50  text-sm  ' >Software Developer @ EXL</span> </p>


        </div>

      </div>

    </div>
  )
}
