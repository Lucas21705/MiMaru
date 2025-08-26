<template>
  <NuxtLayout>
    <!-- Historia.vue o historia.php -->
    <div class="container">
      <section
        class="flex flex-col items-center justify-center py-12"
      >
        <h1>Maru Miño</h1>
        <!-- Gallery component -->
        <GaleriaMaru />

        <!-- Historia -->
        <article
          class="max-w-3xl px-4 mx-auto mt-10 space-y-4 leading-relaxed text-gray-800"
        >
          La historia de Mi Maru comienza el 2 de diciembre de 2001, día en que
          nació María José Miño —para todos, simplemente Maru. Creció en una
          familia de cinco, justo en el corazón como la hermana del medio:
          curiosa, brillante y dispuesta a unirlo todo con una sonrisa. A los
          siete años aparecieron los primeros síntomas de un tumor cerebral que
          la obligaron a visitar quirófanos, soportar quimioterapia, perder el
          cabello y, por un tiempo, hasta la voz y el paso. Sin embargo, nunca
          perdió su chispa: recuperó palabras, gestos y esa mirada perspicaz que
          iluminaba cada habitación. Después de año y medio de lucha incansable,
          el 15 de septiembre de 2010 Maru descansó. Hoy tendría 23 años, y
          aunque su ausencia duele, su recuerdo late con fuerza en cada frasco
          de conserva que preparamos. Porque Maru adoraba los colores vivos
          —sobre todo el violeta— y los momentos simples alrededor de la mesa,
          decidimos homenajearla transformando las frutas de nuestra huerta en
          mermeladas y dulces artesanales. Cada aroma que se libera al destapar
          un frasco es una invitación a celebrar la vida, la familia y la
          esperanza de volver a abrazarla algún día. “Mi Maru” no es solo un
          emprendimiento: es un pequeño puente entre el presente y los
          recuerdos, un acto de amor que endulza el futuro.
        </article>
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

<style>
article p {
  margin-bottom: 1.5rem;
  text-align: justify;
}
</style>
