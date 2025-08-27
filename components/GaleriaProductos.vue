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
      <div class="gallery-slider">
        <div
          v-for="(img, idx) in visibleImages"
          :key="(galleryStart + idx) % data.length"
          class="gallery-item"
          @click="openModal((galleryStart + idx) % data.length)"
        >
          <img :src="img.imagen" :alt="img.titulo" />
          <div class="desc">{{ img.titulo }}</div>
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

    <transition name="modal">
      <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">&times;</button>
          <img :src="currentImage.imagen" :alt="currentImage.titulo" />
          <div class="modal-description">{{ currentImage.descripcion }}</div>
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
import { ref, computed } from "vue";

const data = ref([
  {
    id: 1,
    titulo: "Berenjena en escabeche",
    precio: 8800,
    descripcion:
      "Berenjenas en rodajas, marinadas con vinagre, ajo y especias.",
    imagen: "/img/BerenjenaEnEscabeche.png",
    categoria: "conservas",
  },
  {
    id: 2,
    titulo: "Lengua a la vinagreta",
    precio: 12500,
    descripcion:
      "Lengua de res cocida y marinada en vinagreta con cebolla y pimientos.",
    imagen: "/img/Lengua.png",
    categoria: "conservas",
  },
  {
    id: 3,
    titulo: "Chimichurri Argentino",
    precio: 4800,
    descripcion:
      "Chimichurri casero, una mezcla de hierbas, ajo y aceite, ideal para carnes.",
    imagen: "/img/Chimichurri.png",
    categoria: "salsas",
  },
  {
    id: 4,
    titulo: "Mermelada de Naranja",
    precio: 5000,
    descripcion:
      "Mermelada de Naranja casera, ideal para untar en tostadas o postres.",
    imagen: "/img/MermeladaNaranja.png",
    categoria: "mermeladas",
  },
  {
    id: 5,
    titulo: "Mermelada de Tomate",
    precio: 5000,
    descripcion:
      "Mermelada de Tomate casera, ideal para untar en tostadas o postres.",
    imagen: "/img/MermeladaTomate.png",
    categoria: "mermeladas",
  },
  {
    id: 6,
    titulo: "Pickles",
    precio: 4500,
    descripcion:
      "Mermelada de naranja casera, ideal para untar en tostadas o postres.",
    imagen: "/img/Pickles.png",
    categoria: "mermeladas",
  },
  {
    id: 7,
    titulo: "Ajíes en Vinagre",
    precio: 4500,
    descripcion:
      "Ajíes frescos en vinagre, crujientes y ácidos, perfectos para acompañar comidas.",
    imagen: "/img/AjiesEnVinagre.png",
    categoria: "mermeladas",
  },
]);

const galleryStart = ref(0);
const modalOpen = ref(false);
const currentIdx = ref(0);

const visibleCount = 3;

const currentImage = computed(() => data.value[currentIdx.value]);

function openModal(idx) {
  currentIdx.value = idx;
  modalOpen.value = true;
}

function closeModal() {
  modalOpen.value = false;
}

function prevImage() {
  if (currentIdx.value === 0) {
    currentIdx.value = data.value.length - 1;
  } else {
    currentIdx.value--;
  }
}

function nextImage() {
  if (currentIdx.value === data.value.length - 1) {
    currentIdx.value = 0;
  } else {
    currentIdx.value++;
  }
}

const visibleImages = computed(() => {
  if (data.value.length <= visibleCount) {
    return data.value;
  }

  if (galleryStart.value + visibleCount <= data.value.length) {
    return data.value.slice(
      galleryStart.value,
      galleryStart.value + visibleCount
    );
  } else {
    const endSlice = data.value.slice(galleryStart.value);
    const startSlice = data.value.slice(0, visibleCount - endSlice.length);
    return endSlice.concat(startSlice);
  }
});

function prevGallery() {
  if (galleryStart.value === 0) {
    galleryStart.value = data.value.length - visibleCount;
  } else {
    galleryStart.value--;
  }
}

function nextGallery() {
  if (galleryStart.value + visibleCount >= data.value.length) {
    galleryStart.value = 0;
  } else {
    galleryStart.value++;
  }
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

.gallery-slider {
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
}

.gallery-item {
  flex: 0 0 calc(33.333% - 1rem);
  min-width: 0;
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;
  scroll-snap-align: start;
}

.gallery-item:hover {
  transform: scale(1.03);
}

.gallery-item img {
  width: 100%;
  display: block;
  height: 180px;
  object-fit: contain;
}

.desc {
  padding: 0.5rem;
  font-size: 0.95rem;
  color: #444;
  background: #f8f8f8;
  text-align: center;
}

/* Modal styles */
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
  padding: 1rem;
  box-sizing: border-box;
}

.modal-content {
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.modal-content img {
  max-width: 80vw;
  max-height: 60vh;
  border-radius: 8px;
  margin-bottom: 1rem;
  object-fit: contain;
}

.modal-description {
  width: 100%;
  padding: 0.5rem 1rem;
  background: #fff;
  border-radius: 8px;
  text-align: center;
  color: #333;
  font-size: 1rem;
  margin-bottom: 1rem;
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

/* Responsive styles */
@media (max-width: 900px) {
  .gallery-item {
    flex: 0 0 calc(50% - 1rem);
  }
}

@media (max-width: 600px) {
  .gallery-slider-wrapper {
    gap: 0.3rem;
  }

  .gallery-arrow {
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
  }

  .gallery-item {
    flex: 0 0 calc(100% - 1rem);
  }

  .gallery-item img {
    height: 150px;
  }

  .desc {
    font-size: 0.9rem;
    padding: 0.4rem;
  }

  .modal-content img {
    max-width: 90vw;
    max-height: 50vh;
  }

  .modal-description {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }

  .modal-nav button {
    padding: 0.4rem 0.8rem;
    font-size: 1rem;
  }
}
</style>
