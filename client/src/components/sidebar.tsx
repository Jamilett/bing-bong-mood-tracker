import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/BingBongLogo.svg';

function Sidebar() {
    const navigate = useNavigate();

  return (


    <div>
                
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-purple-600 rounded-lg sm:hidden hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
        </button>
    
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50" id="elements">
                    <div onClick={() => navigate('/landing')} className='flex items-center space-x-3 mb-12 hover:cursor-pointer'>
                        <img src={logo} alt="Bing Bong Logo" className='w-[40px]' />
                        <h2 className='text-2xl font-semibold'>BingBong</h2>
                    </div>
                    <div className='mb-8'>
                    <button type="button" onClick={() => navigate('/moodlog')} className="hover:cursor-pointer text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-center">
                        Add daily mood
                        <svg className="w-5 h-5 text-white-500 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M10 0C8.02219 0 6.08879 0.586489 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433282 8.00042 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9969 7.34877 18.9424 4.80702 17.0677 2.93232C15.193 1.05762 12.6512 0.00306452 10 0ZM14.4653 11.0526H11.0526V14.4653C11.0526 14.7444 10.9417 15.0122 10.7443 15.2096C10.5469 15.407 10.2792 15.5179 10 15.5179C9.72083 15.5179 9.45309 15.407 9.25568 15.2096C9.05827 15.0122 8.94737 14.7444 8.94737 14.4653V11.0526H5.53474C5.25557 11.0526 4.98782 10.9417 4.79042 10.7443C4.59301 10.5469 4.48211 10.2792 4.48211 10C4.48211 9.72082 4.59301 9.45308 4.79042 9.25567C4.98782 9.05827 5.25557 8.94737 5.53474 8.94737H8.94737V5.53474C8.94737 5.25556 9.05827 4.98782 9.25568 4.79041C9.45309 4.59301 9.72083 4.4821 10 4.4821C10.2792 4.4821 10.5469 4.59301 10.7443 4.79041C10.9417 4.98782 11.0526 5.25556 11.0526 5.53474V8.94737H14.4653C14.7444 8.94737 15.0122 9.05827 15.2096 9.25567C15.407 9.45308 15.5179 9.72082 15.5179 10C15.5179 10.2792 15.407 10.5469 15.2096 10.7443C15.0122 10.9417 14.7444 11.0526 14.4653 11.0526Z"/>
                        </svg>
                    </button>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li onClick={() => navigate('/dashboard')}>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-100 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li onClick={() => navigate('/quote')}>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-100 group">
                            <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M6.66667 1.66675H2.22222C0.996667 1.66675 0 2.73461 0 4.0477V8.80961C0 10.1227 0.996667 11.1906 2.22222 11.1906H6.66667V12.381C6.66667 14.3501 5.17111 15.9525 3.33333 15.9525H2.22222C1.60889 15.9525 1.11111 16.4846 1.11111 17.1429C1.11111 17.8013 1.60889 18.3334 2.22222 18.3334H3.33333C6.39667 18.3334 8.88889 15.6632 8.88889 12.381V4.0477C8.88889 2.73461 7.89222 1.66675 6.66667 1.66675Z"/>
                                <path d="M17.7778 1.66675H13.3333C12.1078 1.66675 11.1111 2.73461 11.1111 4.0477V8.80961C11.1111 10.1227 12.1078 11.1906 13.3333 11.1906H17.7778V12.381C17.7778 14.3501 16.2822 15.9525 14.4444 15.9525H13.3333C12.72 15.9525 12.2222 16.4846 12.2222 17.1429C12.2222 17.8013 12.72 18.3334 13.3333 18.3334H14.4444C17.5078 18.3334 20 15.6632 20 12.381V4.0477C20 2.73461 19.0033 1.66675 17.7778 1.66675Z"/>  
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Quotes</span>
                            </a>
                        </li>
                    </ul>
                    
                        <div id="logout" onClick={() => navigate('/landing')} className="space-y-2 font-medium mt-auto">
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-100 group">
                            <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                            </a>
                        </div>
                </div>
        </aside>

    </div>

  );
}

export default Sidebar;