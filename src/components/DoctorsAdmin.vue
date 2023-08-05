<script setup>
const { data, updateAll } = defineProps(["data", "updateAll"]);
import { ref, reactive } from "vue";
import { toast } from "vue3-toastify";

import { useDoctor } from "../stores/doctor";

const page = reactive({
	currentPage: 1,
	itemsPerPage: 3,
});

const doctor_store = useDoctor();

// DELETE
const deleteId = ref(null);
const changeDelete = () => (deleteId.value = null);

const service = reactive({
	name: "",
	price: "",
});

const diagnosis = ref([]);

const resetForm = () => {
	service.name = "";
	service.price = "";
	changeModal();
};

const addService = () => {};

const deleteClinic = async () => {
	try {
		const deletedIdCpy = deleteId.value;
		changeDelete();
		await doctor_store.DELETE(deletedIdCpy);
		toast.success("Xizmat muvaffaqiyatli o'chirildi", {
			autoClose: 1000,
			theme: "dark",
		});
		updateAll();
	} catch (error) {
		console.log(error);
		toast.error("Xatolik", {
			autoClose: 1000,
			theme: "dark",
		});
	}
};
</script>

<template>
	<DeleteModal
		:isDelete="deleteId"
		:changeDelete="changeDelete"
		:deleteFunc="deleteClinic" />

	<ServiceAdminForm
		:serviceModal="serviceModal"
		:service="service"
		:serviceFunc="addService"
		:resetForm="resetForm"
		isAdd="1" />
	<DiagnosisForm
		:diagnosisModal="diagnosisModal"
		:diagnosis="diagnosis"
		:diagnosisFunc="diagnosisFunc"
		:resetForm="changeDiagnosisModal"
		isAdd="1" />
	<div>
		<div class="mb-5 flex items-center justify-between w-full">
			<div class="">
				<button
					@click="changeModal"
					class="bg-zinc-700 flex items-center gap-2 justify-center p-2 px-5 rounded-lg text-zinc-300 border border-zinc-500">
					<i class="bx bx-plus text-lg"></i>
					<span>Yangi shifokor qo'shish</span>
				</button>
			</div>
			<div class="relative w-[30%]">
				<div
					class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<i class="bx bx-search text-zinc-400 text-xl"></i>
				</div>
				<input
					autocomplete="off"
					type="search"
					id="default-search"
					class="block outline-none w-full p-3 pl-10 text-sm border rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white"
					placeholder="Qidirish..."
					required />
			</div>
		</div>
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
				<DoctorCard
					v-for="el in data.doctor.slice(
						(page.currentPage - 1) * page.itemsPerPage,
						(page.currentPage - 1) * page.itemsPerPage + page.itemsPerPage
					)">
				</DoctorCard>
			</div>
			<Pagination :page="page" :data="data.doctor" />
		</div>
	</div>
</template>

<style scoped></style>
