import React from 'react'
import { faCubes, faFileSignature, faUserGear } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { PaperCard } from './units'

export const PaperCards = () => {
    const projects = useSelector(state=>state.projects)
    const userId = JSON.parse(localStorage.getItem('profile')).result._id
    const LeadingProjects = projects.filter(project=>project.leader===userId)
    const ProjectsParticipation = projects.filter(project=>project.team.includes(userId))
    const isAdmin = JSON.parse(localStorage.getItem('profile')).result.role==='ADMIN'
    const data=[
        {
          id:0,
          icon:faFileSignature,
          desc:'Leading Projects',
          nb:LeadingProjects.length
        },
        {
          id:1,
          icon:faCubes,
          desc:'Projects Participation',
          nb:ProjectsParticipation.length
        },
        {
          id:3,
          icon:faUserGear,
          desc:'Admin?',
          nb: isAdmin?'YES':'NO'
        }
      ]
  return (
    <>
        {data.map(data=>
            <Grid key={data.id} item md={4}>
                <PaperCard icon={data.icon} desc={data.desc} nb={data.nb}/>
            </Grid>
        )}
    </>
  )
}
