<script setup>
import { ref, reactive } from "vue";
const addClinicModal = ref(false);

const newClinic = reactive({
	name: "",
	address: "",
	img: "",
	call_center: "",
	location: "",
});

const resetFormClinic = () => {
	addClinicModal.value = !addClinicModal.value;
	for (const i in newClinic) newClinic[i] = "";
};
const location = ref("");
</script>

<template>
	<!-- ADD QUESTION MODAL -->
	<div
		class="absolute w-full h-screen bg-black/70 top-0 left-0 flex items-center justify-center z-50"
		:class="addClinicModal ? '' : 'hidden'">
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
					<div class="flex gap-5 mb-5">
						<div class="w-[40%] flex items-center justify-center">
							<label
								for="image"
								class="flex items-center justify-center h-36 w-36 bg-zinc-950 rounded-full mx-auto cursor-pointer border border-zinc-700">
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
									placeholder="Shoxmed	"
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
						</div>
					</div>
					<div class="mb-5">
						<iframe
							class="h-32 w-full rounded-lg"
							src="https://www.google.com/maps/place/%D0%90%D0%BB-%D0%91%D1%83%D1%85%D0%BE%D1%80%D0%B8%D0%B9+%D0%B6%D0%BE%D0%BC%D0%B5%D1%8A+%D0%BC%D0%B0%D1%81%D0%B6%D0%B8%D0%B4%D0%B8/@40.763392,72.3419136,13z/data=!4m6!3m5!1s0x38bcec59a47bc3a5:0x75e885f916897c12!8m2!3d40.7642412!4d72.3825151!16s%2Fg%2F11f1pfb5py?entry=ttu"
							frameborder="0"
							allowfullscreen></iframe>
					</div>

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
							@click="addTest">
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
			<div
				v-for="el in 10"
				class="rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900 text-center dark:text-white p-5 cursor-pointer hover:shadow-xl duration-300 relative">
				<i
					class="bg-red-500 p-2 absolute bx bx-trash -top-1 -right-1 rounded-full"></i>
				<i
					class="bg-green-500 p-2 absolute bx bx-pencil -top-1 -left-1 rounded-full"></i>

				<img
					src="@/assets/logo.png"
					class="mb-5 h-32 w-32 mx-auto bg-zinc-900 border border-zinc-700 rounded-full"
					alt="" />
				<span class="text-xl">MEDPlus</span>
				<div class="">
					<i class="bx bx-location"></i>
					<span class="text-sm">Chilonzor 25-daha</span>
				</div>
			</div>
		</div>

		<nav aria-label="Page navigation example">
			<ul class="flex items-center -space-x-px h-10 text-base mt-5">
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-2 h-10 ml-0 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-l-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
						<i class="bx bx-chevron-left text-3xl"></i>
					</a>
				</li>
				<li v-for="el in 5">
					<a
						href="#"
						class="flex items-center justify-center px-4 h-10 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
						>{{ el }}</a
					>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-2 h-10 ml-0 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-r-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
						<i class="bx bx-chevron-right text-3xl"></i>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style scoped></style>
