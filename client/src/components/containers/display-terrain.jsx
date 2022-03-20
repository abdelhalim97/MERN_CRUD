import { Box, Grid, TextField, Typography } from '@material-ui/core'
import React, {  useState } from 'react'
import { IconButtonNormal } from './units'
import {faTrash,faPenToSquare, faCircleXmark, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export const DisplayTerrain = ({d}) => {
  const updateStadium =()=>{
    console.log('update')
  }
  const deleteStadium =()=>{
    console.log('delete')
  }
  return (
    <>
      <Grid item xs={12} sm={6} md={4}  className='relative'>
        <div className='absolute w-full' >
          <div className=' w-full'>
          <Typography variant='subtitle1' className=' text-base font-bold'>&nbsp;{d.title}</Typography>
            {/* {!update?<IconButtonNormal icon={faPenToSquare} fnc={()=>{setupdate(true)}} styles='text-green-500' title=''/>
              :<>
                <IconButtonNormal icon={faCircleXmark} fnc={()=>{setupdate(false)}} styles='text-red-500' title=''/>
                <IconButtonNormal icon={faCircleCheck} fnc={()=>{updateStadium();setupdate(false)}} styles='text-green-500' title=''/>
              </>}
            <IconButtonNormal icon={faTrash} fnc={()=>{deleteStadium()}} styles='text-red-500' title=''/> */}
          </div>
        </div>
        <Link  to={'/projects/:{id}'}>
        <div className='relative'>
          <div className='bg-slate-900 h-full w-full absolute opacity-25 hover:opacity-50'></div>
          <img src={`${d.file64}`} className='w-40 h-40 mx-auto object-cover' alt='project img' />
        </div>
        </Link>
        
        {/* <div className='flex items-center h-full'>
          <div className='mx-auto'>
            {!update?
            <>
            </>:
            <>
              <TextField variant='standard' label='name' value={title} onChange={(e)=>{setTitle(e.target.value)}} /><br/>
            </>}
          </div>
        </div> */}
      </Grid>
    </>
  )
}
