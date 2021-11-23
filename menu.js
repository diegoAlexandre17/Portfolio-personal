const menuBtn = document.getElementById("icon-menu");
const menu = document.querySelector(".nav");

const form = document.getElementById("form");
const formSuccess = document.querySelector(".form__success");

menuBtn.addEventListener("click", () => menu.classList.toggle("visible"));

form.addEventListener("submit", () => {
  formSuccess.innerHTML = "Mensaje enviado con éxito!";
  setTimeout(() => {
    formSuccess.style.display = "none";
  }, 10000);
  form.reset();
});
