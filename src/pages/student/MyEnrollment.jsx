import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Line } from 'rc-progress' 
import Footer from '../../components/educator/Footer'

const MyEnrollment = () => {

  const {enrollerdCourses, calculateCourseDuration , navigate} = useContext(AppContext)
  const [progressArray, setProgressArray] = useState([
    {lectureCompleted: 2, totalLectures:4},
    {lectureCompleted: 1, totalLectures:4},
    {lectureCompleted: 3, totalLectures:6},
    {lectureCompleted: 4, totalLectures:6},
    {lectureCompleted: 6, totalLectures:7},
    {lectureCompleted: 7, totalLectures:8},
    {lectureCompleted: 3, totalLectures:3},
    {lectureCompleted: 4, totalLectures:6},
    {lectureCompleted: 4, totalLectures:9},
    {lectureCompleted: 5, totalLectures:5},
    {lectureCompleted: 3, totalLectures:7},
    {lectureCompleted: 2, totalLectures:4},
    {lectureCompleted: 1, totalLectures:4},
    {lectureCompleted: 8, totalLectures:4},
  ])

  return (
    <>
    <div className=' ms:px-36 px-8 pt-10'>
      <h1 className='text-2xl text-gray-200 font-semibold'>My Enrollments</h1>
      <table className='md:table-auto table-fixed w-full overflow-hidden border border-gray-400 mb-10 mt-10'>
        <thead className='text-gray-200 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
          <tr>
            <th className='px-4 py-3 font-semibpld truncate'>Course</th>
            <th className='px-4 py-3 font-semibpld truncate'>Duration</th>
            <th className='px-4 py-3 font-semibpld truncate'>Completed</th>
            <th className='px-4 py-3 font-semibpld truncate'>Status</th>
          </tr>
        </thead>
        <tbody className='text-gray-300'>
          {enrollerdCourses.map((course, index)=>(
            <tr key={index} className='border-b border-gray-500/20'>
                <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                  <img src={course.courseThumbnail} alt="" className='w-14 sm:w-24 ms:w-28' />
                  <div className='flex-1'>
                    <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                    <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100)/ progressArray[index].totalLectures :0 } className='bg-gray-500 rounded-full border-none' />
                  </div>
                </td>
                <td className='px-4 py-3 max-sm:hidden'>
                  {calculateCourseDuration(course)}
                </td>
                <td className='px-4 py-3 max-sm:hidden'>
                  {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`}<span>  Lectures</span>
                </td>
                <td className='px-4 py-3 max-sm:hidden'>
                  <button onClick={()=> navigate('/player/' + course._id)} className='bg-blue-600 cursor-pointer text-white px-3 py-2'>
                    {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1 ? 'Completed' : 'On Going'}  
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  )
}

export default MyEnrollment
