const notificationReducer = (state = 'Welcome!', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'RESET_NOTIFICATION':
      return 'NO_NOTIFICATION'
    default:
      return state
  }
}

export const resetNotification = () => (
  {
    type: 'RESET_NOTIFICATION'
  }
)

export const setNotification = (notification, seconds) => {
  return async dispatch => {
    dispatch(
      {
        type: 'SET_NOTIFICATION',
        notification
      }
    )

    setTimeout(() => { dispatch(resetNotification()) }, seconds * 1000)
  }
}

export default notificationReducer