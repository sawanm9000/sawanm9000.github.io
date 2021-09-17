<template>
  <div class="pt-32 overflow-x-hidden min-h-screen w-full absolute top-0 flex justify-center">
    <div class="w-full flex justify-center items-center flex-col bg-gray-100">
      <form ref="contactForm" name="contact-form" action="https://kwesforms.com/api/foreign/forms/90oV3Vjk6J261C8jDRU7" class="grid grid-cols-1 gap-y-4 max-w-md w-full content-start px-3 sm:px-0 flex-grow bg-gray-100 pb-24 kwes-form" has-recaptcha-v2>
        <label class="block">
          <span>Name<span class="text-red-600">*</span></span>
          <input id="name" type="text" name="name" class="mt-1 block w-full border" rules="required|min:5|max:255">
        </label>

        <label class="block">
          <span>Email address<span class="text-red-600">*</span></span>
          <input id="email" type="email" name="email" class="mt-1 block w-full" rules="required|email">
        </label>


        <label class="inline-flex items-center">
          <input id="checked" v-model="cvRequest" name="request_cv" value="checked" label="checked" type="checkbox" class="border-gray-600 border text-black focus:border-gray-300 focus:ring-black">
          <span class="ml-2">Request CV/resume</span>
        </label>

        <label :class="cvRequest ? 'block' : 'hidden'">
          <span>Company name<span class="text-red-600">*</span></span>
          <input id="company" type="text" name="company_name" class="mt-1 block w-full" rules="max:255">
        </label>

        <label :class="cvRequest ? 'block' : 'hidden'">
          <span>Website</span>
          <input id="website" type="url" name="website" class="mt-1 block w-full" rules="max:255">
        </label>

        <label class="block">
          <span>Message<span class="text-red-600">*</span></span>
          <textarea id="message" type="text" name="message" class="mt-1 block w-full" rules="required"></textarea>
        </label>

        <label class="block">
          <span>Are you a robot?<span class="text-red-600">*</span></span>
          <div class="relative mt-1" style="width: 304px; height: 76px">
            <div class="loading-captcha absolute top-0 left-0 inset-x-0.5 flex justify-center items-center text-sm text-gray-700 h-full border rounded"></div>
            <recaptcha class="g-recaptcha absolute top-0 left-0 w-max" />
          </div>
        </label>

        <button type="submit" value="Send" class="bg-yellow-500 hover:bg-yellow-400 px-5 py-2.5 rounded-sm uppercase text-sm font-bold text-gray-900 hover:text-black border-t border-yellow-300 shadow-md tracking-wide w-max cursor-pointer mt-4">Send</button>
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
      cvRequest: false,
    }
  },
  mounted() {
    kwesforms.init();
  },
}
</script>

<style lang="scss" scoped>
.loading-captcha {
  background-color: #f9f9f9;
  border-color: #d3d3d3;

  &::before {
    content: 'Loading...';
  }
}
</style>
