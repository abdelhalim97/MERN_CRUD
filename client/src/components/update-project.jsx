import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Header } from './containers/header'
import { Border } from './containers/units'

export const UpdateProject = () => {
  const dispatch=useDispatch()
  const defImg='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
  const {id} = useParams()
  const project=useSelector(state=>state.projects.find(p=>p._id===id))
  const [state, setState] = useState(project)
  useEffect(() => {
    setState(project)
  }, [project,dispatch])
  // const UpdateProject =()=>{
  //   // dispatch(updateProject(id,projectData))
  // }
  console.log(project?.file64)
  return (
    <>
      <Header project={state}/>
      <Border>
        <img src={state?.file64|| defImg} className='w-1/2 mx-auto object-cover max-w-full' alt='project img' />
      </Border>
    </>
  )
}
