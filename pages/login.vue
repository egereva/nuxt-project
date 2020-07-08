<template>
  <form>
    <h1>Login</h1>

    <div class="form-group">
      <input type="text" class="form-control">
    </div>

    <div class="form-group">
      <input type="password" class="form-control">
    </div>

    <p>
      <nuxt-link to="/">Home</nuxt-link>
    </p>
    <button class="btn btn-primary" type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: 'login',
  layout: 'empty'
}
</script>

<style scoped>
  form {
    width: 600px;
  }
</style>
