<script setup>
defineProps(["doctor", "isAdmin"]);
</script>

<template>
	<div
		class="cursor-pointer bg-zinc-800 text-white border border-zinc-600 rounded-lg p-3 space-y-1">
		<img
			:src="
				doctor.image_name
					? `https://nest-clinic.onrender.com/api/image/${doctor.image_name}`
					: `../assets/logo.png`
			"
			class="mb-5 object-cover h-32 w-32 border border-zinc-600 mx-auto bg-zinc-950 rounded-full"
			alt="" />
		<h3 class="flex items-center gap-2 text-sm font-medium">
			<UserIcon />
			<span>{{ doctor.first_name }} {{ doctor.last_name }}</span>
		</h3>
		<h3 class="flex items-center gap-2 text-sm">
			<MedicalIcon />
			<span>{{ doctor.profession }}</span>
		</h3>
		<h3 class="flex items-center gap-2 text-sm">
			<PhoneIcon />
			<span>{{ doctor.phone }}</span>
		</h3>
		<h3 class="flex items-center gap-2 text-sm">
			<CalendarCheckIcon />
			<span>{{ doctor.work_day }}</span>
		</h3>
		<div v-if="isAdmin" class="w-full flex items-end justify-between pt-5">
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
</template>

<style lang="scss" scoped></style>
