import { Container, Grid } from '@material-ui/core'
import React from 'react'

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
