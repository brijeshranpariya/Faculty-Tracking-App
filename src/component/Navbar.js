import React, { useState } from 'react'
import Profilepic from '../Assets/profilepic.jpg'
import Dashboard from './Dashboard'
import Faculty from './Faculty';
import Event from './Event'
import Schedule from '../component/Schedule'
import Facultydata from './Facultydata';
import ScheduleForm from './ScheduleForm';
import AddFaculty from './AddFaculty';
import Attendence from './Attendence';
import Subject from './Subject';
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isDashboard, setIsdashboard] = useState(true)
  const [isFaculty, setisFaculty] = useState(false)
  const [isEvent, setisEvent] = useState(false)
  const [isSchedule, setisSchedule] = useState(false)
  const [isDetails, setisDetails] = useState(false)
  const [isForm, setisForm] = useState(false)
  const [isAddFaculty, setisAddFaculty] = useState(false)
  const [isAttendence, setisAttendence] = useState(false)
  const [isSubject, setisSubject] = useState(false)
  const togglesidebar = () => {
    setToggle(true);
    const sidebar = document.getElementById('sidebar')
    const navbtn = document.getElementById('navbtn')
    navbtn.classList.add('hidden')
    navbtn.classList.remove('flex')
    sidebar.classList.remove('hidden')
    sidebar.classList.add('block')
  }
  const adddashclass = () => {
    document.getElementById('Dashboard').classList.add('bg-blue-600')
  }
  const removedashclass = () => {
    document.getElementById('Dashboard').classList.remove('bg-blue-600')
  }
  const addfacultyclass = () => {
    document.getElementById('Faculties').classList.add('bg-blue-600')
  }
  const removefacultyclass = () => {
    document.getElementById('Faculties').classList.remove('bg-blue-600')
  }
  const addsubjectclass = () => {
    document.getElementById('subject').classList.add('bg-blue-600')
  }
  const removesubjectclass = () => {
    document.getElementById('subject').classList.remove('bg-blue-600')
  }
  const addscheduleclass = () => {
    document.getElementById('schedule').classList.add('bg-blue-600')
  }
  const removescheduleclass = () => {
    document.getElementById('schedule').classList.remove('bg-blue-600')
  }
  const addattendenceclass = () => {
    document.getElementById('attendence').classList.add('bg-blue-600')
  }
  const removeattendenceclass = () => {
    document.getElementById('attendence').classList.remove('bg-blue-600')
  }
  const addsubclass = () => {
    document.getElementById('sub').classList.add('bg-blue-600')
  }
  const removesubclass = () => {
    document.getElementById('sub').classList.remove('bg-blue-600')
  }

  const handlefaculty = () => {
    setisEvent(false)
    setisSubject(false)
    setisSchedule(false);
    setisDetails(false)
    setisForm(false)
    setisAddFaculty(false)
    setIsdashboard(false)
    setisAttendence(false)
    removedashclass();
    removesubjectclass();
    removeattendenceclass()
    removesubclass()
    removescheduleclass();
    addfacultyclass();
    setisFaculty(true)
  }
  const hidesidebar = () => {
    console.log(toggle)
    if (toggle === true) {
      const sidebar = document.getElementById('sidebar')
      sidebar.classList.remove('block')
      sidebar.classList.add('hidden')
      const navbtn = document.getElementById('navbtn')
      navbtn.classList.remove('hidden')
      navbtn.classList.add('flex')
      setToggle(false)
    }
  }
  const handledashboard = () => {
    setIsdashboard(true)
    adddashclass();
    removefacultyclass();
    removescheduleclass();
    removeattendenceclass()
    removesubclass()
    removesubjectclass()
    setisFaculty(false)
    setisAddFaculty(false)
    setisSubject(false)
    setisForm(false)
    setisEvent(false)
    setisSchedule(false);
    setisDetails(false)
  }
  const handleEvents = () => {
    handleAttendence()
    setIsdashboard(false)
    setisAttendence(false)
    setisEvent(true)
    removedashclass()
    removescheduleclass();
    removefacultyclass()
    removeattendenceclass()
    removesubclass()
    addsubjectclass()
  }
  const handlelogo = () => {
    handledashboard()
  }
  const handleschedule = () => {
    handledashboard();
    setIsdashboard(false)
    setisAttendence(false);
    removedashclass();
    removeattendenceclass()
    removesubclass()
    removefacultyclass();
    removesubjectclass();
    addscheduleclass();
    setisSchedule(true);
  }
  const openFacultydata = (value) => {
    setisDetails(true)
    setisFaculty(false)
  }
  const scheduleform = (value) => {
    setisSchedule(false)
    setisForm(true)
  }
  const addFacultyForm = (value) => {
    setisAddFaculty(true)
    setisFaculty(false)
  }
  const handleAttendence = () => {
    handledashboard()
    setIsdashboard(false)
    setisSubject(false)
    setisAttendence(true)
    addattendenceclass();
    removedashclass();
    removefacultyclass()
    removescheduleclass()
    removesubclass()
    removesubjectclass();
  }
  const handleSubject = () => {
    setisAttendence(false)
    handledashboard();
    setIsdashboard(false)
    setisSubject(true);
    removeattendenceclass()
    removedashclass()
    removefacultyclass()
    removescheduleclass()
    removesubjectclass()
    addsubclass();
  }
  return (
    <div className='bg-white flex h-lvh'>
      <div id='sidebar' className='bg-black h-lvh hidden lg:block sm:w-96'>
        <div onClick={handlelogo} className='text-white flex justify-center items-center h-20'>
          <p onClick={handlelogo} className='text-xl hover:cursor-pointer font-bold sm:pl-5 lg:pr-20 md:pr-7'>Faculty Tracking System</p>
        </div>
        <div className='text-white'>
          <ul>
            <li id='Dashboard' onClick={handledashboard} className=' hover:cursor-pointer text-left py-3 lg:pl-10 md:pl-5 pl-5 sm:pl-5 hover:bg-blue-300 hover:text-blue-600 bg-blue-600'>Dashboard</li>
            <li id='Faculties' onClick={handlefaculty} className=' hover:cursor-pointer text-left py-3 lg:pl-10 md:pl-5 pl-5 sm:pl-5 hover:bg-blue-300 hover:text-blue-600'>Faculties</li>
            <li id='schedule' onClick={handleschedule} className='hover:cursor-pointer text-left py-3 lg:pl-10 md:pl-5 pl-5 sm:pl-5 hover:bg-blue-300 hover:text-blue-600'>Schedule Management</li>
            <li id="subject" onClick={handleEvents} className=' hover:cursor-pointer text-left py-3 lg:pl-10 md:pl-5 pl-5 sm:pl-5 hover:bg-blue-300 hover:text-blue-600'>Events</li>
            <li id='attendence' onClick={handleAttendence} className=' hover:cursor-pointer text-left py-3 lg:pl-10 md:pl-5 pl-5 sm:pl-5 hover:bg-blue-300 hover:text-blue-600'>Attendence</li>
            <li id='sub' onClick={handleSubject} className=' hover:cursor-pointer text-left py-3 lg:pl-10 md:pl-5 pl-5 sm:pl-5 hover:bg-blue-300 hover:text-blue-600'>Subjects</li>
          </ul>
        </div>
      </div>
      <div onClick={hidesidebar} className='h-lvh md:w-screen sm:w-screen w-screen lg:w-[82%]' >
        <div className='h-16 flex bg-gray-100 shadow-sm items-center'>
          <div id='navbtn' onClick={togglesidebar} className="ml-4 h-8 hover:cursor-pointer flex flex-col justify-center items-center lg:hidden bg-gray">
            <hr className="h-[1px] w-7 flex lg:hidden border border-black rounded-full mt-[5px]" />
            <hr className="h-[1px] w-7 flex lg:hidden border border-black rounded-full mt-[5px]" />
            <hr className="h-[1px] w-7 flex lg:hidden border border-black rounded-full mt-[5px]" />
          </div>
          <div className='mx-6  hidden sm:block~'>
            <input type="text" className='rounded-full px-3 py-2 w-72 border' placeholder='Search Here' />
          </div>
          <button className='h-[65px] w-40 hover:bg-blue-100 myfont text-xl  flex justify-evenly items-center absolute right-5' >
            <img src={Profilepic} className='rounded-full' alt="" height={'40px'} width={'40px'} />
            <div className='flex flex-col text-left'>
              <span className='text-lg'>Dr.Raghav</span>
              <span className='text-sm text-gray-500'>Admin</span>
            </div>
          </button>
        </div>
        <div className='h-full text-black'>
          {isDashboard && <Dashboard />}
          {isFaculty && <Faculty openDetails={openFacultydata} addFaculty={addFacultyForm} />}
          {isEvent && <Event />}
          {isSchedule && <Schedule setSchedule={scheduleform} />}
          {isDetails && <Facultydata />}
          {isForm && <ScheduleForm />}
          {isAddFaculty && <AddFaculty />}
          {isAttendence && <Attendence />}
          {isSubject && <Subject />}
        </div>

      </div>
    </div>
  )
}

export default Navbar