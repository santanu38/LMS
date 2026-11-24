import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useClerk,UserButton,useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

const NavBar=()=>{
    const isCourseListPage=location.pathname.includes('/course-list')
     
    const {isEducator}=useContext(AppContext)
    const {openSignIn}=useClerk()
    const {user}=useUser()
     const navigate=useNavigate()
    return(
        <div className={`flex justify-between items-center px-2 py-2 sm:px-10 
        md:px-14 lg:px-36 border-b border-gray-500 ${isCourseListPage?'bg-white':'bg-cyan-100/80'}`}>
            <img onClick={()=>navigate("/")}
            src={assets.learnify_logo} alt="logo" 
            className="w-28 lg:32 cursor-pointer"/>
             <div className="hidden md:flex items-center gap-5 text-gray-500">
                <div className="flex items-center gap-5">
                    {user && <>
                       <button onClick={()=>navigate('/educator')}>
                        {isEducator?'Educator Dashboard':'Become Educator'}
                        </button>
                    | <Link to='/my-enrollments'>My Enrollments</Link>
                    </>}
                </div>
              {user ? <UserButton/> :  <button onClick={()=>openSignIn()}
                className="bg-blue-500 text-white px-5 py-2 rounded-full 
                cursor-pointer">Create Account</button>}
             </div>
             <div className="md:hidden flex items-center gap-2 text-gray-500">
                 <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
                    {user && <>
                       <button onClick={()=>navigate('/educator')}>
                        {isEducator?'Educator Dashboard':'Become Educator'}
                        </button>
                    | <Link to='/my-enrollments'>My Enrollments</Link>
                    </>}
                 </div>
                 {user?<UserButton/>:<button onClick={()=>openSignIn()}
                 ><img src={assets.user_icon} alt="user" /></button>}
             </div>
        </div>
    )
}
export default NavBar