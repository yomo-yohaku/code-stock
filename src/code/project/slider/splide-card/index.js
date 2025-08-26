const target01 = ".p-splide-card01 .splide";
const options01 = {
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

const target02 = ".p-splide-card02 .splide";
const options02 = {
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

const mySplide01 = new Splide(target01, options01);
mySplide01.mount();

const mySplide02 = new Splide(target02, options02);
mySplide02.mount();
