export default (projects=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.paylaod
        case 'CREATE':
            return [...projects,action.paylaod]
        default:
            return projects
    }
}