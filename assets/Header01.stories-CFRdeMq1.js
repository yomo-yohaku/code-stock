const a=`<header class="l-header">
  <div class="l-header__container">
    <h1 class="l-header__heading">
      <a href="#" class="l-header__heading-link">
        <img
          src="./assets/images/common/logo.svg"
          width="300"
          height="60"
          alt="Code Stock"
          decoding="async"
          class="l-header__heading-image"
        />
      </a>
    </h1>

    <div class="l-header__contents">
      <nav class="l-header__nav l-header-nav js-header-nav">
        <ul class="l-header-nav__list">
          <li class="l-header-nav__item l-header-nav-item">
            <a href="#" class="l-header-nav-item__link">
              <span class="l-header-nav-item__label">メニュー01</span>
            </a>
          </li>

          <li class="l-header-nav__item l-header-nav-item js-header-nav-item">
            <button
              class="l-header-nav-item__link"
              aria-expanded="false"
              aria-controls="submenu-02"
              aria-haspopup="true"
            >
              <span class="l-header-nav-item__label">メニュー02</span>
            </button>

            <ul
              id="submenu-02"
              class="l-header-nav__sub-menu l-header-nav-sub-menu js-header-nav-sub-menu"
            >
              <li class="l-header-nav-sub-menu__item">
                <a href="#" class="l-header-nav-sub-menu__link">
                  <span class="l-header-nav-sub-menu__label">
                    サブメニュー01
                  </span>
                </a>
              </li>
              <li class="l-header-nav-sub-menu__item">
                <a href="#" class="l-header-nav-sub-menu__link">
                  <span class="l-header-nav-sub-menu__label">
                    サブメニュー02
                  </span>
                </a>
              </li>
              <li class="l-header-nav-sub-menu__item">
                <a href="#" class="l-header-nav-sub-menu__link">
                  <span class="l-header-nav-sub-menu__label">
                    サブメニュー03
                  </span>
                </a>
              </li>
            </ul>
          </li>

          <li class="l-header-nav__item l-header-nav-item">
            <a href="#" class="l-header-nav-item__link">
              <span class="l-header-nav-item__label">メニュー03</span>
            </a>
          </li>

          <li class="l-header-nav__item l-header-nav-item">
            <a href="#" class="l-header-nav-item__link">
              <span class="l-header-nav-item__label">メニュー04</span>
            </a>
          </li>

          <li class="l-header-nav__item l-header-nav-item">
            <a href="#" class="l-header-nav-item__link">
              <span class="l-header-nav-item__label">メニュー05</span>
            </a>
          </li>

          <li class="l-header-nav__item l-header-nav-item">
            <a href="#" class="l-header-nav__entry">
              <span class="l-header-nav__entry-label">エントリー</span>
            </a>
          </li>
        </ul>
      </nav>

      <button
        class="l-header__menu-button l-header-menu-button js-header-menu-button"
        aria-label="メニュー開閉"
      >
        <span class="l-header-menu-button__bar"></span>
        <span class="l-header-menu-button__bar"></span>
        <span class="l-header-menu-button__bar"></span>
      </button>
    </div>
  </div>
</header>

<main class="tw:bg-neutral-100 tw:h-[1600px] tw:flex">
  <div class="tw:m-auto">メインコンテンツエリア</div>
</main>

<footer class="tw:bg-neutral-200 tw:h-[200px] tw:flex">
  <div class="tw:m-auto">フッターエリア</div>
</footer>
`,t=`.l-header {
  position: fixed;
  z-index: 30;
  width: 100%;
  background-color: #fff;
  transition: height 0.5s;
}
@media (min-width: 1080px) {
  .l-header {
    padding: 16px;
  }
}

.l-header::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  height: 0%;
  pointer-events: none;
  content: "";
  background: #ff6900;
  transition: height 0.5s;
}
@media (min-width: 1080px) {
  .l-header::before {
    display: none;
  }
}

.l-header:has(.l-header-nav.active) {
  height: 100vh;
}

.l-header:has(.l-header-nav.active)::before {
  height: 100%;
}

.l-header__container {
  display: grid;
  grid-template-columns: 180px 1fr;
  align-items: center;
  padding-left: 16px;
}
@media (min-width: 1080px) {
  .l-header__container {
    grid-template-columns: 200px 1fr;
  }
}

.l-header__contents {
  display: flex;
  justify-content: end;
}

.l-header-nav {
  display: none;
}
@media (min-width: 1080px) {
  .l-header-nav {
    display: block;
  }
}

.l-header-nav.active {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-inline: 20px;
  padding-top: 96px;
  opacity: 0;
  animation: fadeInMenu 0.5s forwards;
}

@keyframes fadeInMenu {
  to {
    opacity: 1;
  }
}

.l-header-nav__list {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1080px) {
  .l-header-nav__list {
    flex-direction: row;
    column-gap: 16px;
  }
}

.l-header-nav-item {
  position: relative;
  border-top: 1px solid #ffffff80;
}
@media (min-width: 1080px) {
  .l-header-nav-item {
    align-self: center;
    border: none;
  }
}

.l-header-nav-item__link {
  display: block;
  width: 100%;
  padding: 24px 16px;
}

@media (any-hover: hover) {
  .l-header-nav-item__link {
    transition: opacity 0.3s;
  }

  .l-header-nav-item__link:hover {
    opacity: 0.6;
  }
}

.l-header-nav-item__label {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
@media (min-width: 1080px) {
  .l-header-nav-item__label {
    font-size: 16px;
    color: #0d1e28;
  }
}

@media (min-width: 1080px) {
  .l-header-nav-item:has(.l-header-nav-sub-menu)
    .l-header-nav-item__label::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 8px;
    content: "";
    border-top: 7px solid #0d1e28;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
}

.l-header-nav-sub-menu {
  color: #fff;
}
@media (min-width: 1080px) {
  .l-header-nav-sub-menu {
    position: absolute;
    left: 50%;
    display: flex;
    visibility: hidden;
    flex-direction: column;
    width: max-content;
    padding: 8px;
    color: #fff;
    pointer-events: none;
    background-color: #ff6900;
    border-radius: 16px;
    opacity: 0;
    transform: translateY(10px);
    translate: -50% 0;
    transition:
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.l-header-nav-item.is-open .l-header-nav-sub-menu {
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
  transform: translateY(0);
}

.l-header-nav-sub-menu__item:not(:last-child) {
  border-bottom: 1px solid #ffffff80;
}

.l-header-nav-sub-menu__link {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 16px;
  font-size: 14px;
}

.l-header-nav-sub-menu__item:first-child .l-header-nav-sub-menu__link {
  border-top: 1px solid #ffffff80;
}
@media (min-width: 1080px) {
  .l-header-nav-sub-menu__item:first-child .l-header-nav-sub-menu__link {
    border-top: none;
  }
}

@media (any-hover: hover) {
  .l-header-nav-sub-menu__link {
    transition: opacity 0.3s;
  }

  .l-header-nav-sub-menu__link:hover {
    opacity: 0.6;
  }
}

.l-header-nav-sub-menu__label {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  line-height: 1.4;
  letter-spacing: 0.05em;
}

.l-header-nav-sub-menu__label::after {
  display: inline-block;
  width: 0;
  height: 0;
  content: "";
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 7px solid #fff;
}

.l-header-nav__entry {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #ff6900;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 9999px;
}
@media (min-width: 1080px) {
  .l-header-nav__entry {
    padding: 16px;
    margin-top: 0;
    color: #fff;
    background-color: #ff6900;
    border: 1px solid #ff6900;
  }
}

.l-header-nav__entry::before {
  content: "";
}

.l-header-nav__entry::after {
  justify-self: end;
  width: 16px;
  height: 16px;
  content: "";
  background-color: #ff6900;
  mask-image: url("./assets/images/common/icon_arrow_right.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
}
@media (min-width: 1080px) {
  .l-header-nav__entry::after {
    background-color: #fff;
  }
}

@media (any-hover: hover) {
  .l-header-nav__entry {
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  .l-header-nav__entry:hover {
    color: #fff;
    background-color: #ff6900;
  }

  .l-header-nav__entry:hover::after {
    background-color: #fff;
  }
}
@media (any-hover: hover) and (min-width: 1080px) {
  .l-header-nav__entry:hover {
    color: #ff6900;
    background-color: #fff;
  }

  .l-header-nav__entry:hover::after {
    background-color: #ff6900;
  }
}

.l-header-nav__entry-label {
  font-size: 14px;
  font-weight: 500;
}

.l-header-menu-button {
  position: relative;
  z-index: 100;
  display: grid;
  justify-content: center;
  min-width: 64px;
  min-height: 64px;
  aspect-ratio: 1;
  padding: 12px;
  background-color: #ff6900;
  transition-duration: 0.2s;
  transition-property: background-color;
}
@media (min-width: 1080px) {
  .l-header-menu-button {
    display: none;
  }
}

.l-header-menu-button::after {
  align-self: end;
  font-size: 12px;
  line-height: 1;
  color: #fff;
  content: "MENU";
}

.l-header-menu-button__bar {
  position: absolute;
  inset-block-start: max(38%, 20px);
  display: inline-block;
  justify-self: center;
  width: 20px;
  height: 1px;
  background-color: #fff;
  transition: transform 0.3s;
}
.l-header-menu-button__bar:nth-of-type(1) {
  transform: translateY(-6px);
}
.l-header-menu-button__bar:nth-of-type(3) {
  transform: translateY(6px);
}

.l-header-menu-button.close-button::after {
  content: "CLOSE";
}
.l-header-menu-button.close-button .l-header-menu-button__bar:nth-of-type(1) {
  transform: rotate(-135deg);
}
.l-header-menu-button.close-button .l-header-menu-button__bar:nth-of-type(2) {
  opacity: 0;
  transform: rotate(-90deg);
}
.l-header-menu-button.close-button .l-header-menu-button__bar:nth-of-type(3) {
  transform: rotate(-45deg);
}
`,r=`/**
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
`,i={title:"Layout/Header"},n={render:()=>{const e=document.createElement("div");return e.innerHTML=`
      <style>${t}</style>
      ${a}
    `,requestAnimationFrame(()=>{new Function(r)()}),e},parameters:{sourceCode:[{name:"HTML",code:a},{name:"CSS",code:t},{name:"JavaScript",code:r}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = \`
      <style>\${cssHeader01}</style>
      \${header01}
    \`;
    requestAnimationFrame(() => {
      new Function(jsHeader01)();
    });
    return container;
  },
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: header01
    }, {
      name: "CSS",
      code: cssHeader01
    }, {
      name: "JavaScript",
      code: jsHeader01
    }]
  }
}`,...n.parameters?.docs?.source}}};const l=["Header01"];export{n as Header01,l as __namedExportsOrder,i as default};
