const floatButton = document.getElementById("floating-button");
const showElement = document.getElementById("element-container");

floatButton.addEventListener("click", (e) => {
  showElement.classList.toggle("element-container-show");
});