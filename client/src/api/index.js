import axios from 'axios'
const url = 'http://localhost:5000/'
export const fetchProjects = ()=>axios.get(url)