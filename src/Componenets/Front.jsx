import React from 'react'
import khushi from '../Componenets/Assets/IMG-20240919-WA0016_sgrwuo.png'

export default function Front() {
  return (
    <div>
      <div className='  bg-black  ' >
        <p className='text-pink-300 text-[40px] text-center font-semibold ' >Our Testimonials
        </p>
        <div className=' h-[450 0px ] w-[400px]  border-4 rounded-md  justify-self-center  m-20  p-6  border-pink-500  ' >

          <img className='rounded-full   ml-24  -mt-20  border-4 border-pink-500  h-36 w-36  ' src={khushi} alt="khushi " />
          <div className='  text-white text-balance  ' >
            <h3 className='text-lg  m-4  text-pink-400 text-center ' >  <span className='text-white  text-2xl ' >  Khushi Nain </span>  <br />
             Student Frontend Course  <br />

            </h3> 
            <p className='text-center text-balance' > I completed my frontend course at Squilco under the guidance of my mentor, Ravi Singh. He provided excellent mentorship, always offering the best guidance and support throughout my learning journey. Ravi Singh's ability to solve problems in real-time helped me understand complex concepts and apply them effectively in projects. His practical approach made the learning process smooth and insightful.
            </p>


          </div >

        </div>
        <div className='  w-[139px] justify-self-center -mt-5  bg-white relative rounded-lg  h-[43px] ' >
                        <button className=' p-2 h-[43px] w-[139px]  duration-300 absolute  hover:-translate-x-1 -top-1 left-[3px]  hover:translate-y-1 bg-pink-500 text-white rounded-lg  text-xl ' >regester here </button>
                    </div>
</div>

      </div>
      )
}
