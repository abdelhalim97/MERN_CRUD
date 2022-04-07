export default (state={authData:null} , action) => {
  switch (action.type) {
    case 'AUTH':
        localStorage.setItem('profile',JSON.stringify({...action?.data}))
        return {authData:action?.data}
        //return {...state,authData:action?.data}
    case 'LOGOUT':
        return action.data=null
  default:
    return state
  }
}
