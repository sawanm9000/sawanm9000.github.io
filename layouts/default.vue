<template>
  <div class="relative min-h-screen pt-20 bg-gray-100">
    <Header v-if="navBar" :nav-bar-light="navBarColor === 'light' ? true : false" />
    <Nuxt />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navBar: true,
        navBarColor: 'light'
      }
    },
    head() {
      return {
        title: 'SaM - Frontend Developer',
      }
    },
    watch: {
      $route() {
        this.setNavBarVisibility();
      },
    },
    created() {
      this.setNavBarVisibility();
    },
    methods: {
      setNavBarVisibility() {
        console.log(this.$route.name);
        if (this.$route.name === 'index') {
          this.navBar = false;
          this.navBarColor = 'light'
        } else {
          this.navBar = true;
          this.navBarColor = 'dark'
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
  --scrollbar-bg-color-dark: #F3F4F6;
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
  @apply overflow-y-auto;
}

// * {
//   outline: 1px dashed red;
//   outline-offset: -1px;
// }
</style>
