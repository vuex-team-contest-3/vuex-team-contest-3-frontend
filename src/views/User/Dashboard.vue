<script setup></script>

<template>
	<div>
		<Header />
		<main class="pt-20 min-h-screen dark:bg-[#202020] bg-white">
			<section>
				<Container>
					<RouterView />
				</Container>
			</section>
		</main>
		<Footer />
	</div>
</template>
