import React,{useState} from 'react'
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Input } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateProject } from '../../actions/projects'

export const AddChip = (props) => {
    const [state, setState] = useState({bool:false,value:''})
    const dispatch = useDispatch()
  return (
    <>
        <Button className='opacity-70 bg-sec rounded-sm text-slate-900 w-full' onClick={()=>!state.bool&&setState({bool:true})}>
            {state.bool ?
                <div>
                    <Input value={state.value} onChange={(e)=>setState({bool:true,value:e.target.value})} autoFocus/>
                    <Button onClick={()=>{dispatch(updateProject(props.project?._id,{newList:state.value}));setState({bool:false})}} className='text-black'>Add list</Button>
                    <Button onClick={()=>setState({bool:false})} className='text-black'><FontAwesomeIcon icon={faX} /></Button>
                </div>
                :<div className='flex justify-start w-full'>
                    <FontAwesomeIcon icon={faPlus} className='mr-2'/>
                    <div className='text-sm sm:text-md '>{props.text}</div>
                </div>
            }
        </Button>
    </>
  )
}
