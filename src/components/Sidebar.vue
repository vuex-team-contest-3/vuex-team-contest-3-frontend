<script setup>
import { menus } from "@/constants/menus";
import { useMode } from "@/stores/mode";

const mode = useMode();
</script>

<template>
	<div>
		<aside
			class="flex flex-col duration-300 lg:w-64 w-20 h-screen px-4 py-8 overflow-y-auto bg-white border-r dark:bg-zinc-950 dark:border-gray-700 shadow-2xl group absolute">
			<a
				href="/admin"
				class="pl-1 mx-auto flex items-center justify-start w-full gap-2 text-white">
				<img
					class="w-auto h-16 duration-300 object-cover"
					src="@/assets/logo.png"
					alt="" />
				<h1 class="hidden lg:block text-2xl">ClineApp</h1>
			</a>
			<div class="flex flex-col justify-between flex-1 mt-6">
				<nav>
					<router-link
						v-for="el in menus"
						class="flex items-center px-3 py-2 mb-3 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
						:to="el.path">
						<i class="text-2xl" :class="el.icon"></i>
						<span class="hidden lg:block mx-3 text-md font-medium">
							{{ el.name }}
						</span>
					</router-link>
					<button
						@click="mode.changeMode"
						class="flex items-center w-full px-3 py-2 mb-3 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
						<i
							class="text-2xl"
							:class="mode.mode ? 'bx bx-sun' : 'bx bx-moon'"></i>
						<span class="hidden lg:block mx-3 text-md font-medium">
							{{ mode.mode ? "Light" : "Dark" }}
						</span>
					</button>
				</nav>
			</div>
		</aside>
	</div>
</template>

<style scoped></style>
