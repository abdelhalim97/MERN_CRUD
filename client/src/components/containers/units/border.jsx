import React from 'react'
import {Container,Grid} from '@mui/material';

export const Border = ({children}) => {
  return (
    <>
    {/* className='grid content-center h-full' */}
        <Container maxWidth='lg' className='flex items-center my-10' >
            <Grid container className=' border border-sec shadow-md mx-auto rounded-md pb-2 '>
                {children}
            </Grid>
        </Container>
    </>
  )
}
