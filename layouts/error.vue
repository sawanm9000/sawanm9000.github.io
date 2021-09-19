<template>
  <div class="flex flex-col justify-center items-center h-screen absolute top-0 left-0 w-full">
    <h1 v-if="error.statusCode === 404" class="text-4xl font-bold mb-8">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/" class="text-base text-blue-500">&#8592; Home page</NuxtLink>
    <Footer class="fixed bottom-0 w-full" />
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
