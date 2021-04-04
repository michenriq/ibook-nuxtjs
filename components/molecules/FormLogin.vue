<template>
  <form class="form-login" @submit.prevent="login()">
        <input type="email" placeholder="E-mail" required v-model="form.email"/>
        <input type="password" placeholder="Senha" required  v-model="form.password"/>
        <button type="submit">Entrar</button>
    </form>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { auth } from '@/store'

  export default Vue.extend({
    data() {
      return {
        form : {
          email: 'caty@cataline.io',
          password: 'abc123'
        }
      }
    },
    methods: {
      async login() {
        const login = await auth.login(this.form)
        if(login) {
          this.$router.push('/dashboard')
        } else {
          alert('dados invalidos')
        }
      }
    }
  })
</script>

<style scoped lang="scss">
.form-login {
      display: grid;
      grid-gap: .3rem;
      input {
        background: transparent;
        border: 1px solid #f7f7f7;
        border-radius: 10px;
        padding: 0 1rem;
        height: 30px;
        color: #fafafa;
      }

      button {
        margin-top: 2rem;
        border-radius: 10px;
        font-weight: 600;
        height: 30px;
        font-size: .7rem;
      }
    }
</style>
