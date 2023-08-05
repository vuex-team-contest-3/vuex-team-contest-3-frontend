<script setup>
import { onMounted, reactive } from "vue";
import { useClinic } from "@/stores/clinic";
import { useClient } from "@/stores/client";
import { useDoctor } from "@/stores/doctor";

const clinic_store = useClinic();
const client_store = useClient();
const doctor_store = useDoctor();

onMounted(async () => {
	AOS.init();
	await clinic_store.GET_CLINIC();
	await client_store.GET_CLIENT();
	await doctor_store.GET();
});
</script>

<template>
	<div class="text-white dark:text-black">
		<div class="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
			<div
				data-aos="flip-right"
				class="bg-yellow-400 h-24 rounded-lg flex items-center justify-between px-5">
				<div class="block">
					<h4 class="text-2xl font-bold">Clients</h4>
					<h3 class="text-3xl">{{ client_store.CLIENTS.length }}</h3>
				</div>
				<i class="text-6xl bx bx-user"></i>
			</div>
			<div
				data-aos="flip-right"
				class="bg-green-400 h-24 rounded-lg flex items-center justify-between px-5">
				<div class="block">
					<h4 class="text-2xl font-bold">Clinics</h4>
					<h3 class="text-3xl">{{ clinic_store.CLINICS.length }}</h3>
				</div>
				<i class="text-6xl bx bx-location-plus"></i>
			</div>
			<div
				data-aos="flip-right"
				class="bg-purple-400 h-24 rounded-lg flex items-center justify-between px-5">
				<div class="block">
					<h4 class="text-2xl font-bold">Doctors</h4>
					<h3 class="text-3xl">{{ doctor_store.DOCTORS.length }}</h3>
				</div>
				<i class="text-6xl bx bxs-capsule"></i>
			</div>
			<div
				data-aos="flip-right"
				class="bg-gray-400 h-24 rounded-lg flex items-center justify-between px-5">
				<div class="block">
					<h4 class="text-2xl font-bold">Admins</h4>
					<h3 class="text-3xl">1</h3>
				</div>
				<i class="text-6xl bx bx-user-pin"></i>
			</div>
		</div>
	</div>
</template>

<style scoped></style>