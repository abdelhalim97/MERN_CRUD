import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../actions/users'

export const UsersTable = () => {
    const selector= useSelector(state=>state.users)
    const [users, setUsers] = useState(selector)
    const dispatch = useDispatch()
    useEffect(() => {
        setUsers(selector)
    }, [selector,dispatch])
  return (
    <>
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Role</TableCell>
                        <TableCell align="right">Gmail account?</TableCell>
                        <TableCell align="right">Delete account</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map(user=>
                    <TableRow key={user._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{user.name}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                        <TableCell align="center">{user.role}</TableCell>
                        <TableCell align="right">{user.id?'Gmail':'Normal account'}</TableCell>
                        <TableCell align="right">
                            {user.role!=='ADMIN'&&<FontAwesomeIcon className='text-sec cursor-pointer' icon={faTrash} onClick={()=>dispatch(deleteUser(user))} />}    
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}
