<script setup>
import { reactive, onMounted } from "vue";
import { useClient } from "@/stores/client";
import { useUser } from "@/stores/user";
import { useDoctor } from "@/stores/doctor";

const user_store = useUser();
const doctor_store = useDoctor();
const client_store = useClient();
const page = reactive({ currentPage: 1, itemsPerPage: 3 });

const currentDoctor = reactive({ data: {} });

onMounted(async () => {
	await user_store.GET_USER();
	currentDoctor.data = await doctor_store.GET_ONE(await user_store.USER.id);
});
</script>

<template>
	<div>
		<div class="flex gap-3">
			<div
				class="w-[80%] relative overflow-x-auto shadow-md rounded-xl sm:rounded-lg">
				<h3 class="text-white text-xl font-bold text-center mb-5">
					Bugungi navbat
				</h3>
				<div class="relative overflow-x-auto rounded-lg">
					<table class="w-full text-sm text-left text-zinc-400 rounded-xl">
						<thead class="text-xs uppercase bg-zinc-700 text-zinc-400">
							<tr>
								<th scope="col" class="px-6 py-3">
									Navbat | Mijoz to'liq ismi
								</th>
								<th scope="col" class="px-6 py-3">Ko'rik soni</th>
								<th scope="col" class="px-6 py-3">Holati</th>
								<th scope="col" class="px-6 py-3">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(el, i) in client_store.CLIENTS.slice(
									(page.currentPage - 1) * page.itemsPerPage,
									(page.currentPage - 1) * page.itemsPerPage + page.itemsPerPage
								)"
								class="border-b bg-zinc-800 border-zinc-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium whitespace-nowrap text-white">
									{{ i + 1 }}. {{ el.first_name }} {{ el.last_name }}
								</th>
								<th
									scope="row"
									class="px-6 py-4 font-medium whitespace-nowrap text-white">
									1
								</th>
								<th
									scope="row"
									class="px-6 py-4 font-medium whitespace-nowrap text-white">
									<h3 class="text-green-500 flex items-center gap-2">
										<span>Tekshirilgan</span>
										<i class="animate-bounce bx bx-check text-xl"></i>
									</h3>
									<h3 class="text-red-500 flex items-center gap-2">
										<span>Jarayonda</span>
										<i class="animate-spin bx bx-loader-circle text-xl"></i>
									</h3>
								</th>
								<td class="px-6 py-4">
									<div class="flex items-center gap-2">
										<i
											class="bg-red-500 text-white p-1 px-2 rounded-full cursor-pointer bx bx-minus text-lg"></i>
										<i
											class="bg-green-500 text-white p-1 px-2 rounded-full cursor-pointer bx bx-check text-lg"></i>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Pagination :page="page" :data="client_store.CLIENTS" />
			</div>
			<div
				class="grid w-64 px-10 py-5 bg-zinc-950 rounded-xl space-y-5 h-[80vh] overflow-y-auto">
				<button
					v-for="el in 10"
					class="bg-zinc-800 hover:bg-zinc-900 duration-300 border border-zinc-500 p-5 py-2 rounded-lg text-white font-medium">
					Bugun
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
