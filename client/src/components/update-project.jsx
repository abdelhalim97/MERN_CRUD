import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Border } from './containers/units'

export const UpdateProject = () => {
  const {id} = useParams()
  const project=useSelector(state=>state.projects.find(p=>p._id===id))
  const dispatch=useDispatch()
  const UpdateProject =()=>{
    // dispatch(updateProject(id,projectData))
  }
  return (
    <>
      <Border>
        <img src={project.file64} className='w-1/2 mx-auto object-cover max-w-full'  />
      </Border>
    </>
  )
}
