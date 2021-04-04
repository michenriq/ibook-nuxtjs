<template>
 <NuxtLink class="book-card" :to="`/book/${book.id}`">
  <img :src="book.cover" :alt="`Capa do livro ${book.title}`">

  <div class="text">
    <h4>{{ book.title }}</h4>
    <p>{{ book.author}}</p>
  </div>
 </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Book } from '@/models'

export default Vue.extend({
  props: {
    book: {
      type: Object,
      required: true
    } as PropOptions<Book>
  }
})
</script>

<style scoped lang="scss">
.book-card {
  color: inherit;
  display: grid;
  grid-gap: 1.5rem;
  img {
    display: grid;
    width: 100%;
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 300ms ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
    }
  }
  h4 {
    font-size: 0.875rem;
    font-weight: 400;
  }
  p {
    font-size: 13px;
    color: color('dark');
  }
}
</style>
