// here is javascript code for animation
const searchButton = document.querySelector("nav .nav-item-wrapper .search-link");
const closeButton = document.querySelector(".search-container .close-link");
const navItemWrapper = document.querySelector(".nav-item-wrapper");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
  navItemWrapper.classList.add("hide");
  searchContainer.classList.remove("hide");
  overlay.classList.add("show");
});
closeButton.addEventListener("click", () => {
  navItemWrapper.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});
overlay.addEventListener("click", () => {
  navItemWrapper.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});
//  mobile first Javascript code
const menuIconContainer = document.querySelector("nav .menu-icon-container");
const headerContainer = document.querySelector(".header-container");
menuIconContainer.addEventListener("click", () => {
  headerContainer.classList.toggle("active");
});
const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".header-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
  searchBar.classList.add("active");
  nav.classList.add("move-up");
  navItemWrapper.classList.add("move-down");
});
cancelBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
  nav.classList.remove("move-up");
  navItemWrapper.classList.remove("move-down");
});
//  removing active class when I resizing windows screen

window.addEventListener("resize",  ()=> {
  if (window.innerWidth > 768)
  headerContainer.classList.remove("active");
 
});
window.addEventListener("resize", () => {
  if (window.innerWidth <768) 
  searchContainer.classList.add("hide");
});
window.addEventListener("resize", () => {
  if (window.innerWidth <768) 
  navItemWrapper.classList.remove("hide");
});
window.addEventListener("resize", () => {
  if (window.innerWidth <768) 
  overlay.classList.remove("show");
});

// window.addEventListener("resize", () => {
//    if (window.innerWidth >768) 
//    navItemWrapper.classList.remove("hide");
//    searchContainer.classList.add("hide");
//    overlay.classList.remove("show");
// });

  // // =======================footer script code================================================
  // $(document).ready(function () {
  //   toggleAble();
  // });
  // function toggleAble() {
  //   if ($(window).width() <= 768) {
  //     $(".footer-links-wrapper").addClass("toggleClass");
  //   } else {
  //     $(".footer-links-wrapper").removeClass("toggleClass");
  //   }
  //   $(window).on("resize", function () {
  //     if ($(window).width() <= 768) {
  //       $(".footer-links-wrapper").addClass("toggleClass");
  //       $(".footer-links-wrapper ul").hide();
  //     } else {
  //       $(".footer-links-wrapper").removeClass("toggleClass");
  //       $(".footer-links-wrapper ul").show();
  //       $(".footer-links-wrapper h4").removeClass("expanded");
  //     }
  //   });
  //   //footer collapse functionality
  //   $(document).on("click", ".toggleClass h4", function () {
  //     $(this).next("ul").slideToggle();
  //     $(this).toggleClass("expanded");
  //     //console.log("toggleClass"); 
  //   });
  //   // search bar
  //   // $(".search-link").click(function (event) {
  //   //     event.preventDefault();
  //   //     $("navbar-collapse.collapse").removeClass("show");
  //   //     $(".searchbox").slideToggle();
  //   // })
  // }