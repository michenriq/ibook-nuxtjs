import { Middleware } from '@nuxt/types'
import { auth as Auth } from '@/store'

const auth: Middleware = ({ store, redirect }) => {
  Auth.update()
  if (!store.state.auth.token) {
    return redirect('/login')
  }
}

export default auth
