$(document).on("click", "#tarifes-item-first", function () {
    if (
        $("#tarifes-item-second").hasClass("tarifes-row-item_active") ||
        $("#tarifes-item-first").hasClass("tarifes-row-item_active")
    ) {
        $(".tarifes-list-item-prices__old").removeClass("active");
    } else {
        $(".tarifes-list-item-prices__old").addClass("active");
    }
    const sum = +$("#new__price-first").text().match(/\d+/g).join("");
    const oldSum = +$(".tarifes-list-item-prices__old")
        .text()
        .match(/\d+/g)
        .join("");
    if ($("#tarifes-item-first").hasClass("tarifes-row-item_active")) {
        document.querySelector(".tarifes-list-item-prices__new").textContent = `${
            sum + oldSum * 0.05
        } руб`;
    } else {
        $("#new__price-first").text(`${sum - oldSum * 0.05} руб`);
    }
});

// $(document).on("click", "#tarifes-item-third", function () {
//     if (
//         $("#tarifes-item-second").hasClass("tarifes-row-item_active") ||
//         $("#tarifes-item-third").hasClass("tarifes-row-item_active")
//     ) {
//         $(".tarifes-list-item-prices__old").removeClass("active");
//     } else {
//         $(".tarifes-list-item-prices__old").addClass("active");
//     }
//     const sum = +$("#new__price-first").text().match(/\d+/g).join("");
//     const oldSum = +$(".tarifes-list-item-prices__old")
//         .text()
//         .match(/\d+/g)
//         .join("");
//     if ($("#tarifes-item-third").hasClass("tarifes-row-item_active")) {
//         document.querySelector(".tarifes-list-item-prices__new").textContent = `${
//             sum + oldSum * 0.1
//         } руб`;
//     } else {
//         $("#new__price-first").text(`${sum - oldSum * 0.1} руб`);
//     }
// });

  // second button click
$(document).on("click", "#tarifes-item-second", function () {
  if (
    $("#tarifes-item-second").hasClass("tarifes-row-item_active") ||
    $("#tarifes-item-first").hasClass("tarifes-row-item_active")
  ) {
    $(".tarifes-list-item-prices__old").addClass("active");
  } else {
    $(".tarifes-list-item-prices__old").removeClass("active");
  }
  const sum = +$("#new__price-first").text().match(/\d+/g).join("");
  const oldSum = +$(".tarifes-list-item-prices__old")
    .text()
    .match(/\d+/g)
    .join("");
  if ($("#tarifes-item-second").hasClass("tarifes-row-item_active")) {
    $(".tarifes-list-item-prices__old").addClass("active");
    document.querySelector(".tarifes-list-item-prices__new").textContent = `${
      sum + oldSum * 0.1
    } руб`;
  } else {
    document.querySelector(".tarifes-list-item-prices__new").textContent = `${
      sum - oldSum * 0.1
    } руб`;
  }
});

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
