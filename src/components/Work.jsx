import React from 'react';

import {FaGithub} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';

import Ecommerce from '../assets/ecmrs.png'
import Onlineportal from '../assets/odp.png'
import Portfolio from '../assets/prt.png'
import Netflix from '../assets/netflix.png'
import Reacttodo from '../assets/todo.png'
import Digitalmarket from '../assets/dmw.png'
import Development from '../assets/development.png'
import Multitodo from '../assets/multitodo.png'

const Work = () => {
    return (
        <div name='work' className='w-full pt-60 pb-40 sm:pt-0 h-auto text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Works
                    </p>
                    <p className='py-6'> Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-6'>

                    {/* Grid Item 1 */}
                    <div
                        style={{ backgroundImage: `url(${Ecommerce})` }}
                        className='shadow-lg content-div1 shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                Django-Ecommerce
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/Adnaj/Django-Ecommerce-website.git' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        <FaGithub/>
                                    </button>
                                </a>
                                <a href='https://dnjdnj.pythonanywhere.com/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        <FiExternalLink/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item 2 */}
                    <div
                        style={{ backgroundImage: `url(${Onlineportal})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                Django-doctor-portal
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/Adnaj/hospital-management.git' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        <FaGithub/>
                                    </button>
                                </a>
                                <a href='http://adnaj.pythonanywhere.com/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <FiExternalLink/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item 3 */}
                    <div
                        style={{ backgroundImage: `url(${Development})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                development-website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/Adnaj/webdevelopment-wesite.git' >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        <FaGithub/>
                                    </button>
                                </a>
                                <a href='https://adnaj.github.io/webdevelopment-wesite/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <FiExternalLink/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item 4 */}
                    <div
                        style={{ backgroundImage: `url(${Multitodo})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                Django-multiuser-todo
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/Adnaj/django-multiuser-todo-app.git' >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        <FaGithub/>
                                    </button>
                                </a>
                                <a href='/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <FiExternalLink/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item 5 */}
                    <div
                        style={{ backgroundImage: `url(${Portfolio})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center font-bold text-white tracking-wider'>
                                Portfolio - React
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/' >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        <FaGithub/>
                                    </button>
                                </a>
                                <a href='/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <FiExternalLink/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item 6 */}
                    <div
                        style={{ backgroundImage: `url(${Digitalmarket})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Digital-market-website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/Adnaj/digi-agency.git'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        <FaGithub/>
                                    </button>
                                </a>
                                <a href='https://adnaj.github.io/digi-agency/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <FiExternalLink/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item 7 */}
                    <div
                        style={{ backgroundImage: `url(${Reacttodo})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                react-todo
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/Adnaj/react-todo.git'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        <FaGithub/>
                                    </button>
                                </a>
                                <a href='https://adnaj.github.io/react-todo/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <FiExternalLink/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item 8 */}
                    <div
                        style={{ backgroundImage: `url(${Netflix})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Netflix-clone
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/Adnaj/netflix-clone-homepage.git'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        <FaGithub/>
                                    </button>
                                </a>
                                <a href='/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <FiExternalLink/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
