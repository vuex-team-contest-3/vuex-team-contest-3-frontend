<script setup>
const team = [
	{
		name: "Ismoil Abdurahmonov",
		position: "Fullstack Developer",
		experience: "2",
	},
	{
		name: "Davlatbek Jo'rayev",
		position: "Frontend Developer",
		experience: "2",
	},
	{
		name: "Farruxbek Nozimov",
		position: "Fullstack Developer",
		experience: "2",
	},
];
</script>

<template>
	<div class="pt-0 pb-20">
		<h2 class="text-center text-3xl font-bold text-white my-5">
			Bizning maqsad 🎯
		</h2>
		<div>
			<p class="text-white">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
				possimus tenetur? Deleniti quaerat aliquam sint consequuntur minima
				nulla, quae, nobis earum suscipit enim assumenda aut cum culpa at
				aliquid et? Consequatur dolorem sit nemo magni eveniet. Atque,
				blanditiis sit. Pariatur consequuntur obcaecati iure quasi
				necessitatibus voluptatem laboriosam, beatae facilis exercitationem?
			</p>
			<p class="text-white py-5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati
				corrupti quae sunt architecto dolore voluptate saepe iusto officia aut,
				odit laudantium nobis soluta dignissimos maiores delectus distinctio
				possimus. Consectetur sed necessitatibus suscipit ab minima aperiam
				impedit assumenda, libero itaque enim cumque inventore vero facilis
				reprehenderit fugiat ut? Saepe, expedita?
			</p>
		</div>
		<h2 class="text-center text-3xl font-bold text-white my-5">
			Bizning jamoa 👥
		</h2>
		<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-20">
			<div
				v-for="el in team"
				class="bg-zinc-700 border border-zinc-500 rounded-xl p-5">
				<div>
					<img
						src="@/assets/logo.png"
						class="object-cover mx-auto bg-zinc-900 mb-5 h-32 w-32 rounded-full"
						alt="" />
				</div>
				<div class="text-center">
					<h2 class="text-white text-lg font-medium">{{ el.name }}</h2>
					<p class="text-white text-sm">
						{{ el.position }} ({{ el.experience }}+ yil)
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
