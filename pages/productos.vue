<template>
  <NuxtLayout>
    <section class="container flex flex-col items-center gap-8 text-center">
      <h2 class="mb-2 text-3xl font-semibold text-brand">
        Sabores que honra su memoria
      </h2>
      <p class="max-w-2xl mx-auto leading-relaxed text-center">
        Cada frasco está elaborado con los métodos tradicionales y el cariño que
        caracterizaban a nuestra querida hermana. Queremos compartir contigo ese
        toque especial que convertía cualquier momento en un recuerdo
        inolvidable.
      </p>

      <!-- Imagen sugerida -->
      <GaleriaProductos />

      <!-- Call To Action -->
      <a
        href="/comprar"
        class="inline-block px-8 py-3 mb-8 font-medium text-white transition-transform shadow-lg bg-brand hover:bg-purple-800 rounded-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-light"
      >
        Realizar pedido
      </a>
    </section>
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  ogTitle: "Mi Maru - Productos Artesanales",
  description:
    "Productos artesanales, elaborados con ingredientes naturales y de la mejor calidad.",
});

useHead({
  title: "Mi Maru - Productos Artesanales",
});
</script>
