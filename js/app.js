import "../scss/main.scss";
const intoText = document.querySelector("#poster-content-ani-wapper").children;
let tl = gsap.timeline();
Array.from(intoText).forEach((element) => {
  tl.to(element, 0.4, {
    y: -20,
    opacity: 1,
    ease: "power4.out",
  });
});
/// all about scrolling
const scrollTopBtn = document.querySelector(".scroll-top-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // scrollTopBtn.style.display = "block";
    scrollTopBtn.classList.add("slide-in");
  } else {
    scrollTopBtn.classList.remove("slide-in");
    // scrollTopBtn.style.display = "none";
  }
}

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/// mobile nav functinality
const handbargermenu = document.querySelector(".hand-burger-menu");
const handbargermenuShower = document.querySelector(".main-nav-for-mobile");
const mobilenavlinks = document.querySelectorAll(".main-nav-for-mobile a");
mobilenavlinks.forEach((each) => {
  each.addEventListener("click", () => {
    handbargermenu.classList.remove("clicked");
    handbargermenu.innerHTML = "|||";
    gsap.to(handbargermenuShower, 0.3, {
      bottom: "100%",
      ease: "power4.out",
    });
  });
});
handbargermenu.addEventListener("click", () => {
  if (!handbargermenu.classList.contains("clicked")) {
    let tl = gsap.timeline();
    handbargermenu.classList.add("clicked");
    tl.to(handbargermenuShower, 0.5, {
      bottom: "0%",
      ease: "power4.out",
    });
    mobilenavlinks.forEach((each) => {
      tl.to(each, 0.3, {
        y: -20,
        opacity: 1,
        duration: 0.3,
      });
    });
    handbargermenu.innerHTML = "X";
  } else {
    handbargermenu.classList.remove("clicked");
    handbargermenu.innerHTML = "|||";
    gsap.to(handbargermenuShower, 0.4, {
      bottom: "100%",
      ease: "power4.out",
    });
  }
});

//// img sliders
const powderImg = document.querySelectorAll(".powder-img");
const lubmsImg = document.querySelectorAll(".lumps");
setInterval(() => {
  const topimg = document.querySelectorAll(".slied");
  topimg.forEach((each) => {
    gsap.to(each, 1, {
      x: "110%",
      zIndex: 4,
    });
  });
  for (let i = 0; i < 4; i++) {
    if (lubmsImg[i].classList.contains("slied")) {
      lubmsImg[i].classList.remove("slied");
      gsap.to(lubmsImg[i], 0.2, {
        delay: 1,
        x: "0%",
      });
      powderImg[i].classList.add("slied");
      setTimeout(() => {
        powderImg[i].style.zIndex = 5;
      }, 1000);
    } else if (powderImg[i].classList.contains("slied")) {
      powderImg[i].classList.remove("slied");
      gsap.to(powderImg[i], 0.2, {
        delay: 1,
        x: "0%",
      });
      lubmsImg[i].classList.add("slied");
      setTimeout(() => {
        lubmsImg[i].style.zIndex = 5;
      }, 1000);
    }
  }
}, 3000);
