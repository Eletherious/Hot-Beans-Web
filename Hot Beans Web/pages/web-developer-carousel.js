document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".web-developer-carousel");
  const wrapper = carousel.querySelector(".web-developer-wrapper");
  const prevControl = carousel.querySelector(".carousel-control.prev");
  const nextControl = carousel.querySelector(".carousel-control.next");
  const infoWrapper = document.querySelector(".info");
  const developerInfos = infoWrapper.querySelectorAll(".developer-info");

  let slides = carousel.querySelectorAll(".web-developer-slide");

  function updateInfo(index) {
    developerInfos.forEach((info) => {
      info.classList.remove("active");
    });
    developerInfos[index].classList.add("active");
  }

  function rotateSlides(direction) {
    if (direction === "next") {
      wrapper.appendChild(slides[0]);
    } else {
      wrapper.insertBefore(slides[slides.length - 1], slides[0]);
    }

    slides = carousel.querySelectorAll(".web-developer-slide");
  }

  function updateCarousel(direction) {
    rotateSlides(direction);

    const centerSlideIndex = Math.floor(slides.length / 2);
    const centerSlide = slides[centerSlideIndex];
    updateInfo(parseInt(centerSlide.dataset.index, 10));
  }

  prevControl.addEventListener("click", () => {
    updateCarousel("prev");
  });

  nextControl.addEventListener("click", () => {
    updateCarousel("next");
  });

  const initialCenterSlideIndex = Math.floor(slides.length / 2);
  const initialCenterSlide = slides[initialCenterSlideIndex];
  updateInfo(0);
});
