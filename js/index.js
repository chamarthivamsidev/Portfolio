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
    strings: ["Full Stack Web Developer", "Hodophile", "Coding Enthusiast"],
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
  "https://github.com/yeti201/spotify-clone",
  "https://spotify-clone8.netlify.app/",
  "https://drive.google.com/file/d/1zstDLf23FLdgJ-JYrNzalaKYxuUkF6Sl/view?usp=sharing",
];

for (let i = 0; i < project_btns.length; i++) {
  project_btns[i].addEventListener("click", () => {
    window.open(`${arr[i]}`);
  });
}

let form = document.getElementById("form");
let submit = document.getElementById("send");
let fname = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  formData();
});

async function formData() {
  let data = {
    Name: form.name.value,
    Email: form.email.value,
    Message: form.message.value,
  };

  if (data.Name === "" || data.Email === "" || data.Message === "") {
    alert("all fields are mandatory");
    data.Name === ""
      ? (fname.style.border = "3px dotted red")
      : (fname.style.border = "none");
    data.Email === ""
      ? (email.style.border = "3px dotted red")
      : (email.style.border = "none");
    data.Message === ""
      ? (message.style.border = "3px dotted red")
      : (message.style.border = "none");
  } else {
    fname.style.border = "none";
    email.style.border = "none";
    message.style.border = "none";

    data = JSON.stringify(data);
    let res = await fetch("https://sheetdb.io/api/v1/1b4kcf78zuceu", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await res.json();
    if (result.created === 1) {
      alert("Message Sent");
      form.reset();
    }
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

let movie = document.getElementById("movie");
let movie_db = document.getElementById("movie_db");

movie.addEventListener("mouseenter", () => {
  movie_db.src = "./images/movie.gif";
});

movie.addEventListener("mouseleave", () => {
  movie_db.src = "./images/projects/movie_db.jpg";
});
