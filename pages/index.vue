<template>
  <div class="overflow-x-hidden h-screen max-h-screen w-full absolute top-0 bg-gray-100" style="perspective: 4px; perspective-origin: 0%;">
    <div class="h-screen cover-img absolute top-0 left-0 w-full" style="transform-origin: 0; transform: translateZ(-10px) scale(3.5);"></div>
    <div class="h-screen flex justify-center items-center text-white text-4xl pointer-events-none absolute w-full" style="transform-origin: 0; transform: translateZ(-2px) scale(1.5);">
      <div class="absolute top-0 inset-0 flex justify-center items-center flex-col text-white pointer-events-none readex">
        <div class="text-lg sm:text-2xl mb-1 sm:mb-2 filter text-shadow readex">Sawan M</div>
        <h1 class="text-3xl sm:text-6xl mb-2 sm:mb-3 text-center text-shadow readex-semibold">Web Developer</h1>
        <!-- <div class="text-base mb-10 text-center text-shadow tracking-wide readex-light px-2">Modern and meticulously crafted websites & apps (mobile, desktop & PWA)</div> -->
        <div class="mb-10 px-2 flex text-sm sm:text-base gap-x-2.5 sm:gap-x-6">
          <div class="text-shadow readex-light">Websites</div>
          <div class="text-shadow readex-light">Web Apps</div>
          <div class="text-shadow readex-light">Mobile & Desktop Apps</div>
        </div>

        <div class="mb-2 text-highlight-anim font-medium text-base">Available for hire!</div>
        <NuxtLink to="/contact" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 px-5 py-5 rounded-sm h-10 flex items-center uppercase text-sm text-white hover border-t border-blue-400 shadow-md hover:shadow-lg pointer-events-auto readex-semibold">Get in touch</NuxtLink>
      </div>
    </div>
    <div class="origin-left absolute top-0 w-full pointer-events-none" style="transform: translateZ(0)">
      <div class="cover-bg-gradient h-screen w-full">
        <Header class="pointer-events-auto" color='light' />
      </div>
      <div class="bg-gradient-to-br from-gray-300 to-gray-50 min-h-screen">
        <div class="max-w-screen-md mx-auto">
          <div class="flex flex-col md:w-screen max-w-3xl pointer-events-auto ">
            <div class="px-3 mt-16">
              <h2 class="separator mt-16 text-center uppercase tracking-wider text-xl font-light text-blue-700 pb-8">Tech Stack</h2>
              <div class="flex flex-wrap gap-2 text-base mb-2 font-sans">
                <div><span class="font-semibold">Design:</span> Adobe Photoshop, Adobe XD, Figma</div>
              </div>
              <div class="flex flex-wrap gap-2 text-base mb-2 font-sans">
                <div><span class="font-semibold">Frontend:</span> HTML, CSS, JavaScript, Sass, Tailwind CSS, Vue, Nuxt, Quasar</div>
              </div>
              <!-- <div class="readex text-lg mb-3">Backend Stack (Serverless and Jamstack)</div> -->
              <div class="flex flex-wrap gap-2 text-base font-sans">
                <div><span class="font-semibold">Backend (Serverless and Jamstack):</span> Strapi, Firebase, GitHub Pages, Cloudflare Pages</div>
              </div>
            </div>

            <div class="flex flex-col gap-y-14 md:gap-y-12 mt-10">
              <h2 class="separator mt-16 text-center uppercase tracking-wider text-xl font-light text-blue-700">Recent Projects</h2>
              <a href="https://sawanm9000.github.io/Tailwind-CSS-Cheatsheet/" class="md:h-64 flex gap-x-5 flex-col md:flex-row rounded group">
                <div class="bg-gray-500 max-w-sm sm:rounded flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125">
                  <img src="homepage/tw-cheatsheet-thumb.png" alt="Tailwind CSS Cheatsheet">
                </div>
                <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                  <h3 class="font-light text-2xl md:text-5xl text-gray-900 group-hover:text-blue-900">Tailwind CSS Cheatsheet</h3>
                  <div class=" w-full group-hover:text-blue-900">A visual and interactive Tailwind CSS cheat sheet installable as a PWA</div>
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
                  <h3 class="font-light text-2xl md:text-5xl text-gray-900 group-hover:text-blue-800">Browser Concept</h3>
                  <div class=" w-full group-hover:text-blue-900">A Firefox concept inspired by the new version of Safari on MacOS Monterey</div>
                  <div class="flex gap-x-2">
                    <div class="pill bg-blue-800">Photoshop</div>
                  </div>
                </div>
              </NuxtLink>
              <a href="https://github.com/sawanm9000/24-hour-analog-clock-w-daily-routines" class="md:h-64 flex gap-x-5 flex-col md:flex-row rounded group">
                <div class="bg-gray-500 max-w-sm sm:rounded flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125">
                  <img src="homepage/clock-thumb.png" alt="24-hour analog clock">
                </div>
                <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                  <h3 class="font-light text-2xl md:text-5xl text-gray-900 group-hover:text-blue-800">24-hour Analog Clock</h3>
                  <div class=" w-full group-hover:text-blue-900">A NW.js 24-hour analog clock with daily routines, active task and calendar</div>
                  <div class="flex gap-x-2">
                    <div class="pill bg-gray-900">NW.js</div>
                    <div class="pill bg-yellow-700">Vanilla JS</div>
                  </div>
                </div>
              </a>
              <a href="https://sawanm9000.github.io" class="md:h-64 flex gap-x-5 flex-col md:flex-row rounded group">
                <div class="bg-gray-500 max-w-sm sm:rounded flex-shrink-0 overflow-hidden mx-auto filter brightness-100 group-hover:brightness-125 sm:mx-0">
                  <img src="homepage/personal-site-thumb.jpg" alt="Personal site">
                </div>
                <div class="flex flex-col gap-y-2 pt-4 pr-2 pl-3 md:pl-0">
                  <h3 class="font-light text-2xl md:text-5xl text-gray-900 group-hover:text-blue-800">Personal Site</h3>
                  <div class=" w-full group-hover:text-blue-900">Responsive personal site, portfolio, and blog</div>
                  <div class="flex gap-x-2">
                    <div class="pill bg-green-700">Nuxt</div>
                    <div class="pill bg-green-800">Tailwind CSS</div>
                    <div class="pill bg-pink-700">Sass</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center h-screen">
            <div class="text-center text-3xl mb-6">
              Ready to bring your ideas to life?
            </div>
            <NuxtLink to="/contact" class="flex justify-center flex-grow-0 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 px-5 py-5 mb-16 rounded-sm h-10 w-max items-center uppercase text-sm text-white text-center hover border-t border-blue-400 shadow-md hover:shadow-lg pointer-events-auto readex-semibold">Get in touch</NuxtLink>
          </div>
        </div>
      </div>
      <Footer class="pointer-events-auto" />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'home'
}
</script>

