<script setup></script>

<template>
	<div class="bg-zinc-950 p-5">
		<h3 class="text-white mb-5 text-xl font-medium text-center">
			Ma'lumotlarni o'zgartirish
		</h3>
		<div class="grid grid-cols-2 gap-5">
			<div class="col-span-2">
				<label
					class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1">
					Login
				</label>
				<input
					type="text"
					id="name"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
					placeholder="login"
					required />
			</div>
			<div>
				<label
					class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1">
					Parol
				</label>
				<input
					type="text"
					id="name"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
					placeholder="*******"
					required />
			</div>
			<div>
				<label
					class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300 dark:bg-blue-500/20 bg-blue-300 rounded-md text-center p-1">
					Parol Qayta
				</label>
				<input
					type="text"
					id="name"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
					placeholder="*******"
					required />
			</div>
		</div>
    <div class="py-5 text-center">
		<button class="p-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 duration-300 w-full">Saqlash</button>
    </div>
	</div>
</template>

<style scoped></style>
