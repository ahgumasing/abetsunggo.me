<template>
  <div class="px-6 md:px-12 lg:py-16 lg:px-28 lg:h-full pb-12">
    <div
      class="grid grid-row-2 space-y-2 lg:grid-cols-2 lg:space-y-0 lg:space-x-4"
    >
      <div class="p-5" :class="theme == 'dark' ? 'bg-gray-900' : 'bg-blue-50'">
        <h1
          class="font-semibold py-2 lg:text-2xl"
          :class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
        >
          bpls.online
        </h1>
        <p class="text-xs py-2 w-11/12 lg:text-lg">
          Our Capstone Project. We automate Business Permit and Business
          Clearance in our barangay.
        </p>
        <div class="flex py-2">
          <a
            :class="
              theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
            "
            class="flex text-xs lg:text-sm items-center lg:pt-8"
            href="http://bpls.online/"
            >Website<icon class="h-4 w-4 ml-1" name="link"></icon
          ></a>
          <a
            :class="
              theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
            "
            class="flex text-xs ml-2 lg:text-sm items-center lg:pt-8"
            href="https://github.com/kevinbaltazar/bpls"
            >Github<icon class="h-4 w-4 ml-1" name="link"></icon
          ></a>
        </div>
      </div>
      <div class="p-5" :class="theme == 'dark' ? 'bg-gray-900' : 'bg-blue-50'">
        <h1
          :class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
          class="font-semibold py-2 lg:text-2xl"
        >
          abetsunggo.me
        </h1>
        <p class="text-xs py-2 w-11/12 lg:text-lg">
          My personal website and project listing that you are on this this page
          right now.
        </p>
        <div class="flex py-2">
          <a
            :class="
              theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
            "
            class="flex text-xs lg:text-sm items-center lg:pt-8"
            href="http://bpls.online/"
            >Website<icon class="h-4 w-4 ml-1" name="link"></icon
          ></a>
          <a
            :class="
              theme == 'dark' ? 'hover:text-teal-400' : 'hover:text-blue-600'
            "
            class="flex text-xs ml-2 lg:text-sm items-center lg:pt-8"
            href="https://github.com/ahgumasing/abetsunggo.me"
            >Github<icon class="h-4 w-4 ml-1" name="link"></icon
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "projects",
  props: ["theme"],
  components: {
    Icon
  }
};
</script>
