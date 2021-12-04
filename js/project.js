(function($) {
  "use strict"; // Start of use strict

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
    responsive:{
      0:{
        items:1
      },
      992:{
        items:1.4
      }
    }
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
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      }
    }
  });
  $('#team-carousel').owlCarousel({
    items: 5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
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
      575:{
        items:2
      },
      768:{
        items:3
      },
      992:{
        items:4
      },
      1200:{
        items:5
      }
    }
  });
  $('#change-photo').filestyle({
    text : 'Изменить фото',
    input: false
  });
  //показывает доп поля при нажатии на изменить пароль
  $('.change-password .change-pass-btn').on('click', function () {
    $('.change-password .change-pass-btn').css({
      'display': 'none'
    });
    $('.show-new-fields').addClass('show');
  });
  //меняет иконку глаза при клике в поле пароля
  $('.change-pass-block .eye-icon').on('click', function () {
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
  //скрывает предыдущую модалку когда нажимаешь "да" при удалении абонемента
  $('#subsDeletedModal').on('shown.bs.modal', function (event) {
    $('#delSubsModal').modal('hide');
  })
})(jQuery); // End of use strict
