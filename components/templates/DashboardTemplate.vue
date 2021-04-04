<template>
  <div class="dashboard-template">
    <div class="wrapper">
      <img src="@/assets/img/dashboard.svg" />

      <Pagetitle text="Você está no" strong="Dashboard" />

      <button @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  methods: {
    logout() {
      try {
        auth.destroy()
        this.$router.push('/login')
      } catch (e) {
        console.warn(e)
      }
    }
  }
})
</script>

<style scoped lang="scss">
.dashboard-template {
  .wrapper {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-content: center;
    grid-gap: 3rem;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    button {
      background: #292929;
      color: #fafafa;
      padding: 0.5rem 1rem;
      transition: all 300ms ease;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
