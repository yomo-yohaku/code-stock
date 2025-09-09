/**
 * ハンバーガーメニュー
 */
const menuButton = document.querySelector(".js-header-menu-button");
const nav = document.querySelector(".js-header-nav");

// ブレークポイント（PCサイズ）を指定
const PC_BREAKPOINT = 1080; // px

menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuButton.classList.toggle("close-button");
});

const handleResize = () => {
  if (window.innerWidth >= PC_BREAKPOINT) {
    nav.classList.remove("active");
    menuButton.classList.remove("close-button");
  }
};
window.addEventListener("resize", handleResize);
handleResize();

/**
 * ヘッダーナビのプルダウン開閉
 */
const initializeHeaderHoverDropdown = () => {
  const navItems = document.querySelectorAll(".js-header-nav-item");

  navItems.forEach((item) => {
    if (!item.querySelector(".js-header-nav-sub-menu")) return;

    item.addEventListener("mouseenter", () => {
      item.classList.add("is-open");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("is-open");
    });
  });
};
initializeHeaderHoverDropdown();
