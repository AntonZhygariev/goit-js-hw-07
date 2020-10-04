const inputEl = document.querySelector("#validation-input");

const onInputChangeFocus = () => {
	if (inputEl.value.length == inputEl.dataset.length) {
		inputEl.classList.add("valid");
		inputEl.classList.remove("invalid");
	}
	if (inputEl.value.length != inputEl.dataset.length) {
		inputEl.classList.add("invalid");
		inputEl.classList.remove("valid");
	}
};

inputEl.addEventListener("change", onInputChangeFocus);
