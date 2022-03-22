import { Grid, Typography } from '@material-ui/core'
import React, {  useEffect, useState } from 'react'
import { IconButtonNormal } from './units'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {deleteProject} from '../../actions/projects'
export const DisplayProject = ({d}) => {
  const navigate=useNavigate()
  const [data, setdata] = useState(d)
  const dispatch=useDispatch()
  useEffect(() => {
    setdata(d)
  }, [dispatch,d,data])
  console.log(d._id)
  
  const deleteAProject =()=>{
    dispatch(deleteProject(d._id))
  }
  return (
    <>
      <Grid item xs={12} sm={6} md={4}  className='relative mb-5'>
        <div className='flex justify-center '>
          <button className='z-0' onClick={()=>navigate(`${d._id}`)}>
            <div className='relative '>
                <Typography variant='subtitle1' className='absolute text-third font-bold z-10'>&nbsp;{d.title}</Typography>
            <div className='bg-slate-900 h-full w-full absolute opacity-25 hover:opacity-50 rounded-lg'></div>
            <img src={`${d.file64}`} className='w-40 h-40 object-cover rounded-lg' alt='project img'/>
            </div>
          </button>
        </div>
        <div className='flex justify-center mt-2'>
          <IconButtonNormal icon={faTrash} fnc={()=>{deleteAProject()}} styles='bg-red-500 text-third rounded-full z-10 px-1 hover:bg-third hover:text-red-500' title=''/>
        </div>
      </Grid>
    </>
  )
}
