<template>
  <div>
    <div>
      <button
        @click="$emit('showMenu')"
        class="lg:hidden fixed right-0 mt-10 mr-8 z-50 focus:outline-none"
      >
        <icon v-if="showMenu" name="exit" class="h-8 w-8 text-blue-900"></icon>
        <icon v-else name="menu" class="h-8 w-8"></icon>
      </button>
    </div>
    <div v-if="showMenu" class="h-screen w-full bg-white bg-opacity-80 fixed">
      <div
        class="flex flex-col fixed right-0 text-right mr-12 text-lg mt-48 uppercase text-blue-900"
      >
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/works">Works</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  props: ["showMenu", "theme"],
  name: "side-menu",

  components: {
    Icon
  }
};
</script>
