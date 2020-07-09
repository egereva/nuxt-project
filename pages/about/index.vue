<template>
  <section>
    <h1>About page</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, reiciendis?</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, iste, sint. Impedit nesciunt quaerat sequi.</p>
  </section>
</template>

<script>
  export default {
    middleware: ['auth'] // вызываются по очереди слева направо
  }
</script>
