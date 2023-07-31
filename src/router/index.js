import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Dashboard",
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
			],
		},
		{
			path: "/admin",
			name: "Admin",
			component: () => import("../views/Admin/Dashboard.vue"),
			children: [
				{
					path: "/admin",
					name: "AdminDashboard",
					component: () => import("../views/Admin/Home.vue"),
				},
				{
					path: "/admin/clinics",
					name: "AdminClinics",
					component: () => import("../views/Admin/Clinics.vue"),
				},
			],
		},
	],
});

export default router;
