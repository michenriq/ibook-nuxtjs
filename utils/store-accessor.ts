import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Books from '@/store/books'
import Auth from '@/store/auth'

let books: Books
let auth: Auth

function initializeStores(store: Store<any>): void {
  books = getModule(Books, store)
  auth = getModule(Auth, store)
}

export { initializeStores, books, auth }
