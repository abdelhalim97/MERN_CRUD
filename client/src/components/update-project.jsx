import { Container, Grid } from '@mui/material'
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AddChip } from './containers'
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
  
  return (
    <>
      <Border>
        <Header project={project}/>
        <div className='relative  p-2'>
          <img src={project?.file64|| defImg} className='w-full mx-auto object-cover max-w-full' alt='project img' />
          <Container maxWidth='lg' className='absolute top-4 right-0'>
            <Grid container spacing={2}>
              {project?.list?.map(list=>
                <Grid key={list.title} item md={3} sm={4} xs={6}>
                  <IconChip project={project} listTitle={list.title} cards={list.cards}/>
                </Grid>
              )}
              <Grid item md={3} sm={4} xs={6}>
                <AddChip text='Add another list' project={project}/>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Border>
    </>
  )
}
