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
