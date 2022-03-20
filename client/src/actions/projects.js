import * as api from '../api'
//creating actions
export const getProjects=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchProjects()
        console.log(data)
        dispatch({ type:'FETCH_ALL',payload:data })
    } catch (error) {
        console.log(error.message)
    }}
    export const createProject =(project)=>async(dispatch)=>{
        try {
            const {data}=await api.createProject(project)
            dispatch({type:'CREATE',payload:data})
        } catch (error) {
            console.log(error.message)
        }
    }