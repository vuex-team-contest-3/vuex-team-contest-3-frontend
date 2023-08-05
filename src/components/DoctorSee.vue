<script setup>
const { id, resetForm } = defineProps(["id", "resetForm"]);
import { onMounted, ref } from "vue";
import { useDiagnosis } from "@/stores/diagnosis";

const diagnosis_store = useDiagnosis();
const currentDiagnosis = ref();

onMounted(async () => {
	currentDiagnosis.value = await diagnosis_store.GET_ONE(id);
});
</script>

<template>
	<!-- ADD QUESTION MODAL -->
	<div
		class="absolute w-full h-screen bg-black/70 left-0 flex items-center justify-center z-50 duration-300"
		:class="id ? 'top-0' : '-top-full'">
		{{ currentDiagnosis }}
		<div class="relative w-full max-w-2xl max-h-full">
			<!-- Modal content -->
			<div
				class="relative bg-white rounded-lg shadow dark:bg-zinc-900 border border-zinc-800">
				<button
					@click="resetForm"
					class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-700 dark:hover:text-white">
					<i class="bx bx-x text-2xl px-1"></i>
					<span class="sr-only">Close modal</span>
				</button>
				<div class="px-6 py-6 lg:px-8">
					<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
						Tashxis qo'yish
					</h3>
					<form class="grid grid-cols-2 gap-5 mb-5">
						<div>
							<label
								class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1">
								Nomi
							</label>
							<input
								type="text"
								id="name"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
								placeholder="Stomotolog"
								required />
						</div>
					</form>

					<div class="flex items-center justify-between">
						<button
							type="reset"
							class="w-40 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-800"
							@click="resetForm">
							Bekor qilish
						</button>
						<button
							type="submit"
							class="w-40 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
							@click="serviceFunc">
							Tugatish
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
