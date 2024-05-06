let boxs = Array.from(document.getElementsByClassName("box"));
let bullets = Array.from(document.querySelector(".bullets").children);
let currentBoxArea = document.querySelector(".curr-box");
let numberBoxArea = document.querySelector(".num-box");
let progrsss = document.querySelector(".in");
let progrsssIn = document.querySelector(".in span");
let boxContainer = document.querySelector(".services-con");
boxs[3].style.cssText = "position: relative;top: 25px;";
bullets.forEach((bull) => {
  bull.addEventListener("click", function () {
    restBox();
    removClass();
    boxs.forEach((box) => {
      if (box.getAttribute("data-index") === this.getAttribute("data-index")) {
        currentBoxArea.innerHTML = `0${
          Number(this.getAttribute("data-index")) + 1
        }`;
        let size = 100 / (7 / (Number(this.getAttribute("data-index")) + 1));
        if (bull.getAttribute("data-index") < 3) {
          setTimeout(() => {
            boxContainer.style.left = "20px";
            boxContainer.style.right = "";
          }, 10);
        } else {
          setTimeout(() => {
            boxContainer.style.right = "0px";
            boxContainer.style.left = "";
          }, 10);
        }
        progrsssIn.style.width = `${size}%`;
        box.classList.add("active");
        box.style.cssText = "transform: translateY(25px);";
        bull.classList.add("active");
      }
    });
  });
});

boxs.forEach((box) => {
  box.addEventListener("click", function () {
    restBox();
    removClass();
    bullets.forEach((bull) => {
      if (bull.getAttribute("data-index") === this.getAttribute("data-index")) {
        currentBoxArea.innerHTML = `0${
          Number(this.getAttribute("data-index")) + 1
        }`;
        let size = 100 / (7 / (Number(this.getAttribute("data-index")) + 1));
        progrsssIn.style.width = `${size}%`;
        box.style.cssText = "position: relative;top: 25px;";
        box.classList.add("active");
        bull.classList.add("active");
        if (bull.getAttribute("data-index") < 3) {
          setTimeout(() => {
            boxContainer.style.left = "20px";
            boxContainer.style.right = "";
          }, 10);
        } else {
          setTimeout(() => {
            boxContainer.style.right = "0px";
            boxContainer.style.left = "";
          }, 10);
        }
      }
    });
  });
});

function removClass() {
  bullets.forEach((bull) => {
    if (bull.classList.contains("active")) {
      bull.classList.remove("active");
    }
    boxs.forEach((box) => {
      if (box.classList.contains("active")) {
        box.classList.remove("active");
      }
    });
  });
}
function restBox() {
  boxs.forEach((box) => {
    box.style.cssText = "top: 0px;";
  });
}

// ----------------------------container--------------------------------------\
let togle = document.querySelector("header nav .fa-bars");
let menu = document.querySelector("header  nav .links");

togle.addEventListener("click", function () {
  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});
/////////////////////////////////////////////////////////slider///////////

let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");
let slides = document.querySelectorAll(".slider .slider-container .slide");
let counter = 3;

function checkCounter() {
  if (counter <= 0) {
    counter = 0;
    btnPrev.style.cursor = "not-allowed";
  } else if (counter >= slides.length - 1) {
    counter = slides.length - 1;
    btnNext.style.cursor = "not-allowed";
  } else {
    btnPrev.style.cursor = "pointer";
    btnNext.style.cursor = "pointer";
  }
}

checkCounter();

btnNext.addEventListener("click", function () {
  counter++;
  checkCounter();
  removeClassActive();
  slides.forEach((ele) => {
    if (ele.dataset.index == counter) {
      ele.classList.add("active");
    }
  });
});

btnPrev.addEventListener("click", function () {
  counter--;
  checkCounter();
  removeClassActive();
  slides.forEach((ele) => {
    if (ele.dataset.index == counter) {
      ele.classList.add("active");
    }
  });
});

function removeClassActive() {
  slides.forEach((ele) => {
    ele.classList.remove("active");
  });
}
