import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaGithub} from 'react-icons/fa';

import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* container */}
            <div className='max-w-[900px] mx-auto sm:px-8 px-4 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi my name is</p>
                <h1 className='text-3xl sm:text-7xl font-bold text-[#ccd6f6]'>Muhammed Adnaj</h1>
                <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>I'am a Python Full stack developer.</h2>
                <p className='text-[#8892b0] sm:text-[1rem] text-[12px]  py-4 max-w-[700px]' >Passionate and self-taught Python full stack developer capable of learning and adopting the latest technologies.
                    A solid mind to commit to tasks and responsibility to track and review progress until the committed job is completed. Possess a solid commitment to the team environment
                    and enjoy working as a team member and independently.</p>

                <div>
                    <Link  to='work' smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span></button>

                    </Link>


                    {/* Social icons */}
                    <div className='flex lg:hidden  mt-5 top-[35%] '>
                        <ul className='flex space-x-4'>
                            <li className='w-[60px] h-[60px] flex justify-between items-center  bg-[#333333]'>
                                <a
                                    className='flex justify-between items-center w-full text-gray-300'
                                    target="_blank"
                                    href='https://github.com/Adnaj'
                                >
                                    <FaGithub size={30} />
                                </a>
                            </li>
                            <li className='w-[140px] h-[60px] flex justify-between items-center  bg-[#565f69]'>
                                <a
                                    className='flex justify-between items-center w-full text-gray-300'
                                    href='/resume.pdf' download={true}
                                >
                                    Resume <BsFillPersonLinesFill size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
