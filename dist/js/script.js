var navBurger = document.getElementById("burger");
var activeItems = document.querySelectorAll("li a");
var navActive = document.getElementById("nav-active");
var ul = document.querySelectorAll("li a");
var body = document.querySelector("body");
navBurger.addEventListener("click", function () {
  navBurger.classList.toggle("active");
  navActive.classList.toggle("menu-active");
  body.classList.toggle("body-lock");
});
ul.forEach(function (a) {
  a.addEventListener("click", function () {
    navBurger.classList.remove("active");
    navActive.classList.remove("menu-active");
  });
});