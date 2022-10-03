$(function () {


  $('.tabs-wrapper__tab').on('click', function (e) {
    e.preventDefault();
    $('.tabs-wrapper__tab').removeClass('active');
    $(this).addClass('active')

    $('.tabs-wrapper__content-item').removeClass('tabs-wrapper__content-item--active');
    $($(this).attr('href')).addClass('tabs-wrapper__content-item--active');
  });


  $(".product-item__star, .star, .reviews__star, .reviews-content__star").rateYo({
    rating: '4',
    starWidth: '17px',
    spacing: '5px',
    normalFill: '#C1C1C14D',
    starSvg: String,
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3197_359)"><path d="M0.022973 6.16432C0.0780978 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64482L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141567 6.64478C0.0138172 6.52028 -0.0322143 6.334 0.022973 6.16432Z"/></g><defs><clipPath id="clip0_3197_359"><rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)"/></clipPath></defs></svg>'
  });

  $('.select-style, .product-item__input').styler();

  var mixer = mixitup('.category-menu');

});

var $range = $(".catalog-price__input"),
  $inputFrom = $(".catalog-price__min"),
  $inputTo = $(".catalog-price__max"),
  instance,
  min = 0,
  max = 1000,
  from = 100,
  to = 1000;

$('.catalog-price__input').ionRangeSlider({
  type: "double",
  prefix: "₴",
  onStart: updateInputs,
  onChange: updateInputs
});

instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");

  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });
});



$('.interest-box__menu').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow: '<button class="slick-prev slick-arrow slick-arrow--active" type="button"><svg class="slick-arrow__img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow slick-arrow--active" type="button"><svg class="slick-arrow__img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6352 11.4508L26.3811 19.1967C26.9822 19.801 26.9822 20.7769 26.3811 21.3811L18.6352 29.1271C18.0558 29.6243 17.1991 29.6243 16.6197 29.1271C15.9706 28.5709 15.8947 27.5918 16.4509 26.9427L23.0968 20.2967L16.4508 13.6352C15.8497 13.031 15.8497 12.055 16.4508 11.4508C17.055 10.8497 18.031 10.8497 18.6352 11.4508Z" fill="#C2C2C2"/></svg></button>',
});

$('.product-item__box').slick({
  prevArrow: '<button class="slick-prev slick-arrow slick-arrow--active" type="button"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.384665 15.2262L16.398 0.839919C16.9234 0.324519 17.7756 0.324519 18.3011 0.839919C18.8266 1.35528 18.8266 2.19151 18.3011 2.70691L3.25336 16.2267L18.2998 29.7465C18.8253 30.2619 18.8253 31.0981 18.2998 31.6135C17.7743 32.1288 16.9221 32.1288 16.3967 31.6135L0.383331 17.2273C0.103261 16.9525 -0.0168139 16.5883 0.00189232 16.228C-0.0155212 15.8665 0.104514 15.5023 0.384665 15.2262Z" fill="#363853"/></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow slick-arrow--active" type="button"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3105 14.7728L2.29726 0.38655C1.77178 -0.12885 0.919578 -0.12885 0.394105 0.38655C-0.131368 0.90191 -0.131369 1.73814 0.394104 2.25354L15.4418 15.7734L0.395432 29.2931C-0.130041 29.8085 -0.130041 30.6447 0.395432 31.1601C0.920905 31.6755 1.77311 31.6755 2.29855 31.1601L18.3119 16.7739C18.5919 16.4991 18.712 16.1349 18.6933 15.7747C18.7107 15.4131 18.5907 15.0489 18.3105 14.7728Z" fill="#363853"/></svg></button>',
});

$('.coments-item').slick({
  dots: true,
  arrows: true,
  speed: 300,
  prevArrow: '<button class="slick-prev slick-arrow slick-arrow--active" type="button"><svg class="slick-arrow__img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow slick-arrow--active" type="button"><svg class="slick-arrow__img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6352 11.4508L26.3811 19.1967C26.9822 19.801 26.9822 20.7769 26.3811 21.3811L18.6352 29.1271C18.0558 29.6243 17.1991 29.6243 16.6197 29.1271C15.9706 28.5709 15.8947 27.5918 16.4509 26.9427L23.0968 20.2967L16.4508 13.6352C15.8497 13.031 15.8497 12.055 16.4508 11.4508C17.055 10.8497 18.031 10.8497 18.6352 11.4508Z" fill="#C2C2C2"/></svg></button>',
});

const fancyboxTool = {
  buttons: [
    "close",
  ],
  infobar: false,
  loop: false,
  Dots: true,
  loop: false,
  idleTime: 0,

  btnTpl: {
    // Arrows
    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
      '<div><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.03833 17.0149L17.0516 31.6079C17.5771 32.1307 18.4293 32.1307 18.9548 31.6079C19.4802 31.0851 19.4802 30.2369 18.9548 29.7141L3.90702 16L18.9534 2.2859C19.4789 1.76309 19.4789 0.914839 18.9534 0.392073C18.428 -0.130695 17.5758 -0.130695 17.0503 0.392072L1.037 14.9851C0.756927 15.2638 0.636852 15.6332 0.655559 15.9986C0.638145 16.3654 0.758182 16.7348 1.03833 17.0149Z" fill="#505050"/></svg></div>' +
      "</button>",
    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
      '<div><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></div>' +
      "</button>",
  },
};

$('[data-fancybox="gallery"]').fancybox(fancyboxTool);