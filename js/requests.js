function objectifyForm(formArray) {
  let returnArray = {};
  for (let i = 0; i < formArray.length; i++){
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}

async function mainApi(info) {
  try {
    const res = await fetch("http://95.181.172.100/erp/site/forms/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    });

    if (!res.ok) {
      throw new Error(`error ${res.status}`);
    }
    return res;
  } catch (err) {
    console.log(err);
  }
}

$(".children-form").on("submit", function (event) {
  event.preventDefault();
  const data = $(".children-form").serializeArray();
  mainApi(data)
    .then((res) => {
      if (res.ok) {
        swal({
          type: "success",
          title: "Спасибо! Ваша заявка будет обработана",
          text: "Наш менеджер с вами свяжется в указанное время",
        });
      }
    })
    .catch((err) => {
      swal({
        type: "error",
        title: "Извините, ваша заявка не отправлена",
        text: "Что-то пошло не так мы уже работаем над ошибкой",
      });
      console.log(err);
    });
});

$(".map-form").on("submit", function (event) {
  event.preventDefault();
  const data = $(".map-form").serializeArray();
  mainApi(data)
    .then((res) => {
      if (res.ok) {
        swal({
          type: "success",
          title: "Спасибо!",
          text: "Ваша заявка будет обработана и наш менеджер с вами свяжется",
        });
      }
    })
    .catch((err) => {
      swal({
        type: "error",
        title: "Извините, ваша заявка не отправлена",
        text: "Что-то пошло не так мы уже работаем над ошибкой",
      });
      console.log(err);
    });
});

$(".price-form").on("submit", function (event) {
  event.preventDefault();
  const data = $(".price-form").serializeArray();
  mainApi(data)
    .then((res) => {
      console.log(res);
      res.map((e) => console.log(typeof e.value));
      if (res.ok) {
        swal({
          type: "success",
          title: "Спасибо!",
          text: "Ваша заявка будет обработана и наш менеджер с вами свяжется",
        });
        this.reset();
      }
    })
    .catch((err) => {
      swal({
        type: "error",
        title: "Извините, ваша заявка не отправлена",
        text: "Что-то пошло не так мы уже работаем над ошибкой",
      });
      console.log(err);
    });
});

// $(".tarifes-list").on("submit", function (event) {
//   event.preventDefault();
//   const sum = $("#new__price-first").text().match(/\d+/g).join("");
//   let obj = {};
//   if ($("p").is(".tarifes-list-item-row__item")) {
//     const childNum = $("#child-num").text();
//     const daysNum = $("#days-num").text();
//     obj = {
//       form_name: "autumn-camp-day",
//       price: sum,
//       count_children: childNum,
//       count_days: daysNum,
//     };
//   } else {
//     obj = {
//       form_name: "autumn-camp",
//       price: sum,
//     };
//   }
//   console.log(obj);
//   mainApi(obj)
//     .then((res) => {
//       console.log(res.data.sum);
//       // $(".tarifes-list-item-prices__new").text(function{
//       //   res.data.sum
//       // })
//       document.querySelector(".tarifes-list-item-prices__new").textContent = res.data.sum
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// $(".tarifes-list-item-row__plus, .tarifes-list-item-row__minus").on('click', function(event) {
//   event.preventDefault();
//   const sum = $("#new__price-first").text().match(/\d+/g).join("");
//   let obj = {};
//   if ($("p").is(".tarifes-list-item-row__item")) {
//     const childNum = $("#child-num").text();
//     const daysNum = $("#days-num").text();
//     obj = {
//       form_name: "autumn-camp-day",
//       price: 1100,
//       count_children: childNum,
//       count_days: daysNum,
//     };
//   } else {
//     obj = {
//       form_name: "autumn-camp",
//       price: sum,
//     };
//   }
//   console.log(obj);
//   mainApi(obj)
//     .then((res) => {
//       console.log(res.data.sum);
//       document.querySelector(".tarifes-list-item-prices__new").textContent = res.data.sum
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// })