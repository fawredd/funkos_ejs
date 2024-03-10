//  Slider

document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 0,
    breakpoints: {
      991: {
        perView: 2,
      },
      620: {
        perView: 1,
      },
    },
  }).mount();
});
