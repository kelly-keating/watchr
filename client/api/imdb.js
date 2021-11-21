import request from 'superagent'

const baseUrl = 'https://imdb-api.com/en/API'
const API_KEY = process.env.IMDB_API_KEY

export function searchForMovie (searchTerm) {
  return request
    .get(`${baseUrl}/SearchMovie/${API_KEY}/${searchTerm}`)
    .then(res => res.body.results)
}

export function searchForSeries (searchTerm) {
  return request
    .get(`${baseUrl}/SearchSeries/${API_KEY}/${searchTerm}`)
    .then(res => res.body.results)
}

export function getDeets (id) {
  return request
    .get(`${baseUrl}/Title/${API_KEY}/${id}`)
    .then(res => res.body)
}
