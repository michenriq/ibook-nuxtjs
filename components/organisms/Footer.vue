<template>
    <footer>
      <Container>
        <Logo />
        <p>Copyright &copy; {{ currentYear }} iBook</p>
      </Container>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
})
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  height: 110px;
  background: color(dark, darkest);
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    p {
      color: color('light', 'darkest');
    }
  }
}
</style>
