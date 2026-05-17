document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("popup").classList.add("show");
});

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

// HELLO BUTTON
document.getElementById("helloBtn").addEventListener("click", function () {
  alert("Hello User!");
});

// BURGER MENU
const burger   = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");   

burger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// CLOSE MENU WHEN A NAV LINK IS CLICKED
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});