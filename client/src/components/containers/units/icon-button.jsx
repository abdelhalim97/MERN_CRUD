import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'
export const IconButton = (props) => {
  return (
    <>
        <Button type={props.type} variant='text' className={`rounded-md  ${props.styles}`} onClick={props.fnc} >
          <FontAwesomeIcon icon={props.icon} className={`mr-2 ${props.iconStyles}`} />{props.title}
        </Button>
    </>
  )
}