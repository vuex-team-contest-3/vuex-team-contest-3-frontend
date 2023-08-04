<script setup>
import { useClinic } from "@/stores/clinic";
import { onMounted } from "vue";
import { ref, reactive } from "vue";
import { useUser } from "@/stores/user";
import { useRouter } from "vue-router";

const user_store = useUser();
const router = useRouter();

const doctor = reactive({
	login: "",
	password: "",
});

const login = async () => {
	try {
		console.log(doctor);
		const data = await user_store.LOGIN_ADMIN(doctor);
		console.log(data);
		// localStorage.setItem("token", data.token);
		// router.push("/admin");
	} catch (error) {
		console.log(error);
	}
};

const clinic_store = useClinic();

onMounted(async () => {
	await clinic_store.GET_CLINIC();
});
</script>

<template>
	<div class="py-20 flex items-center justify-center">
		<div
			v-if="!clinic_store.LOAD"
			class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl text-center dark:text-white">
					Shifokor Kirish
				</h1>
				<form @submit.prevent="login" class="space-y-4 md:space-y-6" action="#">
					<div>
						<label
							for="small"
							class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
							>Klinikani tanlang</label
						>
						<select
							class="block w-full p-2 mb-6 outline-none text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Clinikani tanlang"
							v-model="doctor.login">
							<option v-for="el in clinic_store.CLINICS" :value="el.id">
								<img src="" alt="" />
								{{ el.name }}
							</option>
						</select>
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
							>Telefon raqamingiz</label
						>
						<input
							type="text"
							placeholder="+998887038006"
							class="outline-none bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required=""
							v-model="doctor.password" />
					</div>

					<button
						type="submit"
						class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Kirish
					</button>
				</form>
			</div>
		</div>
		<div v-else class="w-full flex items-center justify-center py-20">
			<Loading />
		</div>
	</div>
</template>

<style scoped></style>
