let timer
export const Notifications = (content, time) => {
    clearTimeout(timer)
    return async dispatch => {
      console.log(time)
      dispatch({
        type: 'NOTIFICATION',
        data: {
          content: content
        }
      })
      timer = setTimeout(() => {
        dispatch({
          type: 'NOTIFICATION',
          data: {
          content: ''
        }
        })
      }, (time * 1000) )
    }
}


const NotificationReducer = (state = ['add or vote'], action) => {
    switch (action.type) {
      case 'NOTIFICATION':
          state = []
        return state.concat(action.data.content)
      default:
        return state
    }
  }
        
  
  export default NotificationReducer