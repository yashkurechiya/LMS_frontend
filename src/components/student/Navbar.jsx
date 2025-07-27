import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
    const { navigate, isEducator } = useContext(AppContext)
    const isCourseListPage = location.pathname.includes('/course-list');
    const { openSignIn } = useClerk()
    const { user } = useUser()

    return (
        <div className='flex justify-between py-5 px-5 md:px-20 bg-gray-900 border-b border-gray-700 text-white'>
            
            <div className='flex items-center justify-center gap-2'>
            <img onClick={() => navigate('/')} src='/favicon.svg' alt="Logo" className='w-28 text-white lg:w-10 cursor-pointer' />
            <h2 className='text-3xl font-semibold'>Vitty</h2>
            </div>
            <div className='hidden md:flex items-center gap-5 text-gray-300'>
                <div className='flex items-center gap-5'>
                    {user && <>
                        <button onClick={() => navigate('/educator')} className='hover:text-blue-400'>
                            {isEducator ? 'EducatorDashboard' : 'Become Educator'}
                        </button>
                        <Link to='/my-enrollments' className='hover:text-blue-400'>My Enrollments</Link>
                    </>}
                </div>
                {user ? (
                    <UserButton />
                ) : (
                    <button
                        onClick={() => openSignIn()}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full cursor-pointer transition'
                    >
                        Create Account
                    </button>
                )}
            </div>
            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-300'>
                <div>
                    {user && <>
                        <button onClick={() => navigate('/educator')} className='hover:text-blue-400'>
                            {isEducator ? 'EducatorDashboard' : 'Become Educator'}
                        </button>
                        <Link to='/my-enrollments' className='hover:text-blue-400'>My Enrollments</Link>
                    </>}
                </div>
                {user ? (
                    <UserButton />
                ) : (
                    <button onClick={() => openSignIn()}>
                        <img src={assets.user_icon} alt="" />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navbar
