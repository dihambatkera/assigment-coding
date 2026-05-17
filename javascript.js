
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("popup").classList.add("show");
});

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

document.getElementById("helloBtn").addEventListener("click", function () {
  alert("Hello User!");
});

const burger   = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");   //  matches id="navLinks" in HTML

burger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});