import * as api from '../api'
//creating actions
export const getProjects=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchProjects()//we r destructuring the res to data variable
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
    
    export const updateProject = (id, project) => async (dispatch) => {
        try {
          const { data } = await api.updateProject(id, project);
      
          dispatch({ type: 'UPDATE', payload: data });
        } catch (error) {
          console.log(error.message);
        }
      };