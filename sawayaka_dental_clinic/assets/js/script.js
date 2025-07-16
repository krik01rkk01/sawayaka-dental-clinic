// carousel
  $('.carousel-section').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 5000, // スライドが流れる速度を設定
    autoplaySpeed: 300,// 自動再生のスライド切り替えまでの時間を設定
    arrows: false,
  });

  // nav
  window.addEventListener("scroll", function () {
  const elm = document.querySelector(".header");
  const scroll = window.pageYOffset;
  if (scroll > 50) {
    elm.style.opacity = "1";
    elm.style.zIndex = "1";
    // console.log(scroll);
  } else {
    elm.style.opacity = "0";
    elm.style.zIndex = "-1";
    // console.log(scroll);
  }
});

$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 50 ) {
			$('main').addClass('main-visual-animation');
		} else {
			$('main').removeClass('main-visual-animation');
		}
	});
});