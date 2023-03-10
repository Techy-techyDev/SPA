navBtns = document.querySelectorAll(".nav-btn");
pages = document.querySelectorAll(".page");

function closeAllPages() {
  pages.forEach((page) => {
    page.style.display = "none";
  });
}
closeAllPages();
document.querySelector(".home").style.display = "block";

navBtns.forEach((navBtn) => {
  navBtn.addEventListener("click", (e) => {
    closeAllPages();
    // console.log(e.target.textContent);
    let targetPageClass = e.target.textContent.toLowerCase();
    document.querySelector(`.${targetPageClass}`).style.display = "block";
  });
});
