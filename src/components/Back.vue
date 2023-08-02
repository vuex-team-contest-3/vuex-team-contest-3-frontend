<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
	<button
		@click="() => router.go(-1)"
		class="bg-zinc-800 border border-zinc-700 pr-5 pl-3 p-2 rounded-xl text-white flex items-center gap-2">
		<i class="bx bx-chevron-left text-2xl"></i>
		<span>Ortga</span>
	</button>
</template>

<style scoped></style>
