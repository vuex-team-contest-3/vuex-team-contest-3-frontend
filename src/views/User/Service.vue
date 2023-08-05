<script setup>
import { onMounted, ref, reactive } from "vue";
import { useService } from "@/stores/service";
import { useRoute } from "vue-router";

const { id } = useRoute().params;
const service_store = useService();
const service = ref();

onMounted(async () => {
  service.value = await service_store.GET_ONE(id);
  AOS.init();
});
</script>

<template>
  <div v-if="service" class="py-10">
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-5">
      <DoctorCard
        v-for="doctor in service.doctor"
        :key="doctor.id"
        :doctor="doctor"
      />
    </div>
  </div>
  <div v-else class="w-full py-20 flex items-center justify-center">
    <Loading />
  </div>
</template>

<style scoped></style>
