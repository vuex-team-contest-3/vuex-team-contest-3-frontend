<script setup>
import { useClinic } from "@/stores/clinic";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const { isUser, data, router } = defineProps(["isUser", "data", "router"]);
import { onMounted } from "vue";

const realRouter = useRouter();
const updateId = ref(null);
const deleteId = ref(null);
let updatedData = reactive({ ...data });
const clinic_store = useClinic();

const changeDelete = () => (deleteId.value = null);

const resetFormClinic = () => {
	updatedData = { ...data };
	updateId.value = null;
};

const updateClinic = () => {
	clinic_store.UPDATE_CLINIC(updateId.value, updatedData);
	resetFormClinic();
};

const deleteClinic = () => {
	clinic_store.DELETE_CLINIC(deleteId.value);
	resetFormClinic();
	realRouter.push("/admin/clinics");
};

onMounted(() => {
	AOS.init();
});
</script>

<template>
	<!-- DELETE TESTS MODAL -->
	<DeleteModal
		:isDelete="deleteId"
		:changeDelete="changeDelete"
		:deleteFunc="deleteClinic" />

	<ClinicForm
		:clinicModal="updateId"
		:clinic="updatedData"
		:clinicFunc="updateClinic"
		:resetFormClinic="resetFormClinic" />
	<div>
		<div
			data-aos="fade-right"
			class="rounded-xl block border border-zinc-700 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900 text-center text-white p-5 cursor-pointer hover:shadow-xl duration-300 relative group">
			<i
				v-if="isUser == 0"
				@click="() => (deleteId = data.id)"
				class="text-lg bg-red-500 px-2 p-1 absolute bx bx-trash -top-2 -right-2 rounded-full"></i>
			<i
				v-if="isUser == 0 && !updateId"
				@click="() => (updateId = data.id)"
				class="text-lg bg-green-500 px-2 p-1 absolute bx bx-pencil -top-2 -left-2 rounded-full"></i>
			<router-link :to="router" class="block">
				<img
					src="@/assets/logo.png"
					class="mb-5 h-32 w-32 mx-auto bg-zinc-900 border border-zinc-700 group-hover:border-zinc-400 duration-300 rounded-full"
					alt="" />
				<div class="flex items-center mb-1">
					<HeartMedIcon />
					<span class="font-medium text-xl ml-1 bg-transparent outline-none">
						{{ data.name }}
					</span>
				</div>
				<div class="flex items-center mb-1">
					<LocationIcon />
					<span class="text-sm ml-1 bg-transparent outline-none">
						{{ data.address }}</span
					>
				</div>
				<div class="flex items-center mb-1">
					<PhoneIcon />
					<span class="text-sm ml-1 bg-transparent outline-none">
						{{ data.phone }}</span
					>
				</div>
				<div v-if="isUser == 1" class="flex items-center justify-between pt-2">
					<div class="flex items-center justify-between gap-2">
						<i
							class="text-red-500 bx bxs-heart text-xl hover:scale-125 duration-150"></i>
						<!-- <i class="bx bx-heart text-xl hover:scale-125 duration-150"></i> -->
						<span class="text-sm">17</span>
					</div>
					<div class="">
						<!-- <i class="text-xl hover:scale-125 duration-150 bx bx-bookmark"></i> -->
						<i class="text-xl hover:scale-125 duration-150 bx bxs-bookmark"></i>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
