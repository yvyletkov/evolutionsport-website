$(".circle").hover(
  function () {
    if (
      $("#open-arrow").hasClass("active") &&
      $("#circle-active").hasClass("active") &&
      $("#title-active").hasClass("active")
    ) {
      $("#circle-active").removeClass("active");
      $("#title-active").removeClass("active");
      $("#open-arrow").removeClass("active");
      $("#open-desc").removeClass("active");
    }
    $(this).addClass("active");
    $(this).parent().find(".circle-group__arrow-down").addClass("active");
    $(this).parent().find(".circle-group__description").addClass("active");
    $(this).parent().find(".circle-group__title").addClass("active");
  },
  function () {
    $(this).removeClass("active");
    $(this).parent().find(".circle-group__arrow-down").removeClass("active");
    $(this).parent().find(".circle-group__description").removeClass("active");
    $(this).parent().find(".circle-group__title").removeClass("active");
  }
);

if ($('.circle-group').length && screen.width < 600) {
  $(".circle-group").addClass("owl-carousel")
  $(".circle-group").owlCarousel({
    items: 1,
    nav: true,
    pagination: true,
    dots: false,
    navText: [
      '<img src="../img/arrow-thin-left.png">',
      '<img src="../img/arrow-thin-right.png">',
    ],
  });
};

const countDownDate = new Date("Jan 8, 2021 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#time-days").text(days);
  $("#time-hour").text(hours);
  $("#time-minutes").text(minutes);
  $("#time-seconds").text(seconds);

  if (distance < 0) {
    clearInterval(x);
    $(".rectangle__time").html("Туринир уже начался");
  }
}, 1000);
