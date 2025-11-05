// Exibe ou esconde o menu no modo mobile
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
#menu.active {
  display: block;
}
