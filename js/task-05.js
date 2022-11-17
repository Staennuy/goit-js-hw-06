const nameInput = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutputEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
});
