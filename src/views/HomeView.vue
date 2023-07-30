<script setup>
import { useMode } from "@/stores/mode";

const mode = useMode();
</script>

<template>
	<div :class="mode.mode ? 'dark' : ''">
		<Header />
		<main class="min-h-screen dark:bg-[#202020] bg-white">
			<section class="">
				<Container> </Container>
			</section>
		</main>
		<Footer />
	</div>
</template>
