<script setup>
import VueFeather from "vue-feather";

const steps = [
  {
    arrivalTime: "09h15",
    departureTime: "10h00",
    description: "Meet / Pequeno Almoço",

    location: "Pedras Rubras",
    locationLink: "https://goo.gl/maps/bhUrCdE7fLxA4ty99",

    routeLink: "https://goo.gl/maps/eUZnVjgeJs27w8k99",
  },
  {
    arrivalTime: "11h00",
    departureTime: "11h30",
    description: "1ª Paragem",

    location: "Santuário de Santa Luzia",
    locationLink: "https://goo.gl/maps/MBtQuBDoG3CGEMAK6",

    routeLink: "https://goo.gl/maps/QEbKhAdQSz2hZFL27",
  },
  {
    arrivalTime: "12h00",
    departureTime: "14h00",
    description: "Almoço",

    location: "Caminha",
    locationLink: "https://goo.gl/maps/2uWUkjQuiaaVaYUL6",

    routeLink: "https://goo.gl/maps/AjH1yTdFSQaVyjsm8",
  },
  {
    arrivalTime: "14h20",
    departureTime: "15h00",
    description: "2ª Paragem",

    location: "Miradouro do Cervo",
    locationLink: "https://goo.gl/maps/aQiBqcSQowiESrfL8",

    routeLink: "https://goo.gl/maps/Z6NUBCG3SzsSk585A",
  },
  {
    arrivalTime: "16h00",
    departureTime: "19h00",
    description: "Lanche / Fim de Tarde",

    location: "Ponte de Lima",
    locationLink: "https://goo.gl/maps/LzvgE7ptR6Svh76e8",

    routeLink: "https://goo.gl/maps/B8jQGQTQ21JQqEyAA",
  },
  {
    arrivalTime: "20h00",
    description: "Fim",

    location: "Área de Serviço Coronado",
    locationLink: "https://goo.gl/maps/u1jxG6y3EaQoKQSg8",
  },
];
</script>

<template lang="pug">
section
  .w-full(v-for="step in steps" :key="step.arrivalTime")
      .card.card-compact.bg-base-100.shadow-xl
          .card-body
              pre {{ step.arrivalTime }}
                  span(v-if="step.departureTime")  - {{ step.departureTime }}

              h2.card-title {{ step.description }}

          a.btn.btn-accent.rounded-none(:href="step.locationLink" target="_blank") {{ step.location }}

      .itinerary-container.mt-4.gap-4(v-if="step.routeLink")
          vue-feather.arrow-1-sm(type="corner-down-right")
          vue-feather.arrow-1(type="arrow-down")

          .card.card-compact.bg-base-100.shadow-xl
              a.btn.btn-wide.btn-ghost.rounded-none(:href="step.routeLink" target="_blank") Itinerário

          vue-feather.arrow-2-sm(type="corner-right-down")
          vue-feather.arrow-2(type="arrow-down")
</template>

<style>
.itinerary-container {
  @apply flex flex-col items-center justify-center sm:flex-row;
}

.itinerary-container > .arrow-1 {
  @apply sm:hidden;
}

.itinerary-container > .arrow-1-sm {
  @apply hidden -mt-2 sm:block;
}

.itinerary-container > .arrow-2 {
  @apply sm:hidden;
}

.itinerary-container > .arrow-2-sm {
  @apply hidden mt-3 sm:block;
}
</style>
