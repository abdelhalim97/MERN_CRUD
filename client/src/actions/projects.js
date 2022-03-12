import * as api from '../api'
//creating actions
export const getProjects=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchProjects()
        dispatch({ type:'FETCH_ALL',payload:data })
    } catch (error) {
        console.log(error.message)
    }}