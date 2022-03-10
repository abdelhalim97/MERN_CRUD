import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
export const LinkIconButton = (props) => {
  return (
    <>
      <Link to={props.link} className='w-full flex justify-center'>
        <Button variant='text' className='rounded-md w-4/5' onClick={props.fnc}>
          <FontAwesomeIcon icon={props.icon} className='mr-2'/>{props.title}
        </Button>
      </Link>
    </>
  )
}
