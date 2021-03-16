<template>
  <div class="h-full">
    <div class="px-6 md:px-12 lg:px-28">
      <h1
        :class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
        class="mt-7 text-3xl w-72 font-extrabold md:text-6xl  md:w-full lg:text-5xl lg:w-11/12"
      >
        Projects
      </h1>
      <p class="text-sm py-4 lg:text-lg">
        Here's some of my projects that i worked for.
      </p>
    </div>
    <Projects :theme="theme" />
    <Designs :theme="theme" />
    <Foot :theme="theme" />
  </div>
</template>

<script>
import Foot from "@/components/Foot";
import Projects from "@/components/Projects";
import Designs from "@/components/Designs";

export default {
  name: "works",
  props: ["theme"],
  components: {
    Foot,
    Projects,
    Designs
  }
};
</script>
