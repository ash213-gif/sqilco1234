import React from 'react'
// import image1 from '../Componenets/Assets/imas.png'
export default function Div() {
    return (
        <div className='    justify-between p-20   bg-black flex text-white ' >

            <div className='   ' >

                <h1 className='  bg-black  text-[60px] ' >
                    <span className='  text-white' > sqilco </span >  <span className='text-pink-400' >upskills</span>  </h1>

                <h5 className='font-semibold' >Accelerate your career <span className='    text-orange-400  ' > with in-demand skills </span> .</h5>

                <div className='flex  font-semibold m-2  gap-20 ' >
                    <div className=' w-44 ' >
                        {/* <img src={image1} alt="" /> */}
                        <p>Upskill with <span className='text-orange-400  font-semibold ' >Community Curated Resources</span> </p>
                    </div>


                    <div className=' w-44' >
                        <img src="https://sqilco.com/icon_project.png" alt="icon " />
                        <p>Build Live projects <span className='text-orange-400 font-semibold' >with Seasoned Mentors👨🏽‍💻</span> </p>
                    </div>


                </div>
                <br />
                <div className='flex  justify-around' >
                    <div className='  w-[139px]  bg-white relative rounded-lg  h-[43px] ' >
                        <button className=' p-2 h-[43px] w-[139px]  duration-300 absolute  hover:-translate-x-1 -top-1 left-[3px]  hover:translate-y-1 bg-pink-500 text-white rounded-lg  text-xl ' >regester here </button>
                    </div>


                    <div className='  w-[139px]  bg-white relative rounded-lg  h-[43px] ' >
                        <button className=' p-2 h-[43px] w-[139px]  duration-300 absolute  hover:translate-x-1 -top-1 -left-[3px]  hover:translate-y-1 bg-pink-500 text-white rounded-lg  text-xl ' >regester here </button>
                    </div>

                </div>


            </div>

            <div>
                <img src="https://sqilco.com/Group1000015016.svg" alt="image  " />
            </div>

        </div>
    )
}
