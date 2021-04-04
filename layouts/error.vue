<template>
  <div class="error-404">
    <img src="@/assets/img/404.svg" alt="Pagina nao encontrada">
    <span class="error-text">A página que você está procurando <br />não existe ou foi removida</span>
    <NuxtLink class="error-button" :to="`/`">Voltar para home</NuxtLink>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
  })
</script>

<style lang="scss">

.error-404 {
    height: 100%;
    width: 100%;
    background: rgba(41, 41, 41, 0.99608);
    display: grid;
    grid-gap: 4rem;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 2rem;
    position: absolute;

    img {
      max-width: 100%;
    }


  .error-text {
    color: #f0f0f0;
  }

  .error-button {
    background: #f0f0f0;
    color: rgba(41,41,41,0.99608);
    padding: .5rem 1rem;
    font-size: 1.3rem;
    transition: all 300ms ease;
    font-weight: 500;
    &:hover {
      opacity: 0.89;
    }
  }

}
</stylelang=lang=lang=>
