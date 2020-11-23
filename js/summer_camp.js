if ($(".tarifes-list").length) {
  const tarifesList = tns({
    container: ".tarifes-list",
    items: 1,
    gutter: 20,
    loop: false,
    nav: false,
    navPosition: "bottom",
    preventScrollOnTouch: false,
    controlsText: [
      '<img src="../img/arrow-thin-left.png">',
      '<img src="../img/arrow-thin-right.png">',
    ],
    responsive: {
      1024: {
        items: 4,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });
}

$(document).on("click", "#tarifes-item-first", function () {
  if (
    $("#tarifes-item-second").hasClass("tarifes-row-item_active") ||
    $("#tarifes-item-first").hasClass("tarifes-row-item_active")
  ) {
    $(".tarifes-list-item-prices__old").removeClass("active");
  } else {
    $(".tarifes-list-item-prices__old").addClass("active");
  }
  const sumFirst = +$("#new__price-first").text().match(/\d+/g).join("");
  const sumSecond = +$("#new__price-second").text().match(/\d+/g).join("");
  const oldSumFirst = +$("#first-tarif-old").text().match(/\d+/g).join("");
  const oldSumSecond = +$("#second-tarif-old").text().match(/\d+/g).join("");
  if ($("#tarifes-item-first").hasClass("tarifes-row-item_active")) {
    $(".tarifes-list-item-prices__old").removeClass("active");
    console.log(
      sumSecond + oldSumSecond * 0.05,
      sumSecond + oldSumSecond * 0.05
    );
    document.querySelector("#new__price-second").textContent = `${Math.floor(
      sumSecond + oldSumSecond * 0.05
    )} руб`;
    document.querySelector("#new__price-first").textContent = `${Math.floor(
      sumFirst + oldSumFirst * 0.05
    )} руб`;
  } else {
    $(".tarifes-list-item-prices__old").addClass("active");
    document.querySelector("#new__price-second").textContent = `${
      Math.floor(sumSecond - oldSumSecond * 0.05) + 1
    } руб`;
    document.querySelector("#new__price-first").textContent = `${
      Math.floor(sumFirst - oldSumFirst * 0.05) + 1
    } руб`;
  }
});

// second button click
$(document).on("click", "#tarifes-item-second", function () {
  if (
    $("#tarifes-item-second").hasClass("tarifes-row-item_active") ||
    $("#tarifes-item-first").hasClass("tarifes-row-item_active")
  ) {
    $(".tarifes-list-item-prices__old").removeClass("active");
  } else {
    $(".tarifes-list-item-prices__old").addClass("active");
  }
  const sumFirst = +$("#new__price-first").text().match(/\d+/g).join("");
  const sumSecond = +$("#new__price-second").text().match(/\d+/g).join("");
  const oldSumFirst = +$("#first-tarif-old").text().match(/\d+/g).join("");
  const oldSumSecond = +$("#second-tarif-old").text().match(/\d+/g).join("");
  if ($("#tarifes-item-second").hasClass("tarifes-row-item_active")) {
    $(".tarifes-list-item-prices__old").removeClass("active");
    document.querySelector("#new__price-second").textContent = `${
      sumSecond + oldSumSecond * 0.1
    } руб`;
    document.querySelector("#new__price-first").textContent = `${
      sumFirst + oldSumFirst * 0.1
    } руб`;
  } else {
    $(".tarifes-list-item-prices__old").addClass("active");

    document.querySelector("#new__price-second").textContent = `${
      sumSecond - oldSumSecond * 0.1
    } руб`;
    document.querySelector("#new__price-first").textContent = `${
      sumFirst - oldSumFirst * 0.1
    } руб`;
  }
});

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
