<script setup lang="ts">
import VueFeather from "vue-feather";
</script>

<template lang="pug">
header.shadow-xl.bg-base-100
    .w-full.max-w-4xl.mx-auto.flex.items-center.justify-between
        .title.mx-4.font-bold
            span.text-3xl MINI
            span.text-xl  & Friends

        button.btn.btn-circle.btn-ghost(v-if="$colorMode.value === 'dark'" @click="$colorMode.value = 'light'")
            vue-feather(type="sun")

        button.btn.btn-circle.btn-ghost(v-if="$colorMode.value === 'light'" @click="$colorMode.value = 'dark'")
            vue-feather(type="moon")
</template>

<style>
header .title {
  font-family: Audiowide, cursive;
  font-family: "Gemunu Libre", sans-serif;
}
</style>
