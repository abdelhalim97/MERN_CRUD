import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const Border = ({children}) => {
  return (
    <>
    {/* className='grid content-center h-full' */}
        <Container maxWidth='lg' className='flex items-center mt-10' >
            <Grid container className=' border border-sec shadow-md mx-auto rounded-md pb-2 '>
                {children}
            </Grid>
        </Container>
    </>
  )
}
