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

//   second button click
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
