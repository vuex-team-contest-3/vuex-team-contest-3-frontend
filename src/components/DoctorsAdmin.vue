<script setup>
import { ref, reactive, onMounted } from "vue";
import { useDiagnosis } from "@/stores/diagnosis";
import { useService } from "@/stores/service";
const { data } = defineProps(["data"]);

const page = reactive({
	currentPage: 1,
	itemsPerPage: 3,
});

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
				<div
					v-for="el in data.doctor.slice(
						(page.currentPage - 1) * page.itemsPerPage,
						(page.currentPage - 1) * page.itemsPerPage + page.itemsPerPage
					)"
					class="bg-zinc-800 border border-zinc-600 rounded-lg p-3 space-y-1">
					<img
						:src="
							el.image
								? `https://nest-clinic.onrender.com/api/image/${el.image}`
								: '@/assets/logo.png'
						"
						class="mb-5 object-cover h-32 w-32 border border-zinc-600 mx-auto bg-zinc-950 rounded-full"
						alt="" />
					<h3 class="flex items-center gap-2 text-sm font-medium">
						<UserIcon />
						<span>{{ el.first_name }} {{ el.last_name }}</span>
					</h3>
					<h3 class="flex items-center gap-2 text-sm">
						<MedicalIcon />
						<span>{{ el.profession }}</span>
					</h3>
					<h3 class="flex items-center gap-2 text-sm">
						<PhoneIcon />
						<span>{{ el.phone }}</span>
					</h3>
					<h3 class="flex items-center gap-2 text-sm">
						<CalendarCheckIcon />
						<span>{{ el.work_day }}</span>
					</h3>
					<div class="w-full flex items-end justify-between pt-5">
						<span class="text-zinc-400 text-sm">15.02.23</span>
						<div class="flex items-center gap-2">
							<i
								@click="() => (updateId = data.id)"
								class="text-lg bg-green-500 px-1 bx bx-pencil rounded-lg cursor-pointer"></i>
							<i
								@click="() => (deleteId = data.id)"
								class="text-lg bg-red-500 px-1 bx bx-trash rounded-lg cursor-pointer"></i>
						</div>
					</div>
				</div>
			</div>
			<Pagination :page="page" :data="data.doctor" />
		</div>
	</div>
</template>

<style scoped></style>
