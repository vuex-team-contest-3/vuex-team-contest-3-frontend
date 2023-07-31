<script setup>
import { useClinic } from "@/stores/clinic";
import { ref, reactive } from "vue";
const { isUser, data } = defineProps(["isUser", "data"]);

const updateId = ref(null);
const updatedData = reactive({
	name: data.name,
	address: data.address,
	img: data.img,
	phone: data.phone,
});
console.log(updatedData);
const clinic_store = useClinic();

const updateClinic = () => {
	clinic_store.UPDATE_CLINIC(updateId.value);
};
</script>

<template>
	<div>
		<div
			class="rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900 text-center dark:text-white p-5 cursor-pointer hover:shadow-xl duration-300 relative">
			<i
				v-if="isUser == 0"
				class="text-lg bg-red-500 px-2 p-1 absolute bx bx-trash -top-2 -right-2 rounded-full"></i>
			<i
				v-if="isUser == 0 && !updateId"
				@click="() => (updateId = data.id)"
				class="text-lg bg-green-500 px-2 p-1 absolute bx bx-pencil -top-2 -left-2 rounded-full"></i>
			<i
				v-if="isUser == 0 && updateId"
				@click="() => (updateId = null)"
				class="text-lg bg-blue-500 px-2 p-1 absolute bx bx-check -top-2 -left-2 rounded-full"></i>

			<img
				src="@/assets/logo.png"
				class="mb-5 h-32 w-32 mx-auto bg-zinc-900 border border-zinc-700 rounded-full"
				alt="" />
			<div class="flex items-center mb-1">
				<HeartMedIcon />
				<input
					class="px-1 text-xl border border-transparent ml-1 bg-transparent w-full outline-none"
					:class="updateId ? ' border-zinc-600 rounded-md' : 'cursor-pointer'"
					:readonly="!updateId"
					:value="updatedData.name"
					:v-model="updatedData.name" />
			</div>
			<div class="flex items-center mb-1">
				<LocationIcon />
				<input
					class="px-1 text-sm border border-transparent ml-1 bg-transparent w-full outline-none"
					:class="updateId ? ' border-zinc-600 rounded-md' : 'cursor-pointer'"
					:readonly="!updateId"
					:value="updatedData.address"
					:v-model="updatedData.address" />
			</div>
			<div class="flex items-center mb-1">
				<PhoneIcon />
				<input
					class="px-1 text-sm border border-transparent ml-1 bg-transparent w-full outline-none"
					:class="updateId ? ' border-zinc-600 rounded-md' : 'cursor-pointer'"
					:readonly="!updateId"
					:value="updatedData.phone"
					:v-model="updatedData.phone" />
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
		</div>
	</div>
</template>

<style scoped></style>
