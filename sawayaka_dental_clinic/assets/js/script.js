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

// about スライダー
$(document).ready(function(){
  // メインスライダー
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,        // 自動再生ON
    autoplaySpeed: 3000,   // 3秒ごと
    asNavFor: '.slider-nav'
  });

  // サムネイルスライダー
  $('.slider-nav').slick({
    slidesToShow: 5,       // サムネイルの表示数
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    centerMode: false,
    arrows: false
  });

});



