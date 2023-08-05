<script setup>
import { cards } from "../../constants/login-cards";
</script>

<template>
  <div class="">
    <div class="bg-[#202020] pb-20">
      <h3 class="text-white text-center sm:text-2xl font-bold py-5 mb-10">
        Kim bo'lib kirmoqchisiz ?
      </h3>
      <div class="grid sm:grid-cols-3 lg:px-20 gap-5">
        <router-link
          v-for="el in cards"
          :to="el.path"
          class="text-white bg-zinc-700 hover:bg-zinc-800 duration-300 cursor-pointer border border-zinc-500 rounded-xl pt-5"
        >
          <h3 class="text-center text-xl mb-5">{{ el.title }}</h3>
          <img
            :src="el.image"
            class="object-contain w-full lg:h-72 h-56 mx-auto"
            alt=""
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
