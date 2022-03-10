import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import img from '../assets/images/avatar.png'
import { TypographyIcon } from './containers/units'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
const first='true'
  return (
    <>

      <div className='bg-base h-2/5'>
        <Container maxWidth='lg' className='py-5'>
          <Grid item md={3}>
            <img src={img} className='rounded-full bg-third mx-auto h-16 w-16' alt='avatar'/>
            <Typography variant='h6' className='text-third text-center'>{first}</Typography>
          </Grid>
          <Grid item md={9}>
    {/* TODO: add things after mobile is finished */}
          </Grid>
        </Container>
      </div> 
    </>
  )
}