import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Typography from '@mui/material/Typography';

export const TypographyIcon = (props) => {
  return (
      <>
        <Typography variant={props.variant} className={props.styles}>
          <FontAwesomeIcon icon={props.icon}/>&nbsp;{props.text}
        </Typography>
      </>
  )
}
