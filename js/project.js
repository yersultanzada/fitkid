(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('#menuModal').modal('hide');
  });

  $('#menuModal').on('hidden.bs.modal', function (e) {
      $('body').removeClass('js-no-scroll')
  });
  $('#menuModal').on('shown.bs.modal', function (e) {
      $('body').addClass('js-no-scroll')
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
  $('#main-carousel').owlCarousel({
    items: 1.4,
    loop:true,
    margin:10,
    nav:true,
    navText: [
        "<i class=\"fas fa-chevron-left\"></i>",
        "<i class=\"fas fa-chevron-right\"></i>"
    ],
    dots:false
  });
  $('#review-carousel, #news-carousel').owlCarousel({
    items: 3,
    loop:true,
    margin:10,
    nav:true,
    navText: [
      "<i class=\"fas fa-chevron-left\"></i>",
      "<i class=\"fas fa-chevron-right\"></i>"
    ],
    dots:false
  });
  $('#team-carousel').owlCarousel({
    items: 5,
    loop:true,
    margin:10,
    dots: false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav:true,
    navText: [
      "<i class=\"fas fa-chevron-left\"></i>",
      "<i class=\"fas fa-chevron-right\"></i>"
    ],
    responsive:{
      0:{
        items:1
      },
      768:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });
  $('#change-photo').filestyle({
    text : 'Изменить фото',
    input: false
  });
  //показывает доп поля при нажатии на изменить пароль
  $('.change-password button').on('click', function () {
    $('.change-password button').css({
      'display': 'none'
    });
    $('.show-new-fields').addClass('show');
  });
  //меняет иконку глаза при клике в поле пароля
  $('.change-pass-form .eye-icon').on('click', function () {
    $(this).toggleClass('hide');
  });
  //удаляет строку(ненужный абонемент) при клике на иконку удаления в корзине
  $('#cabinet-subs-buy .del-cart-item').on('click', function () {
    $(this).parent().parent().addClass('d-none');
  });
  //операции с кнопкой корзины на стр абонемента
  $('.element-info .cabinet-btn .card-buy-btn').on('click', function () {
    $(this).text('В корзине');
    $(this).addClass('active');
    $('.custom-block .buy-btn button').addClass('active');
    $('.custom-block .buy-btn button .counter').css({
      'display':'flex'
    });
    $('.custom-block .buy-btn button .btn-text').text('Оплатить');
  });
  //скрывает пред. модалку когда нажимаешь "да" при удалении абонемента
  $('#subsDeletedModal').on('shown.bs.modal', function (event) {
    $('#delSubsModal').modal('hide');
  })

})(jQuery); // End of use strict
