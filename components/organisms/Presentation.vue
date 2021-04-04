<template>
  <div class="presentation">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo non dignissimos quae consequuntur, consequatur neque quidem officiis quam, quasi autem pariatur minus, perspiciatis vitae obcaecati amet at optio repudiandae?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo non dignissimos quae consequuntur, consequatur neque quidem officiis quam, quasi autem pariatur minus, perspiciatis vitae obcaecati amet at optio repudiandae?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo non dignissimos quae consequuntur, consequatur neque quidem officiis quam, quasi autem pariatur minus, perspiciatis vitae obcaecati amet at optio repudiandae?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo non dignissimos quae consequuntur, consequatur neque quidem officiis quam, quasi autem pariatur minus, perspiciatis vitae obcaecati amet at optio repudiandae?
    </p>

    <img src="@/assets/img/presentation.svg" alt="ibook">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style scoped lang="scss">
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
