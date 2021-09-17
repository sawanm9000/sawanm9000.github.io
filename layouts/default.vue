<template>
  <div class="relative min-h-screen pt-20 bg-gray-100">
    <header class="h-16 absolute top-0 w-full sm:w-auto sm:inset-x-10 md:inset-x-28 lg:inset-x-40 flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-screen-lg sm:px-5 z-10 mx-auto" :class="navBarLight ? 'text-black' : 'text-white'">
      <!-- <div>SaM</div> -->
      <NuxtLink to="/" :class="drawer ? 'fixed z-10' : 'static'">
        <img src="/logo.png" alt="Logo" style="height: 32px" class="filter" :class="drawer ? '' : navBarLight ? 'invert' : 'invert-0'">
      </NuxtLink>

      <div class="hidden sm:flex gap-x-4 text-lg">
        <NuxtLink to="/" class="border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max" :class="navBarLight ? 'border-black' : 'border-white'">Home</NuxtLink>
        <NuxtLink to="/blog" class="border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max" :class="navBarLight ? 'border-black' : 'border-white'">Blog</NuxtLink>
        <NuxtLink to="/contact" class="border px-3 py-1.5 rounded-sm border-opacity-0 hover:border-opacity-100 w-max" :class="navBarLight ? 'border-black' : 'border-white'">Contact</NuxtLink>
      </div>

      <div v-if="drawer" class="fixed top-0 h-screen bg-gray-900 w-full flex flex-col gap-y-4 justify-center items-center text-xl font-light tracking-wider z-0">
        <NuxtLink to="/" class="border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max" :class="navBarLight ? 'border-black' : 'border-white'">Home</NuxtLink>
        <NuxtLink to="/blog" class="border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max" :class="navBarLight ? 'border-black' : 'border-white'">Blog</NuxtLink>
        <NuxtLink to="/contact" class="border px-3 py-1.5 text-white border-white rounded-sm border-opacity-0 hover:border-opacity-100 w-max" :class="navBarLight ? 'border-black' : 'border-white'">Contact</NuxtLink>
      </div>

      <div class="absolute right-4 top-3 flex sm:hidden">
        <button class="flex flex-col gap-y-2 w-10 h-10 p-2 relative" @click="drawer = !drawer">
          <div class="w-full h-px" :class="drawer ? 'hidden' : navBarLight ? 'bg-black' : 'bg-white'"></div>
          <div class="w-full h-px" :class="drawer ? 'hidden' : navBarLight ? 'bg-black' : 'bg-white'"></div>
          <div class="w-full h-px" :class="drawer ? 'hidden' : navBarLight ? 'bg-black' : 'bg-white'"></div>
          <div class="w-8 h-px transform rotate-45 bg-white absolute origin-center top-5 left-1" :class="drawer ? 'block' : 'hidden'"></div>
          <div class="w-8 h-px transform -rotate-45 bg-white absolute origin-center top-5 left-1" :class="drawer ? 'block' : 'hidden'"></div>
        </button>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navBarLight: false,
        drawer: false
      }
    },
    head() {
      return {
        title: 'SaM - Frontend Developer',
      }
    },
    watch: {
      $route() {
        this.setNavBarColor();
        this.drawer = false;
      },
    },
    created() {
      this.setNavBarColor();
    },
    methods: {
      setNavBarColor() {
        if (this.$route.path === '/') {
          this.navBarLight = false;
        } else {
          this.navBarLight = true;
        }
      }
    }
  }
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: var(--scrollbar-bg-color-dark);
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-500;
}

:root {
  --scrollbar-bg-color-dark: #101010;
  --scrollbar-color: grey;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400;
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-color) var(--scrollbar-bg-color-dark);
}

body {
  @apply h-screen overflow-x-hidden;
}

#__nuxt, #__layout {
  @apply overflow-x-hidden h-screen;
}

#__layout {
  @apply overflow-y-scroll;
}

header > div > a {
  opacity: 0.85;
}

.nuxt-link-exact-active {
  opacity: 1;
  @apply border-opacity-40 text-opacity-100;
}

// * {
//   outline: 1px dashed red;
//   outline-offset: -1px;
// }
</style>
