import axios from 'axios'
const url = 'http://localhost:5000/'
const signUpUrl = 'http://localhost:5000/users/signup'
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
export const deleteProject=(data)=> axios.delete(`${url}${data._id}`)
export const signIn = (formData)=>API.post('users/signin',formData)
export const googleSignUp = (data)=>API.post('users/gmail-signup',data)
export const signUp = (formData)=>axios.post(signUpUrl,formData)
export const fetchUsers = ()=>API.get('users/fetch-all')
export const deleteUser = (user)=>API.delete(`users/${user._id}`)