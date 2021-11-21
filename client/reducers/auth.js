import { SAVE_AUTH, CLEAR_AUTH } from '../actions' 

function reducer (state = null, action) {
  switch (action.type) {
    case SAVE_AUTH:
      return action.user
    case CLEAR_AUTH:
      return null
    default:
      return state
  }
}

export default reducer
