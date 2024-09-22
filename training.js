"use strict";

function scrollToOptions() {
  window.scrollTo({
    left: 0,
    top: 29000,
    behavior: "instant", // smooth, instant, auto
  });
}
scrollToOptions();

/////

const btn = document.querySelector(".btn1");
const arr1 = [];
let coords = 1;
btn.addEventListener("click", () => {
  coords++;
  arr1.push(coords);
  console.log(arr1);
  localStorage.setItem("coords", JSON.stringify(arr1));
});

window.addEventListener("load", () => {
  const data = JSON.parse(localStorage.getItem("coords"));
  console.log(data);
});


