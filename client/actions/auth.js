export const SAVE_AUTH = 'hi-there'
export const CLEAR_AUTH = 'bye-bye'

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
