/* MENU */
const menuBtn = document.getElementById("icon-menu");
const menu = document.querySelector(".nav");

/* FORMULARIO */
const form = document.getElementById("form");
const formSuccess = document.querySelector(".form__success");

/* ANIMACIONES */
const heroH1 = document.querySelector(".hero__text");
const imagen1 = document.querySelector(".about__img");

const cargarAnimacion = (entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("IsVisible");
    }
  });
};

const observer = new IntersectionObserver(cargarAnimacion, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
});

observer.observe(heroH1);
observer.observe(imagen1);

/* MENU */
menuBtn.addEventListener("click", () => menu.classList.toggle("visible"));

form.addEventListener("submit", () => {
  formSuccess.innerHTML = "Mensaje enviado con éxito!";
  setTimeout(() => {
    formSuccess.style.display = "none";
    form.reset();
  }, 50000);
});
