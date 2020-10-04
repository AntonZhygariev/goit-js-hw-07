const inputEl = document.querySelector("#name-input");
let nameOutEl = document.querySelector("#name-output");

inputEl.addEventListener(
	"input",
	() => (nameOutEl.textContent = inputEl.value.length > 0 ? inputEl.value : "незнакомец"),
);
