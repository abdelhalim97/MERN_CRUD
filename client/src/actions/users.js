import * as api from '../api'
export const getUsers=()=>async(dispatch)=>{
    try {
        const {data} = await api.fetchUsers()
        dispatch({type:'FETCH_ALL_USERS',payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const deleteUser=(data)=>async(dispatch)=>{
    try {
        await api.deleteUser(data,data)
        await api.updateProject(data)
        dispatch({type:'DELETE_USER',payload:data})
    } catch (error) {
        console.log(error)
    }
}