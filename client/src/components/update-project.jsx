import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Header } from './containers/header'
import { Border } from './containers/units'

export const UpdateProject = () => {
  const defImg='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
  const {id} = useParams()
  const project=useSelector(state=>state.projects.find(p=>p._id===id))
  return (
    <>
      <Border>
        <Header project={project}/>
        <img src={project?.file64|| defImg} className='w-1/2 mx-auto object-cover max-w-full' alt='project img' />
      </Border>
    </>
  )
}
