<script setup>
import { menus } from "@/constants/menus";
import { useUser } from "@/stores/user";
import { useRouter } from "vue-router";

const user_store = useUser();
const router = useRouter();

const exit = () => {
	localStorage.clear();
	router.push("/");
	user_store.REMOVE_USER();
};
</script>

<template>
	<div>
		<aside
			class="flex flex-col duration-300 lg:w-64 w-20 h-screen px-4 py-8 overflow-y-auto bg-white border-r dark:bg-zinc-950 dark:border-zinc-700 shadow-2xl group absolute">
			<a
				href="/admin"
				class="pl-1 mx-auto flex items-center justify-start w-full gap-2 text-white">
				<img
					class="w-auto h-16 duration-300 object-cover"
					src="@/assets/logo.png"
					alt="" />
				<h1 class="hidden lg:block text-2xl">ClineApp</h1>
			</a>
			<div
				v-if="!user_store.LOAD"
				class="flex flex-col justify-between flex-1 mt-6">
				<nav>
					<router-link
						v-for="el in menus"
						class="items-center px-3 py-2 mb-3 text-zinc-700 bg-zinc-100 rounded-lg dark:bg-zinc-800 hover:bg-zinc-700 dark:text-zinc-200"
						:class="el.role.includes(user_store.USER.role) ? 'flex' : 'hidden'"
						:to="el.path">
						<i class="text-2xl" :class="el.icon"></i>
						<span class="hidden lg:block mx-3 text-md font-medium">
							{{ el.name }}
						</span>
					</router-link>
					<button
						@click="router.push('/')"
						class="flex items-center w-full px-3 py-2 mb-3 text-zinc-700 bg-zinc-100 rounded-lg dark:bg-zinc-800 hover:bg-zinc-700 dark:text-zinc-200">
						<i class="text-2xl bx bx-left-arrow-alt"></i>
						<span class="hidden lg:block mx-3 text-md font-medium">
							Ortga
						</span>
					</button>
					<button
						@click="exit"
						class="flex items-center w-full px-3 py-2 mb-3 text-zinc-700 bg-zinc-100 rounded-lg dark:bg-zinc-800 hover:bg-red-900 dark:text-zinc-200">
						<i class="text-2xl bx bx-exit" style="color: #ffffff"></i>
						<span class="hidden lg:block mx-3 text-md font-medium">
							Chiqish
						</span>
					</button>
				</nav>
			</div>
			<div v-else class="w-full flex items-center justify-center py-20">
				<Loading />
			</div>
		</aside>
	</div>
</template>

<style scoped>
.router-link-exact-active {
	background: #555;
}
</style>
