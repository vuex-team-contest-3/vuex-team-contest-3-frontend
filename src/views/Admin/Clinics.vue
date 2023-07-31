<script setup>
import { ref, reactive } from "vue";
import { useClinic } from "@/stores/clinic";
import LoadingCards from "../../components/LoadingCards.vue";

const clinic_store = useClinic();
const page = reactive({
	currentPage: 1,
	itemsPerPage: 7,
});
const addClinicModal = ref(false);

const newClinic = reactive({
	name: "",
	address: "",
	img: "",
	phone: "",
});

const resetFormClinic = () => {
	addClinicModal.value = !addClinicModal.value;
	for (const i in newClinic) newClinic[i] = "";
};

const addNewClinic = () => {
	clinic_store.ADD_CLINIC({ id: Date.now(), ...newClinic });
	resetFormClinic();
};
</script>

<template>
	<!-- ADD QUESTION MODAL -->
	<div
		class="absolute w-full h-screen bg-black/70 left-0 flex items-center justify-center z-50 duration-300"
		:class="addClinicModal ? 'top-0' : '-top-full'">
		<div class="relative w-full max-w-2xl max-h-full">
			<!-- Modal content -->
			<div
				class="relative bg-white rounded-lg shadow dark:bg-zinc-900 border border-zinc-800">
				<button
					@click="resetFormClinic"
					class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-700 dark:hover:text-white">
					<i class="bx bx-x text-2xl px-1"></i>
					<span class="sr-only">Close modal</span>
				</button>
				<div class="px-6 py-6 lg:px-8">
					<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
						Add new Clinic
					</h3>
					<form class="flex gap-5 mb-5">
						<div class="w-[40%] flex items-center justify-center">
							<label
								for="image"
								class="flex items-center justify-center h-44 w-44 bg-zinc-950 rounded-full mx-auto cursor-pointer border border-zinc-700">
								<img v-if="newClinic.img" src="@/assets/logo.png" alt="" />
								<i v-else class="text-7xl text-white bx bx-upload"></i>
							</label>
							<input
								type="file"
								id="image"
								class="hidden"
								placeholder="Shoxmed	"
								required />
						</div>
						<div class="w-[60%] space-y-5">
							<div>
								<label
									class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1">
									Name
								</label>
								<input
									type="text"
									id="full_name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
									placeholder="Shoxmed"
									required
									v-model="newClinic.name" />
							</div>
							<div>
								<label
									class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1">
									Phone
								</label>
								<input
									type="number"
									id="full_name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
									placeholder="887038006"
									required
									v-model="newClinic.phone" />
							</div>
							<div>
								<label
									class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1">
									Address
								</label>
								<input
									type="text"
									id="address"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
									placeholder="Chilonzor 12-daha"
									required
									v-model="newClinic.address" />
							</div>
						</div>
					</form>

					<div class="flex items-center justify-between">
						<button
							type="reset"
							class="w-40 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-800"
							@click="resetFormClinic">
							Bekor qilish
						</button>
						<button
							type="submit"
							class="w-40 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
							@click="addNewClinic">
							Qo'shish
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
			<div
				@click="resetFormClinic"
				class="rounded-xl border border-zinc-600 bg-zinc-950 text-center dark:text-white p-5 cursor-pointer hover:shadow-xl">
				<i
					class="h-32 w-32 flex items-center justify-center mx-auto text-7xl rounded-full bx bx-plus bg-zinc-900 border border-zinc-700 mb-5"></i>
				<span class="text-xl">Add Clinic</span>
			</div>
			<ClineCard
				v-if="!clinic_store.LOAD"
				v-for="el in clinic_store.CLINICS.slice(
					(page.currentPage - 1) * page.itemsPerPage,
					(page.currentPage - 1) * page.itemsPerPage + page.itemsPerPage
				)"
				:data="el"
				isUser="0" />
			<LoadingCards v-else v-for="el in 4" />
		</div>

		<Pagination :page="page" :data="clinic_store.CLINICS" />
	</div>
</template>

<style scoped></style>
