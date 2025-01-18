import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "/job.ico"
const Navbar = () => {
  const onPage = ({isActive}) => (isActive ? "text-black bg-gray-400 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-600 hover:text-white rounded-md px-3 py-2")

  return (
    <nav className="bg-gray-800 border-b border-gray-600">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="DevJobs logo" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  DevJobs
                </span>
              </NavLink>
              <div className="md:ml-auto">

                <div className="flex space-x-2">
                  <NavLink to="/" className={onPage}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={onPage}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={onPage}>
                    Add Job
                  </NavLink>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar