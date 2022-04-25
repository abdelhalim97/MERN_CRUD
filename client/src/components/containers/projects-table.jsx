import React,{useState,useEffect} from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'
import { SelectLeader } from './units'

export const ProjectsTable = () => {
    const selectorUsers= useSelector(state=>state.users)
    const [users, setUsers] = useState(selectorUsers)
    const selector= useSelector(state=>state.projects)
    const [projects, setProjects] = useState(selector)
    useEffect(() => {
        setProjects(selector)
    }, [selector])
    useEffect(() => {
        setUsers(selectorUsers)
    }, [selectorUsers])
    const handleLeader = (projectleader) => users.map(user=>user._id===projectleader && user.name)
  return (
    <>
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Project title</TableCell>
                        <TableCell align="center">Leader</TableCell>
                        <TableCell align="center">Project image</TableCell>
                        <TableCell align="center">Change leader</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects?.map(project=>
                    <TableRow key={project._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th"  scope="row">{project.title}</TableCell>
                        <TableCell align="center">
                            {handleLeader(project.leader)?
                            handleLeader(project.leader)
                            :<span className='text-red-500 font-bold'>This project has no leader</span>}
                        </TableCell>
                        <TableCell align="center"><img src={project.file64} className='w-20 h-20 object-cover mx-auto' alt='project image'/></TableCell>
                        <TableCell align="right" className='w-1/4'>
                            <SelectLeader project={project}/>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}
