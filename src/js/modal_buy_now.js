(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-buy]"),
    closeModalBtn: document.querySelector("[data-modal-close-buy]"),
    modal: document.querySelector("[data-modal-buy]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();