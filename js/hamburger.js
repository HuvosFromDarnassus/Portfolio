$(document).ready(function () {
  $(".menu-btn").on("click", function (e) {
    $(this).toggleClass("menu-btn_active");
    $(".menu").toggleClass("menu_active");
  });
});
