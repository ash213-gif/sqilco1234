import React from 'react'
import icon1 from '../Componenets/Assets/download.png'
import icon2 from '../Componenets/Assets/download (1).png'
import icon3 from '../Componenets/Assets/download (2).png'



export default function Adesidn() {
    return (
        <div className=' bg-slate-900  mt-8 p-5   ' >
            <p className='text-[40px] text-white   ' >At <span className='text-pink-500' >Sqilco</span> , You... </p>
            <div className='bg-slate-900 flex gap-16 ' >
                <div className='  mt-4 ml-64  flex items-center  min-h-screen' >
                    <div class="relative flex flex-col items-center h-screen">
                        {/* <!-- Top Circle --> */}

                        <div>
                            <div class="relative z-10">
                                <div class="w-24 h-24 bg-purple-900 rounded-full flex items-center justify-center">
                                    <div class="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center">
                                        <div class="w-8 h-8 bg-pink-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <!-- Vertical Line --> */}
                        <div class="w-2 bg-white flex-grow"></div>

                        {/* <!-- Bottom Circle --> */}
                        <div class="">
                            <div class="w-24 h-24 bg-purple-900 rounded-full flex items-center justify-center">
                                <div class="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center">
                                    <div class="w-8 h-8 bg-pink-300 rounded-full"> </div>
                                </div>
                            </div>
                        </div>
                        <div className=' w-2 bg-white flex-grow ' ></div>
                        <div>
                            <div className='bg-purple-800 items-center flex  justify-center h-24 w-24 rounded-full  ' >
                                <div className=' bg-red-500 items-center flex  justify-center h-16 w-16 rounded-full' >
                                    <div className=' bg-white  h-8 w-8 rounded-full' > </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>





                <div className='m-4  gap-10 ' >
                    <div className='text-md  -ml-3 m-6 h-36 w-[450px] flex text-white ' >

                        <p>  <span className='text-pink-400' >Don’t pay for redundant courses</span>  <br />
                            We believe learning resources are already everywhere, we just curate them. So, you can leverage the goldmine that is internet.</p>
                        <img className=' h-20 w-20' src={icon1} alt="" />

                    </div>

                    <div className='text-md m-6 -ml-3 mt-6 h-36 w-[450px] flex text-white ' >

                       <p>  <span className='text-pink-400' >Don’t just learn. BUILD!</span><br /> 
                       World is infinite, and the fastest way to get better is by continuously pushing on a project.</p>
                        <img className=' h-20 w-20' src={icon2} alt="" />

                    </div>

                    <div className='text-md m-6   gap-10 mt-6 -ml-3 h-36 w-[450px] flex text-white ' >

                        <p className='' >  <span className='text-pink-400' > Work with Data, not Fantasies</span> <br />
                        Forget random ideas. we do check the viability of product before picking them. If it’s not going to end user, you won’t be building it.</p>
                        <img className=' h-20 w-20' src={icon3} alt="" />

                    </div>

                </div>
            </div>

        </div>
    )
}
