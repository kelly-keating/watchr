import { getDatabase, ref, onValue, set, remove } from "firebase/database"

import { getUserId } from './auth'

const db = getDatabase()
export default db

export function startListening (feedFn) {
  const userId = getUserId()
  const feedsRef = ref(db, `${userId}/feeds`)

  onValue(feedsRef, (snapshot) => feedFn(snapshot.val()))
}

// FEED

export function addFeed (id, data) {
  const feedRef = ref(db, `${getUserId()}/feeds/${id}`)
  return set(feedRef, data)
}
