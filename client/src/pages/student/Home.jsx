import React from 'react'
import Hero from '../../Components/student/Hero'
import SearchBar from '../../Components/student/SearchBar'
import Companies from '../../Components/student/Companies'
import CoursesSection from '../../Components/student/CoursesSection'
import TestimonialSections from '../../Components/student/TestimonialSections'
import CallToAction from '../../Components/student/CallToAction'
import Footer from '../../Components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col  space-y-7 text-center'>
        <Hero/>
        <Companies/>
        <CoursesSection/>
        <TestimonialSections/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Home