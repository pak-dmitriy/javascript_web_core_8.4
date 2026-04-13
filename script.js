let swiperInstance = null;

function manageSwiper() {
  const isMobile = window.innerWidth < 768;

  if (isMobile && !swiperInstance) {
    swiperInstance = new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (!isMobile && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener("load", manageSwiper);
window.addEventListener("resize", manageSwiper);

const btn = document.querySelector(".brands__expand-button");
const list = document.querySelector(".brands__list");
const btnImg = btn.querySelector("img");
const btnText = btn.lastChild;
btn.addEventListener("click", function () {
  list.classList.toggle("brands__list--expanded");

  if (list.classList.contains("brands__list--expanded")) {
    btnText.textContent = "Скрыть";
    btnImg.style.transform = "rotate(0deg)";
  } else {
    btnText.textContent = "Показать все";
    btnImg.style.transform = "rotate(180deg)";
  }
});
