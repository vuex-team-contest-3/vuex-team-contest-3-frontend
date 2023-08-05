<script setup>
import { useClinic } from "@/stores/clinic";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const { isUser, data, router } = defineProps(["isUser", "data", "router"]);
import { onMounted } from "vue";
import { toast } from "vue3-toastify";

const realRouter = useRouter();
const updateId = ref(null);
const deleteId = ref(null);
let updatedData = reactive({ ...data, image: "", imageURL: "" });
const clinic_store = useClinic();

const changeDelete = () => (deleteId.value = null);

const resetFormClinic = () => {
	updatedData = { ...data };
	updateId.value = null;
};

const updateClinic = async () => {
	try {
		const formData = new FormData();
		formData.append("name", updatedData.name);
		formData.append("address", updatedData.address);
		formData.append("phone", updatedData.phone);
		if (updatedData.image) {
			formData.append("image", updatedData.image);
		}
		await clinic_store.UPDATE_CLINIC(updateId.value, formData);
		toast.success("Klinika muvaffaqiyatli o'zgartirildi", {
			autoClose: 1000,
			theme: "dark",
		});
		resetFormClinic();
	} catch (error) {
		console.log(error);
		toast.success(`${error.response.data.message}`, {
			autoClose: 1000,
			theme: "dark",
		});
	}
};

const deleteClinic = async () => {
	try {
		const deletedIdCpy = deleteId.value;
		changeDelete();
		await clinic_store.DELETE_CLINIC(deletedIdCpy);
		toast.success("Klinika muvaffaqiyatli o'chirildi", {
			autoClose: 1000,
			theme: "dark",
		});
		resetFormClinic();
		realRouter.push("/admin/clinics");
	} catch (error) {
		console.log(error);
		toast.success(`${error.response.data.message}`, {
			autoClose: 1000,
			theme: "dark",
		});
	}
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
			data-aos="flip-right"
			class="rounded-xl block border border-zinc-700 hover:border-zinc-600 bg-zinc-950 hover:bg-zinc-900 text-center text-white p-5 cursor-pointer hover:shadow-xl duration-300 relative group">
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
					v-if="data.image_name"
					:src="`https://nest-clinic.onrender.com/api/image/${data.image_name}`"
					class="mb-5 h-32 w-32 mx-auto object-cover bg-zinc-900 border border-zinc-700 group-hover:border-zinc-600 duration-300 rounded-full" />
				<img
					v-else
					src="@/assets/logo.png"
					class="mb-5 h-32 w-32 mx-auto bg-zinc-900 border border-zinc-700 group-hover:border-zinc-600 duration-300 rounded-full" />
				<div class="flex items-center mb-1">
					<HeartMedIcon />
					<span class="text-md font-medium ml-1 bg-transparent outline-none">
						{{ data.name }}
					</span>
				</div>
				<div class="flex items-center mb-1">
					<LocationIcon />
					<span class="lg:text-sm sm:text-xs ml-1 bg-transparent outline-none">
						{{ data.address }}</span
					>
				</div>
				<div class="flex items-center mb-1">
					<PhoneIcon />
					<span class="lg:text-sm sm:text-xs ml-1 bg-transparent outline-none">
						{{ data.phone }}
					</span>
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
