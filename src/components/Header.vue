<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUser } from "../stores/user";
import Button from "../components/Button.vue";

const user_store = useUser();
const menu = ref(true);
const toggleMenu = () => (menu.value = !menu.value);
const route = useRoute();

const links = [
	{
		name: "Bosh sahifa",
		path: "/",
	},
	{
		name: "Klinikalar",
		path: "/clinics",
	},
	{
		name: "Biz haqimizda",
		path: "/about",
	},
	{
		name: "Bog'lanish",
		path: "/contact",
	},
];
onMounted(() => {
	AOS.init();
});
</script>

<template>
	<header
		data-aos="fade-down"
		class="z-50 h-20 fixed w-full bg-zinc-950 border-b border-zinc-700 shadow-2xl">
		<Container>
			<nav class="w-full flex items-center justify-between py-2.5">
				<div>
					<a href="/" class="flex items-center">
						<img src="@/assets/logo.png" class="h-14" alt="" />
						<span class="text-[24px] w-[100px] text-[#DEDEDE] font-bold">
							ClineApp
						</span>
					</a>
				</div>
				<div class="hidden lg:flex items-center justify-between gap-5">
					<router-link
						v-for="el in links"
						:to="el.path"
						class="duration-300 group font-bold px-3 text-zinc-300 hover:text-white">
						<span>{{ el.name }}</span>
						<div
							class="text-white group-hover:w-full duration-300 mt-1 bg-white h-[3px] w-10 rounded-full bottom"></div>
					</router-link>
				</div>
				<div v-if="user_store.LOAD" class="">
					<div
						v-if="!user_store.USER.id && route.name != 'Login'"
						class="hidden lg:block">
						<div
							class="flex items-center gap-8 text-[16px] text-white font-bold">
							<router-link to="/login">
								<Button name="Kirish"> </Button>
							</router-link>
						</div>
					</div>
					<div v-else class="w-36"></div>
				</div>
				<div v-else>
					<div class="flex items-center gap-8 text-[16px] text-white font-bold">
					{{ user_store.USER.role }}
						<router-link v-if="user_store.USER.role == 'ADMIN'" to="/admin">
							<Button name="Admin Panel"></Button>
						</router-link>
						<router-link v-else to="/admin/doctor">
							<Button name="Admin Panel"></Button>
						</router-link>
					</div>
				</div>
				<div class="lg:hidden reletive">
					<button
						@click="toggleMenu"
						class="flex p-1 rounded-lg focus:ring-2 focus:ring-[#3B3B98]">
						<i class="text-[24px] text-white font-bold bx bx-menu"></i>
					</button>
					<div
						class="absolute w-64 top-0 duration-300 pr-20 bg-zinc-900 p-5 h-screen"
						:class="menu ? '-right-96' : 'right-0'">
						<h3
							class="block mb-5 border-b-2 border-transparent duration-300 font-bold pb-2 text-xl text-white">
							MENU
						</h3>
						<router-link
							v-for="el in links"
							:to="el.path"
							class="duration-300 group font-bold px-3 text-zinc-300 hover:text-white">
							<span>{{ el.name }}</span>
							<div
								class="text-white group-hover:w-full duration-300 mt-1 bg-white h-[3px] w-10 rounded-full my-5 bottom"></div>
						</router-link>
						<button
							@click="toggleMenu"
							class="absolute top-5 -left-10 bg-zinc-800 flex p-1 rounded-lg focus:ring-2 focus:ring-[#3B3B98]">
							<i class="text-[24px] text-white font-bold bx bx-x"></i>
						</button>
					</div>
				</div>
			</nav>
		</Container>
	</header>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
	color: white;
}
.router-link-exact-active .bottom {
	width: 100%;
	background: white;
}
</style>
