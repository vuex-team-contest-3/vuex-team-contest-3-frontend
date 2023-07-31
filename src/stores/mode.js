import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMode = defineStore("counter", () => {
	const mode = ref(JSON.parse(localStorage.getItem("mode")));

	const changeMode = () => {
		if (mode.value == true) {
			localStorage.setItem("mode", false);
			mode.value = false;
		} else {
			localStorage.setItem("mode", true);
			mode.value = true;
		}
	};

	return { mode, changeMode };
});
