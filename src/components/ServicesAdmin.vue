<script setup>
const { data, updateAll } = defineProps(["data", "updateAll"]);
import { ref, reactive, onMounted } from "vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";

import { useDiagnosis } from "@/stores/diagnosis";
import { useService } from "@/stores/service";
import { useClinic } from "@/stores/clinic";

const page = reactive({ currentPage: 1, itemsPerPage: 3 });

const router = useRouter();

// STORES
const clinic_store = useClinic();
const service_store = useService();
const diagnosis_store = useDiagnosis();

// MODAL
const serviceModal = ref(false);
const serviceUpdateModal = ref(null);
const diagnosisModal = ref(null);
const changeDiagnosisModal = () => (diagnosisModal.value = null);
const changeModal = () => (serviceModal.value = !serviceModal.value);

// DELETE
const deleteId = ref(null);
const changeDelete = () => (deleteId.value = null);

const service = reactive({ name: "", price: "", clinic_id: data.id });

let updateService = reactive({});

const diagnosis = ref([]);

const resetForm = () => {
	service.name = "";
	service.price = "";
	changeModal();
};

const addService = async () => {
	try {
		await service_store.ADD(service);
		resetForm();
		toast.success("Xizmat qo'shildi", { autoClose: 1000, theme: "dark" });
		updateAll();
	} catch (error) {
		console.log(error);
		toast.success("Formani to'g'ri to'ldiring", {
			autoClose: 1000,
			theme: "dark",
		});
	}
};

const resetServiceForm = () => {
	serviceUpdateModal.value = null;
	updateService = {};
};

const editService = async () => {
	try {
		const updatedIdCpy = serviceUpdateModal.value;
		serviceUpdateModal.value = null;
		await service_store.UPDATE(updatedIdCpy, { ...updateService });
		resetServiceForm();

		toast.success("Xizmat o'zgartirildi", { autoClose: 1000, theme: "dark" });
		updateAll();
	} catch (error) {
		console.log(error);
		toast.success("Formani to'g'ri to'ldiring", {
			autoClose: 1000,
			theme: "dark",
		});
	}
};

const deleteClinic = async () => {
	try {
		const deletedIdCpy = deleteId.value;
		changeDelete();
		await service_store.DELETE(deletedIdCpy);
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

const addDiagnosis = () => {};
onMounted(async () => {});
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
	<ServiceAdminForm
		:serviceModal="serviceUpdateModal"
		:service="updateService"
		:serviceFunc="editService"
		:resetForm="resetServiceForm" />
	<DiagnosisForm
		:diagnosisModal="diagnosisModal"
		:diagnosis="diagnosis"
		:diagnosisFunc="addDiagnosis"
		:resetForm="changeDiagnosisModal"
		isAdd="1" />
	<div>
		<div class="mb-5 flex items-center justify-between w-full">
			<div class="">
				<button
					@click="changeModal"
					class="bg-zinc-700 flex items-center gap-2 justify-center p-2 px-5 rounded-lg text-zinc-300 border border-zinc-500">
					<i class="bx bx-plus text-lg"></i>
					<span>Yangi xizmat qo'shish</span>
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
		<div class="relative overflow-x-auto shadow-md rounded-xl sm:rounded-lg">
			<table class="w-full text-sm text-left text-zinc-400 rounded-xl">
				<thead class="text-xs uppercase bg-zinc-700 text-zinc-400">
					<tr>
						<th scope="col" class="px-6 py-3">Xizmat nomi</th>
						<th scope="col" class="px-6 py-3">Xizmat tashxislari</th>
						<th scope="col" class="px-6 py-3">Price</th>
						<th scope="col" class="px-6 py-3">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="el in data.service.slice(
							(page.currentPage - 1) * page.itemsPerPage,
							(page.currentPage - 1) * page.itemsPerPage + page.itemsPerPage
						)"
						class="border-b bg-zinc-800 border-zinc-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium whitespace-nowrap text-white">
							{{ el.name }}
						</th>
						<td class="px-6 py-4 flex">
							<div
								class="flex items-center gap-2 border border-blue-500 pl-2 rounded-lg p-1">
								<span
									v-if="el.diagnosis?.length"
									class="text-sm font-medium px-2 uppercase"
									v-for="diag in el.diagnosis">
									{{ diag.name }},
								</span>
								<span v-else class="text-sm font-medium px-2">
									NO DIAGNOSIS
								</span>

								<button
									@click="
										() => {
											diagnosisModal = el.id;
											diagnosis = el.diagnosis;
										}
									"
									class="outline-none bg-blue-500 text-white flex items-center justify-center p-1 px-2 rounded-lg">
									<i class="bx bx-pen text-lg"></i>
								</button>
							</div>
						</td>
						<th
							scope="row"
							class="px-6 py-4 font-medium whitespace-nowrap text-white">
							{{ el.price }}
						</th>
						<td class="px-6 py-4">
							<div class="flex items-center gap-2">
								<i
									@click="() => (deleteId = el.id)"
									class="bg-red-500 text-white p-1 px-2 rounded-full cursor-pointer bx bx-trash text-lg"></i>
								<i
									@click="
										() => {
											updateService = { ...el };
											serviceUpdateModal = el.id;
										}
									"
									class="bg-green-500 text-white p-1 px-2 rounded-full cursor-pointer bx bx-pencil text-lg"></i>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<Pagination :page="page" :data="data.service" />
		</div>
	</div>
</template>

<style scoped></style>
