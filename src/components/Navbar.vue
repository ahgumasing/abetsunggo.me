<template>
  <nav class="px-32 py-12 flex items-center">
    <div class="w-64 justify-between font-medium hidden lg:flex">
      <router-link
        exact
        :active-class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
        class="hover:text-blue-600"
        :class="theme == 'dark' ? 'hover:text-teal-400' : ''"
        to="/"
        >Home</router-link
      >
      <router-link
        exact
        :active-class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
        class="hover:text-blue-600"
        :class="theme == 'dark' ? 'hover:text-teal-400' : ''"
        to="/about"
        >About</router-link
      >
      <router-link
        exact
        :active-class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
        :class="theme == 'dark' ? 'hover:text-teal-400' : ''"
        to="/works"
        >Works</router-link
      >
    </div>
    <div class="ml-auto hidden lg:block">
      <button
        :class="theme == 'dark' ? 'hover:text-teal-400' : ''"
        @click="$emit('toggleDarkMode')"
        :title="
          theme == 'dark' ? 'Switch to Dark Mode.' : 'Switch to Light Mode.'
        "
        class=" focus:outline-none hover:text-blue-600"
      >
        <icon v-if="theme == 'dark'" name="moon" class="w-8 h-8"></icon>
        <icon v-else name="sun" class="w-8 h-8 "></icon>
      </button>
    </div>
  </nav>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "navbar",
  props: ["theme"],
  components: {
    Icon
  },
  data() {
    return {
      selected: []
    };
  }
};
</script>
