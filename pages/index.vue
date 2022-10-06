<script setup lang="ts">
import type { Stop } from "../types/Stop";

const stops: Stop[] = [
  {
    description: "Meet / Pequeno Almoço",

    timestamp: new Date(2022, 9, 8, 9, 15).getTime(),

    location: {
      description: "Pedras Rubras",
      link: "https://goo.gl/maps/bhUrCdE7fLxA4ty99",
    },

    nextRoute: {
      description: "N13, A28",
      distance: 67,

      link: "https://goo.gl/maps/eUZnVjgeJs27w8k99",

      timestamp: new Date(2022, 9, 8, 10, 0).getTime(),
    },
  },
  {
    description: "1ª Paragem",

    timestamp: new Date(2022, 9, 8, 11, 0).getTime(),

    location: {
      description: "Santuário de Santa Luzia",
      link: "https://goo.gl/maps/MBtQuBDoG3CGEMAK6",
    },

    nextRoute: {
      description: "N13",
      distance: 28,

      link: "https://goo.gl/maps/QEbKhAdQSz2hZFL27",

      timestamp: new Date(2022, 9, 8, 11, 30).getTime(),
    },
  },
  {
    description: "Almoço",

    timestamp: new Date(2022, 9, 8, 12, 0).getTime(),

    location: {
      description: "Caminha",
      link: "https://goo.gl/maps/2uWUkjQuiaaVaYUL6",
    },

    nextRoute: {
      description: "N13",
      distance: 17,

      link: "https://goo.gl/maps/AjH1yTdFSQaVyjsm8",

      timestamp: new Date(2022, 9, 8, 14, 0).getTime(),
    },
  },
  {
    description: "2ª Paragem",

    timestamp: new Date(2022, 9, 8, 14, 20).getTime(),

    location: {
      description: "Miradouro do Cervo",
      link: "https://goo.gl/maps/aQiBqcSQowiESrfL8",
    },

    nextRoute: {
      description: "N13, N201",
      distance: 45,

      link: "https://goo.gl/maps/Z6NUBCG3SzsSk585A",

      timestamp: new Date(2022, 9, 8, 15, 0).getTime(),
    },
  },
  {
    description: "Lanche / Fim de Tarde",

    timestamp: new Date(2022, 9, 8, 16, 0).getTime(),

    location: {
      description: "Ponte de Lima",
      link: "https://goo.gl/maps/LzvgE7ptR6Svh76e8",
    },

    nextRoute: {
      description: "A3",
      distance: 68,

      link: "https://goo.gl/maps/B8jQGQTQ21JQqEyAA",

      timestamp: new Date(2022, 9, 8, 19, 0).getTime(),
    },
  },
  {
    description: "Fim",

    timestamp: new Date(2022, 9, 8, 20, 0).getTime(),

    location: {
      description: "Área de Serviço Coronado",
      link: "https://goo.gl/maps/u1jxG6y3EaQoKQSg8",
    },
  },
];
</script>

<template lang="pug">
section.w-full.space-y-4
  .space-y-4(v-for="stop in stops" :key="stop.timestamp")
      stop-card(:stop="stop")

      route-card(v-if="stop.nextRoute" :route="stop.nextRoute")
</template>
