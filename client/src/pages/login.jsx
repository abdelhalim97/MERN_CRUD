import React from 'react'
import Container from '@mui/material/Container';
import { Form } from '../components'

export const Login = () => {
  return (
  <>
    <Container maxWidth="sm" >
            <div className='bg-base h-40 md:h-52 sm:h-48 relative border-1 rounded-b-full w-full'>
              <div className='absolute w-full '>
                <div className=' text-third text-3xl w-full text-center'>Work Tracker</div>
              </div>
                <div className='flex justify-center w-full'>
                  <Form/>
                </div>
            </div>
          </Container>
  </>
  )
}
