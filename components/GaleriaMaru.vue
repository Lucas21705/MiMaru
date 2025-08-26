<template>
  <div class="gallery-container">
    <div class="gallery-slider-wrapper">
      <button
        class="gallery-arrow left"
        @click="prevGallery"
        aria-label="Previous images"
      >
        &#8592;
      </button>

      <div class="gallery-slider-outer">
        <div
          class="gallery-slider"
          :style="{ transform: `translateX(-${galleryOffset}px)` }"
        >
          <div
            v-for="(img, idx) in data"
            :key="idx"
            class="gallery-item"
            @click="openModal(idx)"
          >
            <img :src="img.imagen" :alt="img.descripcion_short" />
            <div class="desc">{{ img.descripcion_short }}</div>
          </div>
        </div>
      </div>

      <button
        class="gallery-arrow right"
        @click="nextGallery"
        aria-label="Next images"
      >
        &#8594;
      </button>
    </div>

    <!-- MODAL -->
    <transition name="modal">
      <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">&times;</button>

          <!-- Imagen con transición -->
          <transition name="fade-slide" mode="out-in">
            <img
              :key="currentImage.imagen"
              :src="currentImage.imagen"
              :alt="currentImage.descripcion_short"
              class="modal-image"
            />
          </transition>

          <div class="w-1/2 p-2 mt-2 text-center rounded bg-brand-light">
            {{ currentImage.descripcion }}
          </div>

          <div class="modal-nav">
            <button @click="prevImage">&#8592;</button>
            <button @click="nextImage">&#8594;</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const data = ref([
  {
    id: 1,
    titulo: 'Maru',
    descripcion: 'Maru a los 7 años...',
    descripcion_short: 'Maru a los 7 años',
    imagen: '/img/maru/maru-1.jpeg'
  },
  {
    id: 2,
    titulo: 'Maru',
    descripcion: 'Maru en el Jardin',
    descripcion_short: 'Maru en el Jardin',
    imagen: '/img/maru/maru-2.jpeg'
  },
  {
    id: 3,
    titulo: 'Maru',
    descripcion: 'Maru Ghibli',
    descripcion_short: 'Maru Ghibli',
    imagen: '/img/maru/maru-3.jpeg'
  },
  {
    id: 4,
    titulo: 'Maru',
    descripcion: 'Maru en tratameinto',
    descripcion_short: 'Maru en tratameinto',
    imagen: '/img/maru/maru-4.jpeg'
  },
  {
    id: 5,
    titulo: 'Maru',
    descripcion: 'Maru en tratameinto',
    descripcion_short: 'Maru en tratameinto',
    imagen: '/img/maru/maru-5.jpeg'
  },
  {
    id: 6,
    titulo: 'Maru',
    descripcion: 'Maru feliz',
    descripcion_short: 'Maru feliz',
    imagen: '/img/maru/maru-6.jpeg'
  },
  {
    id: 7,
    titulo: 'Maru',
    descripcion: 'Cumple Maru',
    descripcion_short: 'Cumple Maru',
    imagen: '/img/maru/maru-7.jpeg'
  },
  {
    id: 8,
    titulo: 'Maru',
    descripcion: 'Cumple Maru 6 años',
    descripcion_short: 'Cumple Maru 6 años',
    imagen: '/img/maru/maru-8.jpeg'
  },
  {
    id: 9,
    titulo: 'Maru',
    descripcion: 'Maru',
    descripcion_short: 'Maru',
    imagen: '/img/maru/maru-9.jpeg'
  },
  {
    id: 10,
    titulo: 'Maru',
    descripcion: 'Maru en el Hospital',
    descripcion_short: 'Maru en el Hospital',
    imagen: '/img/maru/maru-10.jpeg'
  },
  {
    id: 11,
    titulo: 'Maru',
    descripcion: 'Maru',
    descripcion_short: 'Maru',
    imagen: '/img/maru/maru-11.jpeg'
  }
])

const modalOpen = ref(false)
const currentIdx = ref(0)
const galleryStart = ref(0)

const visibleCount = 3
const itemWidth = 300
const maxGalleryStart = data.value.length - visibleCount

const galleryOffset = computed(() => galleryStart.value * itemWidth)
const currentImage = computed(() => data.value[currentIdx.value])

function openModal(idx) {
  currentIdx.value = idx
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}

function nextImage() {
  currentIdx.value = (currentIdx.value + 1) % data.value.length
}

function prevImage() {
  currentIdx.value = (currentIdx.value - 1 + data.value.length) % data.value.length
}

function nextGallery() {
  galleryStart.value = (galleryStart.value + 1) > maxGalleryStart ? 0 : galleryStart.value + 1
}

function prevGallery() {
  galleryStart.value = (galleryStart.value - 1) < 0 ? maxGalleryStart : galleryStart.value - 1
}
</script>

<style scoped>
.gallery-container {
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.gallery-slider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.gallery-arrow {
  background: #eee;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  color: #444;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 2;
}

.gallery-arrow:hover {
  background: #ddd;
}

.gallery-slider-outer {
  width: 900px;
  overflow: hidden;
}

.gallery-slider {
  display: flex;
  transition: transform 0.5s ease;
  will-change: transform;
}

.gallery-item {
  flex: 0 0 300px;
  margin-right: 1rem;
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;
}

.gallery-item:hover {
  transform: scale(1.03);
}

.gallery-item img {
  width: 100%;
  display: block;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.desc {
  padding: 0.5rem;
  font-size: 0.95rem;
  color: #444;
  background: #f8f8f8;
  text-align: center;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  width: 600px;
  height: 500px;
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.modal-image {
  max-width: 100%;
  max-height: 70%;
  object-fit: contain;
  border-radius: 24px;
  margin-bottom: 1rem;
  overflow: hidden;
  display: block;
}


.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
}

.modal-nav {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.modal-nav button {
  background: #eee;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
}

.modal-nav button:hover {
  background: #ddd;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Fade-slide transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Clase adicional para el texto descriptivo del modal */
.w-1\/2 {
  width: 50%;
}

.p-2 {
  padding: 0.5rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.text-center {
  text-align: center;
}

.rounded {
  border-radius: 0.5rem;
}

.bg-brand-light {
  background-color: #f0f4f8; /* Cambiá según tu paleta */
}
</style>
