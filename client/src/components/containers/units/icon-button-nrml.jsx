import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const IconButtonNormal = (props) => {
  return (
    <div>
      <button onClick={props.fnc} className={props.styles}>
        <FontAwesomeIcon icon={props.icon}  className={props.iconStyles}/>{props.title}
      </button>
    </div>
  )
}
