<template>
  <header
    class="text-center bg-gradient-to-b from-brand to-brand-light text-white h-[7rem] flex justify-between items-center relative"
  >
    <a href="/">
      <img
        src="/img/logo.png"
        alt="Logo"
        class="h-48 w-48 ml-4 md:ml-12 mt-[-0.5rem]"
      />
    </a>
    <!-- Desktop buttons -->
    <div class="items-center justify-center hidden h-full gap-4 mr-12 md:flex">
      <a class="btn btn-primary" href="/productos">Productos</a>
      <a class="btn btn-secondary" href="/historia">Historia</a>
    </div>
    <!-- Hamburger icon (mobile) -->
    <div class="relative mr-8 md:hidden">
      <button
        class="focus:outline-none"
        @click="menuOpen = !menuOpen"
        aria-label="Abrir menú"
      >
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <!-- Floating mobile menu -->
      <transition name="dropdown">
        <div
          v-if="menuOpen"
          class="absolute right-0 z-50 flex flex-col p-4 mt-2 space-y-3 text-white shadow-2xl w-44 bg-gradient-to-br from-brand to-brand-light rounded-xl"
        >
          <a
            class="px-4 py-2 transition-colors duration-300 rounded-lg hover:bg-white hover:text-brand"
            href="/productos"
            @click="menuOpen = false"
            >Productos</a
          >
          <a
            class="px-4 py-2 transition-colors duration-300 rounded-lg hover:bg-white hover:text-brand"
            href="/historia"
            @click="menuOpen = false"
            >Historia</a
          >
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
const menuOpen = ref(false);

// Optional: Close menu on outside click
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (menuOpen.value && !e.target.closest(".md\\:hidden")) {
      menuOpen.value = false;
    }
  });
});
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
