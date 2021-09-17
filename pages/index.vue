<template>
  <div class="overflow-x-hidden min-h-screen w-full absolute top-0 flex flex-col justify-between bg-gray-100">
    <div class="cover-img h-screen max-h-screen flex-grow mb-20 overflow-hidden relative">
      <div class="absolute top-0 inset-0 flex justify-center items-center flex-col text-white">
        <div class="text-lg sm:text-2xl font-bold mb-1 sm:mb-2.5">Sawan Mungroo</div>
        <div class="text-3xl sm:text-6xl font-bold mb-3 sm:mb-5 text-center">Frontend Developer</div>
        <div class="flex gap-x-3 sm:gap-x-5 mb-12 sm:mb-14 text-xs sm:text-sm uppercase font-semibold">
          <div>Websites</div>
          <div>Web Apps</div>
          <div>Mobile & Desktop Apps</div>
        </div>
        <div class="mb-2 text-highlight-anim font-medium shadow-sm">Available for hire!</div>
        <NuxtLink to="/contact" class=" bg-yellow-500 hover:bg-yellow-400 px-5 rounded h-10 flex items-center uppercase text-sm font-bold text-gray-900 hover:text-black border-t border-yellow-300 shadow-md hover:shadow-lg tracking-wide">Get in touch</NuxtLink>
      </div>
    </div>
    <div class="max-w-screen-md mx-auto">
      <div class="flex flex-col gap-y-14 md:gap-y-12 mb-20 md:w-screen max-w-3xl">
        <a href="https://utopianknight.github.io/Tailwind-CSS-Cheatsheet/" class="md:h-64 flex gap-x-5 flex-col md:flex-row hover:bg-white hover:shadow-lg rounded-xl">
          <div class="bg-gray-500 max-w-sm sm:rounded-xl flex-shrink-0 overflow-hidden mx-auto">
            <img src="homepage/tw-cheatsheet-thumb.png" alt="Tailwind CSS Cheatsheet">
          </div>
          <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
            <div class="font-semibold text-2xl md:text-4xl text-gray-800">Tailwind CSS Cheatsheet</div>
            <div class=" w-full">A visual and interactive Tailwind CSS cheat sheet</div>
            <div class="bg-green-900 text-white w-max px-2 py-0.5 rounded-md font-semibold text-sm uppercase">PWA</div>
          </div>
        </a>
        <NuxtLink to="/blog/browser-concept" class="md:h-64 flex gap-x-5 flex-col md:flex-row hover:bg-white hover:shadow-lg rounded-xl">
          <div class="bg-gray-500 max-w-sm sm:rounded-xl flex-shrink-0 overflow-hidden mx-auto">
            <img src="homepage/browser-concept-thumb.png" alt="Browser concept">
          </div>
          <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
            <div class="font-semibold text-2xl md:text-4xl text-gray-800">Browser Concept</div>
            <div class=" w-full">A Firefox Concept inspired by the new Safari on MacOS Monterey</div>
            <div class="bg-red-900 text-white w-max px-2 py-0.5 rounded-md font-semibold text-sm uppercase">Design</div>
          </div>
        </NuxtLink>
        <a href="https://github.com/utopianknight/24-hour-analog-clock-w-daily-routines" class="md:h-64 flex gap-x-5 flex-col md:flex-row hover:bg-white hover:shadow-lg rounded-xl">
          <div class="bg-gray-500 max-w-sm sm:rounded-xl flex-shrink-0 overflow-hidden mx-auto">
            <img src="homepage/clock-thumb.png" alt="24-hour analog clock">
          </div>
          <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
            <div class="font-semibold text-2xl md:text-4xl text-gray-800">24-hour Analog Clock</div>
            <div class=" w-full">A NW.js 24-hour analog clock with daily routines, active task and calendar</div>
            <div class="bg-blue-900 text-white w-max px-2 py-0.5 rounded-md font-semibold text-sm uppercase">App</div>
          </div>
        </a>
        <a href="https://utopianknight.github.io" class="md:h-64 flex gap-x-5 flex-col md:flex-row hover:bg-white hover:shadow-lg rounded-xl">
          <div class="bg-gray-500 max-w-sm sm:rounded-xl flex-shrink-0 overflow-hidden mx-auto sm:mx-0">
            <img src="homepage/personal-site-thumb.png" alt="Personal site">
          </div>
          <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
            <div class="font-semibold text-2xl md:text-4xl text-gray-800">Personal Site</div>
            <div class=" w-full">Portfolio, blog and personal site</div>
            <div class="bg-purple-900 text-white w-max px-2 py-0.5 rounded-md font-semibold text-sm uppercase">Web</div>
          </div>
        </a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cover-img {
  background: url('/homepage/cover_photo.webp'), #1E3A8A;
  @apply bg-center bg-cover bg-no-repeat bg-clip-border;
}
.text-highlight-anim {
  color: #fff;
  background: linear-gradient(to right, #c5a03a 0, #fff 15%, #c5a03a 30%);
  background-position: 0;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  text-decoration: none;
  white-space: nowrap;
  padding-left: 64px;
  padding-right: 64px;
}

@keyframes shine {
  0% {
    background-position: 0;
  }
  50% {
    background-position: 250px;
  }
  100% {
    background-position: 250px;
  }
}
</style>
