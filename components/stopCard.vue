<script setup lang="ts">
import type { Stop } from "../types/Stop";

import { timestampToHourString } from "../utils/timestampFormat";

const props = defineProps<{
  stop: Stop;
}>();
</script>

<template lang="pug">
.card.card-compact.bg-base-100.shadow-xl
  .card-body
    pre {{ timestampToHourString(props.stop.timestamp) }}
      span(v-if="props.stop.nextRoute")  - {{ timestampToHourString(props.stop.nextRoute.timestamp) }}

    h2.card-title {{ props.stop.description }}

  a.btn.btn-accent.rounded-none.flex.gap-2(:href="props.stop.location.link" target="_blank")
    feather-icon(icon="map-pin")

    .grow.text-left {{ props.stop.location.description }}

    feather-icon.opacity-50(icon="external-link")
</template>
