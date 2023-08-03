export const menus = [
	{
		name: "Bosh sahifa",
		icon: `bx bxs-dashboard`,
		path: "/admin",
		role: ["ADMIN"],
	},
	{
		name: "Klinikalar",
		icon: `bx bx-location-plus`,
		path: "/admin/clinics",
		role: ["ADMIN"],
	},
	{
		name: "Sozlamalar",
		icon: `bx bx-cog`,
		path: "/admin/settings",
		role: ["ADMIN"],
	},
	{
		name: "Mijozlar",
		icon: `bx bxs-user-account`,
		path: "/admin",
		role: ["DOCTOR"],
	},
];
