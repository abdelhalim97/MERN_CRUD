export default (projects=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...projects,action.payload]
        case 'UPDATE':
            return projects.map((project)=>(action.payload._id===project._id?action.payload:project))
        default:
            return projects
    }
}