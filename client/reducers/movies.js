import { SAVE_MOVIES } from '../actions' 

function reducer (state = {}, action) {
  switch (action.type) {
    case SAVE_MOVIES:
      return action.theObj ? action.theObj : state
    default:
      return state
  }
}

export default reducer
