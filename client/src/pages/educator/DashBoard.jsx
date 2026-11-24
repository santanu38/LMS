import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../Components/student/Loading'

const DashBoard = () => {

  const {currency}=useContext(AppContext)
  const [dashboardData,setdashboardData]=useState(null)

  const fetchDashboardData=async()=>{
     setdashboardData(dummyDashboardData)
  }

  useEffect(()=>{
    fetchDashboardData()
  },[])
console.log(dashboardData)
  return dashboardData?(
    <div className='min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'
    >
      <div className='space-y-5'>
         <div className='flex flex-wrap gap-5 items-center'>
             <div className='flex items-center gap-3 shaodow-card border border-blue-500 p-4 w-56 rounded-md'>
                 <img src={assets.patients_icon} alt="" />
                 <div>
                   <p className='text-2xl font-medium text-gray-600'>
                    {dashboardData.enrolledStudentsData.length}
                   </p>
                   <p className='text-[16px] text-gray-500'>Total Enrollments</p>
                 </div>
             </div>
             <div className='flex items-center gap-3 shaodow-card border border-blue-500 p-4 w-56 rounded-md'>
                 <img src={assets.my_course_icon} alt="" />
                 <div>
                   <p className='text-2xl font-medium text-gray-600'>
                    {dashboardData.totalCourses}
                   </p>
                   <p className='text-[16px] text-gray-500'>Total Courses</p>
                 </div>
             </div>
         </div>
         <div>
           <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
           <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-mg bg-white border border-gray-500/200">
                
           </div>
         </div>
      </div>
    </div>
  ):<Loading/>
}

export default DashBoard