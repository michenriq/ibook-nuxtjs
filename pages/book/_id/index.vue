<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
  import Vue from 'vue'
import { books } from '@/store'

  export default Vue.extend({
    layout: 'master',
    async asyncData({ params, error }) {
      try {
        await books.show({ id: params.id as any })
      } catch(e) {
       error({ statusCode: 404, message: 'Post not found' })
      }
    },
    head() {
      return {
        title: books.$single.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: books.$single.description
          }
        ]
      }
    }
  })
</script>

<style scoped>

</style>
