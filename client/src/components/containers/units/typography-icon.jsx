import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-ui/core'
import React from 'react'

export const TypographyIcon = (props) => {
  return (
      <>
        <Typography variant={props.variant} className={props.styles}>
          <FontAwesomeIcon icon={props.icon}/>&nbsp;{props.text}
        </Typography>
      </>
  )
}
