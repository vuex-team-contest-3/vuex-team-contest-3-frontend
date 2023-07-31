<script setup></script>

<template>
	<div>
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
				<thead
					class="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400">
					<tr>
						<th scope="col" class="px-6 py-3">Xizmat nomi</th>
						<th scope="col" class="px-6 py-3">Xizmat tashxislari</th>
						<th scope="col" class="px-6 py-3">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="el in 5"
						class="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">
							Stamatolog
						</th>
						<td class="px-6 py-4 flex">
							<div class="flex items-center gap-2 border pl-2 rounded-lg">
								<span
									class=""
									v-for="el in [`Tish og'rig'i`, 'Mulk yemirilishi', 'Kares']">
									{{ el }}
								</span>
								<button
									class="bg-blue-500 text-white flex items-center justify-center p-1 px-2 rounded-lg">
									<i class="bx bx-plus text-lg"></i>
								</button>
							</div>
						</td>
						<td class="px-6 py-4">
							<i
								class="bg-red-500 text-white p-1 px-2 rounded-full cursor-pointer bx bx-trash text-xl"></i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped></style>
