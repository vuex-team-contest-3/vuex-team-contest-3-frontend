<script setup></script>

<template>
	<main class="min-h-screen bg-[#202020]">
		<section class="">
			<Sidebar />
			<div class="h-screen overflow-y-auto duration-300 lg:ml-64 ml-20 p-5">
				<AdminTop />
				<router-view></router-view>
			</div>
		</section>
	</main>
</template>
