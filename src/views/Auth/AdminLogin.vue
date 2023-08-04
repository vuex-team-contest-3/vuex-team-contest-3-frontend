<script setup>
import { ref, reactive } from "vue";
import { useUser } from "@/stores/user";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const user_store = useUser();
const router = useRouter();

const admin = reactive({
	login: "",
	password: "",
});

const login = async () => {
	try {
		const data = await user_store.LOGIN_ADMIN(admin);
		localStorage.setItem("token", data.token);
		router.push("/admin");
	} catch (error) {
		console.log(error);
		toast.error("Login yoki Parol xato", {
			autoClose: 1000,
			theme: "dark",
		});
	}
};
</script>

<template>
	<div class="py-20 flex items-center justify-center">
		<div
			class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl text-center dark:text-white">
					Admin Kirish
				</h1>
				<form @submit.prevent="login" class="space-y-4 md:space-y-6" action="#">
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
							>Login</label
						>
						<input
							type="text"
							placeholder="login123"
							class="outline-none bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required=""
							v-model="admin.login" />
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
							>Parol</label
						>
						<input
							type="text"
							placeholder="••••••••"
							class="outline-none bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required=""
							v-model="admin.password" />
					</div>
					<button
						type="submit"
						class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Kirish
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
