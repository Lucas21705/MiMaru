<template>
  <NuxtLayout>
    <div class="container p-4">
      <div class="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 class="text-4xl">404 - Page Not Found</h1>
        <p class="text-lg">The page you are looking for does not exist.</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.error-img {
  margin: auto;
  width: 70vw;
  max-width: 512px;
}

.error-message {
  text-align: center;
  width: 100%;
  margin-top: 10rem;
  padding: 1rem;
}

.home-link {
  width: 100%;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.home-link a {
  font-size: 0.98rem;
}
</style>
