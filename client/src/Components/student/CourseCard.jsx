import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

function CourseCard({course}) {
  
  const {currency,calculateRating}=useContext(AppContext)
  return (
    
    <Link to={'/course/'+course._id}
    className='rounded-2xl text-left'>
        <img src={course.courseThumbnail} alt="" className='' />
        <div className='mt-2 '>
          <h2>{course.courseTitle}</h2>
          <p>Santanu Jana</p>
        </div>
        <div className='flex items-center gap-1 mt-2'>
          <p className='text-[12px] font-bold text-gray-500'>{calculateRating(course)}</p>
          <div className='flex '>
            {[...Array(5)].map((_,i)=>(
              <img key={i} 
              src={i<Math.floor(calculateRating(course))?assets.star 
                :assets.star_blank} alt="" 
                className='w-[12px]'/>
            ))}
          </div>
          <p className='text-[12px] text-gray-500'>{course.courseRatings.length}</p>
        </div>
        <p className='text-[14px] text-gray-600 mt-2'>{currency}{(course.coursePrice-course.discount*course.
        coursePrice/100).toFixed(2)}</p>
    </Link>
  )
}

export default CourseCard