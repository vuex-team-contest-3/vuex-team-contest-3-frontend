import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
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
