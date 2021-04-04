import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { User } from '@/models'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface Authentication {
  email: User['email'],
  password: User['password'],
}

type Token = string | null

@Module({name : 'auth', stateFactory: true, namespaced: true})
export default class Auth extends VuexModule {
  private token = '' as Token

  @Mutation
  private UPDATE_TOKEN(token: Token) {
    this.token = token
  }

  @Action
  public async login({ email, password } : Authentication) {
    try {
      const { accessToken } = await $axios.$post("/login", { email, password } )

      $cookies.set('token', accessToken, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      })

      this.context.commit('UPDATE_TOKEN', accessToken)

      return true
    }
    catch(e) {
      console.warn(e)
      return false
    }
  }

  @Action
  public update() {
    const token = $cookies.get('token') || null
    this.context.commit('UPDATE_TOKEN', token)
  }

  @Action
  public destroy() {
    $cookies.remove('token')
    this.context.commit('UPDATE_TOKEN', null)
  }
}

