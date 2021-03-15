<template>
  <div id="app">
    <div class="h-screen" :class="theme">
      <div>
        <button
          class="focus:outline-none"
          :title="
            theme == 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'
          "
          @click="toggleDarkMode"
        >
          <icon v-if="theme == 'dark'" name="moon" class="w-8 h-8"></icon>
          <icon v-else name="sun" class="w-8 h-8"></icon>
        </button>
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Icon from "./components/Icon.vue";
export default {
  name: "app",
  components: {
    Icon
  },
  data() {
    return {
      theme: "dark"
    };
  },
  methods: {
    toggleDarkMode() {
      if (this.theme == "dark") {
        this.theme = this.theme = "light";
      } else {
        this.theme = this.theme = "dark";
      }
    }
  }
};
</script>

<style lang="scss">
.dark {
  @apply dark:bg-red-600;
}
</style>
