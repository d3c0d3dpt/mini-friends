<script setup>
import VueFeather from "vue-feather";

const steps = [
  {
    arrivalTime: "09h15",
    departureTime: "10h00",
    departureTimeStamp: new Date(2022, 9, 8, 10, 0, 0, 0),
    description: "Meet / Pequeno Almoço",

    location: "Pedras Rubras",
    locationLink: "https://goo.gl/maps/bhUrCdE7fLxA4ty99",

    routeLink: "https://goo.gl/maps/eUZnVjgeJs27w8k99",
  },
  {
    arrivalTime: "11h00",
    departureTime: "11h30",
    departureTimeStamp: new Date(2022, 8, 8, 11, 30, 0, 0),
    description: "1ª Paragem",

    location: "Santuário de Santa Luzia",
    locationLink: "https://goo.gl/maps/MBtQuBDoG3CGEMAK6",

    routeLink: "https://goo.gl/maps/QEbKhAdQSz2hZFL27",
  },
  {
    arrivalTime: "12h00",
    departureTime: "14h00",
    departureTimeStamp: new Date(2022, 9, 8, 14, 0, 0, 0),
    description: "Almoço",

    location: "Caminha",
    locationLink: "https://goo.gl/maps/2uWUkjQuiaaVaYUL6",

    routeLink: "https://goo.gl/maps/AjH1yTdFSQaVyjsm8",
  },
  {
    arrivalTime: "14h20",
    departureTime: "15h00",
    departureTimeStamp: new Date(2022, 9, 8, 15, 0, 0, 0),
    description: "2ª Paragem",

    location: "Miradouro do Cervo",
    locationLink: "https://goo.gl/maps/aQiBqcSQowiESrfL8",

    routeLink: "https://goo.gl/maps/Z6NUBCG3SzsSk585A",
  },
  {
    arrivalTime: "16h00",
    departureTime: "19h00",
    departureTimeStamp: new Date(2022, 9, 8, 19, 0, 0, 0),

    description: "Lanche / Fim de Tarde",

    location: "Ponte de Lima",
    locationLink: "https://goo.gl/maps/LzvgE7ptR6Svh76e8",

    routeLink: "https://goo.gl/maps/B8jQGQTQ21JQqEyAA",
  },
  {
    arrivalTime: "20h00",
    departureTimeStamp: new Date(2022, 9, 8, 20, 0, 0, 0),
    description: "Fim",

    location: "Área de Serviço Coronado",
    locationLink: "https://goo.gl/maps/u1jxG6y3EaQoKQSg8",
  },
];
</script>

<template lang="pug">
  
section.w-full.space-y-4
    .space-y-4(v-for="step in steps" :key="step.arrivalTime")
      .a(v-if="step.departureTimeStamp > new Date()").card.card-compact.bg-base-100.shadow-xl
        .card-body
          pre {{ step.arrivalTime }}
            span(v-if="step.departureTime")  - {{ step.departureTime }}
  
          h2.card-title {{ step.description }}

        a.btn.btn-accent.rounded-none.flex.gap-4( :href="step.locationLink" target="_blank")
          vue-feather(type="map-pin")
  
          .grow.text-left {{ step.location }}
  
          vue-feather.opacity-50(type="external-link")
      .b(v-if="step.departureTimeStamp < new Date()").opacity-20.card.card-compact.bg-base-100.shadow-xl
        .card-body
          pre {{ step.arrivalTime }}
            span(v-if="step.departureTime")  - {{ step.departureTime }}
  
          h2.card-title {{ step.description }}

        a.btn.btn-accent.rounded-none.flex.gap-4( :href="step.locationLink" target="_blank")
          vue-feather(type="map-pin")
  
          .grow.text-left {{ step.location }}
  
          vue-feather.opacity-50(type="external-link")


      .a(v-if="step.departureTimeStamp > new Date()")
        .card.card-compact.bg-base-100.max-w-lg.mx-auto(v-if="step.routeLink")
          a.btn.btn-block.btn-ghost.flex.gap-4(:href="step.routeLink" target="_blank")
            vue-feather(type="map")
    
            .grow.text-left
              div Itinerário: N201, N13
              div 16KM
    
            vue-feather.opacity-50(type="external-link")
      .b(v-if="step.departureTimeStamp < new Date()" ).opacity-20   
        .card.card-compact.bg-base-100.max-w-lg.mx-auto(v-if="step.routeLink")
          a.btn.btn-block.btn-ghost.flex.gap-4(:href="step.routeLink" target="_blank")
            vue-feather(type="map")
    
            .grow.text-left
              div Itinerário: N201, N13
              div 16KM
    
            vue-feather.opacity-50(type="external-link")
</template>

<style>
.card {
  font-family: "Lato", sans-serif;
}
.card > .grey {
  opacity: 50;
}
.a1 {
  width: 35%;
}
.a2 {
  width: 65%;

  margin-left: 3px;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-group > .arrow-1 {
  margin: 2px;
  border-radius: 2%;

  @apply sm:block;
}
.itinerary-container {
  @apply flex flex-col items-center justify-center sm:flex-row;
}

.itinerary-container > .arrow-1 {
  @apply sm:block;
}

.itinerary-container > .arrow-1-sm {
  @apply hidden -mt-2 sm:hidden;
}

.itinerary-container > .arrow-2 {
  @apply sm:hidden;
}

.itinerary-container > .arrow-2-sm {
  @apply hidden mt-3 sm:hidden;
}
</style>
