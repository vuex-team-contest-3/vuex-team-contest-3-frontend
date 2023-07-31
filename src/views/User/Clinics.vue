<script setup></script>

<template>
	<div class="py-10">
		<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
			<div
				v-for="el in 8"
				class="rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900 text-center dark:text-white px-5 pt-5 cursor-pointer hover:shadow-xl duration-300 relative">
				<img
					src="@/assets/logo.png"
					class="mb-5 h-32 w-32 mx-auto bg-zinc-900 border border-zinc-700 rounded-full"
					alt="" />
				<div class="flex items-center gap-2 mb-1">
					<HeartMedIcon />
					<span class="text-xl">MEDPlus</span>
				</div>
				<div class="flex items-center gap-2 mb-1">
					<LocationIcon />
					<span class="text-sm">Chilonzor 25-daha</span>
				</div>
				<div class="flex items-center gap-2 mb-1">
					<PhoneIcon />
					<span class="text-sm">+998 (88) 777-01-01</span>
				</div>
				<div class="flex items-center justify-end gap-2 pt-5 pb-2">
					<i
						class="text-red-500 bx bxs-heart text-xl hover:scale-125 duration-150"></i>
					<!-- <i class="bx bx-heart text-xl hover:scale-125 duration-150"></i> -->
					<span class="text-sm">17</span>
				</div>
			</div>
		</div>

		<Pagination />
	</div>
</template>

<style scoped></style>
