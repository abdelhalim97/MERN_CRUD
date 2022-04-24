import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { updateProject } from '../../../actions/projects'

export const SelectLeader = ({project}) => {
  const [newLeader, setNewLeader] = useState('')
  const dispatch = useDispatch()
  const selectorUsers= useSelector(state=>state.users)
  const [users, setUsers] = useState(selectorUsers)
  useEffect(() => {
    setUsers(selectorUsers)
}, [selectorUsers])
  return (
    <>
      <Grid container direction="row" justifyContent="space-around" alignItems="center" >
        <Grid item xs={8}>
          <FormControl  fullWidth>
            <InputLabel id="demo-simple-select-label">New Leader</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newLeader}
            label="New leader"
            onChange={(e)=>setNewLeader(e.target.value)}>
              {users.map(user=> <MenuItem key={user._id} value={user.email}>{user.email}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
        {newLeader.length>0&&<FontAwesomeIcon className='text-green-600 cursor-pointer ' icon={faUserEdit} 
          onClick={()=>dispatch(updateProject(project._id,{newLeader,projectId:project._id}))} />  } 
        </Grid>
      </Grid>
    </>
  )
}
