export default (state=null , action) => {
  switch (action.type) {
    case 'AUTH':
        localStorage.setItem('profile',JSON.stringify({...action?.data}))
        return {authData:action?.data}
        //return {...state,authData:action?.data}
    case 'LOGOUT':
      localStorage.clear()
      return null
  default:
    return state
  }
}
