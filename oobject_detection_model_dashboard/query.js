document.querySelectorAll(".ins-view-btn-wrp .filter-btn").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelector(".ins-view-btn-wrp .active")
      .classList.remove("active");
    this.classList.add("active");
  });
});
