import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "User",
			component: () => import("../views/User/Dashboard.vue"),
			children: [
				{
					path: "/",
					name: "Home",
					component: () => import("../views/User/Home.vue"),
				},
				{
					path: "/clinics",
					name: "Clinics",
					component: () => import("../views/User/Clinics.vue"),
				},
				{
					path: "/about",
					name: "About",
					component: () => import("../views/User/About.vue"),
				},
			],
		},
		{
			path: "/admin",
			name: "Admin",
			component: () => import("../views/Admin/Dashboard.vue"),
			children: [
				{
					path: "/admin",
					name: "Dashboard",
					component: () => import("../views/Admin/Home.vue"),
				},
				{
					path: "/admin/clinics",
					name: "Admin Clinics",
					component: () => import("../views/Admin/Clinics.vue"),
				},
				{
					path: "/admin/clinics/:id",
					name: "One Clinic",
					component: () => import("../views/Admin/Clinic.vue"),
				},
				{
					path: "/admin/settings",
					name: "Settings",
					component: () => import("../views/Admin/Clinics.vue"),
				},
			],
		},
	],
});

export default router;
