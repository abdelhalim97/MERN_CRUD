import React, { useState } from 'react'
import { Box,  Button,  Modal, TextField, Typography } from '@material-ui/core';
import { IconButton, TypographyIcon } from './units';
import { faAdd, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

export const OurModal = () => {
  const [lng, setLng] = useState(10.612);
const [lat, setLat] = useState(35.83);
  const [open, setOpen] = useState(false);
  const [form, setform] = useState({})
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleForm=(key,value)=>{
    setform({...form,...{[key]:value}})
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
  };
  const addStadium=(userId,lat,lng,name,cost)=>{
    console.log('adding')
    setOpen(false)
  }
  const fildsData =[
    {
      id:'name',
      label:'name',
    },
    {
      id:'cost',
      label:'1 hour cost',
    },
  ]
  const positionData =[
    {
      id:'name',
      label:`${lng}`,
    },
    {
      id:'cost',
      label:`${lat}`,
    },
  ]
  return (
    <>
      <Button onClick={handleOpen} className='text-third bg-base rounded-2xl'>Add a Stadium</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style} className='border-2 border-sec rounded-3xl bg-third w-5/6 sm:w-2/3 md:w-1/2'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center bg-base text-third rounded-3xl p-1 mb-3'>
            Add a new Stadium
          </Typography>
          <div>
            <Box mt={9}></Box>
            <div className='flex justify-around '>
              {positionData.map(data=>
                <TypographyIcon key={data.id} variant='body1' icon={faLocationCrosshairs}  text={data.label} styles='text-center text-gray-500' />
              )}
            </div>
            {fildsData.map(data=>
            <div key={data.id} className='flex justify-center '>
              <TextField variant='standard' label={data.label} className='my-3 w-1/2' value={form[data.id]} 
              onChange={(e)=>{handleForm(data.id,e.target.value)}} />
            </div>
            )}
            <div className='flex justify-center'>
              <IconButton title='add Stadium' icon={faAdd} fnc={()=>{addStadium(lat,lng,form.name,form.cost)}} styles='text-third bg-base mt-3 rounded-2xl p-2'/>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}
