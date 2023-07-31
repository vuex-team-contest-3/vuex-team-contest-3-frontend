<script setup></script>

<template>
	<div class="py-10">
		<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
			<ClineCard v-for="el in 8" isUser="1" />
		</div>

		<Pagination />
	</div>
</template>

<style scoped></style>
