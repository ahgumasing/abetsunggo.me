<template>
  <div
    class=" w-full lg:px-28 lg:pt-20 py-4 mt-44"
    :class="theme == 'dark' ? 'bg-gray-900' : 'bg-blue-50'"
  >
    <div
      class="text-center py-4 text-sm w-8/12 mx-auto flex justify-between lg:text-lg lg:w-full lg:justify-end lg:w"
    >
      <div class="w-48 flex justify-between mx-auto lg:mx-0">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/works">Works</router-link>
      </div>
    </div>
    <div
      class="text-xs text-center md:items-center md:flex md:w-full md:text-sm md:justify-between"
    >
      <label aria-label="Copyright">
        2021© Abetsunggo. All Rights Reserved.</label
      >
      <div class="flex justify-between w-40 py-4 mx-auto md:mx-0">
        <a href="https://github.com/ahgumasing"
          ><icon class="h-9 w-9" name="github"></icon
        ></a>
        <a href="https://www.linkedin.com/in/ahgumasing"
          ><icon class="h-9 w-9" name="linkedin"> </icon
        ></a>
        <a href="https://twitter.com/abetsunggo"
          ><icon class="h-9 w-9" name="twitter"></icon
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
