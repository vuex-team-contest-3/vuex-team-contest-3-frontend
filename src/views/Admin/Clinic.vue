<script setup>
import { onMounted, ref, reactive } from "vue";
import { useClinic } from "@/stores/clinic";
import { useRoute } from "vue-router";

const { id } = useRoute().params;
const clinic_store = useClinic();
let clinic = ref();
const clinicMenus = reactive({
	currentMenu: 0,
	menus: ["Xizmatlar", "Shifokorlar"],
});

const updateAll = async () => {
  clinic.value = await clinic_store.GET_ONE(id);
};

onMounted(async () => {
  clinic.value = await clinic_store.GET_ONE(id);
  AOS.init();
});
</script>

<template>
  <div v-if="clinic" class="">
    <div class="">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mb-5">
        <ClineCard
          v-if="clinic"
          :data="clinic"
          isUser="0"
          router=""
          @update-all="updateAll"
        />
        <div
          data-aos="flip-right"
          class="lg:col-span-3 md:col-span-2 rounded-xl block border border-zinc-700 bg-zinc-950 text-center text-white p-1 hover:shadow-xl duration-300"
        >
          <iframe
            v-if="clinic"
            class="w-full h-full rounded-xl"
            :src="`https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${clinic.address}%${clinic.name}+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div
        class="w-full rounded-xl block border border-zinc-700 bg-zinc-950 text-center text-white p-5 hover:shadow-xl duration-300"
      >
        <div class="w-full flex items-center justify-center gap-7 mb-5">
          <div
            py-20
            flex
            items-center
            justify-center
            v-for="menu in clinicMenus.menus"
            class="px-3 cursor-pointer border-b-2 border-transparent hover:border-white duration-300 pb-2 rounded"
            :class="
              clinicMenus.menus.indexOf(menu) == clinicMenus.currentMenu
                ? 'border-white text-white font-medium'
                : 'text-zinc-300 '
            "
            @click="
              () => (clinicMenus.currentMenu = clinicMenus.menus.indexOf(menu))
            "
          >
            {{ menu }}
          </div>
        </div>
        <div v-if="clinicMenus.currentMenu == 0" class="text-start mx-auto">
          <ServicesAdmin :data="clinic" :updateAll="updateAll" />
        </div>
        <div
          v-else-if="clinicMenus.currentMenu == 1"
          class="text-start mx-auto"
        >
          <DoctorsAdmin :data="clinic" :updateAll="updateAll" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="w-full py-20 flex items-center justify-center">
    <Loading />
  </div>
</template>

<style scoped></style>
