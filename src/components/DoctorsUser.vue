<script setup>
import { ref, reactive, onMounted } from "vue";
const { data } = defineProps(["data"]);

onMounted(async () => {});
</script>

<template>
  <div>
    <div class="mb-5 flex items-center justify-between w-full">
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <i class="bx bx-search text-zinc-400 text-xl"></i>
        </div>
        <input
          autocomplete="off"
          type="search"
          id="default-search"
          class="block outline-none w-full p-3 pl-10 text-sm border rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white"
          placeholder="Qidirish..."
          required
        />
      </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-5">
        <DoctorCard
          v-for="doctor in data.doctor"
          :key="doctor.id"
          :doctor="doctor"
          :isAdmin="false"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
