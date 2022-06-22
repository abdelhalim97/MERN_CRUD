import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
export const LinkIconButton = (props) => {
  return (
    <>
      <Link to={props.link} className={`${props.dashBoardDisplay?'flex':'hidden sm:hidden'} lg:flex md:flex  w-full justify-center`}>
        <Button variant='text' className='rounded-md w-4/5 text-black font-bold text-xs' onClick={props.fnc}>
          <FontAwesomeIcon icon={props.icon} className='mr-2'/>{props.title}
        </Button>
      </Link>
    </>
  )
}
