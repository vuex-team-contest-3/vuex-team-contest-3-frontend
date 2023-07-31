<script setup>
import { useMode } from "@/stores/mode";

const mode = useMode();
</script>

<template>
	<div :class="mode.mode ? 'dark' : ''">
		<Header />
		<main class="pt-20 min-h-screen dark:bg-[#202020] bg-white">
			<section class="">
				<Container>
					<router-view></router-view>
				</Container>
			</section>
		</main>
		<Footer />
	</div>
</template>
