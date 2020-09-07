async function mainApi(info) {
  try {
    const res = await fetch("http://95.181.172.100/erp/mock/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    });

    if (!res.ok) {
      throw new Error(`error ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

$(".children-form").on("submit", function (event) {
  event.preventDefault();
  const data = $(".children-form").serializeArray();
  mainApi(data)
    .then((res) => {
      $(".call-title").html("Спасибо!");
      $(".call-text")
        .html("Наши менеджеры свяжутся с вами в указанное время")
        .css("margin-bottom", "0");
      $(
        ".children-form.order-form, .call-text-down, .call-text-down-link"
      ).slideUp({ duration: "fast", easing: "linear" });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

$(".map-form").on("submit", function (event) {
  event.preventDefault();
  const data = $(".map-form").serializeArray();
  mainApi(data)
    .then((res) => {
      $(".map-form__subtitle").html("Спасибо!");
      $(".map-form__title")
        .html("За обратную связь")
        .css("margin-bottom", "0");
      $(
        ".map-form-row"
      ).slideUp({ duration: "fast", easing: "linear" });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
