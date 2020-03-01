const notificationReducer = (state = 'Initial notification', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'RESET_NOTIFICATION':
      return 'NONE'
    default:
      return state
  }
}

export const setNotification = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export const resetNotification = () => (
  {
    type: 'RESET_NOTIFICATION'
  }
)

export default notificationReducer