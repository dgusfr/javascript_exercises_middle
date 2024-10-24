const elemento = document.querySelector(".elemento");
elemento.addEventListener("mouseover", function () {
  elemento.style.color = "red";
});
elemento.addEventListener("mouseout", function () {
  elemento.style.color = "black";
});
