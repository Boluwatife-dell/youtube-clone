const toggle = document.getElementById("menu-icon");
const hideItem = document.querySelectorAll(".hide-item");

toggle.addEventListener("click", () => {
  hideItem.forEach((item) => {
    item.classList.toggle("hidden");
  });
});
