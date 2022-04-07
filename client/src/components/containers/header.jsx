import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProject } from '../../actions/projects'
import { IconButton } from './units'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const Header = ({project}) => {
  const dispatch=useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = useState(false)
  const [addUser, setAddUser] = useState('Pick a User to Add')
  const [projecTtitle,setProjectTitle] = useState(project?.title)
  useEffect(() => {
    setProjectTitle(project?.title)
  }, [dispatch,project])
  const updateProjectTitle=(e) => {
    e.preventDefault()
    dispatch(updateProject(project?._id,{title:projecTtitle}))
    setState(false)
  }
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null)
    setAddUser('Pick a User to Add')
  }
  const handlePickUser = () =>{
    // TODO: add the user from addUser state
    handleClose()
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
          <div>
            <IconButton fnc={handleClick} title='invite' icon={faUserPlus} styles='bg-sec text-third'/>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
             id="basic-menu" MenuListProps={{'aria-labelledby': 'basic-button'}}>
            <MenuItem><TextField value={addUser} disabled/></MenuItem>
              <MenuItem divider onClick={()=>setAddUser('Logout')} className=' text-center rounded-md'>Logout</MenuItem>
              <div className='flex justify-center'> <Button variant='contained' className='bg-sec' onClick={handleClose}>add this user</Button></div>
            </Menu>
          </div>
        </Grid>
      </Container>
    </>
  )
}
