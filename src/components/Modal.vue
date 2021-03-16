<template>
  <div v-if="showMenu" class="h-screen w-full bg-white bg-opacity-80 fixed">
    <div
      class="flex flex-col fixed right-0 text-right mr-12 text-lg mt-48 uppercase text-blue-900"
    >
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/works">Works</router-link>
      <button @click="$emit('darkMode')" class="ml-auto focus:outline-none">
        <icon v-if="theme == 'dark'" name="moon" class="w-8 h-8"></icon>
        <icon v-else name="sun" class="w-8 h-8 "></icon>
      </button>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "modal",
  props: ["showMenu", "theme"],
  components: {
    Icon
  }
};
</script>
