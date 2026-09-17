import React from 'react'
import Balls from './balls'

const Team = () => {
  return (
    <>
    <section className="self-start flex flex-col min-h-[calc(100vh-80px)] w-full pt-6 lg:pt-0 sm:pt-16 pb-20 sm:pb-28 px-0 sm:px-0 lg:px-0 max-w-6xl ml-4" id="team">
       
        <h2 className="heading">Our <span>Team</span></h2>
        <div className="grid grid-cols-1 gap-20 items-start sm:grid-cols-2 lg:grid-cols-4 p-5 text-center lg:text-left mb-6 sm:mb-8">
            {/* Team members will go here */}
            <article className="w-85 h-85 lg:h-65 sm:w-72 lg:w-60 flex flex-col p-4 h-65 border border-gray-200 rounded-lg hover:bg-white/10 hover:border-green-500">
                <div className='filter saturate-0 hover:saturate-100 transition duration-300 '>
                    <img src="./src/assets/manlab.jpg" alt="Team member" className="" />
                </div>
                <div className='text-black text-center mt-8 sm:mt-8 lg:mt-8'>
                <h3 className="team__name">John Doe</h3>
                <p className="team__role">Developer</p>
                </div>
            </article>
           <article className="w-85 h-85 lg:h-65 sm:w-72 lg:w-60 flex flex-col p-4 h-65 border border-gray-200 rounded-lg hover:bg-white/10 hover:border-green-500">
                <div className='filter saturate-0 hover:saturate-100 transition duration-300 '>
                    <img src="./src/assets/manlab.jpg" alt="Team member" className="" />
                </div>
                <div className='text-black text-center mt-8 sm:mt-8 lg:mt-8'>
                <h3 className="team__name">John Doe</h3>
                <p className="team__role">Developer</p>
                </div>
            </article>
            <article className="w-85 h-85 lg:h-65 sm:w-72 lg:w-60 flex flex-col p-4 h-65 border border-gray-200 rounded-lg hover:bg-white/10 hover:border-green-500">
                <div className='filter saturate-0 hover:saturate-100 transition duration-300 '>
                    <img src="./src/assets/manlab.jpg" alt="Team member" className="" />
                </div>
                <div className='text-black text-center mt-8 sm:mt-8 lg:mt-8'>
                <h3 className="team__name">John Doe</h3>
                <p className="team__role">Developer</p>
                </div>
            </article>
            <article className="w-85 h-85 lg:h-65 sm:w-72 lg:w-60 flex flex-col p-4 h-65 border border-gray-200 rounded-lg hover:bg-white/10 hover:border-green-500">
                <div className='filter saturate-0 hover:saturate-100 transition duration-300 '>
                    <img src="./src/assets/manlab.jpg" alt="Team member" className="" />
                </div>
                <div className='text-black text-center mt-8 sm:mt-8 lg:mt-8'>
                <h3 className="team__name">John Doe</h3>
                <p className="team__role">Developer</p>
                </div>
            </article>
            <article className="w-85 h-85 lg:h-65 sm:w-72 lg:w-60 flex flex-col p-4 h-65 border border-gray-200 rounded-lg hover:bg-white/10 hover:border-green-500">
                <div className='filter saturate-0 hover:saturate-100 transition duration-300 '>
                    <img src="./src/assets/manlab.jpg" alt="Team member" className="" />
                </div>
                <div className='text-black text-center mt-8 sm:mt-8 lg:mt-8'>
                <h3 className="team__name">John Doe</h3>
                <p className="team__role">Developer</p>
                </div>
            </article>
            <article className="w-85 h-85 lg:h-65 sm:w-72 lg:w-60 flex flex-col p-4 h-65 border border-gray-200 rounded-lg hover:bg-white/10  hover:border-green-500">
                <div className='filter saturate-0 hover:saturate-100 transition duration-300 '>
                    <img src="./src/assets/manlab.jpg" alt="Team member" className="" />
                </div>
                <div className='text-black text-center mt-8 sm:mt-8 lg:mt-8'>
                <h3 className="team__name">John Doe</h3>
                <p className="team__role">Developer</p>
                </div>
            </article>
            <article className="w-85 h-85 lg:h-65 sm:w-72 lg:w-60 flex flex-col p-4 h-65 border border-gray-200 rounded-lg hover:bg-white/10 hover:border-green-500">
                <div className='filter saturate-0 hover:saturate-100 transition duration-300 '>
                    <img src="./src/assets/manlab.jpg" alt="Team member" className="" />
                </div>
                <div className='text-black text-center mt-8 sm:mt-8 lg:mt-8'>
                <h3 className="team__name">John Doe</h3>
                <p className="team__role">Developer</p>
                </div>
            </article>
            <article className="w-85 h-85 lg:h-65 sm:w-72 lg:w-60 flex flex-col p-4 h-65 border border-gray-200 rounded-lg hover:bg-white/10 hover:border-green-500">
                <div className='filter saturate-0 hover:saturate-100 transition duration-300 '>
                    <img src="./src/assets/manlab.jpg" alt="Team member" className="" />
                </div>
                <div className='text-black text-center mt-8 sm:mt-8 lg:mt-8'>
                <h3 className="team__name">John Doe</h3>
                <p className="team__role">Developer</p>
                </div>
            </article>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Team 
