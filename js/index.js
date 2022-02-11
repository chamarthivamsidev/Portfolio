const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const links = document.getElementsByClassName("direct");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
};
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
};

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
  });
}

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

$(document).ready(function () {
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Full Stack Web Developer", "Hodophile"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// project buttons redirecting
let project_btns = document.getElementsByClassName("pro_btn");
let arr = [
  "https://github.com/chamarthivamsidev/Bella_Vita_Organic_Clone_Backend",
  "https://bellavitaorganic-cloned.herokuapp.com/",
  "https://drive.google.com/file/d/1CXIXyCD3x1BlCKs8ubolfX4rXC0cqi8U/view?usp=sharing",
  "https://github.com/chamarthivamsidev/kohls_clone",
  "https://chamarthivamsidev.github.io/kohls_clone/home.html",
  "https://drive.google.com/file/d/11vIKAntz70pz6hh9eLUiYZrwc68lRQ6P/view?usp=sharing",
  "https://github.com/chamarthivamsidev/MovieDB",
  "https://chamarthivamsidev.github.io/MovieDB/",
  "https://drive.google.com/file/d/1Zg61I9kAvPh3dUYO6ipIfBaW8csM9Rrt/view?usp=sharing",
];

for (let i = 0; i < project_btns.length; i++) {
  project_btns[i].addEventListener("click", () => {
    window.open(`${arr[i]}`);
  });
}
