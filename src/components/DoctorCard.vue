<template>
  <div class="bg-zinc-800 rounded-lg p-7">
    <img
      :src="`https://nest-clinic.onrender.com/api/${doctor.image_name}`"
      onerror="this.src='/doctor.png'"
      class="object-cover h-[150px] w-[150px] mx-auto rounded-full"
      alt=""
    />

    <div class="mt-5">
      <h3 class="text-center text-4xl font-medium my-3 text-white">
        {{ doctor.first_name }} <br />
        {{ doctor.last_name }}
      </h3>

      <h4 class="text-center text-xl text-gray-400 font-bold">
        {{ doctor.profession }}
      </h4>

      <div class="mt-4">
        <p class="text-center text-gray-600">{{ doctor.experience }}</p>
        <p class="text-center text-gray-600">{{ doctor.work_time }}</p>
        <p class="text-center text-gray-600">
          {{ doctor.work_day.split(",").join(", ") }}
        </p>
        <p class="text-center text-gray-600">
          {{ `Qavat ${doctor.floor}, Xona ${doctor.room}` }}
        </p>
      </div>

      <div class="flex justify-center mt-5">
        <router-link
          :to="`/doctor/${doctor.id}`"
          class="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Batafsil
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["doctor"]);
</script>

<style lang="scss" scoped></style>
