<template>
  <header class="h-16 absolute top-0 w-full sm:w-auto sm:inset-x-10 md:inset-x-28 lg:inset-x-40 flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-screen-lg sm:px-5 mx-auto z-10" :class="`${navBarLight ? 'text-white' : 'text-gray-800'} ${drawer ? 'fixed' : 'static'}`">
      <NuxtLink to="/">
        <img src="/logo.png" alt="Logo" class="filter h-8 -mt-2" :class="`${navBarLight ? '' : 'invert'}`">
      </NuxtLink>

      <div class="hidden sm:flex gap-x-4 text-sm tracking-wide">
        <NuxtLink to="/" class="border-b-2 px-3 py-1.5 border-opacity-0 hover:border-opacity-100 w-max uppercase font-semibold" :class="navBarLight ? 'border-white' : 'border-black'">Home</NuxtLink>
        <NuxtLink to="/blog" class="border-b-2 px-3 py-1.5 border-opacity-0 hover:border-opacity-100 w-max uppercase font-semibold" :class="navBarLight ? 'border-white' : 'border-black'">Blog</NuxtLink>
        <NuxtLink to="/contact" class="border-b-2 px-3 py-1.5 border-opacity-0 hover:border-opacity-100 w-max uppercase font-semibold" :class="navBarLight ? 'border-white' : 'border-black'">Contact</NuxtLink>
      </div>

      <div v-if="drawer" class="fixed top-0 h-screen bg-gray-900 w-full flex flex-col gap-y-4 justify-center items-center">
        <NuxtLink to="/" class="border-b-2 px-3 py-1.5 text-white border-white border-opacity-0 hover:border-opacity-100 w-max uppercase" :class="navBarLight ? 'border-black' : 'border-white'">Home</NuxtLink>
        <NuxtLink to="/blog" class="border-b-2 px-3 py-1.5 text-white border-white border-opacity-0 hover:border-opacity-100 w-max uppercase" :class="navBarLight ? 'border-black' : 'border-white'">Blog</NuxtLink>
        <NuxtLink to="/contact" class="border-b-2 px-3 py-1.5 text-white border-white border-opacity-0 hover:border-opacity-100 w-max uppercase" :class="navBarLight ? 'border-black' : 'border-white'">Contact</NuxtLink>
      </div>

      <div class="absolute right-4 top-3 flex sm:hidden">
        <button class="flex flex-col gap-y-2 w-10 h-10 p-2 relative" @click="drawer = !drawer">
          <div class="w-full h-px" :class="drawer ? 'hidden' : navBarLight ? 'bg-white' : 'bg-black'"></div>
          <div class="w-full h-px" :class="drawer ? 'hidden' : navBarLight ? 'bg-white' : 'bg-black'"></div>
          <div class="w-full h-px" :class="drawer ? 'hidden' : navBarLight ? 'bg-white' : 'bg-black'"></div>
          <div class="w-8 h-px transform rotate-45 bg-white absolute origin-center top-5 left-1" :class="drawer ? 'block' : 'hidden'"></div>
          <div class="w-8 h-px transform -rotate-45 bg-white absolute origin-center top-5 left-1" :class="drawer ? 'block' : 'hidden'"></div>
        </button>
      </div>
    </header>
</template>

<script>
  export default {
    props: {
      navBarLight: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        drawer: false
      }
    },
    watch: {
      $route() {
        this.drawer = false;
      },
    },
  }
</script>

<style lang="scss" scoped>
header > div > a {
  opacity: 0.85;
  font-family: 'Exo 2', sans-serif;
}

.nuxt-link-exact-active {
  opacity: 1;
  @apply border-opacity-40 text-opacity-100 hover:border-opacity-100 text-blue-500 border-blue-500;
}
</style>
