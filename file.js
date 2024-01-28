// Инициализируем Swiper
new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const showAll = document.querySelector(".main__show-all");
const normalHeight = document.querySelector(".wrapper");

showAll.addEventListener("click", (event) => {
  showAll.classList.toggle("main__show-all_expand");

  showAll.innerHTML = showAll.classList.contains("main__show-all_expand")
    ? "Скрыть"
    : "Показать все";

  normalHeight.classList.toggle("wraper-expand");
});
