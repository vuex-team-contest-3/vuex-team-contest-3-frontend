<script setup></script>

<template>
	<main class="min-h-screen bg-[#202020]">
		<section class="">
			<Sidebar />
			<div class="h-screen overflow-y-auto ml-64 p-5">
				<AdminTop />
				<router-view></router-view>
			</div>
		</section>
	</main>
</template>
