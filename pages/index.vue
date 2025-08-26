<template>
  <NuxtLayout>
    <div class="container">
      <!-- Sección 1: Llamado a pedir -->
      <section class="flex flex-col items-center gap-6 my-8 text-center">
        <h2 class="text-3xl font-semibold text-brand">
          Sabores que honran su memoria
        </h2>
        <p class="max-w-xl mx-auto leading-relaxed">
          Descubre el sabor auténtico de nuestras mermeladas y conservas
          artesanales. Cada frasco es una invitación a compartir momentos
          especiales y crear recuerdos inolvidables.
        </p>
        <div class="flex flex-col flex-wrap justify-center gap-4 md:flex-row">
          <img
            src="\img\Chimichurri.png"
            alt="Frascos de Chimichurri"
            class="object-cover rounded-2xl shadow-xl w-[256px] h-[256px] transition-transform duration-300 hover:scale-105"
          />

          <img
            src="\img\Lengua.png"
            alt="Frascos de Chimichurri"
            class="object-cover rounded-2xl shadow-xl w-[256px] h-[256px] transition-transform duration-300 hover:scale-105"
          />
          <img
            src="\img\MermeladaNaranja.png"
            alt="Frascos de Chimichurri"
            class="object-cover rounded-2xl shadow-xl w-[256px] h-[256px] transition-transform duration-300 hover:scale-105"
          />
        </div>
        <a href="/comprar" class="btn btn-primary">Realizar Pedido</a>
      </section>

      <!-- Sección 2: Descripción del proceso -->
      <section class="flex flex-col items-center gap-6 my-8 text-center">
        <h3 class="text-2xl font-semibold text-brand">
          Elaboración artesanal y segura
        </h3>
        <p class="max-w-xl mx-auto leading-relaxed">
          Nuestros productos se preparan siguiendo métodos tradicionales,
          cuidando cada detalle. Esterilizamos cuidadosamente los frascos y
          sellamos las tapas para garantizar frescura y calidad en cada entrega.
        </p>
        <a href="/productos" class="btn btn-secondary">Otros Productos</a>
      </section>
    </div>
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
