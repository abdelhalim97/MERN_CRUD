export default (projects=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.paylaod
        default:
            return projects
    }
}