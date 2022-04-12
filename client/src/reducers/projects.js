export default (projects=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...projects,action.payload]
        case 'UPDATE':
            return projects.map((project)=>(action.payload._id===project._id?action.payload:project))
        case 'DELETE':
            console.log(action.payload)
            const projects2=[]
            Object.assign(projects2,projects)
            return projects2.filter((project)=>(action.payload._id!==project._id))
        default:
            return projects
    }
}