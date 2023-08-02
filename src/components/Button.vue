<script setup>
const { name } = defineProps(["name"]);
</script>

<template>
	<div>
		<div class="wrapper">
			<button class="button" href="#">{{ name }}</button>
		</div>
		<svg
			style="visibility: hidden; position: absolute"
			width="0"
			height="0"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1">
			<defs>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
						result="goo" />
					<feComposite in="SourceGraphic" in2="goo" operator="atop" />
				</filter>
			</defs>
		</svg>
	</div>
</template>

<style scoped>
.wrapper {
	filter: url("#goo");
}
.button {
	background: white;
	display: inline-block;
	text-align: center;
	color: #1a1e24;
	font-weight: bold;
	padding: 0.7em;
	line-height: 1;
	position: relative;
	min-width: 8em;
	text-decoration: none;
	font-size: 18px;
}

.button:before,
.button:after {
	width: 4.4em;
	height: 2.95em;
	position: absolute;
	content: "";
	display: inline-block;
	background: #eee;
	border-radius: 50%;
	transition: transform 0.5s ease;
	transform: scale(0);
	z-index: -1;
}

.button:before {
	top: -25%;
	left: 20%;
}

.button:after {
	bottom: -25%;
	right: 20%;
}

.button:hover:before,
.button:hover:after {
	transform: none;
}
</style>
