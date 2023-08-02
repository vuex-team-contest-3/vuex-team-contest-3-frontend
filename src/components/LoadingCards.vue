<script setup></script>

<template>
	<div>
		<div
			class="animate-pulse rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900 text-center dark:text-white p-5 cursor-pointer hover:shadow-xl duration-300 relative">
			<i
				class="mb-5 h-32 w-32 mx-auto dark:bg-zinc-700 animate-pulse border border-zinc-700 rounded-full bx bx-image text-5xl flex items-center justify-center text-zinc-400"></i>
			<div class="flex items-center mb-1">
				<HeartMedIcon />
				<span
					class="h-2.5 bg-zinc-200 rounded-full dark:bg-zinc-700 w-full mx-2 animate-pulse"></span>
			</div>
			<div class="flex items-center mb-1">
				<LocationIcon />
				<span
					class="h-2.5 bg-zinc-200 rounded-full dark:bg-zinc-700 w-full mx-2 animate-pulse"></span>
			</div>
			<div class="flex items-center mb-1">
				<PhoneIcon />
				<span
					class="h-2.5 bg-zinc-200 rounded-full dark:bg-zinc-700 w-full mx-2 animate-pulse"></span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
