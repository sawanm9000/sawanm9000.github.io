<template>
  <div class="pt-24 overflow-x-hidden min-h-screen w-full absolute top-0 flex flex-col justify-between">
    <NuxtLink to="/blog/browser-concept" class="post">
      <h4>Browser concept</h4>
      <div class="flex justify-between">
        <div class="tag">UI/UX</div>
        <div>16 September 2021</div>
      </div>
    </NuxtLink>
    <NuxtChild />
    <Footer />
  </div>
</template>

<script>
  export default {
    transition: 'home'
  }
</script>

<style lang="scss" scoped>
h4 {
  @apply font-light text-4xl mb-3;
}

.post {
  .tag {
    @apply uppercase bg-gray-400 text-gray-100 px-2 rounded;
  }

  @apply mb-8 block hover:bg-gray-50 hover:text-blue-900 p-4 rounded-sm w-full max-w-screen-md mx-auto;
}
</style>
