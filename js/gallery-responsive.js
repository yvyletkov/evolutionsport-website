$(document).ready(function () {
  $(document).ready(function () {
    $(".fancybox").fancybox(
        {
          groupAttr: 'data-fancybox-group'
        }
    );
  });

  if ($(".gallery-responsive").length) {
    if (window.innerWidth < 768) {
      $(".gallery-responsive").addClass("owl-carousel");
      $(".gallery-responsive").owlCarousel({
        items: 3,
        dots: false,
        nav: true,
        center: true,
        loop: true,
        gutter: 20,
        navText: [
          '<img src="./img/arrow-thin-left.png">',
          '<img src="./img/arrow-thin-right.png">',
        ],
      });
    }
  }

  if ($(".gallery-responsive-up").length) {
    if (window.innerWidth < 768) {
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
      });
    }
  }

  $(document).ready(function () {
    $(".fancybox").fancybox(
        {
          groupAttr: 'data-fancybox-group'
        }
    );
  });
})
