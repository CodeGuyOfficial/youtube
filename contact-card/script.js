const button = document.getElementById("btn");
const title = document.getElementById("title");
const nav = document.getElementById("nav");
button.addEventListener("click", function () {
  button.classList.toggle("active");
  title.classList.toggle("active");
  nav.classList.toggle("active");
});
