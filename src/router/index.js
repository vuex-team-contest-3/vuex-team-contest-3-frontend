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
				},
				{
					path: "/admin/settings",
					name: "Settings",
					component: () => import("@/views/Admin/Settings.vue"),
				},
			],
		},
		{
			path: "/:pathMatch(.*)*",
			name: "Error",
			component: () => import("@/views/Error.vue"),
		},
	],
});

// router.beforeEach((to, from, next) => {
// 	if (to.name != "Login" && !localStorage.getItem("token")) {
// 		next("/login");
// 	} else if (to.name == "Login" && localStorage.getItem("token")) {
// 		next("/");
// 	} else {
// 		next();
// 	}
// });

export default router;
