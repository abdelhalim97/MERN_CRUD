import { Box, Grid, TextField, Typography } from '@material-ui/core'
import React, {  useState } from 'react'
import { IconButtonNormal } from './units'
import {faTrash,faPenToSquare, faCircleXmark, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
export const DisplayTerrain = (props) => {
  const [update, setupdate] = useState(false)
  const [name, setName] = useState(props.name)
  const [cost, setCost] = useState(props.cost)
  const updateStadium =()=>{
    console.log('update')
  }
  const deleteStadium =()=>{
    console.log('delete')
  }
  return (
    <>
      <Grid container className=' my-4' justifyContent="space-around" >
        <Grid sm={9} md={7} item container justifyContent="center">
          <Grid item xs={11}>

            <Box mt={9}></Box>
          </Grid>
        </Grid>
        <Grid sm={9} md={4} item className='bg-gray-100 rounded-md relative'>
          <div className='absolute w-full'>
            <div className='flex justify-end'>
              {!update?<IconButtonNormal icon={faPenToSquare} fnc={()=>{setupdate(true)}} styles='text-green-500' title=''/>
              :<>
                <IconButtonNormal icon={faCircleXmark} fnc={()=>{setupdate(false)}} styles='text-red-500' title=''/>
                <IconButtonNormal icon={faCircleCheck} fnc={()=>{updateStadium();setupdate(false)}} styles='text-green-500' title=''/>
              </>}
              <IconButtonNormal icon={faTrash} fnc={()=>{deleteStadium()}} styles='text-red-500' title=''/>
            </div>
          </div>
          <div className='flex items-center h-full'>
            <div className='mx-auto'>
              {!update?
              <>
                <Typography variant='subtitle1' className='text-center'>Stadium name: <span className='text-base font-bold'>{props.name}</span></Typography>
                <Typography variant='subtitle1' className='text-center'>cost: <span className='text-base font-bold'>{props.cost}</span></Typography>
              </>:
              <>
                <TextField variant='standard' label='name' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                <TextField variant='standard' label='cost' value={cost} onChange={(e)=>{setCost(e.target.value)}} />
              </>}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
