import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import { AppContext } from '../../context/AppContext'
import YouTube from 'react-youtube'
import Footer from '../../Components/student/Footer'
import Rating from '../../Components/student/Rating'

const Player = () => {

  const {enrolledCourses,calculateChapterTime}=useContext(AppContext)
  const {id}=useParams()
  const [courseData,setCourseData]=useState(null)
  const [openSection,setOpenSection]=useState({})
  const [playerData,setPlayerData]=useState(null)


 const toggleSection=(index)=>{
      setOpenSection((prev)=>(
        {...prev,[index]:!prev[index]}
      ))
  }

  const getCourseData=()=>{
    // enrolledCourses.map((course)=>{
    //   if(course._id===courseId){
    //     setCourseData(course)
    //   }
    // })
    // const course=enrolledCourses.find((course)=>String(course._id)===String(courseId))
    // setCourseData(course || null)
  }

   useEffect(()=>{
      console.log('courseId from url:',id);
      console.log('first course _id:',enrolledCourses?.[0]?._id);
      const course=enrolledCourses.find((course)=>(course._id)===(id))
      
      console.log('matched course',course);
      
      setCourseData(course || null)
      
      // getCourseData();
   },[enrolledCourses,id])
   console.log("en",enrolledCourses);
   
console.log(courseData);

  return (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
         {/* left div */}
         <div className='text-gray-800'>
            <h2 className='text-xl font-semibold'>Course Structure</h2>
            <div className='pt-4'>
                {courseData && courseData.courseContent.map((chapter,index)=>(
                  <div key={index}
                  className='border border-gray-300 bg-white mb-2 rounded'
                  >
                      <div onClick={()=>toggleSection(index)}
                      className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'>
                        <div className='flex items-center gap-2'>
                          <img className={`transform transition-transform
                          ${openSection[index]?'rotate-180':''}`}
                          src={assets.down_arrow_icon} alt="" />
                          <p className='font-medium text-[16px] text-sm'>{chapter.chapterTitle}</p>
                        </div>
                        <p className='text-sm md:text-[16px]'
                          >{chapter.chapterContent.length} lectures- 
                            {calculateChapterTime(chapter)} 
                        </p>
                      </div>
                    <div className={`overflow-hidden transition-all duration-300 
                      ${openSection[index]?' max-h-96':'max-h-0'}
                    `}>
                      <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600
                        border-t border-gray-300
                      '>
                        {chapter.chapterContent.map((lecture,i)=>(
                            <li key={i} className='flex items-start gap-2 py-1'>
                                <img src={false?assets.blue_tick_icon:assets.play_icon} alt="" 
                                className='w-4 h-4 mt-1'
                                />
                                <div className='flex items-center justify-between w-full 
                                text-gray-800 text-xs md:text-[16px]
                                '>
                                  <p>{lecture.lectureTitle}</p>
                                  <div className='flex gap-2'>
                                    {lecture.lectureUrl && <p className='text-blue-500 cursor-pointer'
                                   onClick={()=>setPlayerData({
                                   ...lecture,chapter:index+1,lecture:i+1
                                
                                   })}
                                  >
                                    Watch
                                    </p>}
                                  <p>{humanizeDuration(lecture.lectureDuration *60 *
                                    1000 ,{units:['h','m']})}</p>
                                  </div>

                                </div>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex items-center gap-2 py-3 mt-10'>
                    <h1 className='text-xl font-bold'>Rate this Course :</h1>
                    <Rating initialRating={0}/>
              </div>
         </div>
         {/* right div */}
         <div className='md:mt-10'>
            {playerData?
             <div>
                <YouTube videoId={playerData.lectureUrl.split('/').pop()} 
                 iframeClassName='w-full aspect-video'
                />
                <div className='flex justify-between items-center mt-1'>
                  <p>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}</p>
                   <button className='text-blue-600'>{false?'Completed':'Mark Complete'}</button>
                </div>
             </div>
            :<img src={courseData?courseData.courseThumbnail:''} alt="" />}
              
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Player