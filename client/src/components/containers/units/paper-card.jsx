import React from 'react'
import {Container, Grid, Paper, Typography} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const PaperCard = (props) => {
  return (
    <>
        <Paper elevation={3}>
            <Container maxWidth='lg'>
                <Grid container  alignItems="center">
                    <Grid item md={2}>
                        <FontAwesomeIcon icon={props.icon} size='lg'/>
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant='h6' className='text-center'>{props.nb}</Typography>
                        <Typography variant='body2' className='text-center text-sec'>{props.desc}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    </>
  )
}
