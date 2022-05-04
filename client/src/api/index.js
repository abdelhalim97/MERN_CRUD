import axios from 'axios'
const url = 'https://mern-project-management.herokuapp.com/'
const signUpUrl = 'https://mern-project-management.herokuapp.com/auth/signup'
const API =  axios.create({baseURL:`${url}`})
axios.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
export const fetchProjects = ()=>axios.get(url)
export const createProject=(newProject)=>axios.post(url,newProject)
export const updateProject=(id,projectData)=> axios.patch(`${url}${id}`,projectData)
export const changeLeader=(id,projectData)=> axios.patch(`${url}change-leader/${id}`,projectData)
export const deleteProject=(data)=> axios.delete(`${url}${data._id}`)
export const signIn = (formData)=>API.post('auth/signin',formData)
export const googleSignUp = (data)=>API.post('auth/gmail-signup',data)
export const signUp = (formData)=>axios.post(signUpUrl,formData)
export const fetchUsers = ()=>API.get('users/fetch-all')
export const deleteUser = (user)=>axios.delete(`${url}users/${user._id}`)

