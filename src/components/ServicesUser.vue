<script setup>
import { ref, reactive, onMounted } from "vue";
const { data, price } = defineProps(["data", "price"]);

onMounted(async () => {});
</script>

<template>
	<div>
		<div class="mb-5 flex items-center justify-between w-full">
			<div class="relative">
				<div
					class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<i class="bx bx-search text-zinc-400 text-xl"></i>
				</div>
				<input
					autocomplete="off"
					type="search"
					id="default-search"
					class="block outline-none w-full p-3 pl-10 text-sm border rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white"
					placeholder="Qidirish..."
					required />
			</div>
		</div>
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left text-zinc-400">
				<thead class="text-xs uppercase bg-zinc-700 text-zinc-400">
					<tr>
						<th scope="col" class="px-6 py-3">Xizmat nomi</th>
						<th v-if="price == '1'" scope="col" class="px-6 py-3">Narxlari</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="el in data.service"
						class="border-b bg-zinc-800 border-zinc-700">
						<router-link
							:to="`/service/${el.id}`"
							class="w-full block hover:bg-zinc-600">
							<td
								scope="row"
								class="px-6 py-4 font-medium whitespace-nowrap text-white">
								{{ el.name }}
							</td>
						</router-link>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped></style>
