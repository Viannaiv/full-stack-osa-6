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

export const setNotification = (notification, time) => {
  return async dispatch => {
    dispatch(
      {
        type: 'SET_NOTIFICATION',
        notification
      }
    )

    setTimeout(() => { dispatch(resetNotification()) }, time)
  }
}

export default notificationReducer