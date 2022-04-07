import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { LinkIconButton } from '../components/containers/units'
import { faFutbol,faRightFromBracket,faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import {faIdBadge} from '@fortawesome/free-regular-svg-icons'
import { Routes,Route } from "react-router-dom";
import { Home, Projects, AllProjects, Navbar, UpdateProject } from '../components';
import { ErrorPage } from '.'
import { useDispatch } from 'react-redux'
import {getProjects} from '../actions/projects'
export const Dashboard = () => {
    const first=true
    const handleLogout=async()=>{
        // await signOut(auth)
        console.log('signout')
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
            title:'My Stadiums',
            icon:faFutbol,
            link:'./terrain',
        },
        {
            id:2,
            title:'All Stadiums',
            icon:faEarthAfrica,
            link:'./all-stadiums',
        },
        {
            id:3,
            title:'Logout',
            icon:faRightFromBracket,
            link:'./',
            fnc:handleLogout
        },
    ]
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProjects())
        // console.log('getProjects')
    }, [dispatch])
  return (
    <>
        <Grid container style={{ minHeight:'93.4vh' }}>
            <Grid item xs={3} sm={2}  className='bg-sec relative ' >
                <div className='text-third text-center text-sm sm:text-xl font-bold'>TRELLO</div>
                {buttonsData.map(data=>
                    <LinkIconButton key={data.id} link={data.link} icon={data.icon} title={data.title} fnc={data.fnc} />
                )}
            </Grid>
            <Grid item xs={9} sm={10} >
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    {first&&<Route path="/projects" element={<Projects/>}></Route>}
                    {first&&<Route path="/my-projects" element={<AllProjects/>}></Route>}
                    {first&&<Route path="/projects/:id" element={<UpdateProject/>}></Route>}
                    <Route path="*" element={<ErrorPage/>}></Route>
                </Routes>
            </Grid>
        </Grid>
    </>
  )
}
