import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png';
import FireBase from '../assets/firebase.png';
import Pyanywhere from '../assets/pyanywhere.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mysql from '../assets/mysql.png';
import Django from '../assets/django.png'
import Bootstrap from '../assets/new/bootstrap.png'

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-auto text-gray-300 bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline  border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                    <p className='my-4'>HTML</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JAVASCRIPT icon" />
                    <p className='my-4'>JAVASCRIPT</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                    <p className='my-4'>REACT JS</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={Python} alt="PYTHON icon" />
                    <p className='my-4'>PYTHON</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={Django} alt="DJANGO icon" />
                    <p className='my-4'>DJANGO</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="BOOTSTSRAP icon" />
                    <p className='my-4'>BOOTSTRAP</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500 mb-3'>
                    <img className='w-20 mx-auto' src={Mysql} alt="MYSQL icon" />
                    <p className='my-4'>MYSQL</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FireBase} alt="FIREBASE icon" />
                    <p className='my-4'>FIREBASE</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Pyanywhere} alt="PYTHONANYWHERE icon" />
                    <p className='my-4'>PYTHONANYWHERE</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                    <p className='my-4'>GITHUB</p>

                </div>
                <div className='shadow-md shadow-[#3d7077] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="THAILWIND icon" />
                    <p className='my-4'>THAILWIND CSS</p>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Skills
