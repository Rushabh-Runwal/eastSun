// =======================footer script code================================================
import $ from "jquery";
$(function () {
  toggleAble();
});
function toggleAble() {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("toggleClass");
  } else {
    $(".footer-links-wrapper").removeClass("toggleClass");
  }
  $(window).on("resize", function () {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("toggleClass");
      $(".footer-links-wrapper ul").hide();
    } else {
      $(".footer-links-wrapper").removeClass("toggleClass");
      $(".footer-links-wrapper ul").show();
      $(".footer-links-wrapper h4").removeClass("expanded");
    }
  });
  //footer collapse functionality
  $(document).on("click", ".toggleClass h4", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
    //console.log("toggleClass");
  });
  // search bar
  // $(".search-link").click(function (event) {
  //     event.preventDefault();
  //     $("navbar-collapse.collapse").removeClass("show");
  //     $(".searchbox").slideToggle();
  // })
}
