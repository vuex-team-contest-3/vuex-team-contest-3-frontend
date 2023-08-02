<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<template>
	<div class="w-full">
		<div
			class="bg-zinc-950 border border-zinc-700 flex items-center justify-between px-5 h-20 w-full text-white rounded-xl mb-5 shadow-2xl">
			<h1 class="text-2xl font-bold">{{ route.name }}</h1>
			<Back v-if="route.params.id" />
		</div>
	</div>
</template>

<style scoped></style>
