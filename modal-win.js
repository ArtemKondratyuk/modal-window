(() => {
    const refs = {
      openReweuBtn: document.querySelector("[data-reweu-open]"),
      closeReweuBtn: document.querySelector("[data-reweu-close]"),
      reweu: document.querySelector("[data-reweu]"),
    };
  
    refs.openReweuBtn.addEventListener("click", toggleReweu);
    refs.closeReweuBtn.addEventListener("click", toggleReweu);
  
    function toggleReweu() {
      refs.reweu.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
