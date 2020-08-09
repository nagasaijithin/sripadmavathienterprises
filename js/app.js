import "../scss/main.scss";

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
