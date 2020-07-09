<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" to="/">NuxtJs</nuxt-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/">Home </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link  active-class="active" class="nav-link" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
          </li>
          <li class="nav-item" v-else>
            <nuxt-link  active-class="active" class="nav-link" to="/login">Login</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    computed: {
      isAuth() {
        return this.$store.getters.isAuth
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
