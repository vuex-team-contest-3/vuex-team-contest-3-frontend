<script setup>
const { page, data } = defineProps(["page", "data"]);
</script>

<template>
	<nav v-if="data.length">
		<div
			class="flex items-center justify-center -space-x-px h-10 text-base mt-5">
			<button
				@click="
					() => {
						page.currentPage > 1 ? page.currentPage-- : 0;
					}
				"
				class="outline-none flex items-center justify-center px-2 h-10 ml-0 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-l-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
				<i class="bx bx-chevron-left text-3xl"></i>
			</button>
			<button
				v-for="el in Math.ceil(data.length / page.itemsPerPage)"
				@click="() => (page.currentPage = el)"
				:class="
					page.currentPage == el ? 'dark:bg-zinc-900' : 'dark:bg-gray-800'
				"
				class="outline-none flex items-center justify-center px-4 h-10 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
				{{ el }}
			</button>
			<button
				@click="
					() => {
						page.currentPage < Math.ceil(data.length / page.itemsPerPage)
							? page.currentPage++
							: 0;
					}
				"
				class="outline-none flex items-center justify-center px-2 h-10 ml-0 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-r-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
				<i class="bx bx-chevron-right text-3xl"></i>
			</button>
		</div>
	</nav>
</template>

<style scoped></style>
