import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'
export const IconButton = (props) => {
  return (
    <>
        <Button variant='text' className={'rounded-md w-4/5'+props.styles} onClick={props.fnc} >
          <FontAwesomeIcon icon={props.icon} className='mr-2'/>{props.title}
        </Button>
    </>
  )
}
