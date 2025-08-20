const bulb = document.getElementById("bulb");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {
  bulb.classList.toggle("on");
});
