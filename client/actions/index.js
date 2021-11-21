export const SAVE_AUTH = 'hi-there'
export const CLEAR_AUTH = 'bye-bye'
export const SAVE_MOVIES = 'here-they-are'

export function saveLogin (user) {
  return {
    type: SAVE_AUTH,
    user
  }
}

export function removeLogin () {
  return {
    type: CLEAR_AUTH
  }
}

export function saveAllMovies (theObj) {
  return {
    type: SAVE_MOVIES,
    theObj
  }
}
