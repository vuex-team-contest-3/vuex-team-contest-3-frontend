<script setup>
import { ref, reactive } from "vue";
import { useClinic } from "@/stores/clinic";
import { onMounted } from "vue";

const clinic_store = useClinic();
const page = reactive({
	currentPage: 1,
	itemsPerPage: 7,
});
const addClinicModal = ref(false);

const newClinic = reactive({
	name: "",
	address: "",
	image: null,
	phone: "",
});

const resetFormClinic = () => {
	addClinicModal.value = !addClinicModal.value;
	for (const i in newClinic) newClinic[i] = "";
};

const addNewClinic = () => {
	clinic_store.ADD_CLINIC(newClinic);
	resetFormClinic();
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
		isAdd="1" />
	<div>
		<div
			v-if="!clinic_store.LOAD"
			class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
			<div
				data-aos="fade-right"
				@click="resetFormClinic"
				class="rounded-xl border border-zinc-600 bg-zinc-950 text-center dark:text-white p-5 pb-14 cursor-pointer hover:shadow-xl">
				<i
					class="h-32 w-32 flex items-center justify-center mx-auto text-7xl rounded-full bx bx-plus bg-zinc-900 border border-zinc-700 mb-5"></i>
				<span class="text-xl">Add Clinic</span>
			</div>
			<ClineCard
				v-for="el in clinic_store.CLINICS.slice(
					(page.currentPage - 1) * page.itemsPerPage,
					(page.currentPage - 1) * page.itemsPerPage + page.itemsPerPage
				)"
				:data="el"
				isUser="0"
				:router="`/admin/clinics/${el.id}`" />
		</div>
		<div v-else class="w-full py-20 flex items-center justify-center">
			<Loading />
		</div>

		<Pagination :page="page" :data="clinic_store.CLINICS" />
	</div>
</template>

<style scoped></style>
