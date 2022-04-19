import { Container, Grid } from '@mui/material'
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateProject } from '../actions/projects'
import { getUsers } from '../actions/users'
import { Header } from './containers/header'
import { Border, IconChip } from './containers/units'

export const UpdateProject = () => {
  const dispatch = useDispatch()
  const defImg='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
  const {id} = useParams()
  const selector=useSelector(state=>state.projects.find(p=>p._id===id))
  const [project, setProjectState] = useState(selector)
  useEffect(() => {
    setProjectState(selector)
  }, [selector,dispatch])
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <>
      <Border>
        <Header project={project}/>
        <div className='relative  p-2'>
          <img src={project?.file64|| defImg} className='w-full mx-auto object-cover max-w-full' alt='project img' />
          <Container maxWidth='sm' className='absolute top-4'>
            <Grid container>
              <Grid item  sm={4} xs={6} flex>
                {/* TODO:maping existing lsits */}
                <IconChip text='Add another list' project={project}/>

              </Grid>
            </Grid>
            
          </Container>
        </div>
        
      </Border>
    </>
  )
}
