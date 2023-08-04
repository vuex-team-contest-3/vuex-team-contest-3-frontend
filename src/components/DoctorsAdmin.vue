<script setup>
import { ref, reactive, onMounted } from "vue";
import { useDiagnosis } from "@/stores/diagnosis";
import { useService } from "@/stores/service";
const { data } = defineProps(["data"]);

const diagnosis_store = useDiagnosis();
const serviceModal = ref(false);
const diagnosisModal = ref(null);
const changeDiagnosisModal = () => (diagnosisModal.value = null);
const changeModal = () => (serviceModal.value = !serviceModal.value);

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

onMounted(async () => {
	diagnosis.value = diagnosis_store.DIAGNOSIS;
});
</script>

<template>
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
			<div class="grid grid-cols-3 gap-5">
				<div class="bg-zinc-800 rounded-lg">
					<img
						src="@/assets/logo.png"
						class="object-cover h-44 w-44 mx-auto"
						alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
