import React,{} from 'react'
import img from '../assets/images/avatar.png'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { PaperCards } from './containers/paper-cards';

export const Home = () => {
  const currentUser = JSON.parse(localStorage.getItem('profile')).result
  const currentUserGmail=currentUser.imageUrl
  const currentUserImg=currentUserGmail?currentUser.imageUrl:img
  return (
    <>
      <div className='bg-base h-4/5'>
        <Container maxWidth='lg' className='py-5'>
          <Grid container>
            <Grid item md={3}>
              <img src={currentUserImg} className='rounded-full bg-third mx-auto h-16 w-16' alt='avatar'/>
              <Typography variant='h6' className='text-third text-center'>{currentUser.name}</Typography>
            </Grid>
            <Grid item container spacing={3} md={9}>
              <PaperCards/>
            </Grid>
          </Grid>
        </Container>
      </div> 
    </>
  )
}