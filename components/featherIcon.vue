<script setup lang="ts">
import VueFeather from "vue-feather";

const props = defineProps<{
  icon: string;
}>();
</script>

<template lang="pug">
vue-feather(:type="props.icon")
</template>
