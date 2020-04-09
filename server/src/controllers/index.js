/*
RESPONSABILITY 
  * Extract the parameters (query or body) from the request
  * Call the correct use case
  * Use-cases are injected into the different controller functions
  * Build a formatted responsed, in this case an HTTP response (with status code
    and serialized data)
  * Return an HTTP response (with status code and serialized data)
*/
import { makeGetBookmarks } from './get_bookmarks.js' 
import { listBookmarks } from '../use_cases/index.js'

export const getBookmarks = makeGetBookmarks({
  listBookmarks: listBookmarks
})