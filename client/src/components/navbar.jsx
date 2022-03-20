import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [state, setState] = useState(false)
    const navigation = [
        { title: "Profile", path: "/" },
        { title: "Projects", path: "/projects" },
        { title: "My Projects", path: "/my-projects" },
    ]
  return (
        <nav className="bg-white w-full border-b  md:static ">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <FontAwesomeIcon icon={faTrello} className='text-sec hover:text-base'/>
                    </Link>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-center w-full pb-3 mt-8 md:flex md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 w-5/6">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-sec hover:text-base">
                                    <Link to={item.path}>
                                        { item.title }
                                    </Link>
                                </li>
                              )
                          })
                      }
                  </ul>
                  <div className='w-1/6 mt-8 md:mt-0'>
                    <Button className='text-sec hover:text-base text-md border-base' variant='outlined'>logout</Button>
                  </div>
              </div>
          </div>
      </nav>
  )
}
