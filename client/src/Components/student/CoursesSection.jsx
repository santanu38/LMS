import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

function CoursesSection() {
 
   const {allCourses}=useContext(AppContext)
  return (
    <div className="text-center md:px-40 px-8 py-10">
        <h2 className="text-2xl font-medium text-gray-800">
          Learn from the best
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-3 max-w-2xl mx-auto">
          Discover our top-rated courses across various categories. From
          coding and design to business and wellness, our courses are crafted
          to deliver results.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
          {allCourses.slice(0,4).map((course,i)=>(
            <CourseCard key={i} course={course}/>
          ))}
        </div>
        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="inline-block text-gray-600 border border-gray-400 px-6 py-2 mt-6 rounded-lg hover:bg-gray-100 transition"
        >
          Show all courses
        </Link>
    </div>

  )
}

export default CoursesSection