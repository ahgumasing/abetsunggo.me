<template>
  <div
    class=" w-full py-4 lg:px-32 lg:pt-20 px-16 pt-0 mt-0"
    :class="theme == 'dark' ? 'bg-gray-900' : 'bg-blue-50'"
  >
    <div
      class="text-center py-4 text-sm w-9/12 mx-auto flex justify-between md:w-full md:justify-end lg:text-lg lg:w-full lg:justify-end"
    >
      <div class="w-48 py-4 flex justify-between mx-auto md:mx-0 lg:mx-0">
        <router-link
          :class="
            theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
          "
          to="/"
          >Home</router-link
        >
        <router-link
          :class="
            theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
          "
          to="/about"
          >About</router-link
        >
        <router-link
          :class="
            theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
          "
          to="/works"
          >Works</router-link
        >
      </div>
    </div>
    <div
      class="text-xs text-center md:items-center md:flex md:w-full md:text-sm md:justify-between"
    >
      <label aria-label="Copyright">
        2021© Abetsunggo. All Rights Reserved.</label
      >
      <div class="flex justify-between w-40 py-4 mx-auto md:mx-0">
        <a
          :class="
            theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
          "
          href="https://github.com/ahgumasing"
          ><icon class="h-8 w-8 lg:h-10 lg:w-10" name="github"></icon
        ></a>
        <a
          :class="
            theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
          "
          href="https://www.linkedin.com/in/ahgumasing"
          ><icon class="h-8 w-8 lg:h-10 lg:w-10" name="linkedin"> </icon
        ></a>
        <a
          :class="
            theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
          "
          href="https://twitter.com/abetsunggo"
          ><icon class="h-8 w-8 lg:h-10 lg:w-10" name="twitter"></icon
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "foot",
  props: ["theme"],
  components: {
    Icon
  }
};
</script>
