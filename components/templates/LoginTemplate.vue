<template>
  <div class="login-template">

    <div class="login">

      <img src="@/assets/img/logo.svg" alt="logotipo">

      <div class="information-login">
        <span>Bem-vindo(a) ao Dashboard</span>
        <p>Entre na sua conta</p>
      </div>

      <FormLogin />
    </div>

  </div>
</template>

<style scoped lang="scss">
.login-template {
  height: 100vh;
  display: grid;
  grid-template-columns: 20rem;
  grid-template-rows: 24rem;
  justify-content: center;
  align-content: center;
  background: white;

  .login {
    background: #292929;
    color: #f0f0f0;
    padding: 3rem;
    font-size: .8rem;
    display: grid;
    grid-gap: 1rem;

    img {
      width: 40%;
    }

    .information-login {
      p {
        font-weight: 600;
        font-size: 1rem;
        padding-top: .5rem;
      }
    }


  }
}
</style>
