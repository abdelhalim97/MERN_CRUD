import React,{useState,useEffect} from 'react'
import img from '../assets/images/avatar.png'
import { TypographyIcon } from './containers/units'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [])
  const currentUser=user.result
  const currentUserGmail=currentUser.googleId
  const currentUserImg=currentUserGmail?currentUser.imageUrl:img
  const name=currentUserGmail?currentUser.givenName +' '+ currentUser.familyName :currentUser.name
  return (
    <>
      <div className='bg-base h-2/5'>
        <Container maxWidth='lg' className='py-5'>
          <Grid item md={3}>
            <img src={currentUserImg} className='rounded-full bg-third mx-auto h-16 w-16' alt='avatar'/>
            <Typography variant='h6' className='text-third text-center'>{name}</Typography>
          </Grid>
          <Grid item md={9}>
    {/* TODO: add things after mobile is finished */}
          </Grid>
        </Container>
      </div> 
    </>
  )
}