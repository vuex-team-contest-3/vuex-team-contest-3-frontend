<script setup>
const { isDelete, changeDelete, deleteFunc } = defineProps([
	"isDelete",
	"changeDelete",
	"deleteFunc",
]);
</script>

<template>
	<!-- DELETE TESTS MODAL -->

	<div
		class="absolute w-full h-screen bg-black/70 left-0 flex items-center justify-center z-50 duration-300"
		:class="isDelete ? 'top-0' : '-top-full'">
		<div class="relative w-full max-w-lg max-h-full">
			<div class="relative bg-white rounded-lg shadow dark:bg-zinc-800">
				<button
					class="absolute top-3 right-3 text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-700 dark:hover:text-white"
					@click="changeDelete">
					<i class="bx bx-x text-2xl px-1"></i>
					<span class="sr-only">Close modal</span>
				</button>
				<div class="p-6 text-center">
					<i class="bx bxs-trash-alt text-5xl text-zinc-500 py-5"></i>
					<h3 class="mb-5 text-lg font-normal text-zinc-500 dark:text-zinc-400">
						Rostan o'chirib yubormoqchimisiz ?
					</h3>
					<button
						class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
						@click="deleteFunc">
						O'chirish
					</button>
					<button
						class="text-zinc-500 hover:bg-zinc-100 focus:ring-4 focus:outline-none focus:ring-zinc-200 rounded-lg border border-zinc-200 text-sm font-medium px-5 py-2.5 hover:text-zinc-900 focus:z-10 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-500 dark:hover:text-white dark:hover:bg-zinc-600 dark:focus:ring-zinc-600"
						@click="changeDelete">
						Bekor qilish
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
