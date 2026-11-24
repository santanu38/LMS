import { useState } from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './Components/student/Loading'
import Educator from './pages/educator/Educator'
import DashBoard from './pages/educator/DashBoard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import NavBar from './Components/student/NavBar'



function App() {
  const isEducatedRoute=useMatch('/educator/*')
  return (
    <div>
     {!isEducatedRoute &&  <NavBar/>}
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/course-list' element={<CoursesList/>}/>
       <Route path='/course-list/:input' element={<CoursesList/>}/>
       <Route path='/course/:id' element={<CourseDetails/>}/>
       <Route path='/my-enrollments' element={<MyEnrollments/>}/>
       <Route path='/player/:id' element={<Player/>}/>
       <Route path='/loading/:path' element={<Loading/>}/>
       <Route path='/educator' element={<Educator/>}>
          <Route path='/educator' element={<DashBoard/>}/>
           <Route path='add-course' element={<AddCourse/>}/>
           <Route path='my-courses' element={<MyCourses/>}/>
           <Route path='student-enrolled' element={<StudentEnrolled/>}/>
       </Route>
     </Routes>
    </div>
  )
}

export default App
