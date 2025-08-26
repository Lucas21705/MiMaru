<template>
  <NuxtLayout>
    <section class="container flex justify-center !pt-10">
      <div class="w-full max-w-3xl p-8 bg-white shadow-lg rounded-2xl">
        <h1 class="mb-6 text-3xl font-semibold text-center text-brand-700">
          Carrito de Compra
        </h1>

        <div v-if="cart.length" class="space-y-4">
          <div
            v-for="(item, index) in cart"
            :key="item.id"
            class="flex items-center justify-between pb-4 border-b"
          >
            <div class="flex items-center gap-3">
              <img
                :src="item.img"
                alt=""
                class="object-cover w-10 h-10 border rounded-full"
              />
              <div>
                <p class="font-medium text-gray-800">{{ item.name }}</p>
                <p class="text-sm text-gray-500">
                  Precio: ${{ item.price.toLocaleString("es-AR") }}
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button
                @click="decreaseQty(index)"
                class="flex items-center justify-center w-8 h-8 transition rounded-full bg-brand-light/30 hover:bg-brand/30"
              >
                -
              </button>
              <span class="w-8 text-center">{{ item.qty }}</span>
              <button
                @click="increaseQty(index)"
                class="flex items-center justify-center w-8 h-8 transition rounded-full bg-brand-light/30 hover:bg-brand/30"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div v-if="!hasProducts" class="mt-6 text-center">
          <p class="mb-4 text-gray-500">Tu carrito está vacío.</p>
        </div>

        <div v-else class="flex items-center justify-between mt-6">
          <span class="font-semibold text-gray-800 text-normal md:text-xl">
            Total: ${{ total.toLocaleString("es-AR") }}
          </span>
          <button @click="sendOrder" class="btn btn-primary">
            Enviar pedido
          </button>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { reactive, computed } from "vue";

const cart = reactive([
  {
    id: 1,
    name: "Mermelada de Naranja 360gr",
    price: 5000,
    qty: 0,
    img: "/img/MermeladaNaranja.png",
  },
  {
    id: 1,
    name: "Mermelada de Tomate 360gr",
    price: 5000,
    qty: 0,
    img: "/img/MermeladaTomate.png",
  },
  {
    id: 2,
    name: "Berenjena al escabeche 360gr",
    price: 8800,
    qty: 0,
    img: "/img/BerenjenaEnEscabeche.png",
  },
  {
    id: 3,
    name: "Lengua a la vinagreta 360gr",
    price: 12500,
    qty: 0,
    img: "/img/Lengua.png",
  },
  {
    id: 1,
    name: "Pickles 360gr",
    price: 4500,
    qty: 0,
    img: "/img/Pickles.png",
  },
  {
    id: 4,
    name: "Chimichurri Argentino 360gr",
    price: 4800,
    qty: 0,
    img: "/img/Chimichurri.png",
  },
]);

const increaseQty = (index) => {
  if (cart[index].qty < 5) {
    cart[index].qty++;
  }
};

const decreaseQty = (index) => {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart[index].qty = 0;
  }
};

const total = computed(() =>
  cart.reduce((sum, item) => sum + item.price * item.qty, 0)
);

const hasProducts = computed(() => cart.some((item) => item.qty > 0));

const sendOrder = () => {
  const greeting = "Hola, quiero realizar el siguiente pedido:";
  const items = cart
    .filter((item) => item.qty > 0)
    .map((item) => `${item.qty} x ${item.name}`)
    .join("%0A");

  if (!items) return;

  const totalLine = `Total: $${total.value.toLocaleString("es-AR")}`;
  const message = `${greeting}%0A${items}%0A${totalLine}`;
  const phone = "5491130241095";
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
};

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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

html {
  font-family: "Poppins", sans-serif;
}
</style>
