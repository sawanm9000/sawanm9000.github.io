<template>
  <div class="relative min-h-screen pt-20 bg-gray-100">
    <Header :nav-bar-light="false" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.home-enter-active, .home-leave-active { transition: opacity .2s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