<style lang="scss" scoped>
.cover-img {
  // filter: contrast(0.9) brightness(0.7) sepia(0.3);
  background: url('/homepage/cover_photo.webp'), black;
  @apply bg-center bg-cover bg-no-repeat bg-clip-border;
}

.text-highlight-anim {
  color: #fff;
  background: linear-gradient(to right, #3d8eeb 0, #fff 15%, #3d8eeb 30%);
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
  @apply text-white w-max px-1.5 rounded font-semibold text-sm uppercase font-sans tracking-wide;
}

.text-shadow {
  text-shadow: 0 0 26px rgba(0, 0, 0, 1);
}

.readex {
  font-family: 'Exo 2',  sans-serif !important;
}
.readex-medium {
  font-family: 'Exo 2 Medium', sans-serif !important;
}
.readex-semibold {
  font-family: 'Exo 2 Semi Bold', sans-serif !important;
}

.readex-light {
  font-family: 'Exo 2 Light', sans-serif !important;
}

h3 {
  // font-family: 'Readex Pro ExtraLight', sans-serif;
  @apply readex-light text-4xl;
}

p {
  @apply mt-4;
}

.separator {
  @apply relative;
}

.separator::before {
  content: '';
  @apply border-b absolute w-14 border-blue-700 top-3.5 transform -translate-x-20;
}

.separator::after {
  content: '';
  @apply border-b absolute w-14 border-blue-700 top-3.5 transform translate-x-6;
}
</style>
