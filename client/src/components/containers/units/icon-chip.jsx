import { faPlus, faSquareMinus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Input } from '@mui/material'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateProject } from '../../../actions/projects'

export const IconChip = (props) => {
    const [state, setState] = useState({bool:false,value:''})
    const dispatch = useDispatch()
  return (
    <>
    <div className='bg-sec'>
        <div className='flex align-middle'>
            <div className='text-sm sm:text-md w-full text-center font-bold'>{props.listTitle}</div>
            <div className='mr-1 '>
                <FontAwesomeIcon icon={faSquareMinus} onClick={()=>dispatch(updateProject(props.project?._id,{deleteList:props.listTitle}))} className='text-third cursor-pointer hover:text-slate-200'/>
            </div>
        </div>
        {props.cards.map(card=>
            <div key={card} className='bg-neutral-300 rounded-sm m-1 p-1 flex justify-between'>
                <div>{card}</div>
                <div>
                    <FontAwesomeIcon icon={faSquareMinus} className='text-third cursor-pointer hover:text-slate-200' onClick={()=>dispatch(updateProject(props.project?._id,{deleteCard:card,thisList:props.listTitle}))}/>
                </div>
            </div>
        )}
        <Button className='bg-sec rounded-sm text-slate-900 w-full' onClick={()=>!state.bool&&setState({bool:true})}>
            {state.bool ?
                <div>
                    <Input value={state.value} onChange={(e)=>setState({bool:true,value:e.target.value})} autoFocus/>
                    <Button onClick={()=>{dispatch(updateProject(props.project?._id,{newCard:state.value,thisList:props.listTitle}));setState({bool:false})}} className='text-black'>Add list</Button>
                    <Button onClick={()=>setState({bool:false})} className='text-black'><FontAwesomeIcon icon={faX} /></Button>
                </div>
                :<div className='flex justify-start w-full'>
                    <FontAwesomeIcon icon={faPlus} className='mr-2'/>
                    <div className='text-sm sm:text-md '>Add a card</div>
                </div>
            }
        </Button>
        </div>
    </>
  )
}
