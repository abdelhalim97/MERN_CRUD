import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Header = ({project}) => {

  return (
    <>
        <Container maxWidth='lg' className='mt-10' >
            <Grid container justifyContent="space-around" alignItems="center">
                <Typography>{project.title}</Typography>
            </Grid>
        </Container>
    </>
  )
}
