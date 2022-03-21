import { Box, Grid, TextField, Typography } from '@material-ui/core'
import React, {  useState } from 'react'
import { IconButtonNormal } from './units'
import {faTrash,faPenToSquare, faCircleXmark, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
export const DisplayProject = ({d}) => {
  const navigate=useNavigate()
  const deleteStadium =()=>{
    console.log('delete')
  }
  return (
    <>
      <Grid item xs={12} sm={6} md={4}  className='relative mb-5'>
        {/* <div className='absolute w-full' > */}
          {/* <div className=' w-full'> */}
            {/* {!update?<IconButtonNormal icon={faPenToSquare} fnc={()=>{setupdate(true)}} styles='text-green-500' title=''/>
              :<>
                <IconButtonNormal icon={faCircleXmark} fnc={()=>{setupdate(false)}} styles='text-red-500' title=''/>
                <IconButtonNormal icon={faCircleCheck} fnc={()=>{updateStadium();setupdate(false)}} styles='text-green-500' title=''/>
              </>}
            <IconButtonNormal icon={faTrash} fnc={()=>{deleteStadium()}} styles='text-red-500' title=''/> */}
          {/* </div> */}
        {/* </div> */}
        <div className='flex justify-center '>
          <button onClick={()=>navigate(`${d._id}`)}>
            <div className='relative '>
            <Typography variant='subtitle1' className='absolute text-third font-bold z-10'>&nbsp;{d.title}</Typography>
              <div className='bg-slate-900 h-full w-full absolute opacity-25 hover:opacity-50 rounded-lg'></div>
              <img src={`${d.file64}`} className='w-40 h-40 object-cover rounded-lg' alt='project img'/>
            </div>
          </button>
        </div>
        
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
