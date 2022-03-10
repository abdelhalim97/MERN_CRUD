import React from 'react'
import {Container} from "@material-ui/core"
import { Form } from '../components'

export const Login = () => {
  return (
  <>
    <Container maxWidth="sm" style={{ height:'41vh' }}>
            <div className='bg-base h-64 relative border-1 rounded-b-full w-full'>
              <div className='absolute w-full '>
                <div className=' text-third text-3xl w-full text-center'>Sportify</div>
              </div>
                <div className='flex justify-center'>
                  <Form/>
                </div>
            </div>
          </Container>
  </>
  )

      
}
