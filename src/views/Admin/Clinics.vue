<script setup>
import { ref, reactive } from "vue";
import { useClinic } from "@/stores/clinic";
import { onMounted } from "vue";
import { toast } from "vue3-toastify";

const clinic_store = useClinic();
const page = reactive({
  currentPage: 1,
  itemsPerPage: 7,
});
const addClinicModal = ref(false);

const newClinic = reactive({
  data: {
    name: "",
    address: "",
    phone: "",
  },
  image: null,
  imageURL: null,
});

const resetFormClinic = () => {
  addClinicModal.value = !addClinicModal.value;
  newClinic.data = {
    name: "",
    address: "",
    phone: "",
  };
  newClinic.image = null;
  newClinic.imageURL = null;
};

const addNewClinic = async () => {
  try {
    const formData = new FormData();
    formData.append("name", newClinic.data.name);
    formData.append("address", newClinic.data.address);
    formData.append("phone", newClinic.data.phone);
    if (newClinic.image) {
      formData.append("image", newClinic.image);
    }
    await clinic_store.ADD_CLINIC(formData);
    resetFormClinic();
    toast.success("Klinika muvaffaqiyatli qo'shildi", {
      autoClose: 1000,
      theme: "dark",
    });
  } catch (error) {
    console.log(error);
    toast.success(`${error.response.data.message}`, {
      autoClose: 1000,
      theme: "dark",
    });
  }
};

const updateAll = async () => {
  await clinic_store.GET_CLINIC();
};

onMounted(async () => {
  await clinic_store.GET_CLINIC();
  AOS.init();
});
</script>

<template>
  <ClinicForm
    :clinicModal="addClinicModal"
    :clinic="newClinic"
    :clinicFunc="addNewClinic"
    :resetFormClinic="resetFormClinic"
    isAdd="1"
  />
  <div>
    <div
      v-if="!clinic_store.LOAD"
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5"
    >
      <div
        data-aos="fade-right"
        @click="resetFormClinic"
        class="rounded-xl border border-zinc-600 bg-zinc-950 text-center dark:text-white p-5 pb-14 cursor-pointer hover:shadow-xl"
      >
        <i
          class="h-32 w-32 flex items-center justify-center mx-auto text-7xl rounded-full bx bx-plus bg-zinc-900 border border-zinc-700 mb-5"
        ></i>
        <span class="text-xl">Add Clinic</span>
      </div>
      <ClineCard
        v-for="el in clinic_store.CLINICS.slice(
          (page.currentPage - 1) * page.itemsPerPage,
          (page.currentPage - 1) * page.itemsPerPage + page.itemsPerPage
        )"
        :data="el"
        isUser="1"
        :router="`/admin/clinics/${el.id}`"
      />
    </div>
    <div v-else class="w-full py-20 flex items-center justify-center">
      <Loading />
    </div>

    <Pagination :page="page" :data="clinic_store.CLINICS" />
  </div>
</template>

<style scoped></style>
