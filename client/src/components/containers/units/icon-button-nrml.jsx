import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const IconButtonNormal = (props) => {
  return (
    <>
      <button onClick={props.fnc} className={props.styles}>
        <FontAwesomeIcon icon={props.icon} className='mr-2'/>{props.title}
      </button>
    </>
  )
}
