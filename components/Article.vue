<template>
  <article class="prose md:prose-lg w-screen mx-auto max-w-prose px-3 sm:px-0 pb-24">
    <slot></slot>
  </article>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.title {
  .tag {
    @apply bg-gray-200 text-blue-900 rounded px-1.5 w-max font-semibold text-base mb-1;
  }

  h1 {
    @apply font-bold mb-2.5;
  }

  .summary {
    @apply font-semibold text-base mb-5 text-gray-700;
  }

  .published-date {
    @apply text-gray-600 text-sm;
  }

  @apply h-96 flex flex-col justify-center;
}

// .cover {
//   @apply bg-gray-600;
// }

.update-note {
  @apply text-gray-500 border-l-2 border-gray-400 pl-2 text-base font-medium;
}

.first-p::first-letter {
  @apply float-left text-7xl pr-2 leading-10;
}

.img-container {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  img {
    max-height: 100vh;
  }
}

.img-container.cover {
  img {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  @apply flex justify-center items-center;
}

</style>
