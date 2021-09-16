<template>
  <div class="pt-32 overflow-x-hidden min-h-screen w-full absolute top-0 flex justify-center">
    <div class="w-full flex justify-center items-center flex-col">
      <form name="contact-form" action="https://kwesforms.com/api/foreign/forms/90oV3Vjk6J261C8jDRU7" class="grid grid-cols-1 gap-y-4 max-w-md w-full content-start px-3 sm:px-0 flex-grow bg-gray-100 pb-24 kwes-form" has-recaptcha-v2>
        <label class="block">
          <span>Name<span class="text-red-600">*</span></span>
          <input id="name" type="text" name="name" class="mt-1 block w-full border " rules="required|max:255">
        </label>

        <label class="block">
          <span>Email address<span class="text-red-600">*</span></span>
          <input id="email" type="email" name="email" class="mt-1 block w-full" rules="required|max:255|email">
        </label>


        <label class="inline-flex items-center">
          <input v-model="cvRequest" name="request_cv" type="checkbox" class="border-gray-600 border text-black focus:border-gray-300 focus:ring-black">
          <span class="ml-2">Request CV/resume</span>
        </label>

        <label :class="cvRequest ? 'block' : 'hidden'">
          <span>Company name<span class="text-red-600">*</span></span>
          <input id="company" type="text" name="company_name" class="mt-1 block w-full" :rules="cvRequest ? 'required|max:255' : ''">
        </label>

        <label :class="cvRequest ? 'block' : 'hidden'">
          <span>Website</span>
          <input id="website" type="url" name="website" class="mt-1 block w-full">
        </label>

        <label class="block">
          <span>Message<span class="text-red-600">*</span></span>
          <textarea id="message" type="text" name="message" class="mt-1 block w-full" rules="required"></textarea>
        </label>

        <div class="g-recaptcha" data-sitekey="6LfwaXAcAAAAAIRTID-LFsPM6-CiJuOq5vDrWneb"></div>

        <button type="submit" value="Send" class="bg-yellow-500 hover:bg-yellow-400 px-5 py-2.5 rounded-sm uppercase text-sm font-bold text-gray-900 hover:text-black border-t border-yellow-300 shadow-md tracking-wide w-max justify-self-end cursor-pointer">Send</button>
      </form>

      <Footer />
    </div>
  </div>
</template>

<script>
import kwesforms from 'kwesforms';

export default {
  data() {
    return {
      cvRequest: false
    }
  },
  head() {
    return {
      script: [{
        // src: "https://www.google.com/recaptcha/api.js?render=6LeaOnAcAAAAADtzMyTsevduxEF2qHB-Sv2uzmGP"
        src: "https://www.google.com/recaptcha/api.js",
        defer: true
      }]
    }
  },
  mounted() {
    kwesforms.init();
  }
}
</script>
