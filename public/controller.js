let tri = document.getElementById("tri");
let body = document.querySelector("body");

tri.addEventListener("click", () => {
  tri.classList.toggle("dark");
  body.classList.toggle("dark");
});
