const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsEl = document.querySelector("#ingredients");

const ingredient = ingredients.map((el, i) => {
	el = document.createElement("li");
	el.textContent = ingredients[i];
	return el;
})

ingredientsEl.append(...ingredient);
