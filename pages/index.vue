<template>
  <div class="overflow-x-hidden h-screen max-h-screen w-full absolute top-0 bg-gray-100" style="perspective: 4px; perspective-origin: 0%;">
    <div class="h-screen cover-img absolute top-0 left-0 w-full" style="transform-origin: 0; transform: translateZ(-8px) scale(3)"></div>
    <div class="h-screen flex justify-center items-center text-white text-4xl" style="transform-origin: 0; transform: translateZ(-2px) scale(1.5);">
      <div class="absolute top-0 inset-0 flex justify-center items-center flex-col text-white">
        <div class="text-lg sm:text-2xl font-bold mb-1 sm:mb-2.5">Sawan Mungroo</div>
        <div class="text-3xl sm:text-6xl font-bold mb-3 sm:mb-5 text-center">Frontend Developer</div>
        <div class="flex gap-x-3 sm:gap-x-5 mb-12 sm:mb-14 text-xs sm:text-sm uppercase font-semibold">
          <div>Websites</div>
          <div>Web Apps</div>
          <div>Mobile & Desktop Apps</div>
        </div>
        <div class="mb-2 text-highlight-anim font-medium shadow-sm text-base">Available for hire!</div>
        <NuxtLink to="/contact" class=" bg-yellow-500 hover:bg-yellow-400 px-5 rounded h-10 flex items-center uppercase text-sm font-bold text-gray-900 hover:text-black border-t border-yellow-300 shadow-md hover:shadow-lg tracking-wide">Get in touch</NuxtLink>
      </div>
    </div>
    <div class="origin-left absolute top-0 w-full pointer-events-none" style="transform: translateZ(0)">
      <div class="h-screen w-full">
        <Header class="pointer-events-auto" color='light' />
      </div>
      <div class="bg-gray-100 min-h-screen">
        <div class="max-w-screen-md mx-auto">
          <div class="flex flex-col gap-y-14 md:gap-y-12 mb-20 md:w-screen max-w-3xl pointer-events-auto">
            <a href="https://utopianknight.github.io/Tailwind-CSS-Cheatsheet/" class="md:h-64 flex gap-x-5 flex-col md:flex-row hover:shadow-sm hover:bg-white rounded-xl group mt-20">
              <div class="bg-gray-500 max-w-sm sm:rounded-xl flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125">
                <img src="homepage/tw-cheatsheet-thumb.png" alt="Tailwind CSS Cheatsheet">
              </div>
              <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                <div class="font-semibold text-2xl md:text-4xl text-gray-900 group-hover:text-gray-800">Tailwind CSS Cheatsheet</div>
                <div class=" w-full">A visual and interactive Tailwind CSS cheat sheet installable as a PWA</div>
                <div class="flex gap-x-2">
                  <div class="pill bg-green-700">Nuxt</div>
                  <div class="pill bg-green-800">Tailwind CSS</div>
                </div>
              </div>
            </a>
            <NuxtLink to="/blog/browser-concept" class="md:h-64 flex gap-x-5 flex-col md:flex-row hover:shadow-sm hover:bg-white rounded-xl group">
              <div class="bg-gray-500 max-w-sm sm:rounded-xl flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125">
                <img src="homepage/browser-concept-thumb.png" alt="Browser concept">
              </div>
              <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                <div class="font-semibold text-2xl md:text-4xl text-gray-900 group-hover:text-gray-800">Browser Concept</div>
                <div class=" w-full">A Firefox concept inspired by the new version of Safari on MacOS Monterey</div>
                <div class="flex gap-x-2">
                  <div class="pill bg-blue-800">Photoshop</div>
                </div>
              </div>
            </NuxtLink>
            <a href="https://github.com/utopianknight/24-hour-analog-clock-w-daily-routines" class="md:h-64 flex gap-x-5 flex-col md:flex-row hover:shadow-sm hover:bg-white rounded-xl group">
              <div class="bg-gray-500 max-w-sm sm:rounded-xl flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125">
                <img src="homepage/clock-thumb.png" alt="24-hour analog clock">
              </div>
              <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                <div class="font-semibold text-2xl md:text-4xl text-gray-900 group-hover:text-gray-800">24-hour Analog Clock</div>
                <div class=" w-full">A NW.js 24-hour analog clock with daily routines, active task and calendar</div>
                <div class="flex gap-x-2">
                  <div class="pill bg-gray-900">NW.js</div>
                  <div class="pill bg-yellow-700">Vanilla JS</div>
                </div>
              </div>
            </a>
            <a href="https://utopianknight.github.io" class="md:h-64 flex gap-x-5 flex-col md:flex-row hover:shadow-sm hover:bg-white rounded-xl group">
              <div class="bg-gray-500 max-w-sm sm:rounded-xl flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125 sm:mx-0">
                <img src="homepage/personal-site-thumb.png" alt="Personal site">
              </div>
              <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                <div class="font-semibold text-2xl md:text-4xl text-gray-900 group-hover:text-gray-800">Personal Site</div>
                <div class=" w-full">My personal site, portfolio, and blog</div>
                <div class="flex gap-x-2">
                  <div class="pill bg-green-700">Nuxt</div>
                  <div class="pill bg-green-800">Tailwind CSS</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer class="pointer-events-auto" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cover-img {
  background: url('/homepage/cover_photo.webp'), linear-gradient(90deg, rgba(18,39,58,1) 6%, rgba(5,65,99,1) 24%, rgba(0,43,78,1) 50%, rgba(21,37,50,1) 73%, rgba(16,48,63,1) 95%);
  @apply bg-bottom bg-cover bg-no-repeat bg-clip-border;
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

.pill {
  @apply text-white w-max px-2 py-0.5 rounded-md font-semibold text-sm uppercase;
}
</style>
