<template>
  <Article>
    <div class="title">
      <div class="tag">UI/UX</div>
      <h1>Browser concept</h1>
      <div class="summary">Reimagining the web browser</div>
      <div class="published-date">16 September 2021</div>
    </div>
    <div
      class="img-container cover"
      style="background: linear-gradient(160deg, rgb(0, 114, 190) 0, rgb(0, 33, 95) 100%);">
      <img src="/blog/browser-concept/cover_img.webp" alt="Cover" style="width: 1366px; aspect-ratio: 16/9" />
    </div>
    <p class="update-note">Originally published on 12 August 2021</p>
    <p class="first-p">
      There have been a few key events that occurred in the browser space last
      June. Firefox
      <a href="https://www.mozilla.org/en-US/firefox/89.0/releasenotes/"
        >received</a
      >
      the Proton interface, Safari has had a
      <a
        href="https://9to5mac.com/2021/06/16/safari-in-macos-monterey-whats-new-how-it-works/"
        >major</a
      >
      visual overhaul, Opera
      <a href="https://blogs.opera.com/desktop/2021/06/opera-r5-desktop/"
        >received</a
      >
      its Pinboard feature, and Chrome
      <a
        href="https://www.slashgear.com/chrome-will-no-longer-try-to-hide-the-full-address-of-websites-11677574/"
        >ended</a
      >
      an experiment on simplifying the URL. What intrigued me the most, however,
      is the new Safari. Its new interface does not conform to the traditional
      browser layout. Instead, it combines the tab bar, the address bar, and the
      toolbar into a single row of buttons while at the same time reducing
      visual clutter. On top of this, the tab bar now matches the color of the
      page. The result is an immersive and streamlined look that is very easy on
      the eyes.
    </p>
    <p>
      Firefox has been my browser of choice since the mid-2000s. Naturally, I
      wondered, what would it look like if it resembled the new Safari?
    </p>
    <p>
      Let's attempt to answer this question, and explore new functionalities
      that could make Firefox a better browser.
    </p>

    <div class="img-container body-img grid grid-cols-1 grid-rows-1 relative select-none justify-center">
      <figure v-for="(image, index) in images" :key="index" class="mx-auto col-start-1 row-start-1 pointer-events-none">
        <img ref="img" :src="'/blog/browser-concept/' + image.src" :alt="image.caption" class="pointer-events-auto" :class="currentImg === index ? 'visible' : 'invisible'" draggable="false" @click="nextImg">
        <figcaption ref="imgCaption" class="text-center" :class="currentImg === index ? 'visible' : 'invisible'">{{image.caption}}</figcaption>
      </figure>

      <div class="col-start-1 row-start-1 w-screen h-full pointer-events-none">
        <button class="p-4 bg-black bg-opacity-20 rounded-full text-white font-semibold uppercase text-sm tracking-wider hover:bg-opacity-50 absolute bottom-1 md:bottom-1/2 -mt-10 left-2 2xl:left-20 pointer-events-auto z-10" @click="previousImg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button class="p-4 bg-black bg-opacity-20 rounded-full text-white font-semibold uppercase text-sm tracking-wider hover:bg-opacity-50 absolute bottom-1 md:bottom-1/2 -mt-10 right-2 2xl:right-20 pointer-events-auto" @click="nextImg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <p>
      While this concept would probably solve some of the problems users have
      today, it is definitely not the be-all and end-all. Design trends are
      constantly changing and evolving. After a while, new issues would
      undoubtedly surface, and that would require new innovative solutions. If
      this concept were to be implemented, it would need some ironing out and
      extensive user testing.
    </p>
  </Article>
</template>

<script>
export default {
  layout: 'blogPost',
  data() {
    return {
      images: [
        { src: '1.png', caption: 'Single tab opened' },
        { src: '2.png', caption: 'Two tabs opened' },
        { src: '2b.png', caption: 'Page scrolled' },
        { src: '3.png', caption: 'Active address bar' },
        { src: '4.png', caption: 'Expanded address bar' },
        { src: '5.png', caption: 'Dark background' },
        { src: '6.png', caption: 'Mixed background' },
        { src: '7.png', caption: 'Inactive tab menu' },
        { src: '8.png', caption: 'Active tab menu' },
        { src: '9.png', caption: 'Tab context menu' },
        { src: '10.png', caption: 'New tab menu' },
        { src: '11.png', caption: 'Extensions menu' },
        { src: '12.png', caption: 'Page context menu' },
        { src: '13.png', caption: 'Sidebar' },
        { src: '14.png', caption: 'Profile switcher' },
        { src: '15.png', caption: 'Bookmarks sidebar' },
        { src: '16.png', caption: 'Vertical tabs mode' },
        { src: '17.png', caption: 'Vertical tabs with alternate toolbar' },
        { src: '18.png', caption: 'Collapsed tab sidebar' },
        { src: '19.png', caption: 'Sidebar in vertical tabs mode' },
        { src: '20.png', caption: 'Bookmarks page' },
        { src: '20_bookmarks_supercharged.png', caption: 'Bookmarks in cards view' },
        { src: '21.png', caption: 'Tab manager' },
        { src: '22_settings.png', caption: 'Settings' },
        { src: 'PDF.png', caption: 'PDF reader in book view' },
      ],
      currentImg: 0,
    }
  },
  head() {
    return {
      title: 'Browser concept - Sawan Mungroo',
    }
  },

  methods: {
    nextImg() {
      if (this.currentImg >= this.images.length - 1) {
        this.currentImg = 0;
      } else {
        this.currentImg += 1;
      }
    },
    previousImg() {
      if (this.currentImg <= 0) {
        this.currentImg = this.images.length -1;
      } else {
        this.currentImg -= 1;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.img-container.body-img {
  img {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(128, 128, 128, 0.5);
    max-height: 100vh;
    @apply rounded md:rounded-md;
  }
}
</style>
