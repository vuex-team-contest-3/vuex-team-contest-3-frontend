<script setup>
import { ref, reactive } from "vue";


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
	service.diagnosis = [];
	changeModal();
};
</script>

<template>
	<ServiceAdminForm
		:serviceModal="serviceModal"
		:service="service"
		:serviceFunc="serviceFunc"
		:resetForm="changeDiagnosisModal"
		isAdd="1" />
	<DiagnosisForm
		:diagnosisModal="diagnosisModal"
		:diagnosis="diagnosis"
		:diagnosisFunc="diagnosisFunc"
		:resetForm="resetForm"
		isAdd="1" />

	<div>
		<div class="mb-5 flex items-center justify-between w-full">
			<div class="">
				<button
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
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left text-zinc-400">
				<thead class="text-xs uppercase bg-zinc-700 text-zinc-400">
					<tr>
						<th scope="col" class="px-6 py-3">Xizmat nomi</th>
						<th scope="col" class="px-6 py-3">Xizmat tashxislari</th>
						<th scope="col" class="px-6 py-3">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="el in 5" class="border-b bg-zinc-800 border-zinc-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium whitespace-nowrap text-white">
							Stamatolog
						</th>
						<td class="px-6 py-4 flex">
							<div
								class="flex items-center gap-2 border border-blue-500 pl-2 rounded-lg p-1">
								<span
									class=""
									v-for="el in [`Tish og'rig'i`, 'Mulk yemirilishi', 'Kares']">
									{{ el }},
								</span>
								<button
									@click="() => (diagnosisModal = el?.id)"
									class="bg-blue-500 text-white flex items-center justify-center p-1 px-2 rounded-lg">
									<i class="bx bx-plus text-lg"></i>
								</button>
							</div>
						</td>
						<td class="px-6 py-4">
							<div class="flex items-center gap-2">
								<i
									class="bg-red-500 text-white p-1 px-2 rounded-full cursor-pointer bx bx-trash text-xl"></i>
								<i
									class="bg-green-500 text-white p-1 px-2 rounded-full cursor-pointer bx bx-pencil text-xl"></i>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped></style>
