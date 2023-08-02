<script setup>
import { onMounted } from "vue";

onMounted(() => {
	AOS.init();
});
</script>

<template>
	<main class="min-h-screen bg-[#202020]">
		<section class="">
			<Sidebar data-aos="fade-right" />
			<div
				class="h-screen overflow-y-auto overflow-x-hidden duration-300 lg:ml-64 ml-20 p-5">
				<AdminTop data-aos="fade-down" />
				<router-view></router-view>
			</div>
		</section>
	</main>
</template>
