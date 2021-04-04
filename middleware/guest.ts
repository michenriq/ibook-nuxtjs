import { Middleware } from '@nuxt/types'
import { auth as Auth } from '@/store'

const guest: Middleware = ({ store, redirect }) => {
  Auth.update()
  if (store.state.auth.token) {
    return redirect('/dashboard')
  }
}

export default guest
