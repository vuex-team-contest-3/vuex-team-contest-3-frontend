import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "User",
			component: () => import("@/views/User/Dashboard.vue"),
			children: [
				{
					path: "/",
					name: "Home",
					component: () => import("@/views/User/Home.vue"),
				},
				{
					path: "/clinics",
					name: "Clinics",
					component: () => import("@/views/User/Clinics.vue"),
				},
				{
					path: "/about",
					name: "About",
					component: () => import("@/views/User/About.vue"),
				},
				{
					path: "/login",
					name: "Login",
					component: () => import("@/views/Auth/Login.vue"),
				},
				{
					path: "/login/doctor",
					name: "DoctorLogin",
					component: () => import("@/views/Auth/DoctorLogin.vue"),
				},
				{
					path: "/login/admin",
					name: "AdminLogin",
					component: () => import("@/views/Auth/AdminLogin.vue"),
				},
				{
					path: "/login/client",
					name: "ClientLogin",
					component: () => import("@/views/Auth/ClientLogin.vue"),
				},
				{
					path: "/register/client",
					name: "ClientRegister",
					component: () => import("@/views/Auth/ClientRegister.vue"),
				},
				{
					path: "/:pathMatch(.*)*",
					name: "Error",
					component: () => import("@/views/Error.vue"),
				},
			],
		},
		{
			path: "/admin",
			name: "Admin",
			component: () => import("@/views/Admin/Dashboard.vue"),
			children: [
				{
					path: "/admin",
					name: "Dashboard",
					component: () => import("@/views/Admin/Home.vue"),
				},
				{
					path: "/admin/clinics",
					name: "Admin Clinics",
					component: () => import("@/views/Admin/Clinics.vue"),
				},
				{
					path: "/admin/clinics/:id",
					name: "One Clinic",
					component: () => import("@/views/Admin/Clinic.vue"),
					children: [
						{
							path: "/admin/clinics/:id",
							name: "One Clinic",
							component: () => import("@/views/Admin/Clinic.vue"),
						},
						{
							path: "/admin/clinics/:id/doctor",
							name: "One Clinic",
							component: () => import("@/views/Admin/Clinic.vue"),
						},
						{
							path: "/admin/clinics/:id/price",
							name: "One Clinic",
							component: () => import("@/views/Admin/Clinic.vue"),
						},
					],
				},
				{
					path: "/admin/doctor",
					name: "Doctor Clinic",
					component: () => import("@/views/Admin/Clinics.vue"),
				},
			],
		},
	],
});

import { useUser } from "../stores/user";

router.beforeEach((to, from, next) => {
	const user_store = useUser();
	try {
		user_store.GET_USER();
		next();
	} catch (error) {
		console.log(error);
	}
});

export default router;
