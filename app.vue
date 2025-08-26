<template>
  <div id="app">
    <NuxtLoadingIndicator :color="'#571F84'" :height="10" :throttle="0" :rtl="false" :continuous="true" />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s | Mi Maru"
});
</script>
