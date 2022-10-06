<script setup lang="ts">
import type { Route } from "../types/Route";

const props = defineProps<{
  route: Route;
}>();
</script>

<template lang="pug">
.card.card-compact.bg-base-100.max-w-lg.mx-auto
  a.btn.btn-block.btn-ghost.flex.gap-2(:href="props.route.link" target="_blank")
    feather-icon(icon="map")

    .grow.text-left
      div Itinerário: {{ props.route.description }}
      div {{ props.route.distance }}Km

    feather-icon.opacity-50(icon="external-link")

</template>
