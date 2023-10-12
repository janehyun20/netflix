"use strict";

const image = [
  ["./images/king.jpeg", "Appsmart", "ILLUSTRATION"],
  ["./images/king.jpeg", "Jumpstart", "BRANDING"],
  ["./images/king.jpeg", "Purgo", "BRANDING"],
  ["./images/king.jpeg", "Yevka Blog", "BRANDING"],
  ["./images/king.jpeg", "Unordinary Life", "BRANDING"],
  ["./images/king.jpeg", "DAMMN! You Look Good", "BRANDING"],
  ["./images/great.jpeg", "Unordinary Space", "BRANDING", "./tables.html"],
  ["./images/love.jpeg", "DAMMN! You Look Good", "BRANDING"],
  ["./images/king.jpeg", "Appsmart", "ILLUSTRATION"],
  ["./images/bigfish.jpeg", "Jumpstart", "BRANDING"],
  ["./images/nine.jpg", "Purgo", "BRANDING"],
  ["./images/dont.jpeg", "Yevka Blog", "BRANDING"],
  ["./images/load.jpeg", "Unordinary Life", "BRANDING"],
  ["./images/king.jpeg", "DAMMN! You Look Good", "BRANDING"],
  ["./images/hard.jpg", "Timescale", "ICONS"],
];

//open profile
const mouseOver = document.getElementById("profile-drop");

function openProfile() {
  const arrow = document.querySelector(".profile-arrow");
  if (mouseOver.style.display === "none") {
    mouseOver.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  } else {
    mouseOver.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
}
document.getElementById("profile").addEventListener("mouseover", openProfile);

mouseOver.addEventListener("mouseleave", openProfile);

// modal for movie description
let Modal = document.querySelector(".modal");
let Overlay = document.querySelector(".overlay");
function OpenModal() {
  Modal.classList.remove("hidden");
  Modal.classList.add("visible");
  Overlay.classList.add("visible");
  Overlay.classList.remove("hidden");
}
function CloseModal() {
  Modal.classList.add("hidden");
  Modal.classList.remove("visible");
  Overlay.classList.add("hidden");
  Overlay.classList.remove("visible");
}

// scroll and change the bg of nav
window.onscroll = function () {
  const nav = document.querySelector(".navigation");
  const top = window.scrollY;
  if (top > 60) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

// movie slider
let arr = [];
const inner = "";
const list = document.querySelectorAll(".main_items");

for (let i = 0; i < image.length; i++) {
  const imageTag =
    '<div class="item" clickon=""><div class="img_wrap"><a onclick="OpenModal()" href="#"><img class="img" src="' +
    image[i][0] +
    '" alt="img" /></div></div>';
  arr.push(imageTag);
}

for (let j = 0; j < list.length; j++) {
  list[j].innerHTML = arr.join("");
}

$(document).ready(function () {
  $(".main_items").slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: '<button class="next">></button>',
    prevArrow: '<button class="prev"><</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
