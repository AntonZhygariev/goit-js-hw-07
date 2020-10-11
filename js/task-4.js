const buttonDecEl = document.querySelector('button[data-action="decrement"]');
const buttonIncEl = document.querySelector('button[data-action="increment"]');
let valEl = document.querySelector("#value");

// const onDecBtnClick = () => (valEl.textContent = Number(valEl.textContent) - 1);
const onDecBtnClick = () => --valEl.textContent;
const onIncBtnClick = () => ++valEl.textContent;

buttonDecEl.addEventListener("click", onDecBtnClick);
buttonIncEl.addEventListener("click", onIncBtnClick);
