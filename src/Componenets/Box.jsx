import React from 'react'

export default function Box() {
    return (
        <div className='flex justify-around bg-slate-950 p-10 ' >

            <div className='  items-center   border-2 rounded-md hover:shadow-[1px_1px_20px_1px] hover:shadow-pink-500  border-pink-500  max-h-40 w-72 	overflow-hidden flex flex-col   ' >

                <img className='h-24 w-24' src="https://sqilco.com/student.png" alt="icon tii" />

                <p className=' text-center  text-pink-300' > <span className='text-2xl font-semibold' >134+ <br /></span> 
                    
                    <span className=' text-md text-white ' >
                   Student placed
               </span>
               </p>
            </div>

            <div className='  items-center rounded-md hover:shadow-[1px_1px_20px_1px] hover:shadow-pink-500  border-pink-500  border-2  max-h-40 w-72   	overflow-hidden flex flex-col   ' >

                <img className='h-24 w-24' src="https://sqilco.com/topic.png" alt="icon tii" />

                <p className=' text-center  text-pink-300' > <span className='text-2xl font-semibold' >134+ <br /></span> 
                    
                     <span className=' text-md text-white ' >
                     Start Up Partnership 
                 </span>
                </p>
            </div>


            <div className='  items-center  rounded-md hover:shadow-[1px_1px_20px_1px] hover:shadow-pink-500  border-pink-500  border-2  max-h-40 w-72  	overflow-hidden flex flex-col   ' >
                <img className='h-24 w-24' src="https://sqilco.com/resource.png" alt="icon tii" />
                <p className=' text-center  text-pink-300' > <span className='text-2xl font-semibold' >134+ <br /></span> 
                    
                     <span className=' text-md text-white ' >
                     Active learners
                </span>
                </p>
            </div>





        </div>
    )
}
