<script setup></script>

<template>
	<nav aria-label="Page navigation example">
		<ul
			class="flex items-center justify-center -space-x-px h-10 text-base mt-5">
			<li>
				<a
					href="#"
					class="flex items-center justify-center px-2 h-10 ml-0 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-l-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
					<i class="bx bx-chevron-left text-3xl"></i>
				</a>
			</li>
			<li v-for="el in 5">
				<a
					href="#"
					class="flex items-center justify-center px-4 h-10 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
					>{{ el }}</a
				>
			</li>
			<li>
				<a
					href="#"
					class="flex items-center justify-center px-2 h-10 ml-0 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-r-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
					<i class="bx bx-chevron-right text-3xl"></i>
				</a>
			</li>
		</ul>
	</nav>
</template>

<style scoped></style>
