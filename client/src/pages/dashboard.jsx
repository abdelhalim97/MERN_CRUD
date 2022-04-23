import React, { useEffect,useState } from 'react'
import Grid from '@mui/material/Grid';
import { LinkIconButton } from '../components/containers/units'
import { faFutbol,faRightFromBracket,faUserAlt } from '@fortawesome/free-solid-svg-icons'
import {faIdBadge} from '@fortawesome/free-regular-svg-icons'
import { Routes,Route, useNavigate } from "react-router-dom";
import { Home, Projects, Users, Navbar, UpdateProject } from '../components';
import { ErrorPage } from '.'
import { useDispatch, useSelector } from 'react-redux'
import {getProjects} from '../actions/projects'
import decode from 'jwt-decode'

export const Dashboard = () => {
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
            link:'./users',
        },
        {
            id:2,
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
    <>
        <Grid container style={{ minHeight:'93.4vh' }}>
            {isAdmin && <Grid item xs={3} sm={2}  className='bg-sec relative ' >
                <div className='text-third text-center text-sm sm:text-xl font-bold'>TRELLO</div>
                {buttonsData.map(data=>
                    <LinkIconButton key={data.id} link={data.link} icon={data.icon} title={data.title} fnc={data.fnc} />
                )}
            </Grid>}
            <Grid item xs={isAdmin ? 9 : 12} sm={isAdmin ? 10 : 12} >
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    {first&&<Route path="/projects" element={<Projects/>}></Route>}
                    {first&&<Route path="/users" element={<Users/>}></Route>}
                    {first&&<Route path="/projects/:id" element={<UpdateProject/>}></Route>}
                    <Route path="*" element={<ErrorPage/>}></Route>
                </Routes>
            </Grid>
        </Grid>
    </>
  )
}
