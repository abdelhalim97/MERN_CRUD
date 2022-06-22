import React, { useEffect,useState } from 'react'
import Grid from '@mui/material/Grid';
import { LinkIconButton } from '../components/containers/units'
import { faAddressCard,faArrowAltCircleLeft,faArrowAltCircleRight,faRightFromBracket,faUserAlt } from '@fortawesome/free-solid-svg-icons'
import {faIdBadge} from '@fortawesome/free-regular-svg-icons'
import { Routes,Route, useNavigate } from "react-router-dom";
import { Home, Projects, UsersDashboard, Navbar, UpdateProject,ProjectsDashboard } from '../components';
import { ErrorPage } from '.'
import { useDispatch, useSelector } from 'react-redux'
import {getProjects} from '../actions/projects'
import decode from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Dashboard = () => {
    const [dashBoardDisplay, setDashBoardDisplay] = useState(true)
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const selector = useSelector((state)=>state.auth)
    const first = JSON.parse(localStorage.getItem('profile'))
    const [firstSelector, setfirstSelector] = useState(first)
    useEffect(() => {
        setfirstSelector(first)
        dispatch(getProjects())

    }, [dispatch,selector])
    const isAdmin = firstSelector?.result?.role === 'ADMIN'
    const handleLogout=async()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }
    const buttonsData=[
        {
            id:0,
            title:'Profile',
            icon:faIdBadge,
            link:'./',
        },
        {
            id:1,
            title:'Users',
            icon:faUserAlt,
            link:'./users-dashboard',
        },
        {
            id:2,
            title:'Project',
            icon:faAddressCard,
            link:'./projects-dashboard',
        },
        {
            id:3,
            title:'Logout',
            icon:faRightFromBracket,
            link:'./',
            fnc:handleLogout
        },
    ]
    useEffect(() => {
        const  token = first?.token
        if(token){
          const decodedToken = decode(token)
          if(decodedToken.exp * 1000<new Date().getTime())
            handleLogout()
        }
      }, [])
  return (
        <div className='relative md:static flex'>
            {isAdmin && <div item xs={3} sm={2} className={`${dashBoardDisplay?'w-4/7 sm:w-1/4':'w-1/12 sm:w-1/12'} bg-sec md:w-1/5 lg:w-1/6 absolute md:static z-30`} style={{minHeight:'100vh'}}>
                <div className={`${dashBoardDisplay?'opacity-100':'sm:opacity-0 opacity-0'} md:opacity-100 text-white text-center text-sm sm:text-xl font-bold`}>TRELLO</div>
                {buttonsData.map(data=>
                    <LinkIconButton key={data.id} dashBoardDisplay={dashBoardDisplay} link={data.link} icon={data.icon} title={data.title} fnc={data.fnc} />
                )}
                <FontAwesomeIcon icon={dashBoardDisplay?faArrowAltCircleLeft:faArrowAltCircleRight} onClick={()=>setDashBoardDisplay(!dashBoardDisplay)} 
                    className='md:hidden absolute right-0 cursor-pointer text-third hover:text-black active:text-third z-40'/>
            </div>}
            <div className='w-full md:w-4/5 lg:w-5/6' >
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    {first&&<Route path="/projects" element={<Projects/>}></Route>}
                    {first&&<Route path="/users-dashboard" element={<UsersDashboard/>}></Route>}
                    {first&&<Route path="/projects-dashboard" element={<ProjectsDashboard/>}></Route>}
                    {first&&<Route path="/projects/:id" element={<UpdateProject/>}></Route>}
                    <Route path="*" element={<ErrorPage/>}></Route>
                </Routes>
            </div>
        </div>
  )
}
