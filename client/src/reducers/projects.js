export default (projects=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...projects,action.payload]
        case 'UPDATE':
            return projects.map((project)=>(action.payload._id===project._id?action.payload:project))
        case 'DELETE':
            const projects2=[]
            Object.assign(projects,projects2)
            return projects2.filter((project)=>(action.payload!==project._id))
        default:
            return projects
    }
}