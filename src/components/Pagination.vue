<script setup>
const { page, data } = defineProps(["page", "data"]);
console.log(data.length);
page.currentPage = 2;
</script>

<template>
	
</template>

<style scoped></style>
