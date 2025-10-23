const modal = () => {
  const buttons = document.querySelectorAll(".js-button");
  const modals = document.querySelectorAll(".js-modal");
  const modalBgs = document.querySelectorAll(".js-modal-bg");
  const closeButtons = document.querySelectorAll(".js-close-button");

  // モーダルが一つもない場合は処理を終了
  if (buttons.length === 0 || modals.length === 0) return;

  // コンテンツ Opening Keyframe
  const contentsOpeningKeyframes = {
    opacity: [0, 1],
    transform: ["scale(0.98)", "scale(1)"],
  };

  // 背景 Opening Keyframe
  const bgOpeningKeyframes = {
    opacity: [0, 1],
  };

  // コンテンツ Opening Option
  const contentsOpeningOptions = {
    duration: 300,
    easing: "ease-out",
    fill: "forwards",
  };

  // 背景 Opening Option
  const bgOpeningOptions = {
    duration: 150,
    easing: "ease-out",
    fill: "forwards",
  };

  // コンテンツ Closing Keyframe
  const contentsClosingKeyframes = {
    opacity: [1, 0],
    transform: ["scale(1)", "scale(0.98)"],
  };

  // 背景 Closing Keyframe
  const bgClosingKeyframes = {
    opacity: [1, 0],
  };

  // コンテンツ Closing Option
  const contentsClosingOptions = {
    duration: 300,
    easing: "ease-out",
    fill: "forwards",
  };

  // 背景 Closing Option
  const bgClosingOptions = {
    duration: 150,
    easing: "ease-out",
    fill: "forwards",
  };

  /**
   * 特定のモーダルを開く関数
   * @param {HTMLElement} targetModal - 開く対象の <dialog> 要素
   * @param {HTMLElement} targetBg - 開く対象の背景要素
   */
  const openModal = (targetModal, targetBg) => {
    // 関連するコンテンツ要素も取得
    const modalContents = targetModal.querySelector(".js-contents");

    targetModal.showModal();
    modalContents.animate(contentsOpeningKeyframes, contentsOpeningOptions);
    targetBg.style.display = "block";
    targetBg.animate(bgOpeningKeyframes, bgOpeningOptions);

    // Escapeキーのデフォルト動作を抑止
    targetModal.focus(); // フォーカスを移動させてEscapeキーのイベントリスナーをモーダルに集中させる
  };

  /**
   * 特定のモーダルを閉じる関数
   * @param {HTMLElement} targetModal - 閉じる対象の <dialog> 要素
   * @param {HTMLElement} targetBg - 閉じる対象の背景要素
   */
  const closeModal = (targetModal, targetBg) => {
    const modalContents = targetModal.querySelector(".js-contents");

    // modalContentsがない場合は即座に閉じる
    if (!modalContents) {
      targetModal.close();
      targetBg.style.display = "none";
      return;
    }

    const closingAnim = modalContents.animate(
      contentsClosingKeyframes,
      contentsClosingOptions,
    );
    targetBg.animate(bgClosingKeyframes, bgClosingOptions);

    // アニメーションの完了後
    closingAnim.onfinish = () => {
      targetModal.close();
      targetBg.style.display = "none";
    };
  };

  // --- イベントリスナーの設定 ---

  // 1. 全てのOPENボタンにイベントを設定
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.modalTarget; // data-modal-target="#modal-1"
      const targetModal = document.querySelector(targetId);
      const targetBg = document.querySelector(
        `.js-modal-bg[data-modal-bg="${targetId}"]`,
      );

      if (targetModal && targetBg) {
        openModal(targetModal, targetBg);
      }
    });
  });

  // 2. 全てのCLOSEボタンにイベントを設定
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      // 親要素を辿って関連するモーダルと背景を見つける
      const targetModal = closeButton.closest(".js-modal");
      if (targetModal) {
        const targetBg = document.querySelector(
          `.js-modal-bg[data-modal-bg="#${targetModal.id}"]`,
        );
        if (targetBg) {
          closeModal(targetModal, targetBg);
        }
      }
    });
  });

  // 3. 全てのモーダルの背景クリックでCLOSE
  modals.forEach((modalItem) => {
    modalItem.addEventListener("click", (event) => {
      // モーダルコンテンツ外のクリックかチェック
      if (event.target.closest(".js-contents") === null) {
        const targetBg = document.querySelector(
          `.js-modal-bg[data-modal-bg="#${modalItem.id}"]`,
        );
        if (targetBg) {
          closeModal(modalItem, targetBg);
        }
      }
    });

    // 4. Escapeキーを押すと非表示
    // <dialog>要素自体にリスナーを設定することで、開いているダイアログのみを対象にする
    modalItem.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
        const targetBg = document.querySelector(
          `.js-modal-bg[data-modal-bg="#${modalItem.id}"]`,
        );
        if (targetBg) {
          closeModal(modalItem, targetBg);
        }
      }
    });
  });
};

modal();
