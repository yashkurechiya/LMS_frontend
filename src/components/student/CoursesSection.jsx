import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext)

  return (
    <div className='py-16 md:px-40 px-8 bg-gray-900 text-white'>
      <h2 className='text-3xl font-medium text-white'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur odit veritatis, veniam dolor quasi maxime molestias fugit commodi deleniti illum, quos incidunt sequi pariatur voluptas ipsa fugiat reiciendis ab recusandae optio reprehenderit?
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 md:px-5 md:my-16 my-10 mt-6 gap-4'>
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to={'/course-list'}
        onClick={() => scrollTo(0, 0)}
        className='text-gray-300 border mt-10 border-gray-600 px-10 py-3 rounded hover:text-white hover:border-white transition'
      >
        Show all courses
      </Link>
    </div>
  )
}

export default CoursesSection
