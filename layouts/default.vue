<template lang="pug">
.min-h-screen.bg-base-300
    page-header

    .hero
        .hero-content.w-full.max-w-4xl.flex.flex-col
            slot

    page-footer
</template>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
