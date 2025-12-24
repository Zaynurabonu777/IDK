let body = document.querySelector("body");
let DarkBtn = document.querySelector(".dark__mode");
let LightMode = document.querySelector(".light__mode");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  LightMode.classList.remove("hidden");
  DarkBtn.classList.add("hidden");
}

DarkBtn.addEventListener("click", () => {
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");

  LightMode.classList.remove("hidden");
  DarkBtn.classList.add("hidden");
});

LightMode.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");

  LightMode.classList.add("hidden");
  DarkBtn.classList.remove("hidden");
});