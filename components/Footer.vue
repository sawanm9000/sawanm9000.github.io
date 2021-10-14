<template>
  <footer class="bg-gray-300 w-screen">
    <div class="h-16 flex justify-between items-center gap-x-9 w-full max-w-screen-lg px-4 lg:px-0 mx-auto">
      <div class="text-sm text-gray-700 flex-grow">&copy; Sawan Mungroo 2021. <br class="block sm:hidden"> All rights reserved.</div>
      <div class="flex items-center gap-x-4 flex-shrink-0 opacity-75">
        <NuxtLink to="/contact">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-90" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </NuxtLink>
        <a href="https://github.com/sawanm9000">
          <img src="/GitHub-Mark-32px.png" alt="Github" style="width: 24px; height: 24px;">
        </a>
      </div>
      <!-- <img src="LI-black.png" alt="LinkedIn" style="width: 32px; height: 32px;"> -->
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>
