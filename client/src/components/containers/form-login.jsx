import { Button, TextField, Typography } from '@material-ui/core'
import React from 'react'

export const FormLogin = ({setForm,formDataLogIn,setFormDataLogIn}) => {
  const logIn=async()=>{
    console.log('login')
  }
  const handleSetFormtoForgotPasword=()=>setForm('forgotPassword')
  const handleChangeLogIn=(value,key)=>setFormDataLogIn({...formDataLogIn,...{[key]:value}})
  const dataLogin =[
    {
      id:'email',
      label:"Email",
      types:"email"
    },
    {
      id:'password',
      label:"Password",
      types:"password"
    },
  ]
  const dataButtons2 =[
    {
      id:0,
      title:"Login",
      fnc:logIn,
      styles:'text-third bg-base my-3 rounded-2xl',
      variant:'contained'
    },
    {
      id:1,
      title:"Forgot Password?",
      fnc:handleSetFormtoForgotPasword,
      styles:'my-3 text-base text-xs',
      variant:'text'
    },
  ]

  return (
      <>
        <div className='mx-auto w-5/6 my-2'>
          {dataLogin.map(data=>
          <TextField key={data.id} value={formDataLogIn[data.id]} onChange={(e)=>{handleChangeLogIn(e.target.value,data.id)}} 
          label={data.label} type={data.types} className="w-full my-1"/>
          )}
        </div>
        {dataButtons2.map(data=>
          <div key={data.id} className='flex justify-center'>
            <Button variant={data.variant} onClick={()=>{data.fnc()}} className={data.styles}>{data.title}</Button>
          </div>
        )}
        <Typography variant='subtitle2' className='my-3 text-sec text-center text-sm'>Don't have an account?
          <Button variant='text' className=' text-base text-xs' onClick={()=>{setForm('signUp')}}>Sign Up</Button>
        </Typography>
      </>
  )
}
