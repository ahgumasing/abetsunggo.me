<template>
  <div class="px-6 md:px-12 lg:py-5 lg:px-28 lg:h-full pb-12 ">
    <h1
      class="mt-7 text-4xl w-72 font-extrabold md:text-6xl md:w-10/12 lg:text-7xl lg:w-11/12"
    >
      {{ heading }}
    </h1>
    <p
      class="text-sm w-64 py-6 md:text-lg md:w-8/12 lg:text-xl lg:py-10 text-gray-500 mb-24 "
    >
      {{ text }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  props: ["theme"],
  data() {
    return {
      heading:
        "Creating and Implementing well maintable code and high quality solutions.",
      text:
        "A Front-End Web Developer has specialize in VueJS and loves designing."
    };
  }
};
</script>
