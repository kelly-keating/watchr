import { SAVE_MOVIES } from '../actions' 

function reducer (state = {}, action) {
  switch (action.type) {
    case SAVE_MOVIES:
      return action.theObj
    default:
      return state
  }
}

export default reducer
