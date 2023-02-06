var yellow = document.querySelector(".change-color");
var orange = document.querySelector(".toggle-color");
var pink = document.querySelector(".trigger");
var red = document.querySelector(".target");
var green = document.querySelector(".trigger-all");
var blue = document.querySelector(".trigger-all-self");

// var setBlueColor = function () {
//   yellow.classList.add("is-blue");
// };
var setRedColor = function () {
  orange.classList.toggle("is-red");
};
var triggerghost = function () {
  red.classList.toggle("is-trigger");
};
var setBlueColor = function () {
  yellow.classList.toggle("is-blue");
};
var setGreenColor = function () {
  blue.classList.toggle("is-green");
};

yellow.addEventListener("click", setBlueColor);
orange.addEventListener("click", setRedColor);
pink.addEventListener("click", triggerghost);
green.addEventListener("click", setBlueColor);
green.addEventListener("click", setRedColor);
blue.addEventListener("click", setBlueColor);
blue.addEventListener("click", setRedColor);
blue.addEventListener("click", setGreenColor);
