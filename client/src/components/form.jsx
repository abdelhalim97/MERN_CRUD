import React, { useState } from 'react'
import { Button, Container } from '@material-ui/core'
import { FormForgotPass, FormLogin, FormSignup } from './containers'
export const Form = () => {
  const [forgetPass, setForgetPass] = useState('')
  const [forgetPassStat, setForgetPassStat] = useState(0)
  const [form, setForm] = useState('login')
  const [formData, setFormData] = useState({})
  const [formDataLogIn, setFormDataLogIn] = useState({})
  const dataButtons =[
    {
      id:0,
      title:"Login",
      styles:"text-third bg-sec rounded-2xl",
      param:"login",
    },
    {
      id:1,
      title:"SignUp",
      styles:"text-third bg-sec rounded-2xl",
      param:"signUp",
    },
  ]
  return (
      <>
        <div className='border-2 border-sec w-4/6  md:w-1/2 absolute top-1/2 rounded-3xl bg-third shadow-lg'>
          <Container maxWidth='xs'>
            <div className='flex justify-around my-3'>
              {dataButtons.map(data=>
              <Button key={data.id} variant='contained' onClick={()=>{setForm(data.param);setForgetPassStat(0)}}
              className={`${form==='login'&&data.id===0?'text-third bg-sec rounded-2xl':form==='signUp'&&data.id===1?'text-third bg-sec rounded-2xl':
              form==='login'&&data.id===1?'text-sec bg-third rounded-2xl':'text-sec bg-third rounded-2xl'}`}>{data.title}</Button>)}
            </div>
            {form === 'login'&&
              <FormLogin setForm={setForm} formDataLogIn={formDataLogIn} setFormDataLogIn={setFormDataLogIn}/>
            }
            {form === 'signUp'&&
              <FormSignup formData={formData} setFormData={setFormData} setForm={setForm}/>
            }
            {form === 'forgotPassword'&&
              <FormForgotPass setForgetPassStat={setForgetPassStat} forgetPass={forgetPass} setForgetPass={setForgetPass}
              forgetPassStat={forgetPassStat} setForm={setForm} />
            }
          </Container>
        </div>
      </>
  )
}
