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
    <div>
      <Modal
        :theme="theme"
        :showMenu="showMenu"
        @darkMode="$emit('darkMode')"
      />
    </div>
  </div>
</template>

<script>
import Modal from "./Modal";
import Icon from "./Icon";
export default {
  props: ["showMenu", "theme"],
  name: "side-menu",
  components: {
    Icon,
    Modal
  }
};
</script>
