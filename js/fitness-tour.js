$(".team-wrap").owlCarousel({
  items: 1,
  nav: true,
  pagination: true,
  navText: [
    '<img src="../img/arrow-thin-left.png">',
    '<img src="../img/arrow-thin-right.png">',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$(".features").owlCarousel({
    items: 1,
    nav: true,
    pagination: true,
    loop:true,
    navText: [
      '<img src="../img/arrow-thin-left.png">',
      '<img src="../img/arrow-thin-right.png">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

if ($(".circle-group").length && screen.width < 600) {
  $(".circle-group").addClass("owl-carousel");
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
}

$(document).on("click", ".team-item__btn_open", function () {
  let content = $(this).prev(".team-item-content");
  content.css("backdrop-filter", "brightness(40%)");
  content.css("opacity", "1");
  content.css("z-index", "100");
});
$(document).on("click", ".team-item__btn_close", function () {
  let content = $(this).parents(".team-item-content");
  // this.css('dispay', 'block')
  content.css("opacity", "0");
  content.css("z-index", "0");
});

if (screen.width > 768) {
  $(".team-item").hover(
    function () {
      let content = $(this).children(".team-item-content");
      content.css("backdrop-filter", "brightness(40%)");
      content.css("opacity", "1");
      content.css("z-index", "100");
    },
    function () {
      let content = $(this).children(".team-item-content");
      content.css("opacity", "0");
      content.css("z-index", "0");
    }
  );
}
