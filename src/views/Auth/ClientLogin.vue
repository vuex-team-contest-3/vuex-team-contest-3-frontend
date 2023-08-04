<script setup></script>

<template>
	<div class="py-10 flex items-center justify-center">
		<div
			class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl text-center dark:text-white">
					Bemor Kirish
				</h1>
				<form class="space-y-4 md:space-y-6" action="#">
					<div>
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
							>Ismingiz</label
						>
						<input
							type="text"
							class="outline-none bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Toshmat"
							required="" />
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
							>Telefon raqam</label
						>
						<input
							type="text"
							placeholder="••••••••"
							class="outline-none bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required="" />
					</div>

					<button
						type="submit"
						class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Ro'yxatdan o'tish
					</button>
					<p class="text-sm font-light text-zinc-500 dark:text-zinc-400">
						Hali accountim yo'q.
						<router-link
							to="/register/client"
							class="font-medium text-blue-600 hover:underline dark:text-blue-500 underline">
							Ro'yxatdan o'tish
						</router-link>
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
