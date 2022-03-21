import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProject } from '../../actions/projects'
import { IconButton } from './units'

export const Header = ({project}) => {
  const dispatch=useDispatch()
  const [state, setState] = useState(false)
  const [projecTtitle,setProjectTitle] = useState(project?.title)
  useEffect(() => {
    setProjectTitle(project?.title)
  }, [dispatch,project])
  const updateProjectTitle=(e) => {
    e.preventDefault()
    dispatch(updateProject(project?._id,{title:projecTtitle}))
    setState(false)
  }
  return (
    <>
      <Container maxWidth='lg' className='my-5' >
        <Grid container justifyContent="space-around" alignItems="center">
          {!state?<Button className='cursor-pointer rounded-md hover:bg-sec hover:text-third' onClick={()=>setState(true)}>{projecTtitle}</Button>
          :<form onSubmit={updateProjectTitle}>
            <TextField label={projecTtitle} autoFocus type='text' variant='standard' value={projecTtitle} onChange={(e)=>{setProjectTitle(e.target.value)}}/>
            <button type='submit'></button>
            </form>}
          <Typography variant='body1' className='text-sec font-bold'>{projecTtitle} Workspace</Typography>
          <IconButton fnc={()=>{console.log('f')}} title='invite' icon={faUserPlus} styles='bg-sec text-third'/>
        </Grid>
      </Container>
    </>
  )
}
