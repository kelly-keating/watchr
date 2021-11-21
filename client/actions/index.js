export const SAVE_MOVIES = 'here-they-are'

export function saveAllMovies (theObj) {
  return {
    type: SAVE_MOVIES,
    theObj
  }
}
