<template>
  <div class=" h-full px-6 md:px-12 lg:px-28">
    <h1
      :class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
      class="mt-7 text-3xl w-72 font-extrabold md:text-6xl  md:w-full lg:text-5xl lg:w-11/12"
    >
      Designs
    </h1>
    <div
      class="pt-12 pb-12 grid grid-rows-8 space-y-4 md:grid-cols-3 md:space-y-8 md:space-x-8 md:grid-rows-none md:pb-32"
    >
      <div>
        <img class="mt-8 w-84 h-84" src="@/assets/AG_Logo.png" alt="" />
      </div>
      <div class="">
        <img class="shadow-lg mt-8 w- h-84" src="@/assets/vector.jpg" alt="" />
      </div>

      <div>
        <img class="shadow-lg mt-8 w-84 h-84" src="@/assets/hapon.jpg" alt="" />
      </div>
      <div>
        <img class="shadow-lg mt-8 w-84 h-84" src="@/assets/COVID.jpg" alt="" />
      </div>
      <div>
        <img class="shadow-lg mt-8 w-84 h-84" src="@/assets/CTJFI.jpg" alt="" />
      </div>
      <div>
        <img class="shadow-lg mt-8 w-84 h-84" src="@/assets/BPLS.png" alt="" />
      </div>
      <div>
        <img
          class="shadow-lg mt-8 w-84 h-84"
          src="@/assets/brauni.png"
          alt=""
        />
      </div>
      <div>
        <img
          class="shadow-lg mt-8"
          src="https://instagram.fmnl17-4.fna.fbcdn.net/v/t51.2885-15/e35/117974977_326720071853087_1609871240902885826_n.jpg?tp=1&_nc_ht=instagram.fmnl17-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=1DuHfUcak5sAX-74LvJ&oh=62fa751c8d4612992b7223288945cbe5&oe=607B58C9"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "design",
  props: ["theme"]
};
</script>
