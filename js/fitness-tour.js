$(".team-wrap").owlCarousel({
  items: 1,
  nav: true,
  pagination: true,
  margin:10,
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
      items: 3,
    },
  },
});

$(".features").owlCarousel({
  items: 1,
  nav: true,
  pagination: true,
  loop: true,
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

if ($(".slider-training").length && screen.width < 600) {
  $(".slider-training").addClass("owl-carousel");
  $(".slider-training").owlCarousel({
    items: 1,
    nav: false,
    dots:true,
    pagination: true,
    loop: true,
    navText: [
      '<img src="../img/arrow-thin-left.png">',
      '<img src="../img/arrow-thin-right.png">',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  })
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


setTimeout(function(){
  $('#icons__about-ow .tns-controls button[data-controls="prev"] img').attr('src', '../img/arrow-thin-left.png');
  $('#icons__about-ow .tns-controls button[data-controls="next"] img').attr('src', '../img/arrow-thin-right.png')
}, 1000)


window.onload = function () {
  if ($(".gallery-responsive-up").length) {
      $(".gallery-responsive-up").addClass("owl-carousel");
      $(".gallery-responsive-up").owlCarousel({
        items: 3,
        dots: false,
        nav: true,
        center: true,
        loop: true,
        gutter: 20,
        navText: [
          '<img src="../img/arrow-thin-left.png">',
          '<img src="../img/arrow-thin-right.png">',
        ],
        responsive : {
          0 : {
            items: 3,
          },
          480 : {
            items: 3,
          },
          768 : {
            items: 7,
          }
      }
      });
  }

  $(document).ready(function () {
    $(".fancybox").fancybox();
  });
};
