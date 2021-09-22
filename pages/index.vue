<template>
  <div class="overflow-x-hidden h-screen max-h-screen w-full absolute top-0 bg-gray-100" style="perspective: 4px; perspective-origin: 0%;">
    <div class="h-screen cover-img absolute top-0 left-0 w-full" style="transform-origin: 0; transform: translateZ(-10px) scale(3.5)"></div>
    <div class="h-screen flex justify-center items-center text-white text-4xl pointer-events-none absolute w-full z-10" style="transform-origin: 0; transform: translateZ(-1.5px) scale(1.375);">
      <div class="absolute top-0 inset-0 flex justify-center items-center flex-col text-white pointer-events-none">
        <div class="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 filter text-shadow">Sawan Mungroo</div>
        <h1 class="text-3xl sm:text-6xl font-bold mb-2 sm:mb-3 text-center text-shadow">Frontend Developer</h1>
        <div class="text-base font-medium mb-10 text-center text-shadow">Modern and meticulously crafted websites & apps (mobile, desktop & PWA)</div>
        <div class="uppercase text-xs tracking-wider mb-1.5 hidden sm:block text-shadow">Frontend Stack</div>
        <div class="sm:flex flex-wrap justify-center gap-2 text-base mb-8 text-white hidden">
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #c13a00">HTML</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #2476ff">CSS</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #bd7f00">JavaScript</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #a7366d">Sass</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #00a4ba">Tailwind CSS</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #008c4e">Vue</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #00ad66">Nuxt</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #009dde">Quasar</div>
        </div>
        <div class="uppercase text-xs tracking-wider mb-1.5 hidden sm:block text-shadow">Backend Stack (Serverless and Jamstack)</div>
        <div class="sm:flex flex-wrap justify-center gap-2 text-base mb-10 text-white hidden">
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #6847ff">Strapi</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #cc8000">Firebase</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #444">GitHub Pages</div>
          <div class="rounded px-1.5 font-medium uppercase text-sm" style="background-color: #b35a0c">Cloudflare Pages</div>
        </div>
        <div class="mb-2 text-highlight-anim font-medium text-base">Available for hire!</div>
        <NuxtLink to="/contact" class="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 px-5 rounded-sm h-10 flex items-center uppercase text-sm font-bold text-black hover border-t border-yellow-400 shadow-md hover:shadow-lg tracking-wide pointer-events-auto">Get in touch</NuxtLink>
      </div>
    </div>
    <div class="origin-left absolute top-0 w-full pointer-events-none z-0" style="transform: translateZ(0)">
      <div class="cover-bg-gradient h-screen w-full">
        <Header class="pointer-events-auto" color='light' />
      </div>
      <div class="bg-gradient-to-br from-gray-300 to-gray-50 min-h-screen">
        <div class="max-w-screen-md mx-auto">
          <div class="flex flex-col gap-y-14 md:gap-y-12 pb-20 md:w-screen max-w-3xl pointer-events-auto ">
          <h2 class="separator mt-16 text-center uppercase tracking-wider text-xl font-light text-yellow-700">Projects</h2>
            <a href="https://utopianknight.github.io/Tailwind-CSS-Cheatsheet/" class="md:h-64 flex gap-x-5 flex-col md:flex-row rounded group">
              <div class="bg-gray-500 max-w-sm sm:rounded flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125">
                <img src="homepage/tw-cheatsheet-thumb.png" alt="Tailwind CSS Cheatsheet">
              </div>
              <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                <h3 class="font-light text-2xl md:text-5xl text-gray-900 group-hover:text-yellow-800">Tailwind CSS Cheatsheet</h3>
                <div class=" w-full group-hover:text-yellow-900">A visual and interactive Tailwind CSS cheat sheet installable as a PWA</div>
                <div class="flex gap-x-2">
                  <div class="pill bg-green-700">Nuxt</div>
                  <div class="pill bg-green-800">Tailwind CSS</div>
                </div>
              </div>
            </a>
            <NuxtLink to="/blog/browser-concept" class="md:h-64 flex gap-x-5 flex-col md:flex-row rounded group">
              <div class="bg-gray-500 max-w-sm sm:rounded flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125">
                <img src="homepage/browser-concept-thumb.webp" alt="Browser concept">
              </div>
              <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                <h3 class="font-light text-2xl md:text-5xl text-gray-900 group-hover:text-yellow-800">Browser Concept</h3>
                <div class=" w-full group-hover:text-yellow-900">A Firefox concept inspired by the new version of Safari on MacOS Monterey</div>
                <div class="flex gap-x-2">
                  <div class="pill bg-blue-800">Photoshop</div>
                </div>
              </div>
            </NuxtLink>
            <a href="https://github.com/utopianknight/24-hour-analog-clock-w-daily-routines" class="md:h-64 flex gap-x-5 flex-col md:flex-row rounded group">
              <div class="bg-gray-500 max-w-sm sm:rounded flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125">
                <img src="homepage/clock-thumb.png" alt="24-hour analog clock">
              </div>
              <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                <h3 class="font-light text-2xl md:text-5xl text-gray-900 group-hover:text-yellow-800">24-hour Analog Clock</h3>
                <div class=" w-full group-hover:text-yellow-900">A NW.js 24-hour analog clock with daily routines, active task and calendar</div>
                <div class="flex gap-x-2">
                  <div class="pill bg-gray-900">NW.js</div>
                  <div class="pill bg-yellow-700">Vanilla JS</div>
                </div>
              </div>
            </a>
            <a href="https://utopianknight.github.io" class="md:h-64 flex gap-x-5 flex-col md:flex-row rounded group">
              <div class="bg-gray-500 max-w-sm sm:rounded flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125 sm:mx-0">
                <img src="homepage/personal-site-thumb.png" alt="Personal site">
              </div>
              <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                <h3 class="font-light text-2xl md:text-5xl text-gray-900 group-hover:text-yellow-800">Personal Site</h3>
                <div class=" w-full group-hover:text-yellow-900">Responsive personal site, portfolio, and blog</div>
                <div class="flex gap-x-2">
                  <div class="pill bg-green-700">Nuxt</div>
                  <div class="pill bg-green-800">Tailwind CSS</div>
                  <div class="pill bg-pink-700">Sass</div>
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
  background: url('/homepage/cover_photo.webp'), black;
  @apply bg-center bg-cover bg-no-repeat bg-clip-border;
}

.cover-bg-gradient {
  background: linear-gradient(0deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.35) 100%);
}

.text-highlight-anim {
  color: #fff;
  background: linear-gradient(to right, #cf8d36 0, #fff 15%, #cf8d36 30%);
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

.text-shadow {
  text-shadow: 0 0 26px rgba(0, 0, 0, 1);
}

// h1 {
  // font-family: 'Readex Pro Light', sans-serif;
  // font-family: 'Futura PT Book', 'Readex Pro Light', sans-serif;
// }

h2 {
  font-family: 'Futura PT Book', 'Readex Pro Light', sans-serif !important;
}

h3 {
  font-family: 'Readex Pro ExtraLight', sans-serif !important;
}
</style>
