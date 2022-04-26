export default (users=[] , action) => {
    switch (action.type) {
      case 'FETCH_ALL_USERS':
        return action.payload
      // case 'ADD_USER':
      //   console.log('ADD_USER')
      //   return [...users,action.data]
      case 'DELETE_USER':
        return users.filter(user=>user._id!==action.payload._id)
    default:
      return users
    }
  }
  