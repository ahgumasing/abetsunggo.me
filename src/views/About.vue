<template>
  <div class="flex px-6 md:px-12 lg:py-20 lg:px-28 lg:h-full pb-12 ">
    <div>
      <h1
        :class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
        class="mt-7 text-3xl w-72 font-extrabold md:text-6xl  md:w-full lg:text-5xl lg:w-11/12"
      >
        Who am i?
      </h1>
      <p class="w-64 py-10 md:w-full lg:w-8/12">
        I work as a Front-End Web Developer. My typical day consists of
        translating visual designs into code and spending a significant amount
        of time in self-improvement.
      </p>
      <p class="w-64 py-4 md:w-9/12 lg:w-6/12">
        Aside from coding, I also love designing, playing computer games,
        playing basketball, playing guitar and hanging out with my friends.
      </p>
      <div v-for="employment in employment" :key="employment.id">
        <div class="mt-10 text-sm lg:text-base">
          <dt
            :class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
            class="font-medium"
          >
            {{ employment.intern.postion }}
          </dt>
          <dt class="text-gray-500">{{ employment.intern.company }}</dt>
          <dt class="text-gray-500">{{ employment.intern.date }}</dt>
        </div>
        <div class="mt-10 text-sm lg:text-base">
          <dt
            :class="theme == 'dark' ? 'text-teal-400' : 'text-blue-600'"
            class="font-medium"
          >
            {{ employment.graphic.postion }}
          </dt>
          <dt class="text-gray-500">{{ employment.graphic.company }}</dt>
          <dt class="text-gray-500">{{ employment.graphic.date }}</dt>
        </div>
      </div>
    </div>
    <div class="flex mt-auto mb-auto">
      <img class="rounded-full hidden lg:block" src="@/assets/Me.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  props: ["theme"],
  data() {
    return {
      employment: [
        {
          intern: {
            id: 0,
            postion: "UI / UX Designer Intern",
            company: "PearlPay Inc.",
            date: "Nov 2020 - Feb 2021"
          },
          graphic: {
            id: 1,
            postion: "Graphic Designer / Autocad Operator",
            company: "EEjab Associated Construction Services",
            date: "June 2016 - Dec 2019"
          }
        }
      ]
    };
  }
};
</script>
