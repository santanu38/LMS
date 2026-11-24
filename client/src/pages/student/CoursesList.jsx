import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import SearchBar from '../../Components/student/SearchBar'
import CourseCard from '../../Components/student/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../Components/student/Footer'

const CoursesList = () => {
  const navigate=useNavigate()
  const {input}=useParams()

  const {allCourses}=useContext(AppContext)
  const [filteredCourses,setFilteredCourses]=useState([])

  useEffect(()=>{
    if(allCourses && allCourses.length>0){
       const tempCourses=allCourses.slice()

       input? 
        setFilteredCourses(
           tempCourses.filter((item)=>item.courseTitle.toLowerCase().includes(input.toLowerCase()))
        )
       :setFilteredCourses(tempCourses)
    }
  },[allCourses,input])

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
         <div className='flex flex-col md:flex-row gap-6 items-start justify-between w-full'>
           <div>
              <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
              <p className='text-gray-500'>
                <span className='text-blue-600 cursor-pointer'
                onClick={()=>navigate("/")}>Home </span>/ 
              <span>Course List</span></p>
           </div>
           <SearchBar data={input}/>
         </div>

         {input && (
          <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-800'>
            <p>{input}</p>
            <img src={assets.cross_icon}  alt="" 
             className='cursor-pointer'
             onClick={()=>navigate("/course-list")}
            />
          </div>
         )}

         <div className='grid grid-cols-1 sm:grids-col-2 md:grid-cols-3 lg:grids-cols-4 gap-4 mt-10
         px-2 md:px-2
         '>
            {filteredCourses.map((course,i)=>(
              <CourseCard key={i} course={course}/>
            ))}
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default CoursesList