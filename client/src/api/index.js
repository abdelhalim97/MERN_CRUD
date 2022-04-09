import axios from 'axios'
const url = 'http://localhost:5000/'
const signUpUrl = 'http://localhost:5000/users/signup'
const API =  axios.create({baseURL:`${url}`})
export const fetchProjects = ()=>axios.get(url)
export const createProject=(newProject)=>axios.post(url,newProject)
export const updateProject=(id,projectData)=> axios.patch(`${url}${id}`,projectData)
export const deleteProject=(id)=> axios.delete(`${url}${id}`)
export const signIn = (formData)=>API.post('users/signin',formData)
export const signUp = (formData)=>axios.post(signUpUrl,formData)
