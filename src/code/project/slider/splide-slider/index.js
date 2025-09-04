const slider01_selector = ".js-slider-splide01 .splide";
const slider01_options = {
  mediaQuery: "min",
  perPage: 1,
  focus: 0,
  omitEnd: true,
  gap: 8,
  breakpoints: {
    768: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
  },
};
const slider01 = new Splide(slider01_selector, slider01_options);
slider01.mount();

const slider02_selector = ".js-slider-splide02 .splide";
const slider02_options = {
  mediaQuery: "min",
  perPage: 1,
  focus: 0,
  omitEnd: true,
  fixedWidth: "240px",
  gap: 8,
  breakpoints: {
    1024: {
      fixedWidth: "360px",
      gap: 16,
    },
  },
};
const slider02 = new Splide(slider02_selector, slider02_options);
slider02.mount();
