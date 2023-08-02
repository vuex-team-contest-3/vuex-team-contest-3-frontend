<script setup>
import { ref, reactive } from "vue";
import { useClinic } from "@/stores/clinic";
import { onMounted } from "vue";

const clinic_store = useClinic();
const page = reactive({
	currentPage: 1,
	itemsPerPage: 7,
});

onMounted(() => {
	AOS.init();
});
</script>

<template>
	<div class="py-10">
		<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
			<ClineCard
				v-if="!clinic_store.LOAD"
				v-for="el in clinic_store.CLINICS.slice(
					(page.currentPage - 1) * page.itemsPerPage,
					(page.currentPage - 1) * page.itemsPerPage + page.itemsPerPage
				)"
				:data="el"
				isUser="1"
				:router="`/clinics/${el.id}`" />
			<LoadingCards v-else v-for="el in 4" />
		</div>

		<Pagination :page="page" :data="clinic_store.CLINICS" />
	</div>
</template>

<style scoped></style>
