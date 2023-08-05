<script setup>
import moment from "moment";
import { reactive, ref, onMounted } from "vue";
import { useQueue } from "@/stores/queue";
import { useUser } from "@/stores/user";
import { useDoctor } from "@/stores/doctor";

const user_store = useUser();
const doctor_store = useDoctor();
const queue_store = useQueue();
const queue = reactive({ load: true, data: [] });
const page = reactive({ currentPage: 1, itemsPerPage: 3 });
const queueDate = ref(new Date());
const currentDoctor = reactive({ data: {} });
const updateId = ref();
const doctorSeeId = ref();

const updatedQueue = reactive({
	image: "",
	name: "",
	address: "",
	phone: "",
});

const updateQueue = () => {
	try {
		const formData = new FormData();
		formData.append("name", updatedData.name);
		formData.append("address", updatedData.address);
		formData.append("phone", updatedData.phone);
		if (updatedData.image) {
			formData.append("image", updatedData.image);
		}
	} catch (error) {
		console.log(error);
	}
};
const resetDoctorSeeForm = () => {
	doctorSeeId.value = null;
};

onMounted(async () => {
	await user_store.GET_USER();
	currentDoctor.data = await doctor_store.GET_ONE(user_store.USER.id);
	queue.data = await queue_store.GET_DATE(user_store.USER.id, queueDate.value);
	queue.load = false;
});
</script>

<template>
	<div>
		<DoctorSee :id="doctorSeeId" :resetForm="resetDoctorSeeForm" />
		<div class="flex gap-3">
			<div
				class="w-[90%] relative overflow-x-auto shadow-md rounded-xl sm:rounded-lg">
				<h3 class="text-white text-xl font-bold text-center mb-5">
					Bugungi navbat
				</h3>
				<div v-if="!queue.load" class="relative overflow-x-auto rounded-lg">
					<h3
						v-if="queue.data.lenght"
						class="text-white text-center py-10 font-bold text-3xl">
						BU KUNI HECH QANDAY NAVBAT YO'Q
					</h3>
					<table
						v-else
						class="w-full text-sm text-left text-zinc-400 rounded-xl">
						<thead class="text-xs uppercase bg-zinc-700 text-zinc-400">
							<tr>
								<th scope="col" class="px-6 py-3">Mijoz to'liq ismi</th>
								<th scope="col" class="px-6 py-3">Holati</th>
								<th scope="col" class="px-6 py-3">Ko'riklar</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(el, i) in queue.data.slice(
									(page.currentPage - 1) * page.itemsPerPage,
									(page.currentPage - 1) * page.itemsPerPage + page.itemsPerPage
								)"
								class="border-b bg-zinc-800 border-zinc-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium whitespace-nowrap text-white">
									{{ i + 1 }}. {{ el.client.first_name }}
									{{ el.client.last_name }}
								</th>

								<th
									scope="row"
									class="px-6 py-4 font-medium whitespace-nowrap text-white">
									<h3
										v-if="el.is_active"
										class="text-green-500 flex items-center gap-5">
										<div class="flex items-center gap-1">
											<i class="animate-bounce bx bx-check text-xl"></i>
											<span>Tekshirilgan</span>
										</div>
										<i
											class="bg-red-500 text-white px-1 rounded-lg cursor-pointer bx bx-minus text-lg"></i>
									</h3>
									<h3 v-else class="text-red-500 flex items-center gap-5">
										<div class="flex items-center gap-1">
											<i class="animate-spin bx bx-loader-circle text-xl"></i>
											<span>Jarayonda</span>
										</div>
										<i
											class="bg-green-500 text-white px-1 rounded-lg cursor-pointer bx bx-check text-lg"></i>
									</h3>
								</th>
								<th
									scope="row"
									class="px-6 py-4 font-medium whitespace-nowrap text-white">
									<button
										@click="() => (doctorSeeId = el.id)"
										class="py-2 p-1 flex items-center justify-center gap-2 bg-blue-500/50 hover:bg-blue-600/50 rounded-lg w-full text-white">
										<HeartMedIcon color="#fff" />
										<span>Tashxis qo'yish</span>
									</button>
								</th>
							</tr>
						</tbody>
					</table>
				</div>
				<div v-else class="w-full flex items-center justify-center py-20">
					<Loading />
				</div>
			</div>
			<div
				class="w-40 px-3 py-5 bg-zinc-950 border border-zinc-600 border-zinc-600t rounded-xl space-y-5 h-[80vh] overflow-y-auto">
				<h3 class="text-white text-center">Kunlar</h3>
				<button
					v-for="el in 1"
					class="bg-zinc-800 w-full h-10 hover:bg-zinc-900 duration-300 border border-zinc-500 p-5 text-center py-2 rounded-lg text-white font-medium">
					05/08/23
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
