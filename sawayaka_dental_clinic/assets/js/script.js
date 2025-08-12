// carousel
  $('.carousel-section').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 5000, // スライドが流れる速度を設定
    autoplaySpeed: 300,// 自動再生のスライド切り替えまでの時間を設定
    arrows: false,
  });

$(function () {
  $('#js-hamburger-menu, .nav-link').on('click', function () {
    $('.nav').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu-open')
  });
});




