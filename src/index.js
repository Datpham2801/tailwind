let menu = document.querySelector("#menu");
let btn = document.querySelector("#btnList");
console.log(btn);
btn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
