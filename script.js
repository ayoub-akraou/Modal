"use strict";
const button = document.querySelector(".btn");
const Close = document.querySelector(".close");
const layer = document.querySelector(".layer");
button.addEventListener("click", function (e) {
  e.preventDefault();
  layer.classList.remove("hidden");
});
Close.addEventListener("click", function (e) {
  e.preventDefault();
  layer.classList.add("hidden");
});
