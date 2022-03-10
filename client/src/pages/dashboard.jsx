import React from 'react'
import { Grid } from '@material-ui/core'
import { LinkIconButton } from '../components/containers/units'
import { faFutbol,faRightFromBracket,faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import {faIdBadge} from '@fortawesome/free-regular-svg-icons'
import { Routes,Route } from "react-router-dom";
import { Home, Terrain, AllTerrains } from '../components';
import { ErrorPage } from '.'

export const Dashboard = () => {
    const first=true
    const handleLogout=async()=>{
        // await signOut(auth)
        console.log('signout')
    }
    // TODO: add route displaying all elements 
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
  return (
    <>
        <Grid container>
            <Grid item xs={3} sm={2}  className='bg-sec relative' style={{ height:'94vh' }}>
                <div className='text-third text-center text-sm sm:text-xl font-bold'>SPORTIFY</div>
                {buttonsData.map(data=>
                    <LinkIconButton key={data.id} link={data.link} icon={data.icon} title={data.title} fnc={data.fnc} />
                )}
            </Grid>
            <Grid item xs={9} sm={10} >
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    {first&&<Route path="/terrain" element={<Terrain/>}></Route>}
                    {first&&<Route path="/all-stadiums" element={<AllTerrains/>}></Route>}
                    <Route path="*" element={<ErrorPage/>}></Route>
                </Routes>
            </Grid>
        </Grid>
    </>
  )
}
