//Header fixed

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
};

const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

$(document).ready(function () {
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Full Stack Web Developer", "Hodophile"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
