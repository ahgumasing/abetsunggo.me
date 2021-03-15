<template>
  <div
    id="app"
    class="2xl:w-8/12 2xl:mx-auto 2xl:py-12"
    :class="theme == 'dark' ? 'bg-gray-900 text-gray-200' : ''"
  >
    <SideMenu
      :theme="theme"
      :showMenu="showMenu"
      @showMenu="showMenu = !showMenu"
      @darkMode="toggleDarkMode"
    />
    <Navbar :theme="theme" @toggleDarkMode="toggleDarkMode" />

    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
export default {
  name: "app",
  components: {
    Navbar,
    SideMenu
  },
  data() {
    return {
      theme: "dark",
      showMenu: false
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
* {
  font-family: "Inter", "sans-serif";
  -webkit-font-smoothing: antialiased;
}
</style>
