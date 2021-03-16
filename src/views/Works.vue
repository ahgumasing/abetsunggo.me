<template>
  <div>
    <div class="px-6 md:px-12 lg:py-20 lg:px-28 lg:h-full pb-12">
      Works
    </div>
    <Foot :theme="theme" />
  </div>
</template>

<script>
import Foot from "@/components/Foot";
export default {
  name: "works",
  props: ["theme"],
  components: {
    Foot
  }
};
</script>
