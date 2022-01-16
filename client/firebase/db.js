import { getDatabase, ref, onValue, set, remove } from "firebase/database"

import { getUserId } from './auth'

const db = getDatabase()
export default db

// READ

export function startDbListening (fn) {
  const userId = getUserId()
  const userRef = ref(db, `${userId}`)

  onValue(userRef, (snapshot) => fn(snapshot.val()))
}

// UPDATE

export function saveMovie (id, data) {
  const location = ref(db, `${getUserId()}/${id}`)
  return set(location, data)
}

export function setAsWatched (id) {
  const location = ref(db, `${getUserId()}/${id}/watched`)
  return set(location, true)
}

export function deleteRecord (id) {
  const location = ref(db, `${getUserId()}/${id}`)
  return remove(location)
}
